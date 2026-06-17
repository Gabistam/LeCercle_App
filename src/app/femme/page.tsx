import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxHeroImage from "@/components/ui/ParallaxHeroImage";

export const metadata: Metadata = {
  title: "Espace Femme — Beauty Studio & Nail Bar Premium",
  description:
    "Un espace pensé pour celles qui refusent de choisir entre efficacité et plaisir. Ongles, soins, brushing, massages dans un cadre travertin, bois clair et lumière douce.",
};

const FRESHA_URL = "https://www.fresha.com/book-now/news-smart-huroubs6/all-offer?id=2885690&share=true&pId=2790182";

const soinsSignature = [
  {
    title: "Manucure complète + Semi-permanent",
    prix: "58 €",
    duree: "45 min",
    featured: true,
  },
  {
    title: "Soin visage complet",
    prix: "55 €",
    duree: "50 min",
    featured: false,
  },
  {
    title: "Pose faux ongles gel avec vernis",
    prix: "78 €",
    duree: "1h10",
    featured: false,
  },
];

const categories = [
  {
    icon: "💅",
    titre: "Ongles & Mains",
    items: [
      { nom: "Vernis classique", prix: "dès 12 €" },
      { nom: "Semi-permanent", prix: "dès 22 €" },
      { nom: "Pose gel", prix: "78 €" },
    ],
  },
  {
    icon: "✦",
    titre: "Beauté des Pieds",
    items: [
      { nom: "Vernis classique", prix: "dès 15 €" },
      { nom: "Semi-permanent", prix: "dès 30 €" },
      { nom: "Pédicure complète", prix: "45 €" },
    ],
  },
  {
    icon: "◈",
    titre: "Soins Visage",
    items: [
      { nom: "Soin complet", prix: "55 €" },
      { nom: "Soin express", prix: "35 €" },
      { nom: "Microneedling", prix: "110 €" },
    ],
  },
  {
    icon: "🌿",
    titre: "Corps & Massages",
    items: [
      { nom: "Massage relaxant", prix: "40 €" },
      { nom: "Massage crânien", prix: "30 €" },
      { nom: "Gommage corps", prix: "45 €" },
    ],
  },
  {
    icon: "◎",
    titre: "Regard & Épilation",
    items: [
      { nom: "Sourcils", prix: "10 €" },
      { nom: "Cils", prix: "15 €" },
      { nom: "Épilation corps", prix: "dès 8 €" },
    ],
  },
  {
    icon: "✂",
    titre: "Brushing Bar",
    items: [
      { nom: "Brushing lisse", prix: "25 €" },
      { nom: "Brushing bouclé", prix: "30 €" },
      { nom: "Coupe + brushing", prix: "60 €" },
    ],
  },
];

const ambianceDetails = [
  { icon: "☕", label: "Coffee Bar", desc: "Thé ou eau infusée servis à chaque visite" },
  { icon: "◈", label: "Matières nobles", desc: "Travertin, bois fumé, finitions minérales" },
  { icon: "✦", label: "Sans RDV", desc: "À la volée ou sur rendez-vous Fresha" },
  { icon: "◯", label: "Intimité", desc: "Un espace confidentiel, feutré et apaisant" },
];

