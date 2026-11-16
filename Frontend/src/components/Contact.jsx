import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://my-portfolio-m43t.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 4000);
      } else {
        alert("Unable to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact">
      <div className="section-inner">

        <h2 className="section-title">
          Let's Build
          <br />
          Something.
        </h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              I'm open to internships, freelance projects, hackathon
              collaborations, and full-time roles. If you're building something
              ambitious and need someone who can work across the stack—from
              React to ESP32—let's talk.
            </p>

            <div className="contact-items">
              <a
                href="mailto:mohdvaleedhasan@gmail.com"
                className="contact-item"
              >
                <div className="ci-icon">✉️</div>
                <div>
                  <div className="ci-label">Email</div>
                  <div className="ci-val">mohdvaleedhasan</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/mohd-valeed-hasan"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="ci-icon">💼</div>
                <div>
                  <div className="ci-label">LinkedIn</div>
                  <div className="ci-val">mohd-valeed-hasan</div>
                </div>
              </a>

              <a
                href="https://github.com/mohdvaleed129"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="ci-icon">🐙</div>
                <div>
                  <div className="ci-label">GitHub</div>
                  <div className="ci-val">valeed910</div>
                </div>
              </a>

              <a
                href="https://tallowandcare.in"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="ci-icon">🌿</div>
                <div>
                  <div className="ci-label">Company</div>
                  <div className="ci-val">tallowandcare.in</div>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="form-input"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                className="form-input"
                type="text"
                value={form.subject}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-textarea"
                value={form.message}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Send Message
            </button>

            {success && (
              <div id="form-success">
                ✓ Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;