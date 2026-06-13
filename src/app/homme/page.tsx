import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Espace Homme — Coiffeur Barbier Premium",
  description:
    "L'endroit où un homme prend soin de lui sans s'expliquer. Coupe, barbe, soin visage dans un cadre noir, laiton et cuir au sein des centres Casa Padel.",
};

const FRESHA_URL = "https://www.fresha.com/book-now/news-smart-huroubs6/all-offer?id=2899050&share=true&pId=2790182";

const forfaits = [
  {
    tag: "Rituel Signature",
    title: "Signature Tondeuse",
    services: ["Coupe tondeuse", "Barbe"],
    prix: "35 €",
    duree: "≈ 40 min",
    featured: false,
  },
  {
    tag: "Rituel Signature",
    title: "Signature Tondeuse + Shampoing",
    services: ["Coupe tondeuse", "Barbe", "Shampoing"],
    prix: "38 €",
    duree: "≈ 45 min",
    featured: false,
  },
  {
    tag: "Rituel Signature",
    title: "Signature Ciseaux",
    services: ["Coupe ciseaux", "Barbe"],
    prix: "40 €",
    duree: "≈ 45 min",
    featured: false,
  },
  {
    tag: "Rituel Signature",
    title: "Signature Ciseaux + Shampoing",
    services: ["Coupe ciseaux", "Barbe", "Shampoing"],
    prix: "45 €",
    duree: "≈ 50 min",
    featured: false,
  },
  {
    tag: "Premium",
    title: "Premium Le Cercle",
    badge: "Le Plus Demandé",
    services: ["Coupe", "Barbe", "Serviette chaude", "Soin du visage"],
    prix: "49 €",
    duree: "≈ 1 heure",
    featured: true,
    note: "Notre rituel signature. Une expérience complète pensée pour l'homme qui souhaite prendre soin de lui sans compromis.",
  },
];

const tarifs = [
  {
    categorie: "Coupes",
    icon: "✂",
    items: [
      { nom: "Coupe Ciseaux", desc: "Raffinée et soignée", prix: "29 €" },
      { nom: "Coupe Ciseaux + Shampoing", desc: "", prix: "32 €" },
      { nom: "Coupe Tondeuse", desc: "Look net et précis", prix: "24 €" },
      { nom: "Coupe Tondeuse + Shampoing", desc: "", prix: "27 €" },
      { nom: "Rasage de Crâne", desc: "Finition lisse au rasoir", prix: "15 €" },
    ],
  },
  {
    categorie: "Enfants (−10 ans)",
    icon: "◎",
    items: [
      { nom: "Coupe Enfant Tondeuse", desc: "", prix: "15 €" },
      { nom: "Coupe Enfant Tondeuse + Shampoing", desc: "", prix: "18 €" },
      { nom: "Coupe Enfant Ciseaux", desc: "", prix: "20 €" },
      { nom: "Coupe Enfant Ciseaux + Shampoing", desc: "", prix: "23 €" },
    ],
  },
  {
    categorie: "Barbes & Soins",
    icon: "◈",
    items: [
      { nom: "Barbe Tondeuse", desc: "Contours nets et finition soignée", prix: "15 €" },
      { nom: "Barbe Signature", desc: "Serviette chaude · Finition lame", prix: "20 €" },
      { nom: "Soin du Visage", desc: "Nettoyage · Hydratation · Éclat", prix: "15 €" },
    ],
  },
];

const complementaires = [
  { label: "Contours seuls", prix: "10 €" },
  { label: "Shampoing", prix: "5 €" },
  { label: "Black Mask", prix: "10 €" },
  { label: "Épilation nez / oreilles", prix: "5 €" },
  { label: "Massage crânien", prix: "10 €" },
  { label: "Coloration barbe", prix: "15 €" },
  { label: "Tricopigmentation", prix: "Sur devis" },
];

const ambianceDetails = [
  { icon: "☕", label: "Coffee Bar", desc: "Expresso ou eau infusée servis à votre arrivée" },
  { icon: "◈", label: "Produits", desc: "Sélection grooming premium disponible" },
  { icon: "✦", label: "Sans RDV", desc: "À la volée ou sur rendez-vous Fresha" },
  { icon: "◯", label: "Intimité", desc: "Un espace confidentiel, loin de l'agitation" },
];

