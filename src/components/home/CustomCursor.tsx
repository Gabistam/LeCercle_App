"use client";

import { useEffect, useRef, useState } from "react";

type CursorUniverse = "men" | "women" | "neutral";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [universe, setUniverse] = useState<CursorUniverse>("neutral");
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    let raf: number;
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const getUniverseFromPoint = (x: number, y: number): CursorUniverse => {
      const el = document.elementFromPoint(x, y);
      const wrapper = el?.closest("[data-universe]");
      const val = wrapper?.getAttribute("data-universe");
      if (val === "men") return "men";
      if (val === "women") return "women";
      // Sur la homepage SplitHero, fallback position gauche/droite
      const half = window.innerWidth / 2;
      if (x < half - 40) return "men";
      if (x > half + 40) return "women";
      return "neutral";
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      setUniverse(getUniverseFromPoint(mx, my));

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

    const onHoverEl = () => {
      if (ringRef.current) ringRef.current.dataset.grow = "1";
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

  const dotColor = universe === "women" ? "#B89A5A" : "#C9A84C";

  const ringColor =
    universe === "women"
      ? "rgba(184,154,90,0.4)"
      : "rgba(201,168,76,0.35)";

  const ringSize = clicking ? 20 : 32;

  if (isTouch) return null;

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
