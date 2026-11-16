import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">

        <div className="footer-left">

          <p className="footer-text">
            Full-Stack Developer • CTO &amp; Co-founder • AI/ML Enthusiast
          </p>

          <p className="footer-copy">
            © {year} Mohd Valeed Hasan. All Rights Reserved.
          </p>

        </div>

        <div className="footer-center">

          <a href="#home" className="footer-link">
            Home
          </a>

          <a href="#about" className="footer-link">
            About
          </a>

          <a href="#skills" className="footer-link">
            Skills
          </a>

          <a href="#projects" className="footer-link">
            Projects
          </a>

          <a href="#experience" className="footer-link">
            Experience
          </a>

          <a href="#contact" className="footer-link">
            Contact
          </a>

        </div>

        <div className="footer-right">

          <div className="hero-socials">

            <a
              href="https://github.com/mohdvaleed129"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/mohd-valeed-hasan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:mohdvaleedhasan@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <MdEmail />
            </a>

            <a
              href="https://tallowandcare.in"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Website"
            >
              <FaGlobe />
            </a>

          </div>


        </div>

      </div>

      <div className="footer-bottom">

        <span>
          Designed &amp; Developed with <FaHeart /> using React.js
        </span>

      </div>

    </footer>
  );
}

export default Footer;