export default function FemmePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex flex-col justify-end min-h-screen px-6 pb-16 pt-32"
        style={{
          backgroundColor: "#0D0D0D",
          backgroundImage: "url('/images/women/women-hero-beauty-studio.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,6,4,0.97) 0%, rgba(8,6,4,0.72) 38%, rgba(8,6,4,0.25) 62%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(196,163,90,0.1) 0%, transparent 55%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6 max-w-2xl">
            {/* Logo */}
            <Image src="/images/logos/logo-femme1.png" alt="Le Cercle — Espace Femme" width={200} height={100} style={{ objectFit: "contain", opacity: 0.9 }} />

            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: "6px", textTransform: "uppercase", color: "#C4A35A", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 18, height: 1, backgroundColor: "#C4A35A", opacity: 0.65, display: "inline-block" }} />
              Espace Femme · Beauty Studio
            </p>

            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.88, letterSpacing: "-2px", color: "#F1F0EC" }}>
              Beauty Studio<br />
              <em style={{ fontStyle: "italic", color: "#C4A35A" }}>Premium.</em>
            </h1>

            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 16, fontWeight: 300, color: "rgba(241,240,236,0.55)", lineHeight: 1.7, maxWidth: 460 }}>
              Un espace pensé pour celles qui refusent de choisir entre efficacité et plaisir. Ongles, soins, brushing, massages — dans un cadre travertin, bois clair et lumière douce.
            </p>

            <div className="flex items-center gap-4 flex-wrap mt-2">
              <a href={FRESHA_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#0D0D0D", background: "#C4A35A", padding: "14px 28px", textDecoration: "none", display: "inline-block" }}>
                Réserver mon soin
              </a>
              <a href="#soins" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.4)", padding: "14px 24px", textDecoration: "none", display: "inline-block" }}>
                Découvrir les soins
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
                <div style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 2, textTransform: "uppercase", color: "rgba(241,240,236,0.35)", marginTop: 2 }}>+340 avis vérifiés · Fresha</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOINS SIGNATURE ── */}
      <section id="soins" className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#111111" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <div className="flex items-center gap-5 mb-12">
            <div style={{ height: 1, flex: 1, background: "linear-gradient(to right, #C4A35A, transparent)", opacity: 0.3 }} />
            <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6 }}>◆ NOS SOINS SIGNATURE</span>
            <div style={{ height: 1, flex: 1, background: "linear-gradient(to left, #C4A35A, transparent)", opacity: 0.3 }} />
          </div>

          <div className="flex flex-col gap-3 mb-10">
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1, letterSpacing: "-1px", color: "#F1F0EC" }}>
              Ce que nous faisons de mieux.
            </h2>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 15, fontWeight: 300, color: "rgba(241,240,236,0.5)", lineHeight: 1.7, maxWidth: 520 }}>
              Trois soins incontournables qui définissent l&apos;expérience Le Cercle Beauty Studio — pour commencer.
            </p>
            <a href="#tarifs" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "#C4A35A", textDecoration: "none", marginTop: 4 }}>
              Voir tous les soins →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(196,163,90,0.12)", border: "1px solid rgba(196,163,90,0.12)" }}>
            {soinsSignature.map((s) => (
              <div key={s.title} style={{ background: s.featured ? "linear-gradient(135deg, rgba(196,163,90,0.08) 0%, #111111 60%)" : "#111111", padding: "40px 32px", borderTop: s.featured ? "2px solid #C4A35A" : "none" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: 26, color: "#F1F0EC", lineHeight: 1.2, marginBottom: 24, letterSpacing: "-0.5px" }}>
                  {s.title}
                </h3>
                <div className="flex items-end justify-between pt-5" style={{ borderTop: "1px solid rgba(196,163,90,0.12)" }}>
                  <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 32, fontWeight: 300, color: "#C4A35A", lineHeight: 1 }}>{s.prix}</span>
                  <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, fontWeight: 300, letterSpacing: 2, color: "rgba(241,240,236,0.3)", textTransform: "uppercase" }}>{s.duree}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <a href={FRESHA_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#0D0D0D", background: "#C4A35A", padding: "14px 32px", textDecoration: "none", display: "inline-block" }}>
              Réserver mon soin →
            </a>
          </div>
        </div>
      </section>

      {/* ── TOUS LES SOINS ── */}
      <section id="tarifs" className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#0D0D0D" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <div className="flex items-center gap-5 mb-12">
            <div style={{ height: 1, flex: 1, background: "linear-gradient(to right, #C4A35A, transparent)", opacity: 0.3 }} />
            <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6 }}>◆ TOUS NOS SOINS</span>
            <div style={{ height: 1, flex: 1, background: "linear-gradient(to left, #C4A35A, transparent)", opacity: 0.3 }} />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1, letterSpacing: "-1px", color: "#F1F0EC" }}>
              Tout ce que vous méritez.
            </h2>
            <a href={FRESHA_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#0D0D0D", background: "#C4A35A", padding: "12px 24px", textDecoration: "none", display: "inline-block", flexShrink: 0 }}>
              Réserver mon soin →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div key={cat.titre} style={{ border: "1px solid rgba(196,163,90,0.12)", padding: "28px 24px" }}>
                <div className="flex items-center gap-3 mb-5">
                  <span style={{ fontSize: 16 }}>{cat.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#C4A35A" }}>
                    {cat.titre}
                  </h3>
                </div>
                <div className="flex flex-col gap-0" style={{ borderTop: "1px solid rgba(196,163,90,0.08)" }}>
                  {cat.items.map((item) => (
                    <div key={item.nom} className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid rgba(196,163,90,0.06)" }}>
                      <span style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 13, fontWeight: 300, color: "rgba(241,240,236,0.7)" }}>{item.nom}</span>
                      <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 18, fontWeight: 300, color: "#C4A35A", flexShrink: 0, marginLeft: 12 }}>{item.prix}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMBIANCE ── */}
      <section id="espace" className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#111111" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center" style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Image */}
          <div className="relative" style={{
            minHeight: 420,
            backgroundImage: "url('/images/women/women-nail-bar.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #111111 0%, transparent 30%)" }} />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
            <div className="absolute top-0 left-0 w-12 h-px" style={{ backgroundColor: "#C4A35A", opacity: 0.5 }} />
            <div className="absolute top-0 left-0 w-px h-12" style={{ backgroundColor: "#C4A35A", opacity: 0.5 }} />
            <div className="absolute bottom-0 right-0 w-12 h-px" style={{ backgroundColor: "#C4A35A", opacity: 0.3 }} />
            <div className="absolute bottom-0 right-0 w-px h-12" style={{ backgroundColor: "#C4A35A", opacity: 0.3 }} />
            <div className="absolute bottom-4 left-4" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, fontWeight: 300, letterSpacing: 3, textTransform: "uppercase", color: "rgba(196,163,90,0.6)" }}>
              Le Cercle · Beauty Studio · Casa Padel
            </div>
          </div>

          {/* Texte */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <div style={{ height: 1, width: 20, background: "#C4A35A", opacity: 0.6 }} />
              <span style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6 }}>Le cadre</span>
            </div>

            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1, letterSpacing: "-1px", color: "#F1F0EC" }}>
              Un moment entièrement pour vous.
            </h2>

            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 15, fontWeight: 300, color: "rgba(241,240,236,0.5)", lineHeight: 1.7 }}>
              Travertin, lin, bois clair. La lumière est douce, les voix feutrées. Un thé ou une eau infusée vous attend dès votre arrivée.
            </p>

            <blockquote style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: 20, color: "#C4A35A", lineHeight: 1.4, borderLeft: "2px solid #C4A35A", paddingLeft: 20 }}>
              &ldquo;Loin de l&apos;agitation — un moment qui vous appartient.&rdquo;
            </blockquote>

            <div className="flex flex-col gap-0" style={{ borderTop: "1px solid rgba(196,163,90,0.1)", marginTop: 8 }}>
              {ambianceDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-4 py-4" style={{ borderBottom: "1px solid rgba(196,163,90,0.08)" }}>
                  <span style={{ fontSize: 14, color: "#C4A35A", flexShrink: 0, marginTop: 1 }}>{d.icon}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 11, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#C4A35A", marginBottom: 3 }}>{d.label}</div>
                    <div style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 13, fontWeight: 300, color: "#666" }}>{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CROSS-SELLING ── */}
      <section className="px-6 py-16 md:px-16" style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid rgba(196,163,90,0.1)", borderBottom: "1px solid rgba(196,163,90,0.1)" }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="flex flex-col gap-3">
            <span style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6 }}>Espace Homme</span>
            <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.1, color: "#F1F0EC", letterSpacing: "-0.5px" }}>
              Et pour lui, le rituel barber.
            </h3>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 14, fontWeight: 300, color: "rgba(241,240,236,0.45)", maxWidth: 480 }}>
              Le Cercle Coiffeur-Barbier prend soin des hommes de votre entourage — coupe, barbe, grooming dans un cadre club privé.
            </p>
          </div>
          <Link href="/homme" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.35)", padding: "14px 28px", textDecoration: "none", display: "inline-block", flexShrink: 0 }}>
            Découvrir l&apos;Espace Homme →
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="px-6 py-24 md:px-16 md:py-36" style={{ backgroundColor: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div style={{ height: 1, width: 24, background: "#C4A35A", opacity: 0.5 }} />
            <span style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", opacity: 0.6 }}>Votre prochain rendez-vous</span>
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
            <a href={FRESHA_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#0D0D0D", background: "#C4A35A", padding: "16px 36px", textDecoration: "none", display: "inline-block" }}>
              Réserver mon soin →
            </a>
            <Link href="/salons" style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.35)", padding: "16px 28px", textDecoration: "none", display: "inline-block" }}>
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
