import { useEffect, useRef } from "react";

const CERTS = [
  {
    id: "cert1",
    image: "/assets/images/certs/techfest-2025.jpg",
    title: "Best Innovation — Team Techtornado",
    event: "TechFest 2025, Galgotias College of Engineering & Technology",
    position: "Best Innovation",
    date: "2025",
  },
  {
    id: "cert2",
    image: "/assets/images/certs/sustain-a-thon-2025.jpg",
    title: "Sustain-A-Thon 2025 — Team Techtornado",
    event: "Sharda School of Computing Science & Engineering, Sharda University",
    position: "2nd Position",
    date: "Oct 2025",
  },
  {
    id: "cert3",
    image: "/assets/images/certs/hackathon-3.0.jpg",
    title: "Hackathon 3.0",
    event: "SRMSCET, Bareilly — Disaster Management Solutions",
    position: "Consolation Prize",
    date: "March 2025",
  },
  {
    id: "cert4",
    image: "/assets/images/certs/techvyom-2025.jpg",
    title: "Techvyom 2025 — Tech Gallery",
    event: "National Level Technical Fest, SRMSCET Bareilly",
    position: "1st Position",
    date: "April 2025",
  },
  {
    id: "cert5",
    image: "/assets/images/certs/stem-carnival-5.jpg",
    title: "STEM Carnival 5",
    event: "RBMI Group of Institutions, Bareilly",
    position: "1st Prize",
    date: "2025",
  },
  {
    id: "cert6",
    image: "/assets/images/certs/hackathon-4.0-cpr.jpg",
    title: "AI-Based CPR Patch Device",
    event: "Hackathon 4.0, SRMSCET — Tech Solutions for Advancing SDGs",
    position: "3rd Position",
    date: "April 2026",
  },
  {
    id: "cert7",
    image: "/assets/images/certs/bharat-shiksha-expo.jpg",
    title: "CREATHON Winner",
    event: "Bharat Shiksha Expo 2025, India Exposition Mart Ltd",
    position: "Winner",
    date: "2025",
  },
  {
    id: "cert8",
    image: "/assets/images/certs/ignite-a-thon.jpg",
    title: "Ignite-a-thon 2025",
    event: "IEEE Region 10 ACEI & IEEE Delhi Section — Pitching Competition",
    position: "2nd Position",
    date: "2025",
  },
];

export default function Certifications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".fade-up") ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="certifications" ref={sectionRef}>
        <div className="section-inner">
          <h2 className="section-title fade-up">
            Certified &amp; Recognized
          </h2>

          <div className="cert-grid">
            {CERTS.map((cert, i) => (
              
                <div
                  className="cert-card fade-up"
                  style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
                >
                  <div className="cert-image-wrap">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="cert-image"
                    />
                  </div>
                  <div className="cert-body">
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-event">{cert.event}</div>
                    <div className="cert-meta">
                      <span className="cert-position">🏆 {cert.position}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}