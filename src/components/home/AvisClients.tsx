const avis = [
  {
    stars: 5,
    text: "J'y suis allé après mon padel et j'ai pris une coupe avec la barbe. L'ambiance est vraiment différente des autres barbiers. On se sent dans un endroit premium — le café à l'arrivée, les fauteuils, tout est pensé. Je recommande sans hésiter.",
    avatar: "K",
    name: "Kévin M.",
    info: "Espace Homme · Saint-Denis",
    featured: true,
  },
  {
    stars: 5,
    text: "Super expérience pour les ongles. La manucure était impeccable et le cadre est vraiment beau — on se sent vraiment chouchoutée. La lumière, les matières, le thé qu'on te sert… J'y retourne dès la semaine prochaine.",
    avatar: "S",
    name: "Sarah L.",
    info: "Espace Femme · Saint-Denis",
    featured: false,
  },
  {
    stars: 5,
    text: "Très bien. Personnel sympa et professionnel, salon propre et stylé. On est venus en couple — lui pour la coupe, moi pour les soins. Les forfaits sont vraiment bien pensés. Un endroit rare.",
    avatar: "A",
    name: "Amina B.",
    info: "Espace Femme & Homme · Asnières",
    featured: false,
  },
  {
    stars: 5,
    text: "Le forfait Premium vaut vraiment son prix. Coupe, barbe, serviette chaude et soin visage — en une heure tu repars complètement transformé. Le barbier sait ce qu'il fait. C'est devenu mon rituel mensuel.",
    avatar: "T",
    name: "Thomas R.",
    info: "Espace Homme · Croissy-Beaubourg",
    featured: false,
  },
  {
    stars: 5,
    text: "Le soin visage complet est exceptionnel. On m'a pris le temps d'expliquer chaque étape, les produits sont vraiment de qualité. L'espace est intime, feutré — exactement ce qu'il me fallait après une longue semaine.",
    avatar: "C",
    name: "Clara D.",
    info: "Espace Femme · Saint-Denis",
    featured: false,
  },
  {
    stars: 5,
    text: "Je suis pas quelqu'un qui va habituellement dans des barbiers premium. Mais là je comprends pourquoi les gens le font. L'accueil, la précision de la coupe, l'attention aux détails. Ça change tout. Je suis conquis.",
    avatar: "M",
    name: "Marcus N.",
    info: "Espace Homme · Saint-Denis",
    featured: false,
  },
];

export default function AvisClients() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#0D0D0D" }}>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6" style={{ maxWidth: 1100, margin: "0 auto 60px" }}>
        <div>
          <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase", color: "#C4A35A", marginBottom: 20, display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
            <span style={{ width: 20, height: 1, background: "#C4A35A", opacity: 0.6, display: "inline-block" }} />
            Ce qu&apos;ils disent
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 1, letterSpacing: "-1px", color: "#F1F0EC" }}>
            Ils sont<br /><em style={{ fontStyle: "italic", color: "#C4A35A" }}>revenus.</em>
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 72, fontWeight: 300, color: "#C4A35A", lineHeight: 1 }}>4.9</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ color: "#C4A35A", fontSize: 18, letterSpacing: 3 }}>★★★★★</div>
            <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, fontWeight: 300, letterSpacing: 3, textTransform: "uppercase", color: "#666" }}>+340 avis vérifiés</div>
            <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 8, fontWeight: 300, letterSpacing: 2, textTransform: "uppercase", color: "rgba(196,163,90,0.5)" }}>Via Fresha · Région Parisienne</div>
          </div>
        </div>
        <a href="https://www.fresha.com/fr/a/fitcare-cormeilles-en-parisis-cormeilles-en-parisis-cormeilles-en-parisis-1-boulevard-du-parisis-f2hofeu8/booking?menu=true" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.3)", padding: "14px 22px", textDecoration: "none", display: "inline-block", flexShrink: 0 }}>
          Voir tous les avis →
        </a>
      </div>

      {/* Grille avis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ maxWidth: 1100, margin: "0 auto" }}>
        {avis.map((a) => (
          <div
            key={a.name}
            style={{
              backgroundColor: "#111111",
              border: `1px solid ${a.featured ? "rgba(196,163,90,0.25)" : "rgba(196,163,90,0.1)"}`,
              padding: "32px 28px",
              background: a.featured ? "linear-gradient(135deg, rgba(196,163,90,0.06) 0%, #111111 60%)" : "#111111",
            }}
          >
            <div style={{ color: "#C4A35A", fontSize: 13, letterSpacing: 3, marginBottom: 18 }}>★★★★★</div>
            <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: 19, color: "#F1F0EC", lineHeight: 1.55, marginBottom: 24 }}>
              &ldquo;{a.text}&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 20, borderTop: "1px solid rgba(196,163,90,0.08)" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(196,163,90,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 13, color: "#C4A35A", flexShrink: 0 }}>
                {a.avatar}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 11, fontWeight: 400, color: "#F1F0EC", letterSpacing: 0.5 }}>{a.name}</div>
                <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: 9, fontWeight: 300, color: "#666", letterSpacing: 1.5, textTransform: "uppercase", marginTop: 2 }}>{a.info}</div>
              </div>
              <div style={{ marginLeft: "auto", fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "7.5px", fontWeight: 300, letterSpacing: 2, textTransform: "uppercase", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.25)", padding: "3px 8px", flexShrink: 0 }}>
                Vérifié
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
