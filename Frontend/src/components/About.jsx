import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".fade-up") ?? [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="about" ref={sectionRef}>
        <div className="section-inner">

          <h2 className="section-title fade-up">
            Building Software.<br />
            Solving Real Problems.
          </h2>

          <div className="about-grid">
            {/* LEFT */}
            <div className="about-text fade-up">
              <p>
                I'm <strong>Mohd Valeed Hasan</strong>, a final-year B.Tech
                Information Technology student at{" "}
                <strong>SRMSCET, Bareilly</strong> and the{" "}
                <strong>CTO &amp; Co-founder of Tallow &amp; Care Pvt. Ltd.</strong>{" "}
                I enjoy building products from the ground up—from designing
                intuitive user interfaces to developing secure backend systems,
                databases, APIs, authentication, deployment pipelines, and cloud
                infrastructure.
              </p>

              <p>
                My primary focus is <strong>Full-Stack Development</strong>,
                especially using{" "}
                <strong>React, Node.js, Express, MongoDB</strong>, while also
                exploring hardware-driven projects with{" "}
                <strong>ESP32, Arduino, BLE, and LoRa communication</strong>. I
                enjoy working where software meets electronics.
              </p>

              <p>
                I believe technology should solve practical problems. Whether
                it's developing an e-commerce platform, building an offline mesh
                communication system, or creating healthcare prototypes, I enjoy
                turning ambitious ideas into working products.
              </p>

              <p>
                Alongside software engineering, I'm currently expanding my skills
                into <strong>Artificial Intelligence, Machine Learning,</strong>{" "}
                and <strong>Generative AI</strong>, with the goal of building
                intelligent systems that combine modern AI with scalable software.
              </p>

              <div className="trait-list">
                <div className="trait">
                  <span className="trait-icon">💻</span>
                  <span>
                    Full-stack developer with experience across frontend,
                    backend, databases and cloud deployment.
                  </span>
                </div>

                <div className="trait">
                  <span className="trait-icon">⚡</span>
                  <span>
                    Comfortable working with both software and embedded hardware.
                  </span>
                </div>

                <div className="trait">
                  <span className="trait-icon">🏆</span>
                  <span>
                    Winner of 8 hackathons with projects focused on real-world
                    innovation.
                  </span>
                </div>

                <div className="trait">
                  <span className="trait-icon">🤖</span>
                  <span>
                    Currently learning AI/ML, LLMs, RAG systems and Agentic AI.
                  </span>
                </div>
              </div>

              <div className="about-actions">
                <a
                  href="/assets/Final Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download Resume
                </a>
                <a href="#contact" className="btn-outline">
                  Let's Talk
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="about-cards fade-up"
              style={{ transitionDelay: ".2s" }}
            >
              <div className="a-card">
                <div className="a-card-accent">Current Role</div>
                <div className="a-card-title">
                  CTO • Tallow &amp; Care Pvt. Ltd.
                </div>
                <div className="a-card-text">
                  Leading product development and technical architecture. Built
                  the company's complete digital platform using React, Node.js,
                  Express, MongoDB, Google OAuth, Razorpay integration,
                  Cloudflare Turnstile, Vercel and Render deployment.
                </div>
              </div>

              <div className="a-card">
                <div className="a-card-accent">Project 01</div>
                <div className="a-card-title">
                  LoRa Mesh Communication Network
                </div>
                <div className="a-card-text">
                  Designed an offline long-range messaging system using ESP32-C3
                  and LoRa modules capable of self-healing mesh communication
                  without internet connectivity. This project won{" "}
                  <strong>7 hackathons</strong>.
                </div>
              </div>

              <div className="a-card">
                <div className="a-card-accent">Project 02</div>
                <div className="a-card-title">
                  AI-Based CPR Assistance Device
                </div>
                <div className="a-card-text">
                  Developed a wearable CPR prototype using Arduino Nano, ECG
                  sensing, BLE communication and Flutter. The system assists
                  emergency response through smart compression monitoring.
                </div>
              </div>

              <div className="a-card">
                <div className="a-card-accent">What's Next</div>
                <div className="a-card-title">AI Engineer Roadmap</div>
                <div className="a-card-text">
                  Currently learning Data Science, Machine Learning, LangChain,
                  RAG, CrewAI, AutoGen and LLM application development while
                  continuing to build production-ready software products.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}