
import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const achievements = [
  {
    id: 1,
    category: "awards",
    icon: "🏆",
    number: "08",
    title: "Hackathon Victories",
    subtitle: "National-Level Innovation Competitions",
    description:
      "Secured eight hackathon victories by developing practical solutions across software engineering, IoT, embedded systems and healthcare technology.",
    badge: "8× Winner",
    badgeType: "gold",
    featured: true,
    year: "2024 — Present",
    highlights: [
      "Eight hackathon victories across different competitions.",
      "Developed and presented innovative technology solutions.",
      "Worked in multidisciplinary teams under time constraints.",
      "Focused on practical problem-solving, prototyping and product development.",
    ],
    technologies: ["Software Development", "IoT", "Embedded Systems", "Innovation", "Teamwork"],
  },
  {
    id: 6,
    category: "leadership",
    icon: "🚀",
    number: "03",
    title: "CTO & Co-Founder",
    subtitle: "Tallow & Care Private Limited",
    description:
      "Co-founded an animal-care startup and independently led the development of its full-stack digital platform, from architecture to production deployment.",
    badge: "Startup Leadership",
    badgeType: "green",
    featured: true,
    year: "2024 — Present",
    highlights: [
      "Led technical architecture and product development.",
      "Built the company's full-stack e-commerce platform.",
      "Implemented authentication, payment integration and admin functionality.",
      "Managed cloud deployment and technical infrastructure.",
      "Guided interns and reviewed development work.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Vercel", "Render"],
  },
  {
    id: 7,
    category: "leadership",
    icon: "👨‍💻",
    number: "04",
    title: "Technical Mentorship",
    subtitle: "Engineering & Team Collaboration",
    description:
      "Supported web development interns through practical project work, technical guidance, code reviews and deployment workflows.",
    badge: "Mentorship",
    badgeType: "green",
    featured: false,
    year: "2024 — Present",
    highlights: [
      "Guided interns through practical web development tasks.",
      "Reviewed code and discussed implementation approaches.",
      "Helped with debugging and deployment processes.",
      "Encouraged structured development practices.",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Git", "Code Review"],
  },
];

const categories = [
  { label: "All Achievements", value: "all" },
  { label: "Leadership", value: "leadership" },
];

function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let started = false;
    let frame;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;

      started = true;
      const duration = 1400;
      const start = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);

        setCount(Math.round(value * eased));

        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        }
      };

      frame = requestAnimationFrame(animate);
      observer.disconnect();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {String(count).padStart(value >= 10 ? 2 : 1, "0")}{suffix}
    </span>
  );
}

function AchievementModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="ach-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="ach-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ach-modal-title"
      >
        <button
          className="ach-modal-close"
          onClick={onClose}
          aria-label="Close achievement details"
        >
          ×
        </button>

        <div className="ach-modal-icon">{item.icon}</div>

        <div className="ach-modal-eyebrow">
          ACHIEVEMENT DETAILS
        </div>

        <h3 id="ach-modal-title">{item.title}</h3>

        <p className="ach-modal-subtitle">{item.subtitle}</p>

        <span className={`ach-badge ${item.badgeType}`}>
          {item.badge}
        </span>

        <p className="ach-modal-description">
          {item.description}
        </p>

        <div className="ach-modal-section-title">
          KEY HIGHLIGHTS
        </div>

        <ul className="ach-modal-list">
          {item.highlights.map((highlight, index) => (
            <li key={index}>
              <span>✦</span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="ach-modal-section-title">
          TECHNOLOGIES & SKILLS
        </div>

        <div className="ach-modal-tech">
          {item.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="ach-modal-footer">
          <span>{item.year}</span>
          <span>MOHD VALEED</span>
        </div>
      </div>
    </div>
  );
}

function Achievements() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);

  const filteredAchievements = achievements.filter(
    (item) =>
      activeFilter === "all" || item.category === activeFilter
  );

  useEffect(() => {
    setVisibleCards([]);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((previous) => [
              ...new Set([...previous, Number(entry.target.dataset.id)]),
            ]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const timer = requestAnimationFrame(() => {
      document.querySelectorAll(".ach-card").forEach((card) => {
        observer.observe(card);
      });
    });

    return () => {
      cancelAnimationFrame(timer);
      observer.disconnect();
    };
  }, [activeFilter]);

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      <section id="achievements" className="achievements-section">
        <div className="section-inner">

          {/* HEADER */}
          <div className="ach-header">

            <h2 className="section-title">
              Building Products.
              <br />
              <span>Winning Competitions.</span>
            </h2>

            <p className="section-subtitle">
              Turning ambitious ideas into working solutions,
              earning recognition through innovation and building
              technology that solves real-world problems.
            </p>

          </div>

          {/* FILTERS */}
          <div className="ach-controls">

            <div className="ach-filter-label">
              EXPLORE ACHIEVEMENTS
            </div>

            <div className="ach-filters">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`ach-filter ${
                    activeFilter === category.value ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(category.value)}
                >
                  {category.label}
                  {activeFilter === category.value && (
                    <span className="ach-filter-dot"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="ach-results">
              Showing {filteredAchievements.length} achievements
            </div>

          </div>

          {/* ACHIEVEMENT GRID */}
          <div className="ach-grid">

            {filteredAchievements.map((item, index) => {
              const isVisible = visibleCards.includes(item.id);

              return (
                <article
                  key={item.id}
                  data-id={item.id}
                  className={`ach-card ${
                    isVisible ? "ach-revealed" : ""
                  } ${item.featured ? "ach-featured" : ""}`}
                  style={{ "--card-index": index }}
                  onMouseMove={handleMouseMove}
                  onClick={() => setSelectedAchievement(item)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details: ${item.title}`}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedAchievement(item);
                    }
                  }}
                >

                  <div className="ach-mouse-glow"></div>

                  <div className="ach-card-top">

                    <div className="ach-icon">
                      {item.icon}
                    </div>

                    <span className="ach-number">
                      #{item.number}
                    </span>

                  </div>

                  <div className="ach-card-category">
                    {item.category.toUpperCase()}
                  </div>

                  <h3 className="ach-title">
                    {item.title}
                  </h3>

                  <div className="ach-subtitle">
                    {item.subtitle}
                  </div>

                  <p className="ach-desc">
                    {item.description}
                  </p>

                  <div className="ach-card-bottom">

                    <span className={`ach-badge ${item.badgeType}`}>
                      {item.badge}
                    </span>

                    <span className="ach-explore">
                      Explore
                      <span>↗</span>
                    </span>

                  </div>

                  <div className="ach-card-border"></div>

                </article>
              );
            })}

          </div>

          {/* FOOTER */}

        </div>
      </section>

      {/* DETAIL MODAL */}
      {selectedAchievement && (
        <AchievementModal
          item={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}

      <div className="divider"></div>
    </>
  );
}

export default Achievements;
