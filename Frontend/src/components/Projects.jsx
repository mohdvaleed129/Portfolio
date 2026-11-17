
import { useMemo, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Tallow & Care E-Commerce Platform",
    category: "Web Development",
    type: "Full Stack",
    status: "Live",
    icon: "🛍️",
    image: "/assets/images/projects/Tallow & Care E-Commerce Platform.png",
    featured: true,
    description:
      "A complete e-commerce platform developed for Tallow & Care Pvt. Ltd., with customer authentication, online payments and a dedicated administration system.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Google OAuth",
      "JWT",
    ],
    details:
      "Built the frontend and backend, integrated Google OAuth authentication and Razorpay payment processing, implemented admin access controls, and deployed the platform using Vercel and Render.",
    contribution: "Full-stack development, authentication, payment integration, admin dashboard and deployment.",
    link: "https://tallowandcare.in",
    linkLabel: "Visit Live Website",
  },
  {
    id: 2,
    title: "LoRa Mesh Communication System",
    category: "IoT & Embedded",
    type: "Research & Innovation",
    status: "Research",
    icon: "📡",
    image: "/assets/images/projects/LoRa Mesh Communication System.png",
    featured: true,
    description:
      "An offline communication system using ESP32-C3 and LoRa modules to enable long-range messaging without relying on internet connectivity.",
    technologies: [
      "ESP32-C3",
      "LoRa",
      "C++",
      "Mesh Networking",
      "Arduino IDE",
      "IoT",
    ],
    details:
      "Developed a wireless mesh communication concept for situations where conventional network connectivity is unavailable. The work includes a filed Indian patent application and a research paper submitted for review.",
    contribution: "Embedded system development, wireless communication, system design and research.",
    achievement: "7 hackathon wins associated with this project.",
  },
  {
    id: 3,
    title: "AI CPR Patch Device & Monitor App",
    category: "Healthcare & IoT",
    type: "Hardware + Mobile",
    status: "Prototype",
    icon: "❤️",
    image: "/assets/images/projects/AI CPR Patch Device and Monitor App.png",
    featured: true,
    description:
      "A wearable emergency-response prototype combining ECG sensing, embedded hardware and a Flutter application for CPR monitoring.",
    technologies: [
      "Arduino Nano",
      "ESP32-C3",
      "ECG Sensor",
      "Flutter",
      "Dart",
      "BLE",
    ],
    details:
      "Developed a wearable device concept and a companion mobile application communicating over Bluetooth Low Energy. The app includes monitoring and guidance-oriented interfaces.",
    contribution: "Hardware integration, BLE communication and Flutter application development.",
    achievement: "1 hackathon win associated with this project.",
  },
  {
    id: 4,
    title: "BookMyShow Movie Ticket Booking System",
    category: "Web Development",
    type: "Internship Project",
    status: "Completed",
    icon: "🎬",
    image: "/assets/images/projects/BookMyShow Movie Ticket Booking System.png",
    description:
      "A movie ticket booking system developed as part of the Netcamp internship, demonstrating backend development and database integration.",
    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "SQLAlchemy",
      "HTML",
      "CSS",
    ],
    details:
      "Implemented a Flask-based application with database-backed functionality as an internship project inspired by movie ticket booking workflows.",
    contribution: "Backend development, database modelling and application implementation.",
  },
  {
    id: 5,
    title: "Food Delivery Data Analytics Dashboard",
    category: "Data & Analytics",
    type: "Internship Project",
    status: "Completed",
    icon: "📊",
    image: "/assets/images/projects/Food Delivery Data Analytics Dashboard.png",
    description:
      "A data analytics project focused on cleaning, organizing and visualizing food delivery data to make information easier to understand.",
    technologies: [
      "Python",
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
    ],
    details:
      "Worked with food delivery datasets, performed data cleaning and analysis, and presented findings through visual summaries as part of the Netcamp internship.",
    contribution: "Data preparation, analysis and visualization.",
  },
  {
    id: 6,
    title: "Mosquito Breeding Detection Device",
    category: "IoT & Embedded",
    type: "IoT Prototype",
    status: "Prototype",
    icon: "🦟",
    image: "/assets/images/projects/Mosquito Breeding Detection Device.png",
    description:
      "An IoT-based device concept designed to detect mosquito breeding-related activity using motion sensors.",
    technologies: [
      "IoT",
      "Motion Sensors",
      "Embedded Systems",
      "Microcontrollers",
    ],
    details:
      "Explored sensor-based detection and embedded hardware for a practical environmental monitoring use case.",
    contribution: "Hardware concept, sensor integration and IoT prototyping.",
  },
  {
    id: 7,
    title: "Dashboard Web Application",
    category: "Web Development",
    type: "Frontend",
    status: "Completed",
    icon: "📈",
    image: "/assets/images/projects/Dashboard Web Application.png",
    description:
      "A dashboard interface built with HTML and Tailwind CSS, focusing on structured information presentation and responsive layouts.",
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "Responsive Design",
      "CSS",
    ],
    details:
      "Created a responsive dashboard layout with reusable interface patterns and a clean visual hierarchy.",
    contribution: "Frontend implementation and responsive UI development.",
  },
  {
    id: 8,
    title: "Patent Help Desk System",
    category: "Web Development",
    type: "Mini Project",
    status: "Completed",
    icon: "📄",
    image: "/assets/images/projects/Patient Help Desk System.png",
    description:
      "A form-based mini project designed to organize patent-related queries and information submissions.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Forms",
    ],
    details:
      "Built a structured form-based interface to collect and organize information for a patent help desk workflow.",
    contribution: "Interface development and form-based workflow implementation.",
  },
  {
    id: 9,
    title: "YouTube Transcript Generator SaaS",
    category: "Web Development",
    type: "SaaS Product",
    status: "In Development",
    icon: "▶️",
    image: "/assets/images/projects/YouTube Transcript Generator SaaS.png",
    featured: true,
    description:
      "A SaaS application in development that retrieves YouTube video transcripts through an integrated transcription API.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Supadata API",
      "YouTube Data API",
    ],
    details:
      "Working on the client and server architecture, transcript retrieval workflows and API integration. The product is currently under development.",
    contribution: "Frontend development, backend APIs and third-party service integration.",
  },
  {
    id: 10,
    title: "HAAAV Technologies SaaS Website",
    category: "Web Development",
    type: "Client Project",
    status: "In Development",
    icon: "🌐",
    image: "/assets/images/projects/HAAAV Technologies SaaS Website.png",
    featured: true,
    description:
      "A multi-page SaaS website project featuring approximately 20 pages, an Express backend and a role-based administration panel.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "JWT",
      "Role-Based Access",
      "Admin Panel",
    ],
    details:
      "Working on the website structure, backend integration, JWT-based authentication and role-based administrative access.",
    contribution: "Website development, backend implementation and access-control functionality.",
  },
  {
    id: 11,
    title: "SkyBook Airline Booking App",
    category: "Web Development",
    type: "Application",
    status: "Completed",
    icon: "✈️",
    image: "/assets/images/projects/SkyBook Airline Booking App.png",
    description:
      "A Flask-based airline booking application with security improvements and administrative user management.",
    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "CSRF Protection",
      "Security",
      "Admin Management",
    ],
    details:
      "Worked on security-related fixes, including CSRF protection, open-redirect handling and removal of hardcoded secrets, alongside admin user-management functionality.",
    contribution: "Backend development, security remediation and admin functionality.",
  },
  {
    id: 12,
    title: "Personal Developer Portfolio",
    category: "Web Development",
    type: "Personal Product",
    status: "Live",
    icon: "💻",
    image: "/assets/images/projects/Personal Portfolio Website.png",
    description:
      "A personal developer portfolio showcasing technical skills, projects, achievements and professional experience.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS3",
      "Responsive Design",
    ],
    details:
      "Designed and developed a responsive portfolio with reusable React components, interactive sections and custom styling.",
    contribution: "UI design, frontend architecture and deployment.",
  },
  {
    id: 13,
    title: "BODY FLEX Gym Reminder Automation",
    category: "Automation",
    type: "Workflow Automation",
    status: "Prototype",
    icon: "🏋️",
    image: "/assets/images/projects/BODY FLEX Gym Reminder Automation.jfif",
    description:
      "An automated gym membership reminder workflow using Google Sheets, n8n and WAHA for WhatsApp messaging.",
    technologies: [
      "n8n",
      "Google Sheets",
      "WAHA",
      "WhatsApp",
      "Automation",
    ],
    details:
      "Designed a workflow that reads member records from Google Sheets, evaluates membership expiry dates and triggers WhatsApp reminders through WAHA. The setup is intended to avoid duplicate reminders and support recurring monthly membership cycles.",
    contribution: "Workflow design, automation logic, data integration and messaging setup.",
  },
];

