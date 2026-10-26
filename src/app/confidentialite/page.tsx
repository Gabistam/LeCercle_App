import type { Metadata } from "next";
import Link from "next/link";
import { legal } from "@/data/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

export default function Confidentialite() {
  const e = legal.editor;
  return (
    <section className="section">
      <div className="wrap legal">
        <div>
          <span className="eyebrow">Données personnelles</span>
          <h1 className="h-page" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>Politique de confidentialité</h1>
        </div>
        <div>
          <h2>Responsable du traitement</h2>
          <p>
            {e.name}, {e.address}. Contact : {e.email}.
          </p>
        </div>
        <div>
          <h2>Données collectées</h2>
          <p>
            Par les formulaires du site (contact, liste d&apos;attente du Beauty Studio, demandes investisseurs et clubs) :
            prénom, nom, email, téléphone et les informations que vous saisissez. Les champs facultatifs sont indiqués.
          </p>
          <p>
            Pendant la navigation : des données de mesure d&apos;audience (pages vues, provenance, clics sur les boutons
            de réservation et d&apos;appel) via Google Tag Manager et Google Analytics. Avec votre accord, elles sont
            associées à un cookie ; sans accord, Google ne reçoit que des signaux anonymes sans cookie.
          </p>
          <p>Les réservations sont saisies directement sur Fresha, qui applique sa propre politique.</p>
        </div>
        <div>
          <h2>Finalités et base légale</h2>
          <p>
            Répondre à votre demande et vous prévenir de l&apos;ouverture du Beauty Studio (consentement donné en cochant
            la case du formulaire). Mesurer l&apos;audience du site (consentement donné dans le bandeau cookies).
          </p>
        </div>
        <div>
          <h2>Destinataires</h2>
          <p>
            Les messages des formulaires sont transmis par email à {e.name} via le service FormSubmit (formsubmit.co).
            Les données de mesure d&apos;audience sont traitées par Google. Aucune donnée n&apos;est vendue.
          </p>
        </div>
        <div>
          <h2>Durée de conservation</h2>
          <p>Trois ans après le dernier contact, puis suppression.</p>
        </div>
        <div>
          <h2>Vos droits</h2>
          <p>
            Accès, rectification, effacement, opposition, limitation et portabilité : écrivez à {e.email}. Vous pouvez
            aussi saisir la CNIL (cnil.fr).
          </p>
        </div>
        <div>
          <h2>Cookies</h2>
          <p>
            Voir la <Link href="/cookies">page cookies</Link>. Dernière mise à jour : {legal.lastUpdate}.
          </p>
        </div>
      </div>
    </section>
  );
}
