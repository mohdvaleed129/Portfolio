
import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const experiences = [
  {
    id: 1,
    category: "leadership",
    period: "2024 — Present",
    status: "Currently Building",
    role: "CTO & Co-Founder",
    company: "Tallow & Care Private Limited",
    location: "Bareilly, India",
    icon: "🚀",
    accent: "primary",
    description:
      "Leading the technical direction of an animal-care startup, transforming an idea into a deployed full-stack e-commerce platform.",
    highlights: [
      "Leading the complete technical vision and software development of the startup.",
      "Built and deployed the company's full-stack platform using React, Vite, Node.js, Express and MongoDB.",
      "Implemented Google OAuth, JWT authentication, Cloudflare Turnstile and role-based access control.",
      "Integrated Razorpay payments, automated email services and an administration dashboard.",
      "Managing deployment infrastructure across Vercel and Render.",
      "Mentoring web development interns and reviewing code.",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Google OAuth",
      "JWT",
      "Vercel",
      "Render",
    ],
    featured: true,
  },
  {
    id: 2,
    category: "innovation",
    period: "2024 — Present",
    status: "Innovation & Research",
    role: "Hardware & Software Developer",
    company: "National Hackathons & Innovation Competitions",
    location: "India",
    icon: "⚡",
    accent: "secondary",
    description:
      "Building practical solutions at the intersection of embedded systems, IoT, wireless communication and healthcare technology.",
    highlights: [
      "Designed an offline LoRa Mesh Communication System using ESP32-C3 and LoRa modules.",
      "Achieved multiple hackathon victories with the LoRa Mesh project across different competitions.",
      "Filed an Indian patent application for LoRa Mesh Communication.",
      "Submitted a research paper on an offline LoRa-based communication system.",
      "Developed an AI-based CPR Patch concept integrating Arduino Nano, ESP32-C3, ECG sensing and a Flutter BLE application.",
      "Worked across embedded systems, wireless communication, mobile applications and healthcare technology.",
    ],
    technologies: [
      "ESP32-C3",
      "LoRa",
      "Arduino",
      "C/C++",
      "Flutter",
      "Dart",
      "BLE",
      "IoT",
      "Embedded Systems",
    ],
    featured: true,
  },
  {
    id: 3,
    category: "education",
    period: "2023 — Present",
    status: "Currently Studying",
    role: "B.Tech — Information Technology",
    company:
      "Shri Ram Murti Smarak College of Engineering & Technology",
    location: "Bareilly, India",
    icon: "🎓",
    accent: "tertiary",
    description:
      "Pursuing an engineering degree while developing real-world software products, participating in innovation competitions and exploring emerging technologies.",
    highlights: [
      "Building a strong foundation in Data Structures and Algorithms.",
      "Studying Operating Systems, Database Management Systems and Computer Networks.",
      "Applying software engineering concepts through independent projects.",
      "Balancing academic learning with startup development and technical competitions.",
    ],
    technologies: [
      "Data Structures",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Python",
      "JavaScript",
    ],
    featured: false,
  },
  {
    id: 4,
    category: "learning",
    period: "Current Focus",
    status: "Learning & Experimenting",
    role: "AI / ML & Generative AI",
    company: "Continuous Learning & Personal Projects",
    location: "Independent Learning",
    icon: "🧠",
    accent: "quaternary",
    description:
      "Exploring modern AI engineering concepts and learning how to integrate intelligent systems into practical software applications.",
    highlights: [
      "Learning Machine Learning, Deep Learning and Data Science fundamentals.",
      "Exploring NumPy, Pandas and Scikit-learn.",
      "Studying Large Language Models and Retrieval-Augmented Generation (RAG).",
      "Exploring LangChain, Agentic AI and CrewAI.",
      "Building practical projects to understand modern AI application architectures.",
    ],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "LLMs",
      "RAG",
      "LangChain",
      "Agentic AI",
      "CrewAI",
    ],
    featured: false,
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Leadership", value: "leadership" },
  { label: "Innovation", value: "innovation" },
  { label: "Education", value: "education" },
  { label: "Learning", value: "learning" },
];

