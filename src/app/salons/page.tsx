import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos Salons — Le Cercle | Région Parisienne",
  description:
    "Le Cercle — Trois adresses premium en Région Parisienne. Espace Homme & Beauty Studio intégrés aux centres Casa Padel. Saint-Denis, Asnières, Croissy-Beaubourg.",
};

const FRESHA_URL =
  "https://www.fresha.com/book-now/news-smart-huroubs6/all-offer?id=2899050&share=true&pId=2790182";

const salons = [
  {
    num: "01",
    tag: "Saint-Denis · 93200",
    name: "Saint",
    nameEm: "Denis.",
    address: "103 Rue Charles Michels",
    postalCode: "93200",
    city: "Saint-Denis",
    image: "/images/salons/salon-saint-denis-card.avif",
    mapsUrl: "https://maps.google.com/?q=103+Rue+Charles+Michels+93200+Saint-Denis",
    services: ["Barber", "Grooming", "Nail Bar", "Soins Visage", "Brushing", "Massages"],
  },
  {
    num: "02",
    tag: "Asnières-sur-Seine · 92600",
    name: "Asnières",
    nameEm: "sur Seine.",
    address: "19 Rue du Jardin Modèle",
    postalCode: "92600",
    city: "Asnières-sur-Seine",
    image: "/images/women/women-salon-card.avif",
    mapsUrl: "https://maps.google.com/?q=19+Rue+du+Jardin+Modèle+92600+Asnières-sur-Seine",
    services: ["Barber", "Grooming", "Nail Bar", "Soins Visage", "Brushing", "Massages"],
  },
  {
    num: "03",
    tag: "Croissy-Beaubourg · 77183",
    name: "Croissy",
    nameEm: "Beaubourg.",
    address: "17 Boulevard de Beaubourg",
    postalCode: "77183",
    city: "Croissy-Beaubourg",
    image: "/images/men/men-barber-chair.webp",
    mapsUrl: "https://maps.google.com/?q=17+boulevard+de+Beaubourg+Croissy-Beaubourg",
    services: ["Barber", "Grooming", "Nail Bar", "Soins Visage", "Brushing", "Massages"],
  },
];

const bandItems = [
  "Saint-Denis · 93",
  "◆",
  "Asnières-sur-Seine · 92",
  "◆",
  "Croissy-Beaubourg · 77",
  "◆",
  "Avec ou sans rendez-vous",
  "◆",
  "Espace Homme & Beauty Studio",
  "◆",
  "Saint-Denis · 93",
  "◆",
  "Asnières-sur-Seine · 92",
  "◆",
  "Croissy-Beaubourg · 77",
  "◆",
  "Avec ou sans rendez-vous",
  "◆",
  "Espace Homme & Beauty Studio",
  "◆",
];

