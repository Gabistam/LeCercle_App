import Link from "next/link";

const FRESHA_URL = "https://www.fresha.com/book-now/news-smart-huroubs6/all-offer?id=2885690&share=true&pId=2790182";

export default function CtaFinal() {
  return (
    <section className="px-6 py-24 md:px-16 md:py-36" style={{ backgroundColor: "#111111", textAlign: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>

        {/* Eyebrow */}
        <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
          <span style={{ width: 24, height: 1, background: "#C4A35A", opacity: 0.5, display: "inline-block" }} />
          Votre prochain rituel
          <span style={{ width: 24, height: 1, background: "#C4A35A", opacity: 0.5, display: "inline-block" }} />
        </div>

        <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 52, fontWeight: 300, lineHeight: 0.9, letterSpacing: "-1.5px", marginBottom: 24, color: "#F1F0EC" }}>
          Réservez.<br />
          <em style={{ fontStyle: "italic", color: "#C4A35A" }}>C&apos;est tout.</em>
        </h2>

        <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: 19, color: "rgba(241,240,236,0.45)", lineHeight: 1.6, marginBottom: 48 }}>
          Espace Homme ou Espace Femme — sur rendez-vous ou à la volée. Le Cercle vous attend dans nos trois adresses de Région Parisienne.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
          <a
            href={FRESHA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, fontWeight: 300, letterSpacing: "4.5px", textTransform: "uppercase", color: "#111111", background: "#C4A35A", padding: "16px 36px", textDecoration: "none", display: "inline-block", transition: "background .3s" }}
          >
            Réserver · Espace Homme
          </a>
          <a
            href={FRESHA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 9, fontWeight: 300, letterSpacing: "4.5px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.35)", padding: "16px 36px", textDecoration: "none", display: "inline-block", transition: "all .3s" }}
          >
            Réserver · Espace Femme
          </a>
        </div>

        <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 9, fontWeight: 300, letterSpacing: 2, color: "#666", fontStyle: "italic" }}>
          Sans carte bancaire · Annulation gratuite 24h avant
        </p>

      </div>
    </section>
  );
}
