"use client";

import { useEffect, useRef, useState } from "react";

type CursorSide = "men" | "women" | "neutral";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [side, setSide] = useState<CursorSide>("neutral");
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    let raf: number;
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      // Detect which side of the screen the cursor is on
      const half = window.innerWidth / 2;
      if (mx < half - 40) setSide("men");
      else if (mx > half + 40) setSide("women");
      else setSide("neutral");

      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    // Grow ring on interactive elements
    const onHoverEl = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      if (target.matches("a, button, [data-cursor-grow]")) {
        if (ringRef.current) ringRef.current.dataset.grow = "1";
      }
    };
    const onLeaveEl = () => {
      if (ringRef.current) delete ringRef.current.dataset.grow;
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onHoverEl);
      el.addEventListener("mouseleave", onLeaveEl);
    });

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  const dotColor =
    side === "men" ? "#C9A84C" : side === "women" ? "#B89A5A" : "#C9A84C";

  const ringColor =
    side === "men"
      ? "rgba(201,168,76,0.4)"
      : side === "women"
        ? "rgba(184,154,90,0.4)"
        : "rgba(201,168,76,0.25)";

  const ringSize = clicking ? 20 : 32;

  return (
    <>
      {/* Dot — snaps to cursor */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: clicking ? 4 : 6,
          height: clicking ? 4 : 6,
          borderRadius: "50%",
          backgroundColor: dotColor,
          transform: "translate(-50%, -50%)",
          transition: "background-color 0.3s ease, width 0.15s ease, height 0.15s ease",
          opacity: visible ? 1 : 0,
          mixBlendMode: "difference",
        }}
      />

      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          border: `1px solid ${ringColor}`,
          transform: "translate(-50%, -50%)",
          transition:
            "border-color 0.4s ease, width 0.25s ease, height 0.25s ease",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Hide native cursor via global style */}
      <style>{`
        * { cursor: none !important; }
      `}</style>
    </>
  );
}
