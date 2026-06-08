"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SplitHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [splitPos, setSplitPos] = useState(50);
  const [hovered, setHovered] = useState<"men" | "women" | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = (x / rect.width) * 100;
      const clamped = Math.max(28, Math.min(72, pct));
      const pulled = clamped + (50 - clamped) * 0.35;
      setSplitPos(pulled);

      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x: nx, y: ny });
    };

    const onLeave = () => {
      setSplitPos(50);
      setMouse({ x: 0, y: 0 });
    };

    const onScroll = () => setScrollY(window.scrollY);

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile]);

  const parallaxMen = {
    x: mouse.x * -10,
    y: scrollY * 0.35 + mouse.y * -8,
  };
  const parallaxWomen = {
    x: mouse.x * 10,
    y: scrollY * 0.35 + mouse.y * -8,
  };

  /* ── MOBILE / TABLET : deux panneaux empilés, split fixe 50/50 ── */
  if (isMobile) {
    return (
      <section className="flex flex-col" style={{ height: "100svh" }}>

        {/* ── Panneau Homme (haut) ── */}
        <Link
          href="/homme"
          className="relative overflow-hidden"
          style={{ flex: "0 0 50%", backgroundColor: "#0C0C0C" }}
        >
          {/* Image de fond */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/men/men-hero-barber.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,12,12,0.60)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(201,168,76,0.14) 0%, transparent 55%)" }} />
          </div>

          {/* Séparateur bas — ligne fixe */}
          <div className="absolute bottom-0 left-0 right-0 h-px z-10" style={{ backgroundColor: "rgba(201,168,76,0.5)" }} />

          {/* Contenu centré */}
          <div className="relative z-10 h-full flex flex-col items-start justify-center px-8 gap-4">
            {/* Overline */}
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)", opacity: 0.7, letterSpacing: "0.3em" }}
            >
              01 — Barber · Grooming
            </p>

            {/* Titre */}
            <div className="flex flex-col gap-1">
              <div className="w-8 h-px" style={{ backgroundColor: "rgba(201,168,76,0.6)" }} />
              <h2
                className="uppercase leading-none"
                style={{
                  color: "#F1F1F1",
                  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
                  fontSize: "clamp(3rem, 14vw, 5rem)",
                  letterSpacing: "0.06em",
                  lineHeight: 0.9,
                  textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                }}
              >
                Univers<br />
                <span style={{ color: "#C9A84C" }}>Homme</span>
              </h2>
            </div>

            {/* Services */}
            <ul className="flex flex-col gap-1">
              {["Coupe & Barbe", "Rituel serviette chaude", "Soin du visage"].map((s) => (
                <li
                  key={s}
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "rgba(192,192,200,0.75)", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
                >
                  {s}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div
              className="btn-primary mt-1"
              style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "0.7rem", padding: "0.6rem 1.5rem" }}
            >
              Entrer
            </div>
          </div>

          {/* Lettre décorative */}
          <div
            className="absolute right-6 top-1/2 -translate-y-1/2 select-none pointer-events-none"
            style={{
              fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
              fontSize: "clamp(6rem, 20vw, 10rem)",
              lineHeight: 1,
              color: "#F1F1F1",
              opacity: 0.04,
            }}
          >
            H
          </div>
        </Link>

        {/* ── Panneau Femme (bas) ── */}
        <Link
          href="/femme"
          className="relative overflow-hidden"
          style={{ flex: "0 0 50%", backgroundColor: "#FAF7F2" }}
        >
          {/* Image de fond */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/women/women-hero-beauty-studio.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(250,247,242,0.62)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(255deg, rgba(184,154,90,0.18) 0%, transparent 55%)" }} />
          </div>

          {/* Contenu centré, aligné à droite */}
          <div className="relative z-10 h-full flex flex-col items-end justify-center px-8 gap-4 text-right">
            {/* Overline */}
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)", opacity: 0.7, letterSpacing: "0.25em" }}
            >
              02 — Nail Bar · Soins
            </p>

            {/* Titre */}
            <div className="flex flex-col items-end gap-1">
              <div className="w-8 h-px" style={{ backgroundColor: "rgba(184,154,90,0.6)" }} />
              <h2
                className="leading-none italic"
                style={{
                  color: "#4A3428",
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "clamp(2.8rem, 13vw, 4.5rem)",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  lineHeight: 0.9,
                }}
              >
                Univers<br />
                <span style={{ color: "#B89A5A" }}>Femme</span>
              </h2>
            </div>

            {/* Services */}
            <ul className="flex flex-col items-end gap-1">
              {["Manucure & Nail Bar", "Soins visage", "Épilation & Regard"].map((s) => (
                <li
                  key={s}
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "rgba(122,104,88,0.85)", fontFamily: "var(--font-jost, sans-serif)" }}
                >
                  {s}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div
              className="btn-primary mt-1"
              style={{ backgroundColor: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)", fontSize: "0.7rem", padding: "0.6rem 1.5rem" }}
            >
              Entrer
            </div>
          </div>

          {/* Lettre décorative */}
          <div
            className="absolute left-6 top-1/2 -translate-y-1/2 select-none pointer-events-none italic"
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(6rem, 20vw, 10rem)",
              lineHeight: 1,
              color: "#4A3428",
              opacity: 0.06,
            }}
          >
            F
          </div>
        </Link>

      </section>
    );
  }

  /* ── DESKTOP : séparateur dynamique ── */
  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* ── SIDE HOMME ── */}
      <Link
        href="/homme"
        className="absolute inset-0 flex flex-col items-start justify-center px-20 overflow-hidden"
        style={{
          clipPath: `polygon(0 0, ${splitPos}% 0, ${splitPos}% 100%, 0 100%)`,
          transition: "clip-path 0.05s linear",
          backgroundColor: "#0C0C0C",
          willChange: "clip-path",
          opacity: hovered === "women" ? 0.9 : 1,
        }}
        onMouseEnter={() => setHovered("men")}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ overflow: "hidden" }}>
          <Image
            src="/images/men/men-hero-barber.webp"
            alt=""
            fill
            priority
            sizes="60vw"
            className="object-cover object-center"
            style={{
              transform: `scale(1.12) translate(${parallaxMen.x}px, ${parallaxMen.y}px)`,
              transition: "transform 0.1s linear",
              willChange: "transform",
            }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,12,12,0.62)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(201,168,76,0.18) 0%, transparent 55%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,12,12,0.85) 0%, transparent 40%)" }} />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
              backgroundSize: "200px",
            }}
          />
        </div>

        <div
          className="relative z-10 flex flex-col gap-6 max-w-sm"
          style={{
            opacity: hovered === "women" ? 0.4 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          <Image
            src="/images/logos/logo-homme1.png"
            alt="Le Cercle — Univers Homme"
            width={360}
            height={180}
            style={{ objectFit: "contain", opacity: 0.9 }}
          />
          <h2
            className="leading-none uppercase"
            style={{
              color: "#F1F1F1",
              fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
              fontSize: "clamp(4rem, 7vw, 8rem)",
              letterSpacing: "0.06em",
              lineHeight: 0.88,
              textShadow: "0 2px 24px rgba(0,0,0,0.6)",
            }}
          >
            Univers<br />
            <span style={{ color: "#C9A84C" }}>Homme</span>
          </h2>
          <div className="h-px w-10" style={{ backgroundColor: "rgba(201,168,76,0.5)" }} />
          <ul className="flex flex-col gap-2">
            {["Coupe & Barbe", "Rituel serviette chaude", "Soin du visage"].map((s) => (
              <li
                key={s}
                className="text-xs tracking-widest uppercase flex items-center gap-3"
                style={{ color: "#C0C0C8", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
              >
                <span className="inline-block w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#C9A84C" }} />
                {s}
              </li>
            ))}
          </ul>
          <div className="btn-primary self-start mt-2" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
            Entrer
          </div>
        </div>

        <div
          className="absolute right-12 top-1/2 -translate-y-1/2 select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
            fontSize: "clamp(12rem, 18vw, 22rem)",
            lineHeight: 1,
            color: "#F1F1F1",
            opacity: 0.04,
            letterSpacing: "-0.02em",
          }}
        >
          H
        </div>
      </Link>

      {/* ── SIDE FEMME ── */}
      <Link
        href="/femme"
        className="absolute inset-0 flex flex-col items-end justify-center px-20 overflow-hidden"
        style={{
          clipPath: `polygon(${splitPos}% 0, 100% 0, 100% 100%, ${splitPos}% 100%)`,
          transition: "clip-path 0.05s linear",
          backgroundColor: "#FAF7F2",
          willChange: "clip-path",
          opacity: hovered === "men" ? 0.9 : 1,
        }}
        onMouseEnter={() => setHovered("women")}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/women/women-hero-beauty-studio.webp"
            alt=""
            fill
            priority
            sizes="60vw"
            className="object-cover object-center"
            style={{
              transform: `scale(1.12) translate(${parallaxWomen.x}px, ${parallaxWomen.y}px)`,
              transition: "transform 0.1s linear",
              willChange: "transform",
            }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(250,247,242,0.55)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(255deg, rgba(184,154,90,0.2) 0%, transparent 55%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(250,247,242,0.9) 0%, transparent 40%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 100% 0%, rgba(10,8,5,0.92) 0%, rgba(20,14,8,0.72) 35%, rgba(30,18,12,0.35) 60%, transparent 80%)" }} />
        </div>

        <div
          className="relative z-10 flex flex-col items-end gap-6 max-w-sm text-right"
          style={{
            opacity: hovered === "men" ? 0.4 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          <Image
            src="/images/logos/logo-femme1.png"
            alt="Le Cercle — Univers Femme"
            width={360}
            height={180}
            style={{ objectFit: "contain", opacity: 0.9 }}
          />
          <h2
            className="leading-none italic"
            style={{
              color: "#4A3428",
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(4rem, 6.5vw, 7rem)",
              fontWeight: 300,
              letterSpacing: "0.02em",
              lineHeight: 0.9,
              textShadow: "0 2px 20px rgba(250,247,242,0.4)",
            }}
          >
            Univers<br />
            <span style={{ color: "#B89A5A" }}>Femme</span>
          </h2>
          <div className="h-px w-10" style={{ backgroundColor: "rgba(184,154,90,0.5)" }} />
          <ul className="flex flex-col items-end gap-2">
            {["Manucure & Nail Bar", "Soins visage", "Épilation & Regard"].map((s) => (
              <li
                key={s}
                className="text-xs tracking-widest uppercase flex items-center gap-3"
                style={{ color: "#7A6858", fontFamily: "var(--font-jost, sans-serif)" }}
              >
                {s}
                <span className="inline-block w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#B89A5A" }} />
              </li>
            ))}
          </ul>
          <div
            className="btn-primary self-end mt-2"
            style={{ backgroundColor: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)" }}
          >
            Entrer
          </div>
        </div>

        <div
          className="absolute left-12 top-1/2 -translate-y-1/2 select-none pointer-events-none italic"
          style={{
            fontFamily: "var(--font-cormorant, Georgia, serif)",
            fontSize: "clamp(12rem, 18vw, 22rem)",
            lineHeight: 1,
            color: "#4A3428",
            opacity: 0.05,
          }}
        >
          F
        </div>
      </Link>

      {/* ── CENTRE — Logo + Ligne ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20"
        style={{ left: `${splitPos}%`, transform: "translateX(-50%)", width: 0 }}
      >
        <div
          className="absolute inset-y-0 w-px"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, #C9A84C 30%, #B89A5A 70%, transparent 100%)",
            opacity: 0.5,
          }}
        />
        <div className="relative flex flex-col items-center" style={{ whiteSpace: "nowrap", gap: 0 }}>
          <svg width="64" height="32" viewBox="0 0 64 32" fill="none" style={{ display: "block", marginBottom: -1 }}>
            <path d="M 32 32 A 32 32 0 0 1 0 32" stroke="url(#grad-top)" strokeWidth="1" fill="none" />
            <defs>
              <linearGradient id="grad-top" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
          <div
            className="relative flex flex-col items-center justify-center"
            style={{
              width: 130,
              height: 130,
              borderRadius: "50%",
              border: "1px solid rgba(201,168,76,0.35)",
              backgroundColor: "#0C0C0C",
              boxShadow: "0 0 40px rgba(201,168,76,0.06)",
            }}
          >
            <div style={{ position: "absolute", inset: 8, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.12)" }} />
            <div className="flex flex-col items-center gap-1 relative z-10">
              <span style={{ fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", fontSize: "1rem", letterSpacing: "0.35em", color: "#F1F1F1", lineHeight: 1 }}>
                LE CERCLE
              </span>
              <div style={{ width: 24, height: 1, background: "linear-gradient(to right, #C9A84C, #B89A5A)", opacity: 0.6 }} />
              <span style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "0.4rem", letterSpacing: "0.25em", color: "#C9A84C", textTransform: "uppercase", opacity: 0.65 }}>
                Maison de soins
              </span>
            </div>
          </div>
          <svg width="64" height="32" viewBox="0 0 64 32" fill="none" style={{ display: "block", marginTop: -1 }}>
            <path d="M 0 0 A 32 32 0 0 0 64 0" stroke="url(#grad-bot)" strokeWidth="1" fill="none" />
            <defs>
              <linearGradient id="grad-bot" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#B89A5A" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#B89A5A" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
