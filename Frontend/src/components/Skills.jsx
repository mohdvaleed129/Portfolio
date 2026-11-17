
import { useMemo, useState } from "react";
import "../index.css";

const SKILLS = [
  // LANGUAGES
  { name: "Python", cat: "languages", image: "/assets/images/skills/python.png", desc: "General-purpose programming, scripting, backend development and data processing.", group: "Programming" },
  { name: "JavaScript", cat: "languages", image: "/assets/images/skills/js.png", desc: "Core language for interactive frontend applications and server-side development.", group: "Programming" },
  { name: "C++", cat: "languages", image: "/assets/images/skills/c++.png", desc: "Programming for embedded systems, hardware interfaces and performance-oriented applications.", group: "Programming" },
  { name: "SQL", cat: "languages", image: "/assets/images/skills/sql.svg", desc: "Relational queries, data retrieval and database operations.", group: "Programming" },
  { name: "Dart", cat: "languages", image: "/assets/images/skills/flutter.png", desc: "Programming language used for Flutter application development.", group: "Programming" },
  { name: "Java", cat: "languages", image: "/assets/images/skills/java.png", desc: "Basic familiarity with Java programming and application fundamentals.", group: "Programming" },

  // FRONTEND
  { name: "React.js", cat: "frontend", image: "/assets/images/skills/react.png", desc: "Component-based UI development using hooks, state and reusable components.", group: "Frontend" },
  { name: "Vite", cat: "frontend", image: "/assets/images/skills/vite.png", desc: "Frontend development tooling and fast build workflows.", group: "Frontend" },
  { name: "HTML5", cat: "frontend", image: "/assets/images/skills/html_5.svg", desc: "Semantic page structure and accessible web markup.", group: "Frontend" },
  { name: "CSS3", cat: "frontend", image: "/assets/images/skills/css_3.svg", desc: "Responsive layouts, animations, transitions and modern styling.", group: "Frontend" },
  { name: "Tailwind CSS", cat: "frontend", image: "/assets/images/skills/tailwind.png", desc: "Utility-first CSS styling and responsive UI development.", group: "Frontend" },
  { name: "Bootstrap", cat: "frontend", desc: "Responsive UI components and grid-based layouts.", group: "Frontend" },
  { name: "Responsive Design", cat: "frontend", desc: "Designing interfaces that adapt across mobile, tablet and desktop screens.", group: "Frontend" },

  // BACKEND
  { name: "Node.js", cat: "backend", image: "/assets/images/skills/node.png", desc: "JavaScript runtime for server-side applications and backend services.", group: "Backend" },
  { name: "Express.js", cat: "backend", image: "/assets/images/skills/express.png", desc: "REST API development, middleware and backend routing.", group: "Backend" },
  { name: "Flask", cat: "backend", image: "/assets/images/skills/flask.svg", desc: "Python-based backend services and web applications.", group: "Backend" },
  { name: "REST APIs", cat: "backend", image: "/assets/images/skills/rest api.png", desc: "Designing and integrating HTTP APIs for application communication.", group: "Backend" },
  { name: "Zod", cat: "backend", image: "/assets/images/skills/zod.svg", desc: "Schema validation and runtime data validation.", group: "Backend" },
  { name: "Helmet", cat: "backend", image: "/assets/images/skills/helmet.svg", desc: "Express security middleware for configuring HTTP security headers.", group: "Backend" },
  { name: "Rate Limiting", cat: "backend", image: "/assets/images/skills/rate_limit.svg", desc: "Controlling request frequency to reduce abuse and excessive API traffic.", group: "Backend" },
  { name: "Jinja2", cat: "backend", image: "/assets/images/skills/jinja2.svg", desc: "Python template engine for dynamic HTML rendering.", group: "Backend" },

  // DATABASES
  { name: "MongoDB", cat: "databases", image: "/assets/images/skills/mongo.png", desc: "Document-oriented NoSQL database for application data.", group: "Database" },
  { name: "MongoDB Atlas", cat: "databases", image: "/assets/images/skills/mongodb_atlas.svg", desc: "Managed cloud-hosted MongoDB database infrastructure.", group: "Database" },
  { name: "Mongoose", cat: "databases", image: "/assets/images/skills/mongoose.svg", desc: "MongoDB object modeling, schemas and database interactions in Node.js.", group: "Database" },
  { name: "SQLite", cat: "databases", image: "/assets/images/skills/sqlite.svg", desc: "Lightweight relational database for local and embedded applications.", group: "Database" },
  { name: "SQLAlchemy", cat: "databases", desc: "Python SQL toolkit and ORM for relational database interactions.", group: "Database" },
  { name: "MySQL", cat: "databases", image: "/assets/images/skills/mysql.svg", desc: "Familiarity with relational database concepts and MySQL.", group: "Database" },

  // AUTH & SECURITY
  { name: "JWT", cat: "security", image: "/assets/images/skills/jwt.png", desc: "Token-based authentication and authorization workflows.", group: "Security" },
  { name: "Google OAuth 2.0", cat: "security", image: "/assets/images/skills/googleOAuth.png", desc: "Google-based authentication and authorization integration.", group: "Security" },
  { name: "Email OTP", cat: "security", desc: "One-time password verification through email.", group: "Security" },
  { name: "bcrypt", cat: "security", desc: "Password hashing for secure credential storage.", group: "Security" },
  { name: "Admin Access Control", cat: "security", desc: "Role-based restrictions and administrative access management.", group: "Security" },
  { name: "CSRF Protection", cat: "security", desc: "Protection against cross-site request forgery attacks.", group: "Security" },
  { name: "Cloudflare Turnstile", cat: "security", desc: "Bot protection and verification for web forms and applications.", group: "Security" },
  { name: "Gitleaks", cat: "security", image: "/assets/images/skills/gitleaks.svg", desc: "Secret scanning to identify exposed credentials in repositories.", group: "Security" },
  { name: "Secure Redirects", cat: "security", desc: "Preventing unsafe redirect behavior and open-redirect vulnerabilities.", group: "Security" },
  { name: "Secret Management", cat: "security", desc: "Avoiding hardcoded credentials and protecting application secrets.", group: "Security" },

  // PAYMENTS
  { name: "Razorpay", cat: "integrations", image: "/assets/images/skills/razorpay.png", desc: "Payment gateway integration and checkout workflows.", group: "Payments" },

  // MOBILE
  { name: "Flutter", cat: "mobile", image: "/assets/images/skills/flutter.png", desc: "Cross-platform mobile application development.", group: "Mobile" },
  { name: "flutter_blue_plus", cat: "mobile", desc: "Bluetooth Low Energy communication in Flutter applications.", group: "Mobile" },
  { name: "Provider", cat: "mobile", desc: "State management for Flutter applications.", group: "Mobile" },

  // IOT
  { name: "ESP32", cat: "iot", image: "/assets/images/skills/esp32.png", desc: "Microcontroller development and connected embedded systems.", group: "Hardware" },
  { name: "ESP32-C3", cat: "iot", desc: "RISC-V based ESP32 development for connected IoT devices.", group: "Hardware" },
  { name: "Arduino", cat: "iot", image: "/assets/images/skills/arduino.png", desc: "Microcontroller programming, sensors and electronics prototyping.", group: "Hardware" },
  { name: "LoRa", cat: "iot", image: "/assets/images/skills/LoRa.png", desc: "Long-range, low-power wireless communication.", group: "Hardware" },
  { name: "BLE", cat: "iot", image: "/assets/images/skills/BLE.png", desc: "Bluetooth Low Energy communication between connected devices.", group: "Hardware" },
  { name: "ECG Sensors", cat: "iot", desc: "Working with ECG sensing in healthcare-oriented prototypes.", group: "Hardware" },
  { name: "Motion Sensors", cat: "iot", desc: "Sensor integration and motion-related data acquisition.", group: "Hardware" },
  { name: "Wireless Communication", cat: "iot", desc: "Device communication using wireless protocols and technologies.", group: "Hardware" },

  // INTEGRATIONS
  { name: "Resend", cat: "integrations", desc: "Transactional email delivery integration.", group: "APIs" },
  { name: "Gmail SMTP", cat: "integrations", desc: "Email delivery through SMTP integration.", group: "APIs" },
  { name: "Supadata API", cat: "integrations", desc: "API integration for YouTube transcript retrieval workflows.", group: "APIs" },
  { name: "YouTube Data API v3", cat: "integrations", desc: "Accessing YouTube video and channel metadata through APIs.", group: "APIs" },
  { name: "Google OAuth", cat: "integrations", desc: "Integrating Google account authorization into applications.", group: "APIs" },

  // AUTOMATION
  { name: "n8n", cat: "automation", desc: "Visual workflow automation and API-based integrations.", group: "Automation" },
  { name: "Google Sheets", cat: "automation", desc: "Spreadsheet-based data management and automation workflows.", group: "Automation" },
  { name: "WAHA", cat: "automation", desc: "WhatsApp HTTP API integration for automated messaging workflows.", group: "Automation" },

  // TOOLS & DEPLOYMENT
  { name: "Git", cat: "tools", image: "/assets/images/skills/git.png", desc: "Version control and source code management.", group: "Development Tools" },
  { name: "GitHub", cat: "tools", image: "/assets/images/skills/github.png", desc: "Repository hosting, collaboration and development workflows.", group: "Development Tools" },
  { name: "Vercel", cat: "tools", image: "/assets/images/skills/vercel.png", desc: "Frontend hosting and deployment.", group: "Deployment" },
  { name: "Render", cat: "tools", image: "/assets/images/skills/Render.png", desc: "Cloud deployment for backend applications and services.", group: "Deployment" },
  { name: "GoDaddy DNS", cat: "tools", desc: "Domain management and DNS configuration.", group: "Deployment" },
  { name: "Cloudflare", cat: "tools", image: "/assets/images/skills/cloudflare.png", desc: "DNS, security and web infrastructure services.", group: "Deployment" },
  { name: "Postman", cat: "tools", desc: "API testing, debugging and request collections.", group: "Development Tools" },
  { name: "VS Code", cat: "tools", desc: "Code editing and software development environment.", group: "Development Tools" },
  { name: "npm", cat: "tools", desc: "JavaScript package management and project tooling.", group: "Development Tools" },

  // DATA
  { name: "Data Cleaning", cat: "data", desc: "Preparing datasets and handling inconsistencies in data.", group: "Data" },
  { name: "Data Analysis", cat: "data", desc: "Exploring datasets and extracting useful information.", group: "Data" },
  { name: "Data Visualization", cat: "data", desc: "Presenting data through visual representations and charts.", group: "Data" },
  { name: "NumPy", cat: "data", desc: "Learning numerical computing and array operations in Python.", group: "Data" },
  { name: "Pandas", cat: "data", desc: "Learning tabular data manipulation and analysis.", group: "Data" },
  { name: "Scikit-learn", cat: "data", desc: "Learning machine learning workflows and model fundamentals.", group: "Data" },

  // CURRENTLY LEARNING
  { name: "Data Science", cat: "learning", desc: "Currently developing foundations in data science.", group: "Learning" },
  { name: "Generative AI", cat: "learning", desc: "Exploring generative AI concepts and applications.", group: "Learning" },
  { name: "Agentic AI", cat: "learning", desc: "Learning agent-based systems and autonomous workflows.", group: "Learning" },
  { name: "LangChain", cat: "learning", desc: "Exploring frameworks for building LLM-powered applications.", group: "Learning" },
  { name: "Hugging Face", cat: "learning", desc: "Exploring machine learning models and the Hugging Face ecosystem.", group: "Learning" },
  { name: "OpenCV", cat: "learning", desc: "Learning computer vision and image processing.", group: "Learning" },

  // OTHER
  { name: "Technical Documentation", cat: "other", desc: "Preparing technical documentation and project reports.", group: "Professional" },
  { name: "Research Writing", cat: "other", desc: "Technical research documentation and academic writing.", group: "Professional" },
  { name: "Patent Filing", cat: "other", desc: "Experience with Indian patent application filing processes.", group: "Professional" },
  { name: "Technical Mentoring", cat: "other", desc: "Guiding interns and supporting technical collaboration.", group: "Professional" },
  { name: "HR Documentation", cat: "other", desc: "Preparing offer letters, certificates and professional documents.", group: "Professional" }
];

