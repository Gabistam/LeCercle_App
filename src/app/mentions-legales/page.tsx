import type { Metadata } from "next";
import Link from "next/link";
import { legal } from "@/data/legal";
import { mainSalon } from "@/data/salons";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  const e = legal.editor;
  return (
    <section className="section">
      <div className="wrap legal">
        <div>
          <span className="eyebrow">Informations</span>
          <h1 className="h-page" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>Mentions légales</h1>
        </div>
        <div>
          <h2>Éditeur du site</h2>
          <p>
            Le site lecerclestudio.com est édité par {e.name}, {e.legalForm.toLowerCase()} au capital de {e.capital},
            immatriculée au {e.registration}, dont le siège est situé {e.address}. {e.name} exploite la marque Le Cercle
            Studio.
          </p>
          <p>
            Directeur de la publication : {e.publicationDirector}. Contact : {e.email} · {e.phone}
          </p>
        </div>
        <div>
          <h2>Hébergement</h2>
          <p>
            {legal.host.name}, {legal.host.address}. <a href={legal.host.url}>hostinger.fr</a>
          </p>
        </div>
        <div>
          <h2>Conception et développement</h2>
          <p>
            {legal.developer.brand}, exploité par {legal.developer.owner}, {legal.developer.city}, SIRET{" "}
            {legal.developer.siret}. <a href={legal.developer.url}>gabistam.com</a>
          </p>
        </div>
        <div>
          <h2>Partenaire</h2>
          <p>
            Le {mainSalon.name} est situé à côté du club Casa Padel, partenaire du Cercle. L&apos;édition du site relève
            de {e.name}. Les marques Le Cercle et Casa Padel appartiennent à leurs titulaires respectifs.
          </p>
        </div>
        <div>
          <h2>Propriété intellectuelle</h2>
          <p>
            Textes, photos, logos et design du site sont protégés par le droit d&apos;auteur. Toute reproduction, même
            partielle, demande une autorisation écrite préalable.
          </p>
        </div>
        <div>
          <h2>Réservations</h2>
          <p>
            Les réservations passent par Fresha, plateforme indépendante. Tarifs et horaires peuvent évoluer ; ceux
            affichés au salon et sur Fresha font foi.
          </p>
        </div>
        <div>
          <h2>Données personnelles et cookies</h2>
          <p>
            Voir la <Link href="/confidentialite">politique de confidentialité</Link> et la{" "}
            <Link href="/cookies">page cookies</Link>.
          </p>
        </div>
        <div>
          <h2>Droit applicable</h2>
          <p>Le site est soumis au droit français. Dernière mise à jour : {legal.lastUpdate}.</p>
        </div>
      </div>
    </section>
  );
}
