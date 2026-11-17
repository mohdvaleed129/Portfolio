
import { useState, useEffect, useMemo, useCallback } from "react";

const CERTS = [
  {
    id: "hacknation",
    image: "/assets/images/certs/Hack-Nation 2.0 2026.jpg",
    title: "HackNation 2.0",
    event: "Shivalik University, Dehradun, Uttarakhand",
    position: "4th Position",
    date: "October 2026",
    year: 2026,
    category: "Hackathons",
    icon: "🚀",
    description:
      "Secured 4th position at HackNation 2.0, organized by Shivalik University, Dehradun, on 7–8 October 2026.",
    highlight: "National-level competition",
  },
  {
    id: "hackathon-4",
    image: "/assets/images/certs/hackathon-4.0-cpr.jpg",
    title: "Hackathon 4.0",
    event: "SRMSCET, Bareilly",
    position: "3rd Position",
    date: "April 2026",
    year: 2026,
    category: "Hackathons",
    icon: "❤️",
    description:
      "Secured third position for the problem statement 'Innovate for Impact: Tech Solutions for Advancing SDGs'. Developed an AI-based CPR assistance prototype.",
    highlight: "AI-Based CPR Assistance",
  },
  {
    id: "techfest",
    image: "/assets/images/certs/techfest-2025.jpg",
    title: "TechFest 2025",
    event: "Galgotias College of Engineering & Technology",
    position: "Best Innovation",
    date: "2025",
    year: 2025,
    category: "Awards",
    icon: "💡",
    description:
      "Recognized for Best Innovation with Team Techtornado at TechFest 2025.",
    highlight: "Innovation Award",
  },
  {
    id: "sustain",
    image: "/assets/images/certs/sustain-a-thon-2025.jpg",
    title: "Sustain-A-Thon 2025",
    event: "Sharda University, Greater Noida",
    position: "2nd Position",
    date: "October 2025",
    year: 2025,
    category: "Hackathons",
    icon: "🌱",
    description:
      "Secured second position with Team Techtornado (Team ID 5086) in Sustain-A-Thon 2025, focused on empowering the Viksit Bharat 2047 mission.",
    highlight: "Team Techtornado",
  },
  {
    id: "techvyom",
    image: "/assets/images/certs/techvyom-2025.jpg",
    title: "Techvyom 2025",
    event: "SRMSCET, Bareilly",
    position: "1st Position",
    date: "April 2025",
    year: 2025,
    category: "Awards",
    icon: "🏆",
    description:
      "Secured first position in Tech Gallery at the National Level Technical Fest, Techvyom 2025.",
    highlight: "Tech Gallery Winner",
  },
  {
    id: "bharat",
    image: "/assets/images/certs/bharat-shiksha-expo.jpg",
    title: "Bharat Shiksha Expo 2025",
    event: "India Exposition Mart Ltd. & Partner Institutions",
    position: "CREATHON Winner",
    date: "2025",
    year: 2025,
    category: "Awards",
    icon: "🎓",
    description:
      "Recognized as a winner in CREATHON at Bharat Shiksha Expo 2025 for innovation and outstanding performance.",
    highlight: "CREATHON Winner",
  },
  {
    id: "ignite",
    image: "/assets/images/certs/ignite-a-thon.jpg",
    title: "Ignite-a-thon 2025",
    event: "IEEE Region 10 ACEI & IEEE Delhi Section",
    position: "2nd Position",
    date: "2025",
    year: 2025,
    category: "Recognition",
    icon: "⚡",
    description:
      "Secured second position in the pitching competition 'Turn Your Ideas into Reality!' organized by the IEEE Region 10 AdHoc Committee.",
    highlight: "IEEE Recognition",
  },
  {
    id: "hackathon-3",
    image: "/assets/images/certs/hackathon-3.0.jpg",
    title: "Hackathon 3.0",
    event: "SRMSCET, Bareilly",
    position: "Consolation Prize",
    date: "March 2025",
    year: 2025,
    category: "Hackathons",
    icon: "🛡️",
    description:
      "Earned a consolation prize for the problem statement 'Sustainable and Circular Solutions for Disaster Management' during the 36-hour Hackathon 3.0.",
    highlight: "36-Hour Hackathon",
  },
  {
    id: "stem",
    image: "/assets/images/certs/stem-carnival-5.jpg",
    title: "STEM Carnival 5",
    event: "RBMI Group of Institutions, Bareilly",
    position: "1st Prize",
    date: "2025",
    year: 2025,
    category: "Awards",
    icon: "🔬",
    description:
      "Achieved first prize in the hackathon at STEM Carnival 5, showcasing innovation and technical problem-solving.",
    highlight: "Hackathon Winner",
  },
];

