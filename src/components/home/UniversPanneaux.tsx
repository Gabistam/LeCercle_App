"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const panneaux = [
  {
    id: "men",
    href: "/homme",
    label: "Homme",
    overline: "01 — Barber · Grooming",
    services: ["Coupe Ciseaux — 29 €", "Barbe + Serviette — 20 €", "Forfait Premium — 45 €"],
    cta: "Découvrir l'univers",
    bg: "#0C0C0C",
    bgHover: "#171719",
    text: "#F1F1F1",
    muted: "#5A5A60",
    accent: "#C9A84C",
    border: "rgba(201,168,76,0.2)",
    titleFont: "var(--font-bebas, 'Arial Black', sans-serif)",
    labelFont: "var(--font-barlow-cond, sans-serif)",
    titleStyle: { fontSize: "clamp(3.5rem, 6vw, 6rem)", letterSpacing: "0.06em" },
    titleClass: "uppercase",
    letter: "H",
    letterFont: "var(--font-bebas, 'Arial Black', sans-serif)",
    radius: "0px",
    imgPlaceholderBg: "#171719",
    img: "/images/home/home-universe-men.webp",
  },
  {
    id: "women",
    href: "/femme",
    label: "Femme",
    overline: "02 — Nail Bar · Massage · Soins",
    services: ["Manucure express — 25 €", "Soin visage complet — 55 €", "Beauté des pieds — 45 €"],
    cta: "Découvrir l'univers",
    bg: "#FAF7F2",
    bgHover: "#F3EDE2",
    text: "#4A3428",
    muted: "#A89080",
    accent: "#B89A5A",
    border: "rgba(184,154,90,0.25)",
    titleFont: "var(--font-cormorant, Georgia, serif)",
    labelFont: "var(--font-jost, sans-serif)",
    titleStyle: { fontSize: "clamp(3rem, 5.5vw, 5.5rem)", fontWeight: 300, fontStyle: "italic" },
    titleClass: "",
    letter: "F",
    letterFont: "var(--font-cormorant, Georgia, serif)",
    radius: "6px",
    imgPlaceholderBg: "#E8DDD0",
    img: "/images/home/home-universe-women.webp",
  },
];

export default function UniversPanneaux() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      className="py-2 px-6"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
        {panneaux.map((p) => {
          const isHovered = hovered === p.id;
          const isOtherHovered = hovered !== null && hovered !== p.id;

          return (
            <Link
              key={p.id}
              href={p.href}
              className="group relative overflow-hidden flex flex-col"
              style={{
                backgroundColor: p.bg,
                borderRadius: p.radius,
                opacity: isOtherHovered ? 0.65 : 1,
                transition: "opacity 0.4s ease",
              }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ height: "320px", backgroundColor: p.imgPlaceholderBg }}
              >
                <Image
                  src={p.img}
                  alt={`Le Cercle — Univers ${p.label}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={{
                    transform: isHovered ? "scale(1.04)" : "scale(1)",
                    transition: "transform 0.6s ease",
                  }}
                />
                {/* Gradient overlay bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 50%, ${p.bg} 100%)`,
                  }}
                />
                {/* Hover tint */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: p.accent,
                    opacity: isHovered ? 0.06 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5 p-8 flex-1">
                <p
                  style={{
                    fontFamily: p.labelFont,
                    fontSize: "0.65rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: p.accent,
                    opacity: 0.7,
                  }}
                >
                  {p.overline}
                </p>

                <h3
                  className={p.titleClass}
                  style={{
                    fontFamily: p.titleFont,
                    color: p.text,
                    lineHeight: 0.9,
                    ...p.titleStyle,
                  }}
                >
                  {p.label}
                </h3>

                {/* Services — revealed on hover */}
                <div
                  className="flex flex-col gap-2 overflow-hidden"
                  style={{
                    maxHeight: isHovered ? "120px" : "0px",
                    opacity: isHovered ? 1 : 0,
                    transition: "max-height 0.4s ease, opacity 0.3s ease",
                  }}
                >
                  {p.services.map((s) => (
                    <div
                      key={s}
                      className="flex items-center justify-between border-b pb-1"
                      style={{ borderColor: p.border }}
                    >
                      <span
                        style={{
                          fontFamily: p.labelFont,
                          fontSize: "0.7rem",
                          color: p.muted,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {s}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="flex items-center gap-3 mt-auto"
                  style={{ color: p.accent }}
                >
                  <span
                    style={{
                      fontFamily: p.labelFont,
                      fontSize: "0.7rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.cta}
                  </span>
                  <div
                    style={{
                      height: 1,
                      backgroundColor: p.accent,
                      width: isHovered ? 40 : 16,
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>
              </div>

              {/* Decorative letter */}
              <div
                className="absolute top-6 right-6 select-none pointer-events-none"
                style={{
                  fontFamily: p.letterFont,
                  fontSize: "7rem",
                  lineHeight: 1,
                  color: p.text,
                  opacity: isHovered ? 0.06 : 0.03,
                  fontStyle: p.id === "women" ? "italic" : "normal",
                  transition: "opacity 0.4s ease",
                }}
              >
                {p.letter}
              </div>

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: 2,
                  backgroundColor: p.accent,
                  opacity: isHovered ? 0.6 : 0.2,
                  transition: "opacity 0.3s ease",
                }}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