const CATEGORIES = [
  { id: "all", label: "All Skills", icon: "✳" },
  { id: "languages", label: "Languages", icon: "⌘" },
  { id: "frontend", label: "Frontend", icon: "◈" },
  { id: "backend", label: "Backend", icon: "⚙" },
  { id: "databases", label: "Databases", icon: "◉" },
  { id: "security", label: "Security", icon: "♢" },
  { id: "integrations", label: "APIs & Payments", icon: "⇄" },
  { id: "mobile", label: "Mobile", icon: "▣" },
  { id: "iot", label: "IoT & Embedded", icon: "⌁" },
  { id: "automation", label: "Automation", icon: "⟳" },
  { id: "tools", label: "Tools & Cloud", icon: "⌘" },
  { id: "data", label: "Data", icon: "▥" },
  { id: "learning", label: "Learning", icon: "✧" },
  { id: "other", label: "Professional", icon: "◇" }
];

const MONOGRAMS = {
  "React.js": "⚛",
  "JavaScript": "JS",
  "Node.js": "JS",
  "Express.js": "EX",
  "Python": "PY",
  "C++": "C++",
  "SQL": "SQL",
  "Dart": "D",
  "Flask": "FL",
  "Zod": "Z",
  "Helmet": "HM",
  "Rate Limiting": "RL",
  "Jinja2": "JJ",
  "HTML5": "5",
  "CSS3": "3",
  "MongoDB Atlas": "DB",
  "Mongoose": "MG",
  "SQLite": "SQ",
  "MySQL": "MY",
  "Gitleaks": "GL",
  "Google OAuth 2.0": "G",
  "ESP32-C3": "32",
  "flutter_blue_plus": "BLE",
  "YouTube Data API v3": "YT",
  "Cloudflare Turnstile": "CF",
  "Scikit-learn": "ML"
};

