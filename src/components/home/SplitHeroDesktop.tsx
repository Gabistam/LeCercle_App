"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Props = { freshaUrl: string };

export default function SplitHeroDesktop({ freshaUrl }: Props) {
  const [hoveredMen, setHoveredMen] = useState(false);
  const [hoveredWomen, setHoveredWomen] = useState(false);

  return (
    <section style={{ height: "100vh", display: "flex", overflow: "hidden", position: "relative", backgroundColor: "#0D0D0D" }}>

      {/* ── PANNEAU HOMME ── */}
      <div
        style={{ position: "relative", flex: 1, overflow: "hidden", cursor: "pointer" }}
        onMouseEnter={() => setHoveredMen(true)}
        onMouseLeave={() => setHoveredMen(false)}
      >
        <Image
          src="/images/men/men-barber-chair.webp"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover object-center"
          style={{
            transform: hoveredMen ? "scale(1.05)" : "scale(1)",
            filter: hoveredMen ? "brightness(0.5)" : "brightness(1)",
            transition: "transform 1s cubic-bezier(.16,1,.3,1), filter 0.6s ease",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,6,4,0.97) 0%, rgba(8,6,4,0.72) 38%, rgba(8,6,4,0.25) 62%, transparent 100%)", zIndex: 2 }} />

        {/* Logo haut gauche */}
        <div style={{ position: "absolute", top: 36, left: 48, zIndex: 10 }}>
          <Image
            src="/images/logos/logo-homme1.png"
            alt="Le Cercle — Espace Homme"
            width={220}
            height={110}
            style={{ objectFit: "contain", opacity: 0.9 }}
          />
        </div>

        {/* Contenu bas */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "52px 52px 56px", zIndex: 5, display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8px", fontWeight: 300, letterSpacing: "6px", textTransform: "uppercase", color: "#C4A35A", marginBottom: 0, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 18, height: 1, background: "#C4A35A", opacity: 0.65, display: "inline-block", flexShrink: 0 }} />
            L&apos;espace homme
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2.75rem, 4.5vw, 4rem)", lineHeight: 0.88, letterSpacing: "-1.5px", color: "#F1F0EC" }}>
            Coupe · Barbe<br />
            <em style={{ fontStyle: "italic", color: "#C4A35A", display: "block" }}>&amp; Soins</em>
          </h2>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9, marginBottom: 0 }}>
            {["Coupe ciseaux & tondeuse", "Barbe & finition lame", "Soin du visage", "Forfaits dès 35 €"].map((s) => (
              <li key={s} style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "17px", fontWeight: 300, color: "rgba(241,240,236,0.65)", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C4A35A", flexShrink: 0, opacity: 0.75, display: "inline-block" }} />
                {s}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={freshaUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#0D0D0D", background: "#C4A35A", padding: "14px 28px", textDecoration: "none", display: "inline-block", transition: "background .3s" }}>
              Réserver · Espace Homme
            </a>
            <Link href="/homme" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.4)", padding: "14px 24px", textDecoration: "none", display: "inline-block", transition: "all .3s" }}>
              Voir les rituels →
            </Link>
          </div>
          <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "1.5px", color: "rgba(241,240,236,0.32)", fontStyle: "italic" }}>
            Sans carte bancaire · Annulation gratuite 24h avant
          </p>
        </div>
      </div>

      {/* ── LIGNE OR CENTRALE ── */}
      <div style={{ position: "relative", width: 3, background: "linear-gradient(to bottom, transparent 3%, #C4A35A 14%, #C4A35A 86%, transparent 97%)", zIndex: 20, flexShrink: 0 }} />

      {/* ── PANNEAU FEMME ── */}
      <div
        style={{ position: "relative", flex: 1, overflow: "hidden", cursor: "pointer" }}
        onMouseEnter={() => setHoveredWomen(true)}
        onMouseLeave={() => setHoveredWomen(false)}
      >
        <Image
          src="/images/women/women-nail-bar.avif"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover object-center"
          style={{
            transform: hoveredWomen ? "scale(1.05)" : "scale(1)",
            filter: hoveredWomen ? "brightness(0.5)" : "brightness(1)",
            transition: "transform 1s cubic-bezier(.16,1,.3,1), filter 0.6s ease",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,6,4,0.97) 0%, rgba(8,6,4,0.65) 42%, rgba(8,6,4,0.18) 65%, transparent 100%)", zIndex: 2 }} />

        {/* Logo haut droite */}
        <div style={{ position: "absolute", top: 36, right: 48, zIndex: 10 }}>
          {/* Halo sombre centré sur le logo */}
          <div style={{ position: "absolute", inset: "-60px", background: "radial-gradient(circle at 50% 50%, rgba(8,6,4,0.38) 0%, rgba(8,6,4,0.15) 40%, rgba(8,6,4,0.04) 62%, transparent 70%)", pointerEvents: "none" }} />
          <Image
            src="/images/logos/logo-femme1.png"
            alt="Le Cercle — Espace Femme"
            width={220}
            height={110}
            style={{ objectFit: "contain", opacity: 0.95, position: "relative", zIndex: 1 }}
          />
        </div>

        {/* Contenu bas */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "52px 52px 56px", zIndex: 5, display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8px", fontWeight: 300, letterSpacing: "6px", textTransform: "uppercase", color: "#C4A35A", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 18, height: 1, background: "#C4A35A", opacity: 0.65, display: "inline-block", flexShrink: 0 }} />
            L&apos;espace femme
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2.75rem, 4.5vw, 4rem)", lineHeight: 0.88, letterSpacing: "-1.5px", color: "#F1F0EC" }}>
            Manucure · Ongles<br />
            <em style={{ fontStyle: "italic", color: "#C4A35A", display: "block" }}>&amp; Beauté</em>
          </h2>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
            {["Ongles & faux ongles gel", "Soins visage & corps", "Brushing & coupe", "Épilation & massages"].map((s) => (
              <li key={s} style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "17px", fontWeight: 300, color: "rgba(241,240,236,0.65)", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C4A35A", flexShrink: 0, opacity: 0.75, display: "inline-block" }} />
                {s}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={freshaUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#0D0D0D", background: "#C4A35A", padding: "14px 28px", textDecoration: "none", display: "inline-block", transition: "background .3s" }}>
              Réserver · Espace Femme
            </a>
            <Link href="/femme" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.4)", padding: "14px 24px", textDecoration: "none", display: "inline-block", transition: "all .3s" }}>
              Voir les soins →
            </Link>
          </div>
          <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "1.5px", color: "rgba(241,240,236,0.32)", fontStyle: "italic" }}>
            Sans carte bancaire · Annulation gratuite 24h avant
          </p>
        </div>
      </div>

    </section>
  );
}
