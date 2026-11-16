import { useEffect, useMemo, useRef, useState } from "react";

const SKILLS = [
  { name: "React", image: "/assets/images/skills/react.png", cat: "frontend" },
  { name: "Vite", image: "/assets/images/skills/vite.png", cat: "frontend" },
  { name: "Tailwind CSS", image: "/assets/images/skills/tailwind.png", cat: "frontend" },
  { name: "Flutter", image: "/assets/images/skills/flutter.png", cat: "frontend" },
  { name: "JavaScript", image: "/assets/images/skills/js.png", cat: "frontend" },

  { name: "Node.js", image: "/assets/images/skills/node.png", cat: "backend" },
  { name: "Express.js", image: "/assets/images/skills/express.png", cat: "backend" },
  { name: "MongoDB", image: "/assets/images/skills/mongo.png", cat: "backend" },
  { name: "REST APIs", image: "/assets/images/skills/rest api.png", cat: "backend" },
  { name: "Google OAuth", image: "/assets/images/skills/googleOAuth.png", cat: "backend" },
  { name: "JWT", image: "/assets/images/skills/jwt.png", cat: "backend" },
  { name: "Razorpay", image: "/assets/images/skills/razorpay.png", cat: "backend" },

  { name: "ESP32", image: "/assets/images/skills/esp32.png", cat: "hardware" },
  { name: "Arduino", image: "/assets/images/skills/arduino.png", cat: "hardware" },
  { name: "LoRa", image: "/assets/images/skills/LoRa.png", cat: "hardware" },
  { name: "BLE", image: "/assets/images/skills/BLE.png", cat: "hardware" },
  { name: "C++", image: "/assets/images/skills/c++.png", cat: "hardware" },

  { name: "Git", image: "/assets/images/skills/git.png", cat: "tools" },
  { name: "GitHub", image: "/assets/images/skills/github.png", cat: "tools" },
  { name: "Vercel", image: "/assets/images/skills/vercel.png", cat: "tools" },
  { name: "Render", image: "/assets/images/skills/Render.png", cat: "tools" },
  { name: "Cloudflare", image: "/assets/images/skills/cloudflare.png", cat: "tools" },
  { name: "Java", image: "/assets/images/skills/java.png", cat: "tools" },
  { name: "Python", image: "/assets/images/skills/python.png", cat: "tools" },
];

const CATEGORIES = [
  "all",
  "frontend",
  "backend",
  "hardware",
  "tools",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".fade-up") ?? [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return SKILLS;
    return SKILLS.filter(
      (skill) => skill.cat === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <section id="skills" ref={sectionRef}>
        <div className="section-inner">

          <h2 className="section-title fade-up">
            Technologies I Work With
          </h2>

          <p className="section-subtitle fade-up">
            My experience spans full-stack web development,
            backend engineering, embedded systems, cloud deployment,
            and modern development tools used to build scalable
            production-ready applications.
          </p>

          <div className="skills-cats fade-up">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`skill-cat ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() +
                  category.slice(1)}
              </button>
            ))}
          </div>

          <div className="skills-grid">

            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card fade-up"
                style={{
                  transitionDelay: `${(index % 5) * 0.08}s`,
                }}
              >
                <div className="skill-image">

                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="skill-icon"
                    loading="lazy"
                  />

                </div>

                <div className="skill-name">
                  {skill.name}
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