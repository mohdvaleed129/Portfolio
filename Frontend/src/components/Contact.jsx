
import { useState, useRef } from "react";

const CONTACTS = [
  {
    id: "email",
    icon: "✉",
    label: "EMAIL",
    value: "mohdvaleedhasan@gmail.com",
    action: "mailto:mohdvaleedhasan@gmail.com",
    copy: true,
  },
  {
    id: "linkedin",
    icon: "in",
    label: "LINKEDIN",
    value: "mohd-valeed-hasan",
    action: "https://linkedin.com/in/mohd-valeed-hasan",
  },
  {
    id: "github",
    icon: "⌘",
    label: "GITHUB",
    value: "mohdvaleed129",
    action: "https://github.com/mohdvaleed129",
  },
  {
    id: "company",
    icon: "🌿",
    label: "COMPANY",
    value: "tallowandcare.in",
    action: "https://tallowandcare.in",
  },
];

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [focused, setFocused] = useState("");
  const formRef = useRef(null);

  const completed = Object.values(form).filter(
    (value) => value.trim().length > 0
  ).length;

  const progress = (completed / 4) * 100;

  const handleChange = (e) => {
    const { id, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (status.type) {
      setStatus({ type: "", message: "" });
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "mohdvaleedhasan@gmail.com"
      );

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus({
        type: "error",
        message: "Unable to copy email. Please copy it manually.",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

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

      if (!res.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      setStatus({
        type: "success",
        message: "Message delivered successfully! I'll get back to you.",
      });

      setForm(INITIAL_FORM);
      setFocused("");

    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.message || "Something went wrong. Please try again.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">

      {/* Background decorations */}
      <div className="contact-orb orb-one"></div>
      <div className="contact-orb orb-two"></div>
      <div className="contact-grid-bg"></div>

      <div className="section-inner">

        {/* Heading */}
        <div className="contact-heading">


          <h2 className="section-title">
            Let's Build
            <br />
            <span className="contact-gradient">
              Something Great.
            </span>
          </h2>

          <p className="contact-subtitle">
            Have an interesting idea, a challenging project,
            or an opportunity worth discussing? Let's turn
            your next big idea into something real.
          </p>

        </div>

        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="contact-intro">
              <h3>
                Let's start a
                <br />
                conversation.
              </h3>

              <p>
                I work across full-stack development, mobile
                applications, embedded systems and emerging AI
                technologies. I'm always interested in solving
                meaningful problems with ambitious people.
              </p>
            </div>

            <div className="contact-items">

              {CONTACTS.map((item, index) => (

                <div
                  className="contact-item"
                  key={item.id}
                  style={{
                    "--item-index": index,
                  }}
                >

                  <div className="ci-icon">
                    {item.icon}
                  </div>

                  <a
                    href={item.action}
                    target={
                      item.id === "email" ? undefined : "_blank"
                    }
                    rel={
                      item.id === "email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="ci-content"
                  >
                    <span className="ci-label">
                      {item.label}
                    </span>

                    <span className="ci-val">
                      {item.value}
                    </span>
                  </a>

                  {item.copy && (
                    <button
                      type="button"
                      className="copy-btn"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      title="Copy email"
                    >
                      {copied ? "✓" : "⧉"}
                    </button>
                  )}

                  {!item.copy && (
                    <span className="ci-arrow">↗</span>
                  )}

                </div>

              ))}

            </div>

            <div className="contact-footer-note">
              <span className="footer-note-icon">✳</span>
              <span>
                Based in India · Available for remote opportunities worldwide.
              </span>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form-wrapper">

            <div className="form-heading">
              <h3>Send me a message.</h3>
              <p>
                Fill in the details below. I'll take it from there.
              </p>
            </div>

            {/* Progress */}
            <div className="form-progress">

              <div className="progress-info">
                <span>FORM COMPLETION</span>
                <span>{Math.round(progress)}%</span>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

            </div>

            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div
                  className={`form-group ${
                    focused === "name" ? "is-focused" : ""
                  } ${form.name ? "has-value" : ""}`}
                >
                  <label htmlFor="name">YOUR NAME</label>

                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    autoComplete="name"
                    maxLength={100}
                    required
                  />

                  <span className="input-bottom-line"></span>
                </div>

                <div
                  className={`form-group ${
                    focused === "email" ? "is-focused" : ""
                  } ${form.email ? "has-value" : ""}`}
                >
                  <label htmlFor="email">EMAIL ADDRESS</label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    autoComplete="email"
                    maxLength={254}
                    required
                  />

                  <span className="input-bottom-line"></span>
                </div>

              </div>

              <div
                className={`form-group ${
                  focused === "subject" ? "is-focused" : ""
                } ${form.subject ? "has-value" : ""}`}
              >
                <label htmlFor="subject">SUBJECT</label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused("")}
                  maxLength={150}
                  required
                />

                <span className="input-bottom-line"></span>
              </div>

              <div
                className={`form-group ${
                  focused === "message" ? "is-focused" : ""
                } ${form.message ? "has-value" : ""}`}
              >
                <div className="message-label-row">
                  <label htmlFor="message">YOUR MESSAGE</label>

                  <span className="character-count">
                    {form.message.length}/1500
                  </span>
                </div>

                <textarea
                  id="message"
                  placeholder="Tell me about your idea, project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  maxLength={1500}
                  required
                />

                <span className="input-bottom-line"></span>
              </div>

              <button
                type="submit"
                className={`contact-submit ${
                  loading ? "is-loading" : ""
                }`}
                disabled={loading}
              >

                <span>
                  {loading
                    ? "Sending your message..."
                    : "Send Message"}
                </span>

                <span className="submit-arrow">
                  {loading ? (
                    <span className="submit-spinner"></span>
                  ) : (
                    "↗"
                  )}
                </span>

              </button>

              <div className="form-privacy">
                <span>🔒</span>
                Your information is used only to respond to your message.
              </div>

              {/* Status message */}
              {status.message && (
                <div
                  className={`form-message ${status.type}`}
                  role="status"
                  aria-live="polite"
                >
                  <span className="message-status-icon">
                    {status.type === "success" ? "✓" : "!"}
                  </span>

                  {status.message}
                </div>
              )}

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
