import Image from "next/image";

export default function StorySection() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#111111" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Texte */}
        <div>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(241,240,236,0.62)", marginBottom: 24, fontFamily: "var(--font-jost, sans-serif)", fontWeight: 300 }}>
            <strong style={{ color: "#F1F0EC", fontWeight: 400 }}>Le Cercle n&apos;est pas un salon.</strong> C&apos;est une conviction mise en forme. Celle qu&apos;un moment de soin mérite un cadre à sa hauteur — un endroit où chaque détail sert l&apos;expérience. Où le silence n&apos;isole pas mais apaise. Où l&apos;on vient pour soi, pas pour être vu.
          </p>
          <blockquote style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: 22, color: "#C4A35A", lineHeight: 1.4, borderLeft: "2px solid #C4A35A", paddingLeft: 28, margin: "36px 0" }}>
            &ldquo;Le soin commence avant même le premier geste. Il commence quand on ouvre la porte.&rdquo;
          </blockquote>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(241,240,236,0.62)", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 300 }}>
            Fondé en partenariat avec <em style={{ color: "#C4A35A", fontStyle: "italic" }}>Casa Padel</em>, trois lieux en Région Parisienne où la beauté du quotidien prend corps. Où <strong style={{ color: "#F1F0EC", fontWeight: 400 }}>les rituels prennent du sens</strong>. Où chaque visite devient un moment de reconnexion.
          </p>
        </div>

        {/* Image */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
            <Image
              src="/images/men/men-barber-chair.webp"
              alt="Détail de l'espace Homme"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ filter: "grayscale(0.2) brightness(0.85)" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 28px 24px", background: "linear-gradient(to top, rgba(13,13,13,0.9), transparent)", fontSize: 10, fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(196,163,90,0.7)", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
              Espace Homme · Détail intérieur
            </div>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 60, display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ height: 1, flex: 1, background: "linear-gradient(to right, #C4A35A, transparent)", opacity: 0.3 }} />
        <div style={{ fontSize: 9, color: "#C4A35A", opacity: 0.6, letterSpacing: 4, fontFamily: "var(--font-barlow-cond, sans-serif)" }}>✦</div>
        <div style={{ height: 1, flex: 1, background: "linear-gradient(to left, #C4A35A, transparent)", opacity: 0.3 }} />
      </div>
    </section>
  );
}
