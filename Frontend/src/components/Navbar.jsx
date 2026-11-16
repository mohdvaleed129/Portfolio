import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Checks multiple scroll properties in case body/html has custom overflow
      const scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      setScrolled(scrollPosition > 20);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActive(`#${section.id}`);
        }
      });
    };

    // 'true' (capture phase) ensures scroll is detected even inside nested scroll containers
    window.addEventListener("scroll", handleScroll, true);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="nav-space">
      <nav
        className={scrolled ? "nav scrolled" : "nav"}
        style={{
          position: "fixed",
          top: scrolled ? "16px" : "0px",
          left: "50%",
          transform: "translateX(-50%)",
          width: scrolled ? "82%" : "100%",
          maxWidth: scrolled ? "960px" : "100%",
          borderRadius: scrolled ? "50px" : "0px",
          padding: scrolled ? "12px 30px" : "20px 50px",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 1000,
        }}
      >
        {/* Desktop Navigation */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a
              href="#about"
              className={active === "#about" ? "active" : ""}
              onClick={closeMenu}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={active === "#skills" ? "active" : ""}
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={active === "#projects" ? "active" : ""}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className={active === "#experience" ? "active" : ""}
              onClick={closeMenu}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#achievements"
              className={active === "#achievements" ? "active" : ""}
              onClick={closeMenu}
            >
              Achievements
            </a>
          </li>

          <li>
            <a
              href="#certifications"
              className={active === "#certifications" ? "active" : ""}
              onClick={closeMenu}
            >
              Certificates
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === "#contact" ? "active" : ""}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="nav-actions">
          <a
            href="/assets/Final Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Resume
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;