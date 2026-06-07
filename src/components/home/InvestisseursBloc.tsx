import Link from "next/link";

export default function InvestisseursBloc() {
  return (
    <section
      className="py-20 px-6 border-t"
      style={{
        backgroundColor: "#0C0C0C",
        borderColor: "rgba(201,168,76,0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Overline */}
        <p
          style={{
            fontFamily: "var(--font-barlow-cond, sans-serif)",
            fontSize: "0.65rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#C9A84C",
            opacity: 0.5,
          }}
        >
          Investisseurs & Partenaires
        </p>

        {/* Phrase éditoriale hybride */}
        <p
          style={{
            lineHeight: 1.1,
            maxWidth: "700px",
          }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(241,241,241,0.6)",
              letterSpacing: "0.02em",
            }}
          >
            Un concept premium,
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              letterSpacing: "0.06em",
              color: "#F1F1F1",
            }}
          >
            PENSÉ POUR LE{" "}
            <span style={{ color: "#C9A84C" }}>RÉSEAU</span>
          </span>
        </p>

        {/* Ligne séparatrice */}
        <div
          style={{
            width: 48,
            height: 1,
            background: "linear-gradient(to right, #C9A84C, #B89A5A)",
            opacity: 0.5,
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-barlow, sans-serif)",
            fontSize: "0.82rem",
            lineHeight: 1.8,
            color: "#5A5A60",
            fontWeight: 300,
            maxWidth: "460px",
          }}
        >
          Le Cercle est un modèle réplicable, intégré aux centres sportifs premium, à fort potentiel de déploiement en Région Parisienne et au-delà.
        </p>

        <Link href="/investisseurs" className="btn-outline">
          En savoir plus
        </Link>
      </div>
    </section>
  );
}
