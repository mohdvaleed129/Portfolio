import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(`#${section.id}`);
        }
      });
    };

    // { passive: true } improves scroll performance significantly
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="nav-space">
      <nav className={scrolled ? "nav scrolled" : "nav"}>
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

export, default Navbar;