function Achievements() {
  return (
    <>
      <section id="achievements">
        <div className="section-inner">

          <h2 className="section-title">
            Building Products.
            <br />
            Winning Competitions.
          </h2>

          <p className="section-subtitle">
            A journey of solving real-world problems through software,
            embedded systems, and entrepreneurship.
          </p>

          <div className="ach-grid">

            {/* Card 1 */}

            <div className="ach-card">

              <div className="ach-icon">🏆</div>

              <div className="ach-title">
                8 Hackathon Victories
              </div>

              <div className="ach-desc">
                Built innovative solutions across software, IoT and healthcare.
                Successfully secured <strong>8 hackathon wins</strong>,
                demonstrating rapid problem-solving, teamwork and execution.
              </div>

              <div className="ach-pos pos-1">
                🥇 8 Wins
              </div>

            </div>

            {/* Card 2 */}

            <div
              className="ach-card"
              style={{ transitionDelay: ".1s" }}
            >

              <div className="ach-icon">📡</div>

              <div className="ach-title">
                LoRa Mesh Communication System
              </div>

              <div className="ach-desc">
                Designed a self-healing offline mesh communication network
                using ESP32-C3 and LoRa modules. The project achieved
                <strong> first place in seven hackathons</strong> and
                demonstrated reliable long-range messaging without internet.
              </div>

              <div className="ach-pos pos-1">
                🥇 7× Champion
              </div>

            </div>

            {/* Card 3 */}

            <div
              className="ach-card"
              style={{ transitionDelay: ".2s" }}
            >

              <div className="ach-icon">❤️</div>

              <div className="ach-title">
                AI-Based CPR Assistance Device
              </div>

              <div className="ach-desc">
                Developed a wearable healthcare prototype integrating
                ECG monitoring, Arduino Nano, BLE communication and a
                Flutter mobile application to assist emergency CPR.
              </div>

              <div className="ach-pos pos-win">
                🏆 Winner
              </div>

            </div>

            {/* Card 4 */}

            <div
              className="ach-card"
              style={{ transitionDelay: ".3s" }}
            >

              <div className="ach-icon">🚀</div>

              <div className="ach-title">
                CTO & Co-founder
              </div>

              <div className="ach-desc">
                Leading the technical vision of Tallow & Care Pvt. Ltd.
                Designed and developed the complete digital platform,
                including frontend, backend, authentication, database,
                payments and cloud deployment.
              </div>

              <div className="ach-pos pos-win">
                ✓ Leadership
              </div>

            </div>

            {/* Card 5 */}

            <div
              className="ach-card"
              style={{ transitionDelay: ".4s" }}
            >

              <div className="ach-icon">👨‍💻</div>

              <div className="ach-title">
                Technical Leadership
              </div>

              <div className="ach-desc">
                Guided web development interns through project planning,
                code reviews and deployment while helping establish
                engineering practices within the startup.
              </div>

              <div className="ach-pos pos-win">
                ✓ Mentor
              </div>

            </div>

            {/* Card 6 */}

            <div
              className="ach-card"
              style={{ transitionDelay: ".5s" }}
            >

              <div className="ach-icon">🤖</div>

              <div className="ach-title">
                Continuous Learning
              </div>

              <div className="ach-desc">
                Expanding expertise in Artificial Intelligence,
                Machine Learning, LLMs, Retrieval-Augmented Generation,
                and Agentic AI while continuing to build production-ready
                software products.
              </div>

              <div className="ach-pos pos-win">
                📚 AI Journey
              </div>

            </div>

          </div>

        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}

export default Achievements;