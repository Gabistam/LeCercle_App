import type { Metadata } from "next";
import { Gallery, JsonLd, MenuItems } from "@/components/ui";
import { carte, forfaits } from "@/data/carte";
import { mainSalon } from "@/data/salons";
import { breadcrumb } from "@/data/schema";
import { bookingUrl, track } from "@/data/track";

export const metadata: Metadata = {
  title: "Coiffeur homme et barbe : tous les tarifs",
  description:
    "Coupe tondeuse 24 €, coupe et barbe 35 €, forfait Premium 49 €. Tous les tarifs du barber Le Cercle, avec ou sans rendez-vous. Réservation en ligne.",
  alternates: { canonical: "/homme" },
};

export default function Homme() {
  const rating = mainSalon.rating!;
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Accueil", path: "/" }, { name: "Espace Homme", path: "/homme" }])} />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap cols2 end">
          <div>
            <span className="eyebrow">Espace Homme</span>
            <h1 className="h-page">
              Coupe, barbe <em>et soins.</em>
            </h1>
          </div>
          <div>
            <p className="lede">Avec ou sans rendez-vous, dans chaque Cercle.</p>
            <div className="actions">
              <a className="btn" href={bookingUrl("homme-haut")} target="_blank" rel="noopener" {...track("reserver", "homme-haut")}>
                Réserver mon créneau
              </a>
            </div>
            <p className="muted small">
              {rating.value} sur Google · {rating.count} avis · Sans carte bancaire · Annulation gratuite 24 h avant
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="intro">
            <span className="eyebrow">Les forfaits</span>
            <h2>
              Cinq <em>rituels</em>, du plus simple au plus complet.
            </h2>
            <p className="muted">Tarifs du {mainSalon.name}, TTC. Durées indicatives.</p>
          </div>
          <div className="menu">
            <div className="menu-group">
              <MenuItems items={forfaits} />
            </div>
            {carte.map((g) => (
              <div className="menu-group" key={g.title}>
                <h3 className="eyebrow" style={{ fontFamily: "var(--sans)", fontWeight: 500, letterSpacing: ".32em" }}>
                  {g.title}
                </h3>
                <MenuItems items={g.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery start={2} />

      <section className="section tight-top">
        <div className="wrap cols2 end">
          <div>
            <span className="eyebrow">Pas de rendez-vous ?</span>
            <h2>
              Passez <em>directement.</em>
            </h2>
          </div>
          <div>
            <p className="muted">
              S&apos;il y a un fauteuil libre, on vous prend tout de suite. Sinon, on vous donne l&apos;heure du prochain
              créneau. À {mainSalon.city}, nos barbers vous reçoivent du lundi au samedi.
            </p>
            <div className="actions">
              <a className="btn" href={bookingUrl("homme-bas")} target="_blank" rel="noopener" {...track("reserver", "homme-bas")}>
                Réserver
              </a>
              <a className="btn ghost" href={`tel:${mainSalon.phoneE164}`} {...track("appeler", "homme-bas")}>
                {mainSalon.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
