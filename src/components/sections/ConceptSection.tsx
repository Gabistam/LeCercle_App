import SectionTitle from "@/components/ui/SectionTitle";

const pillars = [
  {
    number: "01",
    title: "Excellence",
    description:
      "Expertise confirmée, gestes maîtrisés et produits sélectionnés pour chaque prestation.",
  },
  {
    number: "02",
    title: "Appartenance",
    description:
      "Un esprit club confidentiel. Chaque visite est une parenthèse dans un cadre exclusif.",
  },
  {
    number: "03",
    title: "Récupération",
    description:
      "Soins pensés pour l'après-padel — drainage, massage, rituel sport — au sein même du centre.",
  },
];

export default function ConceptSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="max-w-2xl">
          <SectionTitle
            overline="Notre concept"
            title="Le soin intégré au sport"
            subtitle="Le Cercle naît de la rencontre entre l'expérience sportive des centres Casa Padel et l'exigence du soin premium. Un espace unique, confidentiel, taillé pour une clientèle active et exigeante."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="flex flex-col gap-4 pt-6 border-t" style={{ borderColor: "rgba(201, 168, 76, 0.2)" }}>
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  color: "#C9A84C",
                  fontFamily: "var(--font-barlow-cond, sans-serif)",
                  opacity: 0.7,
                }}
              >
                {pillar.number}
              </span>
              <h3
                className="text-2xl tracking-wide uppercase"
                style={{
                  color: "#F1F1F1",
                  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
                  letterSpacing: "0.08em",
                }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#8A8A90",
                  fontFamily: "var(--font-barlow, sans-serif)",
                  fontWeight: 300,
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
