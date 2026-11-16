import { useEffect, useRef } from "react";
const onMouseMove = (e) => {
  mouse.current.x = e.clientX;
  mouse.current.y = e.clientY;

  cursor.style.left = e.clientX - 6 + "px";
  cursor.style.top = e.clientY - 6 + "px";
};

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ringEl = ringRef.current;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      cursor.style.left = e.clientX - 6 + "px";
      cursor.style.top = e.clientY - 6 + "px";
    };

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x - 20) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y - 20) * 0.15;
      ringEl.style.left = ring.current.x + "px";
      ringEl.style.top = ring.current.y + "px";
      rafRef.current = requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(animateRing);

    // hover scale effect
    const targets = document.querySelectorAll("a, button, .skill-card, .project-card, .ach-card");
    const onEnter = () => {
      cursor.style.transform = "scale(2)";
      ringEl.style.transform = "scale(1.4)";
    };
    const onLeave = () => {
      cursor.style.transform = "scale(1)";
      ringEl.style.transform = "scale(1)";
    };
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}