export default function SalonsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex flex-col justify-end min-h-screen px-6 pb-16 pt-32 overflow-hidden md:px-16 md:pb-24"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/salons/salon-saint-denis-card.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: "brightness(0.45) contrast(1.08)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(13,13,13,0.55) 0%, transparent 55%, rgba(13,13,13,0.3) 100%), linear-gradient(to top, rgba(13,13,13,0.98) 0%, rgba(13,13,13,0.55) 40%, transparent 68%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            {/* Gauche */}
            <div className="flex flex-col gap-5">
              <p
                style={{
                  fontFamily: "var(--font-barlow-cond, sans-serif)",
                  fontSize: 8,
                  fontWeight: 300,
                  letterSpacing: "6px",
                  textTransform: "uppercase",
                  color: "#C4A35A",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 1,
                    background: "#C4A35A",
                    opacity: 0.6,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                Région Parisienne · Casa Padel
              </p>

              <h1
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontWeight: 300,
                  fontSize: "clamp(3.5rem, 7vw, 5.75rem)",
                  lineHeight: 0.86,
                  letterSpacing: "-2.5px",
                  color: "#F1F0EC",
                }}
              >
                Trois
                <br />
                adresses.
                <br />
                <em style={{ fontStyle: "italic", color: "#C4A35A", display: "block" }}>
                  Un cercle.
                </em>
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontStyle: "italic",
                  fontSize: 19,
                  color: "rgba(241,240,236,0.5)",
                  lineHeight: 1.65,
                  maxWidth: 440,
                }}
              >
                Espaces Homme & Beauty Studio intégrés aux centres Casa Padel — avec ou sans rendez-vous, pour tous.
              </p>

              <div className="flex flex-wrap gap-3 mt-2">
                {["Saint-Denis · 93", "Asnières · 92", "Croissy-Beaubourg · 77"].map((b) => (
                  <span
                    key={b}
                    style={{
                      fontFamily: "var(--font-barlow-cond, sans-serif)",
                      fontSize: "7.5px",
                      fontWeight: 300,
                      letterSpacing: "3.5px",
                      textTransform: "uppercase",
                      color: "rgba(196,163,90,0.7)",
                      border: "1px solid rgba(196,163,90,0.25)",
                      padding: "6px 14px",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Droite — stat desktop */}
            <div className="hidden md:flex justify-end">
              <div
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 4,
                  padding: "24px 28px",
                  background: "rgba(17,17,17,0.75)",
                  border: "1px solid rgba(196,163,90,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: 56,
                    fontWeight: 300,
                    color: "#C4A35A",
                    lineHeight: 1,
                  }}
                >
                  3
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-barlow-cond, sans-serif)",
                    fontSize: "8.5px",
                    fontWeight: 300,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#666",
                  }}
                >
                  Adresses premium
                </span>
                <div
                  style={{
                    marginTop: 16,
                    paddingTop: 16,
                    borderTop: "1px solid rgba(196,163,90,0.1)",
                    fontFamily: "var(--font-barlow-cond, sans-serif)",
                    fontSize: 9,
                    fontWeight: 300,
                    letterSpacing: "2px",
                    color: "rgba(196,163,90,0.55)",
                  }}
                >
                  Homme & Femme
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE BAND ── */}
      <div
        style={{
          backgroundColor: "#0D0D0D",
          borderTop: "1px solid rgba(196,163,90,0.1)",
          borderBottom: "1px solid rgba(196,163,90,0.1)",
          padding: "28px 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "marquee 22s linear infinite",
          }}
        >
          {bandItems.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontStyle: "italic",
                fontSize: 22,
                color: "rgba(196,163,90,0.35)",
                padding: "0 36px",
                flexShrink: 0,
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}`}</style>
      </div>

      {/* ── SALONS ── */}
      <section className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#111111" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Séparateur */}
          <div className="flex items-center gap-5 mb-16">
            <div style={{ height: 1, flex: 1, background: "linear-gradient(to right, rgba(196,163,90,0.28), transparent)" }} />
            <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6, flexShrink: 0 }}>
              ◆ &nbsp; NOS ADRESSES
            </span>
            <div style={{ height: 1, flex: 1, background: "linear-gradient(to left, rgba(196,163,90,0.28), transparent)" }} />
          </div>

          {/* Intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-end">
            <div className="flex flex-col gap-4">
              <p style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 16, height: 1, background: "#C4A35A", opacity: 0.5, display: "inline-block" }} />
                Trois salons
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", lineHeight: 0.92, letterSpacing: "-1.5px", color: "#F1F0EC" }}>
                Trouvez votre<br />
                <em style={{ fontStyle: "italic", color: "#C4A35A" }}>Le Cercle.</em>
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 16, fontWeight: 300, color: "rgba(241,240,236,0.52)", lineHeight: 1.8, maxWidth: 560 }}>
              Chaque adresse accueille un Espace Homme et un Beauty Studio. Membres Casa Padel ou clientèle extérieure — bienvenue.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col" style={{ gap: 2 }}>
            {salons.map((salon, i) => {
              const isEven = i % 2 === 1;
              return (
                <div
                  key={salon.num}
                  style={{
                    background: "#0D0D0D",
                    border: "1px solid rgba(196,163,90,0.1)",
                    overflow: "hidden",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 460 }}>
                    {/* Photo — alternance gauche/droite via order */}
                    <div
                      className="relative overflow-hidden"
                      style={{ minHeight: 260, order: isEven ? 2 : 1 }}
                    >
                      <Image
                        src={salon.image}
                        alt={`Le Cercle ${salon.city}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        style={{ filter: "brightness(0.82)" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 24,
                          left: 28,
                          fontFamily: "var(--font-cormorant, Georgia, serif)",
                          fontSize: 13,
                          fontWeight: 300,
                          letterSpacing: "3px",
                          color: "rgba(196,163,90,0.7)",
                          background: "rgba(13,13,13,0.6)",
                          padding: "5px 12px",
                          border: "1px solid rgba(196,163,90,0.2)",
                        }}
                      >
                        {salon.num} · Casa Padel
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="flex flex-col justify-between gap-6 p-8 md:p-14"
                      style={{
                        borderLeft: !isEven ? "1px solid rgba(196,163,90,0.1)" : "none",
                        borderRight: isEven ? "1px solid rgba(196,163,90,0.1)" : "none",
                        order: isEven ? 1 : 2,
                      }}
                    >
                      <div className="flex flex-col gap-4">
                        <p style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "7.5px", fontWeight: 300, letterSpacing: "5px", textTransform: "uppercase", color: "#C4A35A", display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 16, height: 1, background: "#C4A35A", opacity: 0.5, display: "inline-block" }} />
                          {salon.tag}
                        </p>

                        <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 48, fontWeight: 300, lineHeight: 0.9, letterSpacing: "-1.5px", color: "#F1F0EC" }}>
                          {salon.name}
                          <br />
                          <em style={{ fontStyle: "italic", color: "#C4A35A", display: "block" }}>{salon.nameEm}</em>
                        </h3>

                        <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 12, fontWeight: 300, letterSpacing: "1px", color: "#666", lineHeight: 1.6 }}>
                          {salon.address}<br />{salon.postalCode} {salon.city}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {salon.services.map((s) => (
                            <span key={s} style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "7.5px", fontWeight: 300, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(241,240,236,0.55)", border: "1px solid rgba(255,255,255,0.08)", padding: "5px 12px" }}>
                              {s}
                            </span>
                          ))}
                        </div>

                        {/* Logos espaces */}
                        <div className="flex items-center gap-4" style={{ padding: "16px 20px", background: "rgba(196,163,90,0.04)", border: "1px solid rgba(196,163,90,0.1)" }}>
                          <div className="flex flex-col items-center gap-2">
                            <Image src="/images/logos/LogosSimples/logoSimpleHomme-LeCercle1.png" alt="Espace Homme" width={52} height={52} style={{ objectFit: "contain", filter: "invert(1)", opacity: 0.7 }} />
                            <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 7, fontWeight: 300, letterSpacing: "2.5px", textTransform: "uppercase", color: "#666" }}>Espace Homme</span>
                          </div>
                          <div style={{ width: 1, height: 44, background: "rgba(196,163,90,0.15)", alignSelf: "center" }} />
                          <div className="flex flex-col items-center gap-2">
                            <Image src="/images/logos/LogosSimples/logoSimpleFemme-LeCercle.webp" alt="Beauty Studio" width={52} height={52} style={{ objectFit: "contain", opacity: 0.85 }} />
                            <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 7, fontWeight: 300, letterSpacing: "2.5px", textTransform: "uppercase", color: "#666" }}>Beauty Studio</span>
                          </div>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={FRESHA_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#0D0D0D", background: "#C4A35A", padding: "13px 26px", textDecoration: "none", display: "inline-block", whiteSpace: "nowrap" }}
                        >
                          Réserver →
                        </a>
                        <Link
                          href="/homme"
                          style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.35)", padding: "13px 20px", textDecoration: "none", display: "inline-block", whiteSpace: "nowrap" }}
                        >
                          Espace Homme
                        </Link>
                        <Link
                          href="/femme"
                          style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.35)", padding: "13px 20px", textDecoration: "none", display: "inline-block", whiteSpace: "nowrap" }}
                        >
                          Beauty Studio
                        </Link>
                        <a
                          href={salon.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "#666", padding: "13px 18px", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none", display: "inline-block", whiteSpace: "nowrap" }}
                        >
                          Itinéraire ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="px-6 py-24 md:px-16 md:py-36" style={{ backgroundColor: "#0D0D0D", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div style={{ height: 1, width: 24, background: "#C4A35A", opacity: 0.5 }} />
            <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6 }}>Votre prochain rendez-vous</span>
            <div style={{ height: 1, width: 24, background: "#C4A35A", opacity: 0.5 }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 0.9, letterSpacing: "-1.5px", color: "#F1F0EC", marginBottom: 20 }}>
            Réservez.<br />
            <em style={{ fontStyle: "italic", color: "#C4A35A" }}>C&apos;est tout.</em>
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: 18, color: "rgba(241,240,236,0.42)", lineHeight: 1.65, marginBottom: 44 }}>
            Sur rendez-vous ou à la volée — dans nos trois adresses de Région Parisienne.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
            <a
              href={FRESHA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#0D0D0D", background: "#C4A35A", padding: "16px 36px", textDecoration: "none", display: "inline-block" }}
            >
              Réserver mon rituel →
            </a>
            <Link
              href="/homme"
              style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.35)", padding: "16px 28px", textDecoration: "none", display: "inline-block" }}
            >
              Pour Lui
            </Link>
            <Link
              href="/femme"
              style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.35)", padding: "16px 28px", textDecoration: "none", display: "inline-block" }}
            >
              Pour Elle
            </Link>
          </div>
          <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 9, fontWeight: 300, letterSpacing: 2, color: "#666", fontStyle: "italic" }}>
            Sans carte bancaire · Annulation gratuite 24h avant
          </p>
        </div>
      </section>
    </>
  );
}
