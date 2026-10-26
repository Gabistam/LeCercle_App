import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Gallery, MenuItems, Ring } from "@/components/ui";
import { favorites } from "@/data/carte";
import { mainSalon, salons } from "@/data/salons";
import { bookingUrl, track } from "@/data/track";

export const metadata: Metadata = {
  title: { absolute: "Le Cercle, coiffeur-barbier dans les clubs de padel" },
  description:
    "Le Cercle, coiffeur-barbier. Des barbers installés dans les clubs de padel, ouverts à tous, avec ou sans rendez-vous. Coupe dès 24 €, réservation en ligne.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const rating = mainSalon.rating!;
  return (
    <>
      <section className="hero" aria-label="Le Cercle">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Coiffeur-barbier · Île-de-France</span>
            <h1>
              Le Cercle, <em>coiffeur-barbier.</em>
            </h1>
            <p className="lede">
              Nos barbers sont installés dans les clubs de padel. Ouverts à tous, joueurs ou non, avec ou sans
              rendez-vous. Un fauteuil en cuir, un expresso à l&apos;arrivée, et une coupe faite au millimètre. Coupe
              dès 24 €.
            </p>
            <div className="actions">
              <a className="btn" href={bookingUrl("accueil-haut")} target="_blank" rel="noopener" {...track("reserver", "accueil-haut")}>
                Réserver
              </a>
              <Link className="btn ghost" href="/salons">
                Nos salons
              </Link>
            </div>
            <a className="rating" href={mainSalon.googleReviewsUrl} target="_blank" rel="noopener" {...track("avis", "accueil-haut")}>
              <span className="score">{rating.value}</span>
              <span>
                <span className="stars" aria-hidden="true">★★★★★</span>
                <br />
                {rating.count} avis Google · {mainSalon.name}
              </span>
            </a>
          </div>
          <div className="hero-photo">
            <Image
              src="/images/cercle/portrait-barbe.webp"
              alt="Client du Cercle après sa coupe, barbe taillée"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
        </div>
        <Ring />
      </section>

      <div className="facts">
        {salons.map((s) =>
          s.open ? (
            <div key={s.slug}>
              <span className="eyebrow">Ouvert</span>
              <span className="v">{s.city}</span>
              <span className="s">
                {s.location}, {s.address} · du lundi au samedi
              </span>
              <Link className="eyebrow link-arrow" style={{ marginTop: 6 }} href={`/salons/${s.slug}`}>
                Horaires et accès →
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
        <div className="wrap split">
          <div className="intro">
            <span className="eyebrow">La carte</span>
            <h2>
              Les quatre <em>coupes</em>{" "}que l&apos;on nous demande le plus.
            </h2>
            <p className="muted">
              Tarifs du {mainSalon.name}, TTC, payés au salon. Réservation sans carte bancaire, annulation gratuite
              jusqu&apos;à 24 h avant.
            </p>
            <div className="actions">
              <Link className="btn ghost" href="/homme">
                Toute la carte
              </Link>
            </div>
          </div>
          <div className="menu">
            <div className="menu-group">
              <MenuItems items={favorites} />
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      <div className="wrap maison">
        <div>
          <span className="eyebrow">L&apos;arrivée</span>
          <h3>Un expresso vous attend.</h3>
          <p>
            Ou une eau infusée. Le temps de vous installer, votre barber vous demande ce que vous voulez et regarde
            comment poussent vos cheveux.
          </p>
        </div>
        <div>
          <span className="eyebrow">Le fauteuil</span>
          <h3>Cuir noir, métal brossé.</h3>
          <p>
            Lumière dirigée sur la coupe, voix basses. Le cadre d&apos;une maison haut de gamme, aux prix d&apos;un barber
            de quartier.
          </p>
        </div>
        <div>
          <span className="eyebrow">Le départ</span>
          <h3>Vous voyez tout avant de partir.</h3>
          <p>
            Le résultat sous tous les angles au miroir, et les gestes pour garder la coupe nette jusqu&apos;au prochain
            passage.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Avec ou sans rendez-vous</span>
          <h2 style={{ marginTop: 18 }}>
            Vos <em>barbers.</em>
          </h2>
          <p className="muted" style={{ marginTop: 30, maxWidth: "34em" }}>
            Choisissez votre barber au moment de réserver, ou passez sans rendez-vous et prenez le premier fauteuil
            libre.
          </p>
        </div>
      </section>

      <hr className="rule" />
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">
            Avis Google · {rating.value} sur {rating.count}
          </span>
          <p className="quote" style={{ marginTop: 26 }}>
            « All perfect! Very good job! I will come again for sure. »
          </p>
          <p className="quote-src">Avis client, fiche Google du {mainSalon.name}</p>
          <div className="actions" style={{ marginTop: 36 }}>
            <a className="btn ghost" href={mainSalon.googleReviewsUrl} target="_blank" rel="noopener" {...track("avis", "accueil-avis")}>
              Lire les {rating.count} avis
            </a>
          </div>
        </div>
      </section>

      <section className="section stone">
        <div className="wrap cols2">
          <div>
            <span className="eyebrow">Beauty Studio · ouverture prochaine</span>
            <h2>
              Elle aussi aura son <em>fauteuil.</em>
            </h2>
          </div>
          <div>
            <p className="lede">
              Ongles, soins du visage, brushing et beauté du regard. Le premier Beauty Studio ouvre au{" "}
              {mainSalon.name} dans les prochains mois.
            </p>
            <div className="actions">
              <Link className="btn" href="/femme">
                Être prévenue de l&apos;ouverture
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols2 end">
          <div>
            <span className="eyebrow">Votre prochaine coupe</span>
            <h2>C&apos;est quand ?</h2>
          </div>
          <div>
            <p className="muted">
              Réservation en ligne en une minute, sans carte bancaire. Annulation gratuite jusqu&apos;à 24 h avant.
            </p>
            <div className="actions">
              <a className="btn" href={bookingUrl("accueil-bas")} target="_blank" rel="noopener" {...track("reserver", "accueil-bas")}>
                Réserver
              </a>
              <Link className="btn ghost" href="/salons">
                Nos salons
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />
      <div
        className="wrap"
        style={{ paddingBlock: 34, display: "flex", flexWrap: "wrap", gap: "14px 30px", alignItems: "center", justifyContent: "space-between" }}
      >
        <p className="muted" style={{ fontSize: 14 }}>
          Vous dirigez un club de padel ou vous voulez ouvrir un Cercle ?
        </p>
        <Link href="/investisseurs" className="eyebrow link-arrow">
          Découvrir le modèle →
        </Link>
      </div>
    </>
  );
}
