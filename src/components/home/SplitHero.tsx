import Link from "next/link";
import Image from "next/image";
import SplitHeroDesktopLoader from "./SplitHeroDesktopLoader";

const FRESHA_URL = "https://www.fresha.com/book-now/news-smart-huroubs6/all-offer?id=2885690&share=true&pId=2790182";

export default function SplitHero() {
  return (
    <>
      {/* ── MOBILE : deux panneaux empilés, pur SSR ── */}
      <section className="flex flex-col md:hidden" style={{ minHeight: "100svh" }}>

        {/* Panneau Homme */}
        <Link href="/homme" className="relative overflow-hidden flex flex-col" style={{ flex: "1", minHeight: "50svh", textDecoration: "none" }}>
          <Image
            src="/images/men/men-barber-chair.webp"
            alt="Le Cercle — Espace Homme"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            fetchPriority="high"
            placeholder="empty"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.55) 45%, rgba(13,13,13,0.1) 100%)" }} />

          {/* Logo haut droite */}
          <div className="relative z-10 flex justify-end p-5">
            <Image
              src="/images/logos/LogosSimples/logoSimpleHomme-LeCercle1.png"
              alt="Le Cercle Homme"
              width={80}
              height={40}
              style={{ objectFit: "contain", filter: "invert(1)", opacity: 0.85, transform: "translateY(10%)" }}
            />
          </div>

          {/* Contenu bas */}
          <div className="relative z-10 mt-auto p-7 flex flex-col gap-4">
            <p className="flex items-center gap-3 uppercase" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8px", fontWeight: 300, letterSpacing: "6px", color: "#C4A35A" }}>
              <span style={{ width: 18, height: 1, backgroundColor: "#C4A35A", opacity: 0.65, display: "inline-block", flexShrink: 0 }} />
              L&apos;espace homme
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2.5rem, 9vw, 3.5rem)", lineHeight: 0.88, letterSpacing: "-1.5px", color: "#F1F0EC" }}>
              Coupe · Barbe<br />
              <em style={{ fontStyle: "italic", color: "#C4A35A" }}>&amp; Soins</em>
            </h2>
            <div className="flex items-center gap-3 flex-wrap mt-1">
              <a href={FRESHA_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#111", backgroundColor: "#C4A35A", padding: "12px 22px", textDecoration: "none", display: "inline-block" }}>
                Réserver maintenant
              </a>
              <Link href="/homme" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.4)", padding: "12px 18px", textDecoration: "none", display: "inline-block" }}>
                Découvrir →
              </Link>
            </div>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "1.5px", color: "rgba(241,240,236,0.32)", fontStyle: "italic" }}>
              À partir de 35 € · 45 min de sérénité
            </p>
          </div>
        </Link>

        {/* Séparateur or */}
        <div style={{ height: 2, background: "linear-gradient(to right, transparent, #C4A35A 20%, #C4A35A 80%, transparent)", opacity: 0.7 }} />

        {/* Panneau Femme */}
        <Link href="/femme" className="relative overflow-hidden flex flex-col" style={{ flex: "1", minHeight: "50svh", textDecoration: "none" }}>
          <Image
            src="/images/women/women-nail-bar.avif"
            alt="Le Cercle — Espace Femme"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.55) 45%, rgba(13,13,13,0.1) 100%)" }} />

          {/* Contenu bas */}
          <div className="relative z-10 mt-auto p-7 flex flex-col gap-4">
            <p className="flex items-center gap-3 uppercase" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8px", fontWeight: 300, letterSpacing: "6px", color: "#C4A35A" }}>
              <span style={{ width: 18, height: 1, backgroundColor: "#C4A35A", opacity: 0.65, display: "inline-block", flexShrink: 0 }} />
              L&apos;espace femme
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2.5rem, 9vw, 3.5rem)", lineHeight: 0.88, letterSpacing: "-1.5px", color: "#F1F0EC" }}>
              Manucure · Ongles<br />
              <em style={{ fontStyle: "italic", color: "#C4A35A" }}>&amp; Beauté</em>
            </h2>
            <div className="flex items-center gap-3 flex-wrap mt-1">
              <a href={FRESHA_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#111", backgroundColor: "#C4A35A", padding: "12px 22px", textDecoration: "none", display: "inline-block" }}>
                Réserver maintenant
              </a>
              <Link href="/femme" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.4)", padding: "12px 18px", textDecoration: "none", display: "inline-block" }}>
                Découvrir →
              </Link>
            </div>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "1.5px", color: "rgba(241,240,236,0.32)", fontStyle: "italic" }}>
              À partir de 40 € · 50 min d&apos;évasion
            </p>
          </div>
        </Link>

      </section>

      {/* ── DESKTOP : chargé dynamiquement ── */}
      <div className="hidden md:block">
        <SplitHeroDesktopLoader freshaUrl={FRESHA_URL} />
      </div>
    </>
  );
}
