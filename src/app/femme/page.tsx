import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { JsonLd } from "@/components/ui";
import { mainSalon } from "@/data/salons";
import { breadcrumb } from "@/data/schema";

export const metadata: Metadata = {
  title: "Beauty Studio : ouverture prochaine",
  description:
    "Ongles, soins du visage, brushing : le Beauty Studio du Cercle ouvre bientôt. Inscrivez-vous pour être prévenue de l'ouverture.",
  alternates: { canonical: "/femme" },
};

const soins = [
  { id: "ongles", label: "Ongles" },
  { id: "pieds", label: "Pieds" },
  { id: "visage", label: "Visage et regard" },
  { id: "brushing", label: "Brushing" },
];

export default function Femme() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Accueil", path: "/" }, { name: "Beauty Studio", path: "/femme" }])} />
      <section className="section stone">
        <div className="wrap cols2 end">
          <div>
            <span className="eyebrow">Beauty Studio · ouverture prochaine</span>
            <h1 className="h-page">
              Le Beauty Studio ouvre <em>bientôt.</em>
            </h1>
          </div>
          <div>
            <p className="lede">
              Ongles, soins du visage, brushing et beauté du regard. Le premier Beauty Studio ouvre au {mainSalon.name},{" "}
              {mainSalon.address}, puis dans les prochains Cercle.
            </p>
          </div>
        </div>
      </section>

      <section className="section stone tight-top">
        <div className="wrap split">
          <div className="intro">
            <span className="eyebrow">Les soins prévus</span>
            <h2 className="h-sub">
              Les tarifs seront publiés à <em>l&apos;ouverture.</em>
            </h2>
          </div>
          <div>
            <ul className="list">
              <li><span>Ongles et mains</span><span>Vernis classique, semi-permanent, pose gel</span></li>
              <li><span>Pieds</span><span>Vernis, semi-permanent, pédicure complète</span></li>
              <li><span>Visage et regard</span><span>Soin du visage complet, sourcils, rehaussement de cils</span></li>
              <li><span>Cheveux</span><span>Shampoing et brushing</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section stone tight-top">
        <div className="wrap split">
          <div className="intro">
            <span className="eyebrow">Liste d&apos;attente</span>
            <h2 className="h-sub">
              Soyez la première <em>informée.</em>
            </h2>
            <p className="muted">On vous écrit dès que la date d&apos;ouverture est fixée.</p>
          </div>
          <LeadForm
            id="attente"
            subject="Liste d'attente Beauty Studio"
            submitLabel="M'inscrire"
            success="Merci, vous êtes sur la liste. On vous écrit dès que la date est fixée."
            consent="J'accepte que Le Cercle conserve mes coordonnées pour me prévenir de l'ouverture."
          >
            <label htmlFor="wa-prenom">
              Prénom
              <input id="wa-prenom" name="Prénom" required autoComplete="given-name" />
            </label>
            <label htmlFor="wa-email">
              Email
              <input id="wa-email" name="email" type="email" required autoComplete="email" />
            </label>
            <label htmlFor="wa-tel" className="full">
              Téléphone (facultatif)
              <input id="wa-tel" name="Téléphone" type="tel" autoComplete="tel" />
            </label>
            <fieldset className="full" style={{ border: 0, padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              <legend className="eyebrow" style={{ marginBottom: 12 }}>
                Soins qui vous intéressent
              </legend>
              <div className="chips">
                {soins.map((s) => (
                  <label key={s.id} htmlFor={`wa-${s.id}`}>
                    <input id={`wa-${s.id}`} type="checkbox" name="Soins" value={s.label} />
                    {s.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </LeadForm>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols2 end">
          <div>
            <span className="eyebrow">En attendant</span>
            <h2>
              L&apos;Espace Homme est <em>ouvert.</em>
            </h2>
          </div>
          <div>
            <p className="muted">Votre partenaire, votre frère ou votre fils peut déjà réserver.</p>
            <div className="actions">
              <Link className="btn ghost" href="/homme">
                Voir l&apos;Espace Homme
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