export default function HommePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex flex-col justify-end min-h-screen px-6 pb-16 pt-32 overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/images/men/men-hero-barber.webp" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,6,4,0.97) 0%, rgba(8,6,4,0.72) 38%, rgba(8,6,4,0.25) 62%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(196,163,90,0.1) 0%, transparent 55%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6 max-w-2xl">
            {/* Logo */}
            <Image src="/images/logos/logo-homme1.png" alt="Le Cercle — Espace Homme" width={200} height={100} style={{ objectFit: "contain", opacity: 0.9 }} />

            <p style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: "6px", textTransform: "uppercase", color: "#C4A35A", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 18, height: 1, backgroundColor: "#C4A35A", opacity: 0.65, display: "inline-block" }} />
              Espace Homme · Coiffeur-Barbier
            </p>

            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.88, letterSpacing: "-2px", color: "#F1F0EC" }}>
              Club Privé<br />
              <em style={{ fontStyle: "italic", color: "#C4A35A" }}>Urbain.</em>
            </h1>

            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 16, fontWeight: 300, color: "rgba(241,240,236,0.55)", lineHeight: 1.7, maxWidth: 460 }}>
              L&apos;endroit où un homme prend soin de lui sans s&apos;expliquer. Coupe, barbe, soin visage — dans un cadre noir, laiton et cuir. Précision à chaque geste.
            </p>

            <div className="flex items-center gap-4 flex-wrap mt-2">
              <a href={FRESHA_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#0D0D0D", background: "#C4A35A", padding: "14px 28px", textDecoration: "none", display: "inline-block" }}>
                Réserver mon rituel
              </a>
              <a href="#rituels" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.4)", padding: "14px 24px", textDecoration: "none", display: "inline-block" }}>
                Découvrir les rituels
              </a>
            </div>

            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 9, fontWeight: 300, letterSpacing: "1.5px", color: "rgba(241,240,236,0.3)", fontStyle: "italic" }}>
              Sans carte bancaire · Annulation gratuite 24h avant
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-2">
              <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 28, fontWeight: 300, color: "#C4A35A", lineHeight: 1 }}>4.9</span>
              <div>
                <div style={{ color: "#C4A35A", fontSize: 11, letterSpacing: 3 }}>★★★★★</div>
                <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 2, textTransform: "uppercase", color: "rgba(241,240,236,0.35)", marginTop: 2 }}>+340 avis vérifiés · Fresha</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORFAITS SIGNATURE ── */}
      <section id="rituels" className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#111111" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Séparateur titre */}
          <div className="flex items-center gap-5 mb-12">
            <div style={{ height: 1, flex: 1, background: "linear-gradient(to right, #C4A35A, transparent)", opacity: 0.3 }} />
            <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6 }}>◆ FORFAITS SIGNATURE</span>
            <div style={{ height: 1, flex: 1, background: "linear-gradient(to left, #C4A35A, transparent)", opacity: 0.3 }} />
          </div>

          <div className="flex flex-col gap-3 mb-10">
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1, letterSpacing: "-1px", color: "#F1F0EC" }}>
              Le meilleur de notre savoir-faire.
            </h2>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 15, fontWeight: 300, color: "rgba(241,240,236,0.5)", lineHeight: 1.7, maxWidth: 520 }}>
              Cinq formules pour l&apos;homme exigeant. Du rituel essentiel à l&apos;expérience complète — chaque forfait est pensé au geste près.
            </p>
            <a href="#tarifs" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "#C4A35A", textDecoration: "none", marginTop: 4 }}>
              Voir tous les tarifs →
            </a>
          </div>

          {/* 4 rituels signature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-px" style={{ background: "rgba(196,163,90,0.12)", border: "1px solid rgba(196,163,90,0.12)" }}>
            {forfaits.slice(0, 4).map((f) => (
              <div key={f.title} style={{ background: "#111111", padding: "32px 28px" }}>
                <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 4, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6, marginBottom: 10 }}>
                  {f.tag}
                </div>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: 24, color: "#F1F0EC", lineHeight: 1.15, marginBottom: 14, letterSpacing: "-0.5px" }}>
                  {f.title}
                </h3>
                <ul className="flex flex-col gap-1.5 mb-6">
                  {f.services.map((s) => (
                    <li key={s} className="flex items-center gap-3" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 13, fontWeight: 300, color: "rgba(241,240,236,0.6)" }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C4A35A", flexShrink: 0, opacity: 0.7, display: "inline-block" }} />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end justify-between pt-4" style={{ borderTop: "1px solid rgba(196,163,90,0.12)" }}>
                  <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 32, fontWeight: 300, color: "#C4A35A", lineHeight: 1 }}>{f.prix}</span>
                  <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, fontWeight: 300, letterSpacing: 2, color: "rgba(241,240,236,0.3)", textTransform: "uppercase" }}>{f.duree}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Le Cercle — pleine largeur */}
          {(() => {
            const f = forfaits[4];
            return (
              <div style={{ background: "linear-gradient(135deg, rgba(196,163,90,0.1) 0%, #111111 55%)", padding: "40px 36px", borderTop: "2px solid #C4A35A", border: "1px solid rgba(196,163,90,0.2)", position: "relative" }}>
                <div style={{ position: "absolute", top: 20, right: 24, fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 7, fontWeight: 300, letterSpacing: 2, textTransform: "uppercase", color: "#0D0D0D", backgroundColor: "#C4A35A", padding: "4px 10px" }}>
                  {f.badge}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 4, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6, marginBottom: 10 }}>
                      {f.tag}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: 32, color: "#F1F0EC", lineHeight: 1.05, marginBottom: 16, letterSpacing: "-1px" }}>
                      {f.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {f.services.map((s) => (
                        <li key={s} className="flex items-center gap-3" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 14, fontWeight: 300, color: "rgba(241,240,236,0.65)" }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C4A35A", flexShrink: 0, opacity: 0.7, display: "inline-block" }} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-end gap-4">
                      <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 56, fontWeight: 300, color: "#C4A35A", lineHeight: 1 }}>{f.prix}</span>
                      <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, fontWeight: 300, letterSpacing: 2, color: "rgba(241,240,236,0.3)", textTransform: "uppercase", marginBottom: 8 }}>{f.duree}</span>
                    </div>
                    {f.note && (
                      <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: 15, color: "rgba(241,240,236,0.45)", lineHeight: 1.6, borderLeft: "2px solid rgba(196,163,90,0.3)", paddingLeft: 14 }}>
                        {f.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}

          <div className="flex justify-center mt-8">
            <a href={FRESHA_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#0D0D0D", background: "#C4A35A", padding: "14px 32px", textDecoration: "none", display: "inline-block" }}>
              Réserver mon rituel →
            </a>
          </div>
        </div>
      </section>

      {/* ── TARIFS À LA CARTE ── */}
      <section id="tarifs" className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#0D0D0D" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <div className="flex items-center gap-5 mb-12">
            <div style={{ height: 1, flex: 1, background: "linear-gradient(to right, #C4A35A, transparent)", opacity: 0.3 }} />
            <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6 }}>◆ À LA CARTE</span>
            <div style={{ height: 1, flex: 1, background: "linear-gradient(to left, #C4A35A, transparent)", opacity: 0.3 }} />
          </div>

          <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1, letterSpacing: "-1px", color: "#F1F0EC", marginBottom: 40 }}>
            Chaque geste. Son prix juste.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tarifs.map((cat) => (
              <div key={cat.categorie} style={{ border: "1px solid rgba(196,163,90,0.12)", padding: "32px 28px" }}>
                <div className="flex items-center gap-3 mb-5">
                  <span style={{ fontSize: 16, color: "#C4A35A" }}>{cat.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#C4A35A" }}>
                    {cat.categorie}
                  </h3>
                </div>
                <div className="flex flex-col" style={{ borderTop: "1px solid rgba(196,163,90,0.1)" }}>
                  {cat.items.map((item) => (
                    <div key={item.nom} className="flex items-start justify-between py-3" style={{ borderBottom: "1px solid rgba(196,163,90,0.08)" }}>
                      <div className="flex flex-col gap-0.5">
                        <span style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 13, fontWeight: 400, color: "#F1F0EC" }}>{item.nom}</span>
                        {item.desc && <span style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 11, fontWeight: 300, color: "#555", fontStyle: "italic" }}>{item.desc}</span>}
                      </div>
                      <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 20, fontWeight: 300, color: "#C4A35A", flexShrink: 0, marginLeft: 12 }}>{item.prix}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── SERVICES COMPLÉMENTAIRES ── */}
          <div className="mt-12">
            <div className="flex items-center gap-5 mb-8">
              <div style={{ height: 1, flex: 1, background: "linear-gradient(to right, #C4A35A, transparent)", opacity: 0.3 }} />
              <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6 }}>◆ SERVICES COMPLÉMENTAIRES</span>
              <div style={{ height: 1, flex: 1, background: "linear-gradient(to left, #C4A35A, transparent)", opacity: 0.3 }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px" style={{ background: "rgba(196,163,90,0.1)", border: "1px solid rgba(196,163,90,0.1)" }}>
              {complementaires.map((c) => (
                <div key={c.label} className="flex flex-col items-center gap-3 py-6 px-4 text-center" style={{ background: "#0D0D0D" }}>
                  <span style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 12, fontWeight: 300, color: "rgba(241,240,236,0.6)", lineHeight: 1.4 }}>{c.label}</span>
                  <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 20, fontWeight: 300, color: "#C4A35A" }}>{c.prix}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AMBIANCE ── */}
      <section id="salon" className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#111111" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center" style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Texte */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <div style={{ height: 1, width: 20, background: "#C4A35A", opacity: 0.6 }} />
              <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6 }}>Le cadre</span>
            </div>

            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1, letterSpacing: "-1px", color: "#F1F0EC" }}>
              Un endroit qui ne s&apos;excuse pas.
            </h2>

            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 15, fontWeight: 300, color: "rgba(241,240,236,0.5)", lineHeight: 1.7 }}>
              Cuir noir, métal brossé, éclairage spot. Un expresso vous attend à votre arrivée. L&apos;écran diffuse en fond, les voix sont basses.
            </p>

            <blockquote style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: 20, color: "#C4A35A", lineHeight: 1.4, borderLeft: "2px solid #C4A35A", paddingLeft: 20 }}>
              &ldquo;Ici, une heure suffit pour repartir différemment.&rdquo;
            </blockquote>

            <div className="flex flex-col gap-0" style={{ borderTop: "1px solid rgba(196,163,90,0.1)", marginTop: 8 }}>
              {ambianceDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-4 py-4" style={{ borderBottom: "1px solid rgba(196,163,90,0.08)" }}>
                  <span style={{ fontSize: 14, color: "#C4A35A", flexShrink: 0, marginTop: 1 }}>{d.icon}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 11, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#C4A35A", marginBottom: 3 }}>{d.label}</div>
                    <div style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 13, fontWeight: 300, color: "#666" }}>{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: 420 }}>
            <Image src="/images/men/men-barber-chair.webp" alt="Le Cercle — Espace Homme" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" style={{ filter: "brightness(0.85)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #111111 0%, transparent 30%)" }} />
            <div className="absolute top-0 left-0 w-12 h-px" style={{ backgroundColor: "#C4A35A", opacity: 0.5 }} />
            <div className="absolute top-0 left-0 w-px h-12" style={{ backgroundColor: "#C4A35A", opacity: 0.5 }} />
            <div className="absolute bottom-0 right-0 w-12 h-px" style={{ backgroundColor: "#C4A35A", opacity: 0.3 }} />
            <div className="absolute bottom-0 right-0 w-px h-12" style={{ backgroundColor: "#C4A35A", opacity: 0.3 }} />
            <div className="absolute bottom-4 left-4" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, fontWeight: 300, letterSpacing: 3, textTransform: "uppercase", color: "rgba(196,163,90,0.6)" }}>
              Le Cercle · Coiffeur-Barbier · Casa Padel
            </div>
          </div>
        </div>
      </section>

      {/* ── CROSS-SELLING ── */}
      <section className="px-6 py-16 md:px-16" style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid rgba(196,163,90,0.1)", borderBottom: "1px solid rgba(196,163,90,0.1)" }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="flex flex-col gap-3">
            <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6 }}>Espace Femme</span>
            <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.1, color: "#F1F0EC", letterSpacing: "-0.5px" }}>
              Elle aussi mérite son rituel.
            </h3>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 14, fontWeight: 300, color: "rgba(241,240,236,0.45)", maxWidth: 480 }}>
              Le Cercle Beauty Studio accueille votre partenaire — ongles, soins visage, brushing, massages dans un cadre travertin et lumière douce.
            </p>
          </div>
          <Link href="/femme" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.35)", padding: "14px 28px", textDecoration: "none", display: "inline-block", flexShrink: 0 }}>
            Découvrir l&apos;Espace Femme →
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="px-6 py-24 md:px-16 md:py-36" style={{ backgroundColor: "#111111", textAlign: "center" }}>
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
          <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: 18, color: "rgba(241,240,236,0.4)", lineHeight: 1.6, marginBottom: 40 }}>
            Sur rendez-vous ou à la volée — dans nos trois adresses de Région Parisienne.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
            <a href={FRESHA_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#0D0D0D", background: "#C4A35A", padding: "16px 36px", textDecoration: "none", display: "inline-block" }}>
              Réserver mon rituel →
            </a>
            <Link href="/salons" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.35)", padding: "16px 28px", textDecoration: "none", display: "inline-block" }}>
              Nos adresses
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
