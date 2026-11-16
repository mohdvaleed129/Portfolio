function Experience() {
  return (
    <>
      <section id="experience">
        <div className="section-inner">

          <h2 className="section-title">
            Building Products.
            <br />
            Creating Impact.
          </h2>

          <p className="section-subtitle">
            My journey combines software engineering, entrepreneurship,
            hackathons, and continuous learning—turning ideas into
            production-ready solutions.
          </p>

          <div className="timeline">

            {/* Experience 1 */}
            <div className="tl-item">
              <div className="tl-dot"></div>

              <div className="tl-content">
                <div className="tl-period">
                  2024 — Present
                </div>

                <div className="tl-role">
                  Chief Technology Officer (CTO) &amp; Co-founder
                </div>

                <div className="tl-company">
                  Tallow &amp; Care Private Limited • Bareilly, India
                </div>

                <ul className="tl-list">
                  <li>
                    Leading the complete technical vision and software
                    development of the startup.
                  </li>

                  <li>
                    Built and deployed the company's full-stack platform
                    using React, Vite, Node.js, Express, MongoDB,
                    Vercel and Render.
                  </li>

                  <li>
                    Implemented secure authentication with Google OAuth,
                    Cloudflare Turnstile, JWT and role-based access.
                  </li>

                  <li>
                    Integrated Razorpay payments, automated email services,
                    admin dashboard and cloud deployment pipeline.
                  </li>

                  <li>
                    Mentored web development interns and reviewed code while
                    managing technical execution across projects.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="tl-item">
              <div
                className="tl-dot"
                style={{
                  borderColor: "var(--glow-accent)",
                  boxShadow: "0 0 18px var(--glow-accent)",
                }}
              ></div>

              <div className="tl-content">
                <div className="tl-period">
                  2024 — Present
                </div>

                <div className="tl-role">
                  Hardware &amp; Software Developer
                </div>

                <div className="tl-company">
                  National Hackathons &amp; Innovation Competitions
                </div>

                <ul className="tl-list">
                  <li>
                    Designed and developed an offline LoRa Mesh
                    Communication System using ESP32-C3 and LoRa modules.
                  </li>

                  <li>
                    Achieved victory in seven hackathons with the same
                    flagship project across different competitions.
                  </li>

                  <li>
                    Built an AI-Based CPR Patch Device integrating
                    Arduino Nano, ECG sensing, BLE communication and
                    Flutter mobile application.
                  </li>

                  <li>
                    Worked across embedded systems, IoT, cloud software,
                    mobile applications and AI-powered healthcare solutions.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="tl-item">
              <div
                className="tl-dot"
                style={{
                  borderColor: "var(--glow-tertiary)",
                  boxShadow: "0 0 18px var(--glow-tertiary)",
                }}
              ></div>

              <div className="tl-content">
                <div className="tl-period">
                  2023 — Present
                </div>

                <div className="tl-role">
                  B.Tech • Information Technology
                </div>

                <div className="tl-company">
                  Shri Ram Murti Smarak College of Engineering &amp; Technology
                  (SRMSCET), Bareilly
                </div>

                <ul className="tl-list">
                  <li>
                    Pursuing Bachelor's degree while simultaneously leading
                    a startup and participating in national hackathons.
                  </li>

                  <li>
                    Building strong foundations in Data Structures,
                    Operating Systems, DBMS, Computer Networks and
                    Software Engineering.
                  </li>

                  <li>
                    Continuously expanding expertise in Full-Stack
                    Development, Artificial Intelligence and
                    Machine Learning.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="tl-item">
              <div
                className="tl-dot"
                style={{
                  borderColor: "var(--glow-secondary)",
                  boxShadow: "0 0 18px var(--glow-secondary)",
                }}
              ></div>

              <div className="tl-content">
                <div className="tl-period">
                  Current Focus
                </div>

                <div className="tl-role">
                  AI / ML &amp; Generative AI
                </div>

                <div className="tl-company">
                  Continuous Learning &amp; Personal Projects
                </div>

                <ul className="tl-list">
                  <li>
                    Learning Machine Learning, Deep Learning and Data Science.
                  </li>

                  <li>
                    Building applications with LangChain, RAG, Agentic AI,
                    CrewAI and modern LLM technologies.
                  </li>

                  <li>
                    Preparing for Software Engineer and AI/ML Engineer
                    opportunities by building production-grade projects.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}

export default Experience;