function Projects() {
  return (
    <>
      <section id="projects">
        <div className="section-inner">

          <h2 className="section-title fade-up">
            Products.
            <br />
            Not Just Projects.
          </h2>

          <p className="section-subtitle fade-up">
            From scalable web applications to embedded systems and AI-powered
            healthcare solutions, every project represents solving a real-world
            problem through engineering.
          </p>

          <div className="projects-grid">

            {/* Project 1 */}

            <div className="project-card">

              <div className="project-visual pv-tallow">

                <img
                  src="/assets/images/projects/Tallow&Care.png"
                  alt="Tallow & Care Platform"
                  className="project-image"
                />

                <div className="proj-badge badge-live">
                  🌐 Live
                </div>

              </div>

              <div className="project-body">

                <div className="project-title">
                  Tallow &amp; Care Platform
                </div>

                <div className="project-desc">
                  Designed and developed the complete digital platform for
                  Tallow &amp; Care Pvt. Ltd., including authentication,
                  payments, admin dashboard, cloud deployment and secure backend
                  services. Built from concept to production.
                </div>

                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Vite</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Express</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">JWT</span>
                  <span className="tag">Google OAuth</span>
                  <span className="tag">Razorpay</span>
                  <span className="tag">Cloudflare</span>
                  <span className="tag">Render</span>
                </div>

                <div className="project-links">

                  <a
                    href="https://tallowandcare.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/valeed910"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link secondary"
                  >
                    Source
                  </a>

                </div>

              </div>

            </div>

            {/* Project 2 */}

            <div
              className="project-card"
              style={{ transitionDelay: ".1s" }}
            >

              <div className="project-visual pv-lora">

                <img
                  src="/assets/images/projects/LORA.png"
                  alt="LoRa Mesh Communication System"
                  className="project-image project-image-lora"
                />

                <div className="proj-badge badge-win">
                  🏆 7× Champion
                </div>

              </div>

              <div className="project-body">

                <div className="project-title">
                  LoRa Mesh Communication System
                </div>

                <div className="project-desc">
                  Built a self-healing offline communication network using
                  ESP32-C3 and LoRa modules capable of long-range messaging
                  without internet connectivity. Successfully won seven
                  hackathons with this flagship innovation.
                </div>

                <div className="project-tags">
                  <span className="tag">ESP32-C3</span>
                  <span className="tag">LoRa</span>
                  <span className="tag">Mesh Networking</span>
                  <span className="tag">Embedded C++</span>
                  <span className="tag">IoT</span>
                  <span className="tag">Arduino IDE</span>
                </div>

                <div className="project-links">

                  <a
                    href="https://github.com/valeed910"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

            {/* Project 3 */}

            <div
              className="project-card"
              style={{ transitionDelay: ".2s" }}
            >

              <div className="project-visual pv-cpr">

                <img
                  src="/assets/images/projects/AI POWERED CPR.png"
                  alt="AI-Based CPR Patch Device"
                  className="project-image"
                />

                <div className="proj-badge badge-win">
                  🏥 Healthcare
                </div>

              </div>

              <div className="project-body">

                <div className="project-title">
                  AI-Based CPR Patch Device
                </div>

                <div className="project-desc">
                  Developed a wearable emergency response system combining
                  Arduino Nano, ECG sensing, BLE communication and a Flutter
                  mobile application to assist CPR monitoring and compression
                  guidance.
                </div>

                <div className="project-tags">
                  <span className="tag">Arduino Nano</span>
                  <span className="tag">Flutter</span>
                  <span className="tag">BLE</span>
                  <span className="tag">ECG Sensor</span>
                  <span className="tag">ESP32</span>
                  <span className="tag">Healthcare IoT</span>
                </div>

                <div className="project-links">

                  <a
                    href="https://github.com/valeed910"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

            {/* Project 4 */}

            <div
              className="project-card"
              style={{ transitionDelay: ".3s" }}
            >

              <div className="project-visual">

                <img
                  src="/assets/images/projects/portfolio.png"
                  alt="Developer Portfolio"
                  className="project-image"
                />

                <div className="proj-badge badge-live">
                  🚀 Portfolio
                </div>

              </div>

              <div className="project-body">

                <div className="project-title">
                  Personal Developer Portfolio
                </div>

                <div className="project-desc">
                  Designed and developed a modern portfolio showcasing projects,
                  experience, hackathon achievements and technical skills with
                  responsive design, smooth animations and a premium UI.
                </div>

                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">Responsive UI</span>
                  <span className="tag">Animations</span>
                </div>

                <div className="project-links">

                  <a
                    href="https://github.com/valeed910"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    GitHub
                  </a>

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

export default Projects;