function Experience() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expanded, setExpanded] = useState([1]);
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const filteredExperiences = experiences.filter((item) => {
    return activeFilter === "all" || item.category === activeFilter;
  });

  const toggleCard = (id) => {
    setExpanded((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const expandAll = () => {
    if (expanded.length === filteredExperiences.length) {
      setExpanded([]);
    } else {
      setExpanded(filteredExperiences.map((item) => item.id));
    }
  };

  // Reveal cards when they enter the viewport.
  useEffect(() => {
    const elements = document.querySelectorAll(".tl-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((previous) => [
              ...new Set([...previous, Number(entry.target.dataset.id)]),
            ]);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeFilter]);

  // Timeline progress.
  const progress = filteredExperiences.length
    ? (visibleItems.filter((id) =>
        filteredExperiences.some((item) => item.id === id)
      ).length /
        filteredExperiences.length) *
      100
    : 0;

  return (
    <>
      <section id="experience" className="experience-section">
        <div className="section-inner">

          {/* HEADER */}
          <div className="experience-header">

            <div className="experience-eyebrow">
              <span className="eyebrow-line"></span>
              MY JOURNEY
              <span className="eyebrow-line"></span>
            </div>

            <h2 className="section-title">
              Building Products.
              <br />
              <span>Creating Impact.</span>
            </h2>

            <p className="section-subtitle">
              From engineering ideas into real-world products to
              exploring emerging technologies, here's a look at
              my professional journey, innovations and continuous growth.
            </p>
          </div>

          {/* FILTERS */}
          <div className="experience-controls">

            <div className="experience-filters">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  className={`exp-filter ${
                    activeFilter === filter.value ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveFilter(filter.value);
                    setVisibleItems([]);
                  }}
                >
                  {filter.label}
                  {activeFilter === filter.value && (
                    <span className="filter-indicator"></span>
                  )}
                </button>
              ))}
            </div>

            <button
              className="expand-all-btn"
              onClick={expandAll}
            >
              {expanded.length === filteredExperiences.length
                ? "Collapse All"
                : "Expand All"}
              <span>{expanded.length === filteredExperiences.length ? "−" : "+"}</span>
            </button>
          </div>

          {/* TIMELINE */}
          <div className="timeline-wrapper" ref={timelineRef}>

            <div className="timeline-track">
              <div
                className="timeline-progress"
                style={{ height: `${progress}%` }}
              ></div>
            </div>

            <div className="timeline">

              {filteredExperiences.map((item, index) => {
                const isExpanded = expanded.includes(item.id);
                const isVisible = visibleItems.includes(item.id);

                return (
                  <article
                    className={`tl-item ${
                      isVisible ? "revealed" : ""
                    } ${isExpanded ? "expanded" : ""}`}
                    key={item.id}
                    data-id={item.id}
                    style={{ "--item-index": index }}
                  >

                    {/* TIMELINE DOT */}
                    <div className={`tl-marker ${item.accent}`}>
                      <span className="tl-marker-inner"></span>
                    </div>

                    {/* EXPERIENCE CARD */}
                    <div className={`tl-content ${item.featured ? "featured" : ""}`}>

                      {/* CARD TOP */}
                      <div className="tl-top-row">

                        <div className="tl-icon">
                          {item.icon}
                        </div>

                        <div className="tl-meta">
                          <span className="tl-period">
                            {item.period}
                          </span>

                          <span className="tl-status">
                            <span className="status-dot"></span>
                            {item.status}
                          </span>
                        </div>

                        <button
                          className="tl-toggle"
                          onClick={() => toggleCard(item.id)}
                          aria-expanded={isExpanded}
                          aria-label={
                            isExpanded ? "Collapse details" : "Expand details"
                          }
                        >
                          <span>{isExpanded ? "−" : "+"}</span>
                        </button>
                      </div>

                      {/* CARD HEADING */}
                      <div
                        className="tl-heading"
                        onClick={() => toggleCard(item.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            toggleCard(item.id);
                          }
                        }}
                      >
                        <h3 className="tl-role">
                          {item.role}
                        </h3>

                        <div className="tl-company">
                          {item.company}
                        </div>

                        <div className="tl-location">
                          <span>⌖</span>
                          {item.location}
                        </div>
                      </div>

                      {/* EXPANDABLE CONTENT */}
                      <div className={`tl-expand-area ${isExpanded ? "open" : ""}`}>
                        <div className="tl-expand-inner">

                          <p className="tl-description">
                            {item.description}
                          </p>

                          <div className="tl-highlights-title">
                            KEY CONTRIBUTIONS
                          </div>

                          <ul className="tl-list">
                            {item.highlights.map((highlight, i) => (
                              <li key={i}>
                                <span className="list-arrow">↗</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>

                          <div className="tl-tech-heading">
                            <span>TECHNOLOGIES & SKILLS</span>
                            <span>{item.technologies.length} Skills</span>
                          </div>

                          <div className="tl-tech-stack">
                            {item.technologies.map((tech) => (
                              <span className="tl-tech" key={tech}>
                                {tech}
                              </span>
                            ))}
                          </div>

                        </div>
                      </div>

                      {/* CARD BOTTOM */}
                      <button
                        className="tl-read-more"
                        onClick={() => toggleCard(item.id)}
                      >
                        {isExpanded ? "Show Less" : "Explore Experience"}
                        <span className={isExpanded ? "rotated" : ""}>
                          ↓
                        </span>
                      </button>

                      <div className="tl-card-glow"></div>
                    </div>
                  </article>
                );
              })}

            </div>
          </div>

          {/* FOOTER */}
          <div className="experience-footer">
            <div className="footer-orbit">✳</div>

            <p>
              Still building. Still experimenting. Still learning.
            </p>

            <span>
              THE JOURNEY DOESN'T STOP HERE.
            </span>
          </div>

        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}

export default Experience;
