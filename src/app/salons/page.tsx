import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/ui";
import { openSalons, salons } from "@/data/salons";
import { breadcrumb } from "@/data/schema";

export const metadata: Metadata = {
  title: "Nos salons barber",
  description:
    "Les salons Le Cercle : Saint-Denis, à côté du Casa Padel, ouvert du lundi au samedi. Prochaines ouvertures à Asnières-sur-Seine et Croissy-Beaubourg.",
  alternates: { canonical: "/salons" },
};

export default function Salons() {
  const soon = salons.filter((s) => !s.open);
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Accueil", path: "/" }, { name: "Nos salons", path: "/salons" }])} />
      <section className="section tight-bottom">
        <div className="wrap">
          <span className="eyebrow">
            Nos salons · {openSalons.length} ouvert, {soon.length} à venir
          </span>
          <h1 className="h-page">
            Trouvez votre <em>Cercle.</em>
          </h1>
          <p className="lede" style={{ marginTop: 26 }}>
            Nos barbers sont installés dans les clubs de padel et reçoivent tout le monde, joueurs ou non, avec ou sans
            rendez-vous.
          </p>
        </div>
      </section>

      <div className="facts boxed">
        {salons.map((s) =>
          s.open ? (
            <div key={s.slug}>
              <span className="eyebrow">Ouvert</span>
              <span className="v">{s.city}</span>
              <span className="s">
                {s.location}, {s.address}, {s.postalCode} {s.city}
              </span>
              <Link className="eyebrow link-arrow" style={{ marginTop: 6 }} href={`/salons/${s.slug}`}>
                Horaires, accès et tarifs →
              </Link>
            </div>
          ) : (
            <div key={s.slug}>
              <span className="eyebrow dim">Prochainement</span>
              <span className="v">{s.city}</span>
              <span className="s">{s.location}</span>
            </div>
          ),
        )}
      </div>

      <section className="section">
        <div className="wrap cols2 end">
          <div>
            <span className="eyebrow">Prochaines ouvertures</span>
            <h2>
              Un Cercle <em>près de chez vous.</em>
            </h2>
          </div>
          <div>
            <p className="muted">
              Deux nouveaux Cercle ouvriront dans les clubs Casa Padel d&apos;Asnières-sur-Seine et de Croissy-Beaubourg,
              puis dans d&apos;autres clubs de padel. Les dates seront annoncées ici.
            </p>
            <div className="actions">
              <Link className="btn ghost" href="/investisseurs">
                Ouvrir un Cercle dans votre ville
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
