import Link from "next/link";
import Image from "next/image";

export default function ConceptPanneaux() {
  return (
    <section id="concept" className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#111111", position: "relative" }}>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ maxWidth: 1100, margin: "0 auto", gap: 2, position: "relative" }}>

        {/* Ligne or verticale centrale — desktop uniquement */}
        <div className="hidden md:block" style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "#C4A35A", zIndex: 5, transform: "translateX(-50%)" }} />

        {/* Panel Homme */}
        <div className="group" style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", cursor: "pointer" }}>
          <Image
            src="/images/men/men-hero-barber.webp"
            alt="Concept Espace Homme"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-[0.7]"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.88) 0%, transparent 55%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 36 }}>
            <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "7.5px", fontWeight: 300, letterSpacing: 4, textTransform: "uppercase", color: "#C4A35A", marginBottom: 10 }}>
              Design &amp; Confort
            </div>
            <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 36, fontWeight: 300, color: "#F1F0EC", lineHeight: 1.1, marginBottom: 8 }}>
              L&apos;Espace<br />Homme
            </h3>
            <p className="opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 12, fontWeight: 300, color: "#AAAAAA", letterSpacing: 0.5, transform: "translateY(8px)" }}>
              Minimaliste et puissant
            </p>
          </div>
          <Link href="/homme" className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "7.5px", fontWeight: 300, letterSpacing: 3, textTransform: "uppercase", color: "#C4A35A", textDecoration: "none" }}>
            Voir →
          </Link>
        </div>

        {/* Panel Femme */}
        <div className="group" style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", cursor: "pointer" }}>
          <Image
            src="/images/women/women-hero-beauty-studio.webp"
            alt="Concept Espace Femme"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-[0.7]"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.88) 0%, transparent 55%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 36 }}>
            <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "7.5px", fontWeight: 300, letterSpacing: 4, textTransform: "uppercase", color: "#C4A35A", marginBottom: 10 }}>
              Sérénité &amp; Élégance
            </div>
            <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 36, fontWeight: 300, color: "#F1F0EC", lineHeight: 1.1, marginBottom: 8 }}>
              L&apos;Espace<br />Femme
            </h3>
            <p className="opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 12, fontWeight: 300, color: "#AAAAAA", letterSpacing: 0.5 }}>
              Intimiste et rassurant
            </p>
          </div>
          <Link href="/femme" className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "7.5px", fontWeight: 300, letterSpacing: 3, textTransform: "uppercase", color: "#C4A35A", textDecoration: "none" }}>
            Voir →
          </Link>
        </div>

      </div>
    </section>
  );
}
