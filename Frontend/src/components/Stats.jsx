import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    id: "stat1",
    target: 8,
    suffix: "",
    label: "Hackathon Wins",
  },
  {
    id: "stat2",
    target: 20,
    suffix: "+",
    label: "Projects Built",
  },
  {
    id: "stat3",
    target: 3,
    suffix: "+",
    label: "Years of Coding",
  },
  {
    id: "stat4",
    target: 3,
    suffix: "+",
    label: "Interns Mentored",
  },
  {
    id: "stat5",
    target: 2,
    suffix: "",
    label: "Flagship Products",
  },
  {
    id: "stat6",
    target: 1,
    suffix: "",
    label: "Startup Co-founded",
  },
];

function useCountUp(target, suffix, start) {
  const [value, setValue] = useState(`0${suffix}`);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1800;
    const fps = 60;
    const totalFrames = duration / (1000 / fps);
    const increment = target / totalFrames;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      setValue(`${Math.round(current)}${suffix}`);
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [start, target, suffix]);

  return value;
}

function StatCard({ target, suffix, label, start }) {
  const value = useCountUp(target, suffix, start);

  return (
    <div className="stat-card">
      <div className="stat-number">
        {value}
      </div>

      <div className="stat-label">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const [startAnimation, setStartAnimation] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="stats-section" ref={statsRef}>
        <div className="section-inner">

          <h2 className="section-title">
            Engineering with
            <br />
            Real Impact
          </h2>

          <p className="section-subtitle">
            A quick snapshot of my journey across software engineering,
            entrepreneurship, hackathons, and product development.
          </p>

          <div className="stats-grid">
            {STATS.map((stat) => (
              <StatCard
                key={stat.id}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                start={startAnimation}
              />
            ))}
          </div>

        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}