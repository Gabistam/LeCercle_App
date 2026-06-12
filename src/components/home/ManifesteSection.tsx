const valeurs = [
  {
    num: "1",
    title: "L'Espace",
    text: "Chaque matière, chaque couleur, chaque silence est pensé pour créer une bulle de sérénité. L'architecture du soin avant le soin lui-même.",
  },
  {
    num: "2",
    title: "L'Expertise",
    text: "Des praticiens passionnés, enracinés dans leur métier. Chaque geste est une signature, chaque détail compte. Pas de compromis.",
  },
  {
    num: "3",
    title: "Le Rituel",
    text: "Pas d'à-la-va-vite. Chaque moment dispose du temps qu'il mérite. Le luxe absolu : la lenteur consciente.",
  },
];

export default function ManifesteSection() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#0D0D0D", textAlign: "center" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>

        {/* Eyebrow */}
        <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", marginBottom: 20, display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
          <span style={{ width: 20, height: 1, background: "#C4A35A", opacity: 0.6 }} />
          Notre manifeste
        </div>

        <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 1, letterSpacing: "-1px", marginBottom: 32, color: "#F1F0EC" }}>
          Trois valeurs<br />
          <em style={{ fontStyle: "italic", color: "#C4A35A" }}>pour une expérience</em>
        </h2>

        <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 300, lineHeight: 1.45, color: "#F1F0EC", marginBottom: 48 }}>
          Nous ne proposons pas un service. Nous façonnons{" "}
          <em style={{ fontStyle: "italic", color: "#C4A35A" }}>un cadre</em>{" "}
          où la beauté rencontre la sérénité.
        </p>

        {/* Grille valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 1, background: "rgba(196,163,90,0.12)", border: "1px solid rgba(196,163,90,0.12)", margin: "48px 0", textAlign: "left" }}>
          {valeurs.map((v) => (
            <div key={v.num} style={{ background: "#0D0D0D", padding: "40px 32px" }}>
              <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 48, fontWeight: 300, color: "rgba(196,163,90,0.15)", lineHeight: 1, marginBottom: 12 }}>
                {v.num}
              </div>
              <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#C4A35A", marginBottom: 14 }}>
                {v.title}
              </div>
              <div style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 14, fontWeight: 300, color: "#666", lineHeight: 1.7 }}>
                {v.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gold divider */}
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 20, paddingTop: 20 }}>
        <div style={{ height: 1, flex: 1, background: "linear-gradient(to right, #C4A35A, transparent)", opacity: 0.3 }} />
        <div style={{ fontSize: 9, color: "#C4A35A", opacity: 0.6, letterSpacing: 4 }}>✦</div>
        <div style={{ height: 1, flex: 1, background: "linear-gradient(to left, #C4A35A, transparent)", opacity: 0.3 }} />
      </div>
    </section>
  );
}
