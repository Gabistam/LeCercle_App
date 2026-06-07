"use client";

import { useEffect, useRef, useState } from "react";

const IconScissors = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
    <path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="M8.12 8.12 12 12" />
  </svg>
);

const IconNailPolish = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 13V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v8" /><path d="M12 3v10" />
    <path d="M18 13.5a4 4 0 0 1-1.2 2.8c-1 .8-1.8 1.8-1.8 3.2V21H9v-1.5c0-1.4-.8-2.4-1.8-3.2A4 4 0 0 1 6 13.5" />
  </svg>
);

const IconPadelRacket = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="8.5" rx="7" ry="6.5" /><path d="M12 15v6" /><path d="M9.5 21h5" />
    <path d="M8 8.5h8" /><path d="M12 5v7" />
    <circle cx="12" cy="8.5" r=".5" fill="currentColor" /><circle cx="9.5" cy="7" r=".5" fill="currentColor" />
    <circle cx="14.5" cy="7" r=".5" fill="currentColor" /><circle cx="10" cy="10" r=".5" fill="currentColor" />
    <circle cx="14" cy="10" r=".5" fill="currentColor" />
  </svg>
);

const piliers = [
  {
    num: "01",
    title: "Excellence",
    titleFont: "bebas",
    desc: "Expertise confirmée, gestes maîtrisés et produits sélectionnés pour chaque prestation.",
    accent: "#C9A84C",
    Icon: IconScissors,
  },
  {
    num: "02",
    title: "Appartenance",
    titleFont: "cormorant",
    desc: "Un esprit club confidentiel. Chaque visite est une parenthèse dans un cadre exclusif.",
    accent: "#B89A5A",
    Icon: IconNailPolish,
  },
  {
    num: "03",
    title: "Récupération",
    titleFont: "bebas",
    desc: "Soins pensés pour l'après-padel — drainage, massage, rituel sport — au cœur des centres Casa Padel.",
    accent: "#C9A84C",
    Icon: IconPadelRacket,
  },
];

function PilierCard({ pilier, index }: { pilier: typeof piliers[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-5 pt-8 border-t"
      style={{
        borderColor: "rgba(201,168,76,0.2)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Icon */}
      <div aria-hidden="true" style={{ color: pilier.accent, opacity: 0.75 }}>
        <pilier.Icon />
      </div>

      {/* Number */}
      <span
        style={{
          fontFamily: "var(--font-barlow-cond, sans-serif)",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          color: pilier.accent,
          opacity: 0.6,
        }}
      >
        {pilier.num}
      </span>

      {/* Title — alternates Bebas / Cormorant */}
      <h3
        style={{
          fontFamily:
            pilier.titleFont === "bebas"
              ? "var(--font-bebas, 'Arial Black', sans-serif)"
              : "var(--font-cormorant, Georgia, serif)",
          fontSize: pilier.titleFont === "bebas" ? "2rem" : "2.2rem",
          fontStyle: pilier.titleFont === "cormorant" ? "italic" : "normal",
          fontWeight: pilier.titleFont === "cormorant" ? 300 : undefined,
          letterSpacing: pilier.titleFont === "bebas" ? "0.08em" : "0.02em",
          color: "#F1F1F1",
          lineHeight: 1,
        }}
      >
        {pilier.title}
      </h3>

      {/* Accent line — animates in */}
      <div
        style={{
          height: 1,
          backgroundColor: pilier.accent,
          width: visible ? 32 : 0,
          transition: `width 0.5s ease ${index * 0.15 + 0.3}s`,
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-barlow, sans-serif)",
          fontSize: "0.8rem",
          lineHeight: 1.7,
          color: "#5A5A60",
          fontWeight: 300,
        }}
      >
        {pilier.desc}
      </p>
    </div>
  );
}

export default function PiliersMiroir() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-lg">
          <p
            style={{
              fontFamily: "var(--font-barlow-cond, sans-serif)",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C9A84C",
              opacity: 0.6,
            }}
          >
            Notre concept
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "0.06em",
              color: "#F1F1F1",
              lineHeight: 0.95,
            }}
          >
            LE SOIN{" "}
            <span
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                color: "#C9A84C",
                letterSpacing: "0.02em",
              }}
            >
              intégré
            </span>{" "}
            AU SPORT
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {piliers.map((p, i) => (
            <PilierCard key={p.num} pilier={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