const FILTERS = [
  "All",
  "Hackathons",
  "Awards",
  "Recognition",
];

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [selected, setSelected] = useState(null);
  const [loaded, setLoaded] = useState({});
  const [visible, setVisible] = useState(false);

  const filteredCerts = useMemo(() => {
    let result = CERTS.filter((cert) => {
      const matchesFilter =
        activeFilter === "All" ||
        cert.category === activeFilter;

      const term = search.toLowerCase();

      const matchesSearch = [
        cert.title,
        cert.event,
        cert.position,
        cert.description,
        cert.date,
      ].some((value) => value.toLowerCase().includes(term));

      return matchesFilter && matchesSearch;
    });

    return [...result].sort((a, b) =>
      sort === "newest"
        ? b.year - a.year || CERTS.indexOf(a) - CERTS.indexOf(b)
        : a.year - b.year || CERTS.indexOf(b) - CERTS.indexOf(a)
    );
  }, [activeFilter, search, sort]);

  const podiumCount = CERTS.filter((cert) =>
    ["1st Position", "2nd Position", "3rd Position", "1st Prize"].includes(
      cert.position
    )
  ).length;

  const openCertificate = useCallback((cert) => {
    setSelected(cert);
  }, []);

  const closeCertificate = useCallback(() => {
    setSelected(null);
  }, []);

  const navigateCertificate = useCallback((direction) => {
    setSelected((current) => {
      if (!current) return null;

      const index = filteredCerts.findIndex(
        (cert) => cert.id === current.id
      );

      const nextIndex =
        (index + direction + filteredCerts.length) %
        filteredCerts.length;

      return filteredCerts[nextIndex];
    });
  }, [filteredCerts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("certifications");

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeCertificate();
      if (e.key === "ArrowRight") navigateCertificate(1);
      if (e.key === "ArrowLeft") navigateCertificate(-1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, closeCertificate, navigateCertificate]);

  const stats = [
    {
      number: CERTS.length,
      label: "Certificates",
      icon: "📜",
    },
    {
      number: podiumCount,
      label: "Podium Finishes",
      icon: "🏆",
    },
    {
      number: CERTS.filter((c) => c.year === 2026).length,
      label: "2026 Achievements",
      icon: "🚀",
    },
    {
      number: new Set(CERTS.map((c) => c.event)).size,
      label: "Event Platforms",
      icon: "🌍",
    },
  ];

  return (
    <>
      <section
        id="certifications"
        className={`cert-section ${visible ? "cert-visible" : ""}`}
      >
        <div className="section-inner">

          {/* HEADER */}

          <div className="cert-heading">

            <h2 className="section-title">
              Certified &amp;{" "}
              <span className="cert-gradient">Recognized.</span>
            </h2>

            <p className="section-subtitle">
              Every certificate represents an idea tested, a challenge
              accepted, and a problem solved. A collection of milestones
              from my journey in technology and innovation.
            </p>
          </div>

          {/* STATISTICS */}

          <div className="cert-stats">
            {stats.map((stat, i) => (
              <div
                className="cert-stat"
                key={stat.label}
                style={{ "--delay": `${i * 100}ms` }}
              >
                <div className="cert-stat-icon">{stat.icon}</div>

                <div className="cert-stat-number">
                  {stat.number.toString().padStart(2, "0")}
                  <span>+</span>
                </div>

                <div className="cert-stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* FILTER AND SEARCH */}

          <div className="cert-toolbar">

            <div className="cert-filters">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  className={`cert-filter ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                  type="button"
                >
                  {filter}
                  {activeFilter === filter && (
                    <span className="filter-count">
                      {filter === "All"
                        ? CERTS.length
                        : CERTS.filter(
                            (c) => c.category === filter
                          ).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="cert-controls">

              <div className="cert-search">
                <span>⌕</span>
                <input
                  type="search"
                  placeholder="Search achievements..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search certificates"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>

              <select
                className="cert-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort certificates"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>

            </div>
          </div>

          {/* RESULTS COUNT */}

          <div className="cert-results">
            <span>
              SHOWING <strong>{filteredCerts.length}</strong> OF{" "}
              <strong>{CERTS.length}</strong> ACHIEVEMENTS
            </span>
            <span className="cert-results-line" />
            <span>PORTFOLIO / RECOGNITION</span>
          </div>

          {/* CERTIFICATE GRID */}

          <div className="cert-grid">

            {filteredCerts.map((cert, i) => (
              <article
                className="cert-card"
                key={cert.id}
                style={{
                  "--card-delay": `${(i % 3) * 100}ms`,
                }}
              >

                <div className="cert-image-wrap">

                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className={`cert-image ${
                      loaded[cert.id] ? "image-loaded" : ""
                    }`}
                    loading="lazy"
                    onLoad={() =>
                      setLoaded((prev) => ({
                        ...prev,
                        [cert.id]: true,
                      }))
                    }
                  />

                  {!loaded[cert.id] && (
                    <div className="cert-image-loading">
                      <span>LOADING CERTIFICATE...</span>
                    </div>
                  )}

                  <div className="cert-image-overlay">
                    <button
                      className="cert-zoom-btn"
                      onClick={() => openCertificate(cert)}
                      type="button"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      ↗ View Original
                    </button>
                  </div>

                  <div className="cert-category">
                    {cert.category}
                  </div>

                </div>

                <div className="cert-body">

                  <div className="cert-card-top">
                    <span className="cert-card-icon">
                      {cert.icon}
                    </span>

                    <span className="cert-date">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="cert-title">
                    {cert.title}
                  </h3>

                  <p className="cert-event">
                    {cert.event}
                  </p>

                  <div className="cert-highlight">
                    <span className="cert-highlight-dot" />
                    {cert.highlight}
                  </div>

                  <div className="cert-card-footer">

                    <span className="cert-position">
                      🏆 {cert.position}
                    </span>

                    <button
                      className="cert-details-btn"
                      type="button"
                      onClick={() => openCertificate(cert)}
                    >
                      Explore <span>↗</span>
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>

          {/* EMPTY STATE */}

          {filteredCerts.length === 0 && (
            <div className="cert-empty">
              <span>🔎</span>
              <h3>No achievements found</h3>
              <p>
                Try another search term or change your selected filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* FOOTER */}

        </div>
      </section>

      {/* FULL SCREEN CERTIFICATE VIEWER */}

      {selected && (
        <div
          className="cert-modal"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeCertificate();
          }}
          role="presentation"
        >

          <div
            className="cert-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} certificate`}
          >

            <div className="cert-modal-header">
              <div>
                <span className="cert-modal-eyebrow">
                  CERTIFICATE PREVIEW
                </span>
                <h3>{selected.title}</h3>
              </div>

              <button
                className="cert-modal-close"
                onClick={closeCertificate}
                type="button"
                aria-label="Close certificate viewer"
              >
                ×
              </button>
            </div>

            <div className="cert-modal-image">
              <img
                src={selected.image}
                alt={`${selected.title} original certificate`}
              />
            </div>

            <div className="cert-modal-details">
              <div>
                <span>ACHIEVEMENT</span>
                <strong>{selected.position}</strong>
              </div>

              <div>
                <span>ORGANIZER</span>
                <strong>{selected.event}</strong>
              </div>

              <div>
                <span>DATE</span>
                <strong>{selected.date}</strong>
              </div>
            </div>

            <p className="cert-modal-description">
              {selected.description}
            </p>

            <div className="cert-modal-actions">

              <button
                type="button"
                className="cert-nav-btn"
                onClick={() => navigateCertificate(-1)}
              >
                ← Previous
              </button>

              <a
                href={selected.image}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-original-btn"
              >
                Open Full Image ↗
              </a>

              <button
                type="button"
                className="cert-nav-btn"
                onClick={() => navigateCertificate(1)}
              >
                Next →
              </button>

            </div>

            <div className="cert-keyboard-hint">
              ESC TO CLOSE &nbsp; • &nbsp; ← PREVIOUS &nbsp; • &nbsp; NEXT →
            </div>

          </div>
        </div>
      )}

      <div className="divider" />
    </>
  );
}
