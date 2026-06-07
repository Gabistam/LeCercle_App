"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RecoveryBande() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#0C0C0C" }}>
      {/* Bande inclinée */}
      <section
        ref={ref}
        className="relative py-28 px-6"
        style={{
          backgroundColor: "#111113",
          transform: "skewY(-2deg)",
          margin: "0 -2px",
        }}
      >
        {/* Ligne laiton traversante */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, #C9A84C 30%, #B89A5A 70%, transparent)",
            opacity: 0.4,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, #B89A5A 30%, #C9A84C 70%, transparent)",
            opacity: 0.25,
          }}
        />

        {/* Contenu — dés-incliné */}
        <div
          className="relative max-w-7xl mx-auto"
          style={{ transform: "skewY(2deg)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Texte */}
            <div className="flex flex-col gap-7">
              <p
                style={{
                  fontFamily: "var(--font-barlow-cond, sans-serif)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  opacity: 0.6,
                }}
              >
                Récupération après padel
              </p>

              {/* Titre hybride */}
              <h2
                style={{
                  lineHeight: 1,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
                    fontSize: "clamp(3rem, 5vw, 4.5rem)",
                    letterSpacing: "0.06em",
                    color: "#F1F1F1",
                  }}
                >
                  APRÈS LE MATCH,
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "#C9A84C",
                    letterSpacing: "0.02em",
                  }}
                >
                  l&apos;essentiel.
                </span>
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-barlow, sans-serif)",
                  fontSize: "0.82rem",
                  lineHeight: 1.8,
                  color: "#5A5A60",
                  fontWeight: 300,
                  maxWidth: "380px",
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.7s ease 0.2s",
                }}
              >
                Massage récupération, drainage des jambes, rituel complet — directement au sein des centres Casa Padel. Pour elle, pour lui, pour deux.
              </p>

              {/* Services ligne */}
              <div
                className="flex flex-wrap gap-3"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.7s ease 0.35s",
                }}
              >
                {[
                  "Massage 30 min",
                  "Jambes légères",
                  "Rituel complet",
                  "Duo après match",
                ].map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: "var(--font-barlow-cond, sans-serif)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#C9A84C",
                      border: "1px solid rgba(201,168,76,0.2)",
                      padding: "5px 12px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <Link
                href="/salons"
                className="btn-outline self-start"
                style={{ borderColor: "rgba(201,168,76,0.3)", color: "#C9A84C" }}
              >
                Nos salons
              </Link>
            </div>

            {/* Image */}
            <div
              className="relative overflow-hidden"
              style={{
                minHeight: "380px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(24px)",
                transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
              }}
            >
              <Image
                src="/images/recovery/recovery-after-padel.webp"
                alt="Récupération après padel — Le Cercle"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Gradient overlay gauche pour la fusion avec le texte */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, #111113 0%, transparent 30%)",
                }}
              />
              {/* Accent corner haut-gauche */}
              <div className="absolute top-0 left-0 w-12 h-px" style={{ backgroundColor: "#C9A84C", opacity: 0.6 }} />
              <div className="absolute top-0 left-0 w-px h-12" style={{ backgroundColor: "#C9A84C", opacity: 0.6 }} />
              {/* Accent corner bas-droite */}
              <div className="absolute bottom-0 right-0 w-12 h-px" style={{ backgroundColor: "#B89A5A", opacity: 0.6 }} />
              <div className="absolute bottom-0 right-0 w-px h-12" style={{ backgroundColor: "#B89A5A", opacity: 0.6 }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
