import type { Metadata } from "next";
import ProForms, { TabLink } from "@/components/ProForms";
import { JsonLd } from "@/components/ui";
import { mainSalon } from "@/data/salons";
import { breadcrumb } from "@/data/schema";

export const metadata: Metadata = {
  title: "Ouvrir un Cercle : clubs de padel et barbers investisseurs",
  description:
    "Un salon barber Le Cercle dans votre club de padel : un service et un revenu sans gestion. Pour les barbers : une clientèle sur place et un concept clé en main.",
  alternates: { canonical: "/investisseurs" },
};

export default function Investisseurs() {
  const rating = mainSalon.rating!;
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Accueil", path: "/" }, { name: "Investisseurs", path: "/investisseurs" }])} />
      <section className="section" style={{ paddingBottom: 70 }}>
        <div className="wrap">
          <span className="eyebrow">Partenaires &amp; investisseurs</span>
          <h1 className="h-page" style={{ fontSize: "clamp(42px, 6.4vw, 88px)", lineHeight: 1, maxWidth: "13em" }}>
            Ouvrir un Cercle dans votre club, ou investir <em>dans le réseau.</em>
          </h1>
          <p className="lede" style={{ marginTop: 28 }}>
            Le Cercle installe des salons barber et beauté dans les clubs de padel.
          </p>
          <div className="actions" style={{ marginTop: 34 }}>
            <TabLink tab="invest" className="btn">J&apos;investis ou j&apos;ouvre un Cercle</TabLink>
            <TabLink tab="club" className="btn ghost">Je dirige un club</TabLink>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="kpis">
          <div><span className="eyebrow">Ouvert</span><span className="big">1</span><span className="lab">salon, Saint-Denis</span></div>
          <div><span className="eyebrow">Signés</span><span className="big">2</span><span className="lab">sites Casa Padel : Croissy-Beaubourg, Asnières-sur-Seine</span></div>
          <div><span className="eyebrow">Note Google</span><span className="big">{rating.value}</span><span className="lab">sur {rating.count} avis</span></div>
          <div><span className="eyebrow">Fidélité</span><span className="big">3/5</span><span className="lab">clients reviennent</span></div>
        </div>
      </div>

      <section className="section">
        <div className="wrap cols2">
          <div>
            <span className="eyebrow">Un modèle qui tourne déjà</span>
            <h2 className="h-sub">
              Le barber dans le club de sport, <em>on le fait déjà.</em>
            </h2>
          </div>
          <div>
            <p>
              Nos salons barber fonctionnent aujourd&apos;hui à l&apos;intérieur de salles Fitness Park, à
              Boissy-Saint-Léger et à Cormeilles-en-Parisis. La clientèle est déjà sur place, elle revient chaque semaine,
              et la salle n&apos;a rien à gérer.
            </p>
            <p className="muted">
              Le Cercle applique ce modèle aux clubs de padel, qui ouvrent dans toute la France. Une partie se réserve à
              quatre, à heure fixe : les joueurs arrivent avant, restent après, et reviennent pour la partie suivante. Le
              temps passé au club est là, le fauteuil aussi.
            </p>
          </div>
        </div>
      </section>

      <hr className="rule" />
      <section className="section">
        <div className="wrap cols2">
          <div>
            <span className="eyebrow">Le format</span>
            <h2 className="h-sub">
              20 m², trois <em>fauteuils.</em>
            </h2>
            <p className="muted">
              Un Cercle s&apos;installe dans le club, avec l&apos;identité complète de la maison : mobilier, lumière, charte et
              outils de réservation.
            </p>
          </div>
          <div>
            <ul className="list">
              <li><span>Surface</span><span>20 m² minimum</span></li>
              <li><span>Postes</span><span>3 fauteuils</span></li>
              <li><span>Raccordements</span><span>Arrivée d&apos;eau et électricité</span></li>
              <li><span>Ouverture</span><span>Avec ou sans rendez-vous, aux membres comme aux clients extérieurs</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section leather">
        <div className="wrap cols2">
          <div>
            <span className="eyebrow">Pour les clubs de padel</span>
            <h2 className="h-sub" style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}>
              Un Cercle dans <em>votre club.</em>
            </h2>
            <ul className="list">
              <li><span>Service</span><span>Vos joueurs se font couper les cheveux avant ou après leur partie, sans quitter le club.</span></li>
              <li><span>Zéro gestion</span><span>Le Cercle recrute, encadre et gère les barbers. Vous n&apos;avez ni personnel ni planning à suivre.</span></li>
              <li><span>Revenu</span><span>Le salon vous verse un loyer et une part de son chiffre d&apos;affaires.</span></li>
              <li><span>Nouveaux visages</span><span>Le salon est ouvert à tous : des clients qui ne jouent pas encore entrent dans votre club.</span></li>
              <li><span>Image</span><span>Un espace haut de gamme qui fait monter le standing de tout le club.</span></li>
            </ul>
            <div className="actions">
              <TabLink tab="club" className="btn ghost">Proposer mon club</TabLink>
            </div>
          </div>
          <div>
            <span className="eyebrow">Pour les barbers investisseurs</span>
            <h2 className="h-sub" style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}>
              Votre Cercle <em>dans un club.</em>
            </h2>
            <ul className="list">
              <li><span>Clientèle</span><span>Des joueurs déjà sur place toute la journée. Pas besoin d&apos;une vitrine en centre-ville pour être vu.</span></li>
              <li><span>Fidélité</span><span>Les joueurs reviennent au club chaque semaine, donc au fauteuil aussi.</span></li>
              <li><span>Clé en main</span><span>Marque, mobilier, charte et outils de réservation fournis. Vous ouvrez avec un concept qui tourne déjà.</span></li>
              <li><span>Charges</span><span>La part variable du loyer ne démarre qu&apos;au-delà d&apos;un premier palier de chiffre d&apos;affaires.</span></li>
              <li><span>Associés</span><span>Le Cercle entre au capital de chaque salon à hauteur de 15 à 20 % : nous gagnons quand vous gagnez.</span></li>
              <li><span>Expansion</span><span>Chaque nouveau club de padel est une ouverture possible.</span></li>
            </ul>
            <div className="actions">
              <TabLink tab="invest" className="btn">Ouvrir mon Cercle</TabLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact-pro" style={{ scrollMarginTop: 90 }}>
        <div className="wrap split">
          <div className="intro">
            <span className="eyebrow">Parlons-en</span>
            <h2 className="h-sub">
              Recevez le <em>dossier.</em>
            </h2>
            <p className="muted">
              Présentation complète : concept, format et modèle de franchise. Nous vous rappelons sous 48 heures ouvrées.
            </p>
          </div>
          <ProForms />
        </div>
      </section>
    </>
  );
}