function SkillIcon({ skill }) {
  const [failed, setFailed] = useState(false);

  if (skill.image && !failed) {
    return (
      <img
        src={skill.image}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className="skill-monogram">
      {MONOGRAMS[skill.name] || skill.name.slice(0, 2).toUpperCase()}
    </span>
  );
}

function SkillCard({ skill, index, selected, onClick }) {
  return (
    <button
      type="button"
      className={`skill-card ${selected ? "selected" : ""}`}
      style={{ "--card-index": index }}
      onClick={onClick}
      aria-pressed={selected}
    >
      <div className="skill-card-glow" />

      <div className="skill-card-top">
        <div className="skill-image">
          <SkillIcon skill={skill} />
        </div>
        <span className="skill-open-icon">↗</span>
      </div>

      <div className="skill-name">{skill.name}</div>
      <div className="skill-group">{skill.group}</div>

      <div className="skill-card-bottom">
        <span>EXPLORE TECHNOLOGY</span>
        <span>+</span>
      </div>
    </button>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [view, setView] = useState("grid");

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      const matchesCategory =
        activeCategory === "all" || skill.cat === activeCategory;

      const matchesSearch =
        skill.name.toLowerCase().includes(search.toLowerCase()) ||
        skill.desc.toLowerCase().includes(search.toLowerCase()) ||
        skill.group.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setSelectedSkill(null);
  };

  const changeSearch = (value) => {
    setSearch(value);
    setSelectedSkill(null);
  };

  return (
    <>
      <section id="skills" className="skills-section">
        <div className="skills-bg-grid" />
        <div className="skills-orb skills-orb-one" />
        <div className="skills-orb skills-orb-two" />

        <div className="skills-container">

          {/* HEADER */}
          <div className="skills-header">

            <h2 className="section-title">
              Technologies I
              <br />
              <span>Work With.</span>
            </h2>

            <p className="section-subtitle">
              A growing engineering toolkit spanning full-stack
              development, backend systems, security, mobile applications,
              embedded hardware, automation and emerging technologies.
            </p>
          </div>

          {/* DASHBOARD */}
          <div className="skills-dashboard">

            <div className="skills-dashboard-top">
              <div>
                <span className="skills-terminal-label">
                  ENGINEERING STACK / 2026
                </span>
                <h3>Technology Explorer</h3>
              </div>

              <div className="skills-total">
                <strong>{SKILLS.length}</strong>
                <span>TECHNOLOGIES & SKILLS</span>
              </div>
            </div>

            {/* SEARCH AND VIEW */}
            <div className="skills-toolbar">
              <div className="skills-search">
                <span>⌕</span>
                <input
                  type="search"
                  value={search}
                  onChange={(e) => changeSearch(e.target.value)}
                  placeholder="Search React, Node.js, MongoDB..."
                  aria-label="Search technologies"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => changeSearch("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>

              <div className="skills-view-toggle">
                <button
                  type="button"
                  className={view === "grid" ? "active" : ""}
                  onClick={() => setView("grid")}
                  aria-label="Grid view"
                >
                  ▦
                </button>
                <button
                  type="button"
                  className={view === "list" ? "active" : ""}
                  onClick={() => setView("list")}
                  aria-label="List view"
                >
                  ☰
                </button>
              </div>
            </div>

            {/* CATEGORY FILTERS */}
            <div className="skills-category-heading">
              <span>FILTER BY SPECIALIZATION</span>
              <span>{filteredSkills.length} RESULTS</span>
            </div>

            <div className="skills-cats">
              {CATEGORIES.map((category) => {
                const count =
                  category.id === "all"
                    ? SKILLS.length
                    : SKILLS.filter(
                        (skill) => skill.cat === category.id
                      ).length;

                return (
                  <button
                    key={category.id}
                    type="button"
                    className={`skill-cat ${
                      activeCategory === category.id ? "active" : ""
                    }`}
                    onClick={() => changeCategory(category.id)}
                  >
                    <span>{category.icon}</span>
                    {category.label}
                    <small>{count}</small>
                  </button>
                );
              })}
            </div>

            {/* SELECTED CATEGORY */}
            <div className="skills-results-heading">
              <div>
                <span className="skills-results-dot" />
                <strong>
                  {CATEGORIES.find(
                    (category) => category.id === activeCategory
                  )?.label}
                </strong>
              </div>

              <span>{filteredSkills.length} technologies found</span>
            </div>

            {/* SKILLS */}
            {filteredSkills.length > 0 ? (
              <div className={`skills-grid ${view === "list" ? "list-view" : ""}`}>
                {filteredSkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    selected={selectedSkill?.name === skill.name}
                    onClick={() =>
                      setSelectedSkill(
                        selectedSkill?.name === skill.name ? null : skill
                      )
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="skills-empty">
                <span>⌕</span>
                <h3>No technologies found</h3>
                <p>Try another search term or select a different category.</p>
                <button
                  type="button"
                  onClick={() => {
                    changeSearch("");
                    changeCategory("all");
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}

            {/* DETAIL PANEL */}
            {selectedSkill && (
              <div className="skill-detail-panel">
                <div className="skill-detail-icon">
                  <SkillIcon skill={selectedSkill} />
                </div>

                <div className="skill-detail-content">
                  <span>TECHNOLOGY DETAILS</span>
                  <h3>{selectedSkill.name}</h3>
                  <p>{selectedSkill.desc}</p>
                  <small>
                    CATEGORY: {selectedSkill.group.toUpperCase()}
                  </small>
                </div>

                <button
                  type="button"
                  className="skill-detail-close"
                  onClick={() => setSelectedSkill(null)}
                  aria-label="Close details"
                >
                  ×
                </button>
              </div>
            )}

            {/* FOOTER */}
            <div className="skills-dashboard-footer">
              <span>
                <span className="skills-live-dot" />
                CONTINUOUSLY LEARNING & BUILDING
              </span>
              <span>MOHD VALEED HASAN / TECH STACK</span>
            </div>

          </div>
        </div>
      </section>

      <div className="divider" />
    </>
  );
}