const categories = [
  "All",
  "Web Development",
  "IoT & Embedded",
  "Healthcare & IoT",
  "Data & Analytics",
  "Automation",
];

const statusClass = (status) => {
  if (status === "Live") return "live";
  if (status === "In Development") return "development";
  if (status === "Research") return "research";
  if (status === "Prototype") return "prototype";
  return "completed";
};

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filteredProjects = useMemo(() => {
    const term = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory;

      const searchableText = [
        project.title,
        project.category,
        project.type,
        project.status,
        project.description,
        project.details,
        project.contribution,
        ...(project.technologies || []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !term || searchableText.includes(term);

      const matchesFeatured =
        !featuredOnly || project.featured;

      return matchesCategory && matchesSearch && matchesFeatured;
    });
  }, [activeCategory, search, featuredOnly]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const categoryCount = (category) =>
    category === "All"
      ? projects.length
      : projects.filter((project) => project.category === category).length;

  const resetFilters = () => {
    setActiveCategory("All");
    setSearch("");
    setFeaturedOnly(false);
    setVisibleCount(6);
    setExpandedId(null);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
    setExpandedId(null);
  };

  const handleSearch = (value) => {
    setSearch(value);
    setVisibleCount(6);
    setExpandedId(null);
  };

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="section-inner projects-inner">

          <div className="projects-heading">

            <h2 className="section-title fade-up">
              Products.
              <br />
              Not Just Projects.
            </h2>

            <p className="section-subtitle fade-up">
              A collection of products, experiments and engineering
              solutions across full-stack development, embedded systems,
              healthcare technology and automation.
            </p>
          </div>

          <div className="projects-dashboard">

            <div className="projects-toolbar">
              <div className="projects-toolbar-copy">
                <span className="projects-toolbar-label">
                  PROJECT EXPLORER
                </span>
                <span className="projects-result-count">
                  Showing {displayedProjects.length} of {filteredProjects.length} projects
                </span>
              </div>

              <label className="projects-search">
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search projects or technologies..."
                  aria-label="Search projects"
                />
                {search && (
                  <button
                    type="button"
                    className="projects-clear-search"
                    onClick={() => handleSearch("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </label>
            </div>

            <div className="projects-filter-row">
              <div className="projects-filters" aria-label="Filter projects by category">
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category}
                    className={`projects-filter ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                    <span>{categoryCount(category)}</span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                className={`projects-featured-toggle ${
                  featuredOnly ? "active" : ""
                }`}
                onClick={() => {
                  setFeaturedOnly((current) => !current);
                  setVisibleCount(6);
                  setExpandedId(null);
                }}
                aria-pressed={featuredOnly}
              >
                <span>✦</span> Featured
              </button>
            </div>

            <div className="projects-grid">
              {displayedProjects.map((project, index) => {
                const isExpanded = expandedId === project.id;

                return (
                  <article
                    className={`project-card ${
                      project.featured ? "project-featured" : ""
                    } ${isExpanded ? "project-expanded" : ""}`}
                    key={project.id}
                    style={{ "--card-index": index }}
                  >
                    <div className="project-card-visual">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className={`project-card-image ${
                            project.id === 2 ? "project-image-lora" : ""
                          }`}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling?.classList.add(
                              "fallback-visible"
                            );
                          }}
                        />
                      ) : null}

                      <div
                        className={`project-visual-fallback ${
                          project.image ? "" : "fallback-visible"
                        }`}
                        aria-hidden="true"
                      >
                        <span>{project.icon}</span>
                        <small>{project.category}</small>
                      </div>

                      <div className="project-visual-overlay" />

                      <div className="project-visual-top">
                        <span className={`project-status ${statusClass(project.status)}`}>
                          <i />
                          {project.status}
                        </span>

                        {project.featured && (
                          <span className="project-featured-label">
                            ✦ FEATURED
                          </span>
                        )}
                      </div>

                      <div className="project-visual-bottom">
                        <span>{project.type}</span>
                        <span className="project-number">
                          {String(project.id).padStart(2, "0")} / 13
                        </span>
                      </div>
                    </div>

                    <div className="project-card-content">
                      <div className="project-card-category">
                        {project.category}
                      </div>

                      <h3>{project.title}</h3>

                      <p className="project-card-description">
                        {project.description}
                      </p>

                      <div className="project-tech-list">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}

                        {project.technologies.length > 5 && (
                          <span className="project-tech-more">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {isExpanded && (
                        <div className="project-details">
                          <div className="project-detail-block">
                            <span className="project-detail-label">
                              OVERVIEW
                            </span>
                            <p>{project.details}</p>
                          </div>

                          <div className="project-detail-block">
                            <span className="project-detail-label">
                              MY CONTRIBUTION
                            </span>
                            <p>{project.contribution}</p>
                          </div>

                          {project.achievement && (
                            <div className="project-achievement">
                              <span>🏆</span>
                              {project.achievement}
                            </div>
                          )}

                          <div className="project-all-tech">
                            <span className="project-detail-label">
                              TECHNOLOGY STACK
                            </span>
                            <div>
                              {project.technologies.map((tech) => (
                                <span key={tech}>{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="project-card-actions">
                        <button
                          type="button"
                          className="project-more"
                          onClick={() =>
                            setExpandedId(isExpanded ? null : project.id)
                          }
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? "Show less" : "Explore project"}
                          <span className={isExpanded ? "rotated" : ""}>
                            ↗
                          </span>
                        </button>

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-external-link"
                          >
                            {project.linkLabel || "Visit website"} ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {filteredProjects.length === 0 && (
              <div className="projects-empty">
                <span>⌕</span>
                <h3>No matching projects found</h3>
                <p>Try another project name, technology or category.</p>
                <button type="button" onClick={resetFilters}>
                  Clear all filters
                </button>
              </div>
            )}

            {filteredProjects.length > visibleCount && (
              <button
                type="button"
                className="projects-load-more"
                onClick={() => setVisibleCount((count) => count + 6)}
              >
                Load more projects
                <span>↓</span>
              </button>
            )}

            {filteredProjects.length > 0 &&
              filteredProjects.length <= visibleCount && (
                <div className="projects-end-note">
                </div>
              )}
          </div>

        </div>
      </section>

      <div className="divider" />
    </>
  );
}

export default Projects;
