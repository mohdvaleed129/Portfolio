
import { useEffect, useRef, useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaHeart,
  FaArrowUp,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  MdEmail,
  MdContentCopy,
  MdCheck,
} from "react-icons/md";

const EMAIL = "mohdvaleedhasan@gmail.com";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    username: "@mohdvaleed129",
    url: "https://github.com/mohdvaleed129",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    username: "Connect professionally",
    url: "https://linkedin.com/in/mohd-valeed-hasan",
    icon: <FaLinkedin />,
  },
  {
    name: "Website",
    username: "Tallow & Care",
    url: "https://tallowandcare.in",
    icon: <FaGlobe />,
  },
];

function Footer() {
  const year = new Date().getFullYear();

  const [copied, setCopied] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const copyTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimer.current) {
        clearTimeout(copyTimer.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      if (copyTimer.current) {
        clearTimeout(copyTimer.current);
      }

      copyTimer.current = setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (error) {
      console.error("Unable to copy email:", error);
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigation = (e, href) => {
    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", href);
    }
  };

  return (
    <footer className="site-footer">

      {/* BACKGROUND EFFECTS */}
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>
      <div className="footer-grid-bg"></div>

      {/* TOP CTA */}
      <div className="footer-cta">

        <div className="footer-cta-content">

          <h2>
            Let's build something
            <span className="footer-gradient-text">
              {" "}remarkable.
            </span>
          </h2>

          <p>
            Have a project, an opportunity, or an interesting idea?
            Let's turn it into something real.
          </p>
        </div>

        <a
          href="#contact"
          className="footer-cta-button"
          onClick={(e) => handleNavigation(e, "#contact")}
        >
          Let's Connect
          <FaExternalLinkAlt />
        </a>

      </div>

      <div className="footer-divider"></div>

      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <a
            href="#home"
            className="footer-logo"
            onClick={(e) => handleNavigation(e, "#home")}
          >
            <span className="footer-logo-icon">MV</span>
            <span className="footer-logo-name">
              MOHD VALEED<span>.</span>
            </span>
          </a>

          <p className="footer-description">
            Full-Stack Developer, CTO & Co-founder, and technology
            enthusiast building digital products and practical
            engineering solutions.
          </p>

          <div className="footer-role-tags">
            <span>Full-Stack Development</span>
            <span>Entrepreneurship</span>
            <span>Innovation</span>
          </div>

          {/* EMAIL */}
          <div className="footer-email-box">

            <div className="footer-email-icon">
              <MdEmail />
            </div>

            <div className="footer-email-details">
              <span>LET'S TALK</span>
              <a href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>

            <button
              type="button"
              className={`footer-copy-btn ${copied ? "copied" : ""}`}
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              title={copied ? "Copied!" : "Copy email"}
            >
              {copied ? <MdCheck /> : <MdContentCopy />}
            </button>

          </div>

          {copied && (
            <div className="footer-copy-feedback" role="status">
              <MdCheck /> Email copied to clipboard!
            </div>
          )}

        </div>

        {/* NAVIGATION */}
        <div className="footer-navigation">

          <h3 className="footer-heading">
            EXPLORE
            <span></span>
          </h3>

          <nav className="footer-nav-list" aria-label="Footer navigation">

            {NAV_LINKS.map((link, index) => (
              <a
                href={link.href}
                key={link.href}
                className="footer-nav-link"
                style={{ "--link-index": index }}
                onClick={(e) => handleNavigation(e, link.href)}
              >
                <span className="footer-nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{link.label}</span>

                <span className="footer-nav-arrow">↗</span>
              </a>
            ))}

          </nav>

        </div>

        {/* SOCIAL CONNECTIONS */}
        <div className="footer-connect">

          <h3 className="footer-heading">
            CONNECT WITH ME
            <span></span>
          </h3>

          <p className="footer-connect-text">
            Find me across the internet and let's create
            something meaningful together.
          </p>

          <div className="footer-social-list">

            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-card"
                aria-label={`Visit ${social.name}`}
              >

                <span className="footer-social-icon">
                  {social.icon}
                </span>

                <span className="footer-social-details">
                  <strong>{social.name}</strong>
                  <small>{social.username}</small>
                </span>

                <FaExternalLinkAlt className="footer-social-arrow" />

              </a>
            ))}

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <p>
            © {year} <strong>Mohd Valeed</strong>
            {" "}All Rights Reserved.
          </p>

          <button
            className={`footer-top-btn ${showTop ? "visible" : ""}`}
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            tabIndex={showTop ? 0 : -1}
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
