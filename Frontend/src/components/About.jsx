
import { useEffect, useRef, useState } from "react";
import "../index.css";

const SKILLS = {
  Frontend: [
    ["React.js", 90],
    ["JavaScript", 88],
    ["HTML & CSS", 95],
    ["Flutter", 72]
  ],
  Backend: [
    ["Node.js", 88],
    ["Express.js", 85],
    ["Python / Flask", 80],
    ["REST APIs", 90]
  ],
  Database: [
    ["MongoDB", 85],
    ["Mongoose", 82],
    ["Database Design", 78],
    ["Authentication", 85]
  ],
  Emerging: [
    ["Machine Learning", 45],
    ["Generative AI", 50],
    ["IoT / Embedded", 85],
    ["LoRa Communication", 88]
  ]
};

const PROJECTS = [
  {
    id: 1,
    category: "RESEARCH & INNOVATION",
    icon: "📡",
    title: "LoRa Mesh Communication",
    subtitle: "Offline communication infrastructure",
    description:
      "Designed an offline long-range messaging system using ESP32-C3 and LoRa modules, exploring self-healing mesh communication without internet connectivity.",
    tags: ["ESP32-C3", "LoRa", "Embedded C", "Mesh Networking"],
    extra: "Indian patent application filed for LoRa Mesh Communication. Research paper submitted and under review."
  },
  {
    id: 2,
    category: "HEALTHCARE TECHNOLOGY",
    icon: "❤️",
    title: "AI-Based CPR Assistance",
    subtitle: "Connected emergency response prototype",
    description:
      "Developed a wearable CPR assistance prototype using Arduino, ECG sensing, BLE communication and Flutter for real-time monitoring and guidance.",
    tags: ["Arduino", "BLE", "Flutter", "Sensors"],
    extra: "Designed around connected monitoring, emergency alerts and CPR assistance workflows."
  },
  {
    id: 3,
    category: "ENTREPRENEURSHIP",
    icon: "🚀",
    title: "Tallow & Care",
    subtitle: "Building a product-focused startup",
    description:
      "Co-founded an animal-care product startup and led its digital platform development, including frontend, backend, authentication and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Razorpay"],
    extra: "CTO & Co-founder, Tallow & Care Pvt. Ltd."
  }
];

const JOURNEY = [
  {
    date: "2026 — PRESENT",
    title: "Full-Stack Development & Product Building",
    place: "Independent Development",
    text: "Building web applications, automation workflows and scalable software products while exploring AI-powered systems."
  },
  {
    date: "2025 — PRESENT",
    title: "CTO & Co-founder",
    place: "Tallow & Care Pvt. Ltd.",
    text: "Leading technical architecture, product development and digital infrastructure."
  },
  {
    date: "2025",
    title: "Hackathons & Innovation",
    place: "National-level competitions",
    text: "Achieved competitive hackathon recognition through practical engineering and problem-solving."
  },
  {
    date: "2022 — PRESENT",
    title: "B.Tech Information Technology",
    place: "SRMSCET, Bareilly",
    text: "Building foundations in computer science, software engineering and emerging technologies."
  }
];

function useReveal(ref) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const elements = root.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ref]);
}

