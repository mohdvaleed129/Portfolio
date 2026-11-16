
import { useEffect, useRef, useState } from "react";
import "../index.css";

const STATS = [
  {
    id: 1,
    target: 10,
    label: "Hackathon Wins",
    icon: "🏆",
    description: "Competitive hackathon achievements.",
    detail: "8-time hackathon winner, including STEM-Sation 2025 and Sustain-a-thon 2025.",
    color: "#fbbf24",
    suffix: "+"
  },
  {
    id: 2,
    target: 13,
    label: "Projects Built",
    icon: "🚀",
    description: "From concepts to working products.",
    detail: "Full-stack applications, mobile apps, automation systems and IoT solutions.",
    color: "#38bdf8",
    suffix: "+"
  },
  {
    id: 3,
    target: 3,
    label: "Years of Coding",
    icon: "💻",
    description: "Building, breaking and improving.",
    detail: "Practical experience across web development, app development and embedded systems.",
    color: "#a78bfa",
    suffix: "+"
  },
  {
    id: 4,
    target: 2,
    label: "Interns Mentored",
    icon: "👥",
    description: "Sharing knowledge and experience.",
    detail: "Mentoring experience and technical collaboration.",
    color: "#34d399",
    suffix: ""
  },
  {
    id: 5,
    target: 2,
    label: "Flagship Products",
    icon: "⭐",
    description: "Ideas turned into products.",
    detail: "Product development and entrepreneurial initiatives.",
    color: "#fb7185",
    suffix: ""
  },
  {
    id: 6,
    target: 1,
    label: "Startup Co-founded",
    icon: "💡",
    description: "Building beyond code.",
    detail: "Co-founded Tallow & Care Pvt. Ltd.",
    color: "#c084fc",
    suffix: ""
  }
];

function useCountUp(target, active) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame;
    let start;

    const duration = 1800;

    const animate = (time) => {
      if (!start) start = time;

      const progress = Math.min((time - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(target * ease));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return count;
}

function StatCard({ stat, active, index }) {
  const cardRef = useRef(null);
  const count = useCountUp(stat.target, active);
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -12;
    const rotateY = ((x / rect.width) - 0.5) * 12;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = "";
  };

  return (
    <div
      ref={cardRef}
      className={`stat-card ${expanded ? "expanded" : ""}`}
      style={{
        "--accent": stat.color,
        "--delay": `${index * 120}ms`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded(!expanded);
        }
      }}
    >
      <div className="card-border" />
      <div className="card-glow" />
      <div className="card-content">

        <div className="stat-top">
          <span className="stat-icon">{stat.icon}</span>
          <span className="stat-index">
            0{stat.id} / 06
          </span>
        </div>

        <div className="stat-number">
          {count}
          {stat.suffix}
        </div>

        <div className="stat-label">
          {stat.label}
        </div>

        <p className="stat-description">
          {stat.description}
        </p>

        <div className="stat-footer">
          <span>{expanded ? "Close details" : "Explore details"}</span>
          <span className="stat-arrow">
            {expanded ? "−" : "↗"}
          </span>
        </div>

        <div className="stat-details">
          {stat.detail}
        </div>

      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>

      <div className="stats-orb orb-one" />
      <div className="stats-orb orb-two" />

      <div className="section-inner">

        

        <h2 className="section-title">
          Engineering with
          <br />
          <span>Real Impact.</span>
        </h2>

        <p className="section-subtitle">
          Beyond lines of code a journey of building,
          experimenting, competing and creating technology
          that solves real-world problems.
        </p>

        <div className="stats-grid">
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              active={active}
              index={index}
            />
          ))}
        </div>

        <div className="stats-bottom">
          <span>BUILT WITH CURIOSITY</span>
          <span className="bottom-line" />
          <span>DRIVEN BY INNOVATION</span>
        </div>

      </div>
    </section>
  );
}
