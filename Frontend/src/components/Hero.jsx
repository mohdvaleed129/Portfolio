import { useEffect, useRef, useState } from "react";
const ROLES = [
  "Full-Stack Developer",
  "CTO & Co-founder",
  "Software Engineer",
  "8+ Hackathon Winner",
];

export default function Hero() {
  const [typedRole, setTypedRole] = useState("");
  const sectionRef = useRef(null);

  // Typed-role effect (from typeRole() in script.js)
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let pause = 0;
    let timeoutId;

    const tick = () => {
      const word = ROLES[roleIndex];

      if (pause > 0) {
        pause -= 1;
        timeoutId = setTimeout(tick, 80);
        return;
      }

      if (!deleting) {
        charIndex += 1;
        setTypedRole(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          pause = 30;
        }
      } else {
        charIndex -= 1;
        setTypedRole(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
      }

      timeoutId = setTimeout(tick, deleting ? 50 : 80);
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, []);

  // fade-up on scroll (from IntersectionObserver in script.js)
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".fade-up") ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" ref={sectionRef}>
      <div className="hero-inner">
        <div className="hero-left fade-up" style={{ transitionDelay: "0.1s" }}>
          <h1 className="hero-title">
            <span>MOHD VALEED</span>
          </h1>

          <div className="hero-role">
            <span id="typed-role" className="typed-text">
              {typedRole}
            </span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-desc">
            <strong>CTO &amp; Co-founder, Full Stack Developer, </strong>
            and problem solver passionate about building technology that matters.
            From developing <strong>LoRa-based communication systems</strong> to
            engineering <strong>production-ready full-stack platforms</strong>, I
            combine software engineering, cloud technologies, and innovation to
            transform complex ideas into practical solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get in Touch
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/mohdvaleed129" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/mohd-valeed-hasan" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="mailto:mohdvaleedhasan@gmail.com" className="social-link" title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a href="https://tallowandcare.in" target="_blank" rel="noreferrer" className="social-link" title="Company">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Bareilly, India
            </div>
            <div className="hero-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.98 3.38 2 2 0 0 1 3.96 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              B.Tech IT · SRMSCET
            </div>
            <div className="hero-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Tallow &amp; Care Pvt. Ltd.
            </div>
          </div>
        </div>

        <div className="hero-right fade-up" style={{ transitionDelay: "0.3s" }}>
          <div className="code-window">
            <div className="win-header">
              <div className="dot r"></div>
              <div className="dot y"></div>
              <div className="dot g"></div>
              <div className="win-tab">valeed.ts</div>
            </div>
            <div className="code-body" id="code-body">
              <div className="code-line"><span className="ln">1</span><span><span className="kw">const</span> <span className="fn">developer</span> = {"{"}</span></div>
              <div className="code-line"><span className="ln">2</span><span>&nbsp;&nbsp;<span className="op">name</span>: <span className="str">"Mohd Valeed"</span>,</span></div>
              <div className="code-line"><span className="ln">3</span><span>&nbsp;&nbsp;<span className="op">role</span>: <span className="str">"CTO &amp; Full-Stack Dev"</span>,</span></div>
              <div className="code-line"><span className="ln">4</span><span>&nbsp;&nbsp;<span className="op">year</span>: <span className="str">"B.Tech Information Technology"</span>,</span></div>
              <div className="code-line"><span className="ln">5</span><span>&nbsp;&nbsp;<span className="op">hackathons</span>: {"{"}</span></div>
              <div className="code-line"><span className="ln">6</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="op">wins</span>: <span className="num">8</span>, <span className="op">projects</span>: <span className="num">2</span></span></div>
              <div className="code-line"><span className="ln">7</span><span>&nbsp;&nbsp;{"}"},</span></div>
              <div className="code-line"><span className="ln">8</span><span>&nbsp;&nbsp;<span className="op">stack</span>: [<span className="str">"React"</span>, <span className="str">"Node"</span>,</span></div>
              <div className="code-line"><span className="ln">9</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"MongoDB"</span>, <span className="str"></span>],</span></div>
              <div className="code-line"><span className="ln">10</span><span>&nbsp;&nbsp;<span className="op">company</span>: <span className="str">"tallowandcare.in"</span>,</span></div>
              <div className="code-line"><span className="ln">11</span><span>&nbsp;&nbsp;<span className="fn">currentFocus</span>: () =&gt; {"{"}</span></div>
              <div className="code-line"><span className="ln">12</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">return</span> <span className="str">"Full-Stack"</span>;</span></div>
              <div className="code-line"><span className="ln">13</span><span>&nbsp;&nbsp;{"}"}</span></div>
              <div className="code-line"><span className="ln">14</span><span>{"};"} <span className="typing-bar"></span></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}