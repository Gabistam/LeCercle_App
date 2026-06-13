const valeurs = [
  {
    num: "01",
    title: "Excellence",
    text: "Chaque geste est maîtrisé. Chaque produit est sélectionné. Il n'y a pas de prestation “simple” au Cercle — il n'y a que des rituels bien ou mal exécutés.",
  },
  {
    num: "02",
    title: "Appartenance",
    text: "Un espace intime, confidentiel. Pas de file d'attente, pas de bruit inutile. L'esprit d'un club privé, accessible à ceux qui savent reconnaître la différence.",
  },
  {
    num: "03",
    title: "Proximité",
    text: "Le Cercle est là où vous êtes déjà. Membres ou non, sur rendez-vous ou à la volée — le soin premium n'exige plus que vous fassiez un détour.",
  },
];

export default function ManifesteSection() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#111111", textAlign: "center" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Eyebrow */}
        <p style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8px", fontWeight: 300, letterSpacing: "6px", textTransform: "uppercase", color: "#C4A35A", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <span style={{ width: 20, height: 1, background: "#C4A35A", opacity: 0.6, display: "inline-block" }} />
          Notre philosophie
        </p>

        <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-1.5px", marginBottom: 20, color: "#F1F0EC" }}>
          Ce en quoi<br />
          <em style={{ fontStyle: "italic", color: "#C4A35A" }}>nous croyons.</em>
        </h2>

        <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: "clamp(17px, 2vw, 20px)", color: "rgba(241,240,236,0.5)", lineHeight: 1.65, marginBottom: 56 }}>
          Le soin n&apos;a pas besoin d&apos;être <em style={{ color: "#C4A35A" }}>justifié</em>.<br />
          Il n&apos;a pas besoin d&apos;une occasion particulière.<br />
          Il a besoin d&apos;un <em style={{ color: "#C4A35A" }}>endroit à sa hauteur.</em>
        </p>

        {/* Grille valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 1, background: "rgba(196,163,90,0.12)", border: "1px solid rgba(196,163,90,0.12)", marginBottom: 56, textAlign: "left" }}>
          {valeurs.map((v) => (
            <div key={v.num} style={{ background: "#111111", padding: "40px 32px" }}>
              <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 52, fontWeight: 300, color: "rgba(196,163,90,0.12)", lineHeight: 1, marginBottom: 12 }}>
                {v.num}
              </div>
              <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#C4A35A", marginBottom: 14 }}>
                {v.title}
              </div>
              <div style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 14, fontWeight: 300, color: "rgba(241,240,236,0.45)", lineHeight: 1.7 }}>
                {v.text}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: 18, color: "rgba(241,240,236,0.38)", lineHeight: 1.7 }}>
          Le Cercle est né dans les centres Casa Padel de Région Parisienne. Il est pensé pour s&apos;étendre — partout où une clientèle exigeante mérite mieux que l&apos;ordinaire.
        </p>
      </div>
    </section>
  );
}