function TiltCard({ children, className = "" }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = ((y / rect.height) - 0.5) * -7;
    const ry = ((x / rect.width) - 0.5) * 7;

    card.style.setProperty("--spot-x", `${x}px`);
    card.style.setProperty("--spot-y", `${y}px`);
    card.style.transform =
      `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className={`about-tilt ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useReveal(sectionRef);

  return (
    <>
      <section id="about" ref={sectionRef} className="about-section">

        <div className="about-background-grid" />
        <div className="about-orb about-orb-one" />
        <div className="about-orb about-orb-two" />

        <div className="about-container">

          {/* INTRO */}
          <div className="about-header about-reveal">

            <h2 className="about-main-title">
              Building Software.
              <br />
              <span>Solving Real Problems.</span>
            </h2>

            <p className="about-intro">
              Engineer by mindset. Builder by passion.
              Entrepreneur by ambition.
            </p>
          </div>

          {/* MAIN PROFILE */}
          <div className="about-main-grid">

            <div className="about-left about-reveal">

              <div className="about-identity">
                <div className="identity-top">
                  <div className="identity-avatar">MV</div>
                  <div>
                    <div className="identity-status">
                      <span className="about-live-dot" />
                      DEVELOPER PROFILE
                    </div>
                    <h3>Mohd Valeed</h3>
                    <p>Full-Stack Developer & Entrepreneur</p>
                  </div>
                </div>

                <div className="identity-divider" />

                <div className="identity-data">
                  <div>
                    <span>EDUCATION</span>
                    <strong>B.Tech Information Technology</strong>
                  </div>
                  <div>
                    <span>INSTITUTION</span>
                    <strong>SRMSCET, Bareilly</strong>
                  </div>
                  <div>
                    <span>CURRENT ROLE</span>
                    <strong>CTO & Co-founder</strong>
                  </div>
                  <div>
                    <span>PRIMARY FOCUS</span>
                    <strong>Full-Stack Engineering</strong>
                  </div>
                </div>

                <div className="identity-bottom">
                  <span>ENGINEERING / INNOVATION / EXECUTION</span>
                  <span>01 — PROFILE</span>
                </div>
              </div>

              <div className="about-bio">
                <span className="about-kicker">MY STORY</span>

                <p>
                  I'm <strong>Mohd Valeed</strong>, a final-year
                  Information Technology student at{" "}
                  <strong>SRMSCET, Bareilly</strong> and the{" "}
                  <strong>CTO & Co-founder of Tallow & Care Pvt. Ltd.</strong>
                </p>

                <p>
                  My primary focus is <strong>Full-Stack Development</strong>.
                  I build complete applications using React, JavaScript,
                  Node.js, Express and MongoDB from user interfaces and
                  backend APIs to authentication, databases and deployment.
                </p>

                <p>
                  I also enjoy working beyond conventional software
                  development. My experience with ESP32, Arduino, BLE and
                  LoRa communication allows me to explore the intersection
                  of software and embedded systems.
                </p>

                <p>
                  From building offline communication systems to developing
                  healthcare prototypes and startup products, I enjoy
                  transforming technical ideas into practical solutions.
                  I'm currently expanding my knowledge of{" "}
                  <strong>AI, Machine Learning and Generative AI.</strong>
                </p>
              </div>

              <div className="about-buttons">
                <a
                  href="/assets/Final Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-btn about-btn-primary"
                >
                  Download Resume <span>↗</span>
                </a>
                <a href="#contact" className="about-btn about-btn-secondary">
                  Let's Connect <span>→</span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="about-right about-reveal">

              <div className="about-right-heading">
                <span className="about-kicker">WHAT DEFINES MY WORK</span>
                <span className="about-counter">01 / 04</span>
              </div>

              <TiltCard className="about-feature-card">
                <span className="feature-icon">⚡</span>
                <div className="feature-number">01</div>
                <h3>End-to-End Engineering</h3>
                <p>
                  Comfortable building across frontend, backend,
                  databases, APIs and deployment infrastructure.
                </p>
                <span className="feature-tag">FULL-STACK DEVELOPMENT</span>
              </TiltCard>

              <TiltCard className="about-feature-card">
                <span className="feature-icon">📡</span>
                <div className="feature-number">02</div>
                <h3>Hardware Meets Software</h3>
                <p>
                  Exploring embedded systems, wireless communication,
                  connected devices and IoT-based solutions.
                </p>
                <span className="feature-tag">IoT / EMBEDDED SYSTEMS</span>
              </TiltCard>

              <TiltCard className="about-feature-card">
                <span className="feature-icon">🏆</span>
                <div className="feature-number">03</div>
                <h3>Competitive Problem Solving</h3>
                <p>
                  10-time hackathon winner, developing solutions
                  under real-world constraints and deadlines.
                </p>
                <span className="feature-tag">INNOVATION / EXECUTION</span>
              </TiltCard>

              <TiltCard className="about-feature-card">
                <span className="feature-icon">🤖</span>
                <div className="feature-number">04</div>
                <h3>Exploring Intelligent Systems</h3>
                <p>
                  Learning machine learning, LLM applications,
                  RAG architectures and Agentic AI.
                </p>
                <span className="feature-tag">AI / MACHINE LEARNING</span>
              </TiltCard>

            </div>
          </div>

        </div>
      </section>

      <div className="divider" />
    </>
  );
}
