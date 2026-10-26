import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { JsonLd } from "@/components/ui";
import { mainSalon } from "@/data/salons";
import { FORM_EMAIL } from "@/data/site";
import { breadcrumb } from "@/data/schema";
import { bookingUrl, track } from "@/data/track";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter Le Cercle : salon, presse, partenariats. Pour un rendez-vous, réservez en ligne ou appelez le salon.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Accueil", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <section className="section">
        <div className="wrap split">
          <div className="intro">
            <span className="eyebrow">Nous écrire</span>
            <h1 className="h-page" style={{ marginTop: 0 }}>Contact</h1>
            <p className="muted">
              Pour un rendez-vous, le plus rapide est de{" "}
              <a href={bookingUrl("contact")} target="_blank" rel="noopener" style={{ color: "var(--brass)" }} {...track("reserver", "contact")}>
                réserver en ligne
              </a>{" "}
              ou d&apos;appeler le salon au {mainSalon.phone}.
            </p>
            <p className="muted">Par email : {FORM_EMAIL}</p>
          </div>
          <LeadForm
            id="contact"
            subject="Message depuis lecerclestudio.com"
            submitLabel="Envoyer"
            success="Merci, votre message est parti. Nous vous répondons rapidement."
            consent="J'accepte que mes données servent à traiter ma demande."
          >
            <label htmlFor="ct-prenom">Prénom<input id="ct-prenom" name="Prénom" required autoComplete="given-name" /></label>
            <label htmlFor="ct-nom">Nom<input id="ct-nom" name="Nom" required autoComplete="family-name" /></label>
            <label htmlFor="ct-email">Email<input id="ct-email" name="email" type="email" required autoComplete="email" /></label>
            <label htmlFor="ct-tel">Téléphone<input id="ct-tel" name="Téléphone" type="tel" autoComplete="tel" /></label>
            <label htmlFor="ct-sujet" className="full">
              Sujet
              <select id="ct-sujet" name="Sujet" required>
                <option>Question sur le salon</option>
                <option>Presse et médias</option>
                <option>Partenariat</option>
                <option>Autre</option>
              </select>
            </label>
            <label htmlFor="ct-msg" className="full">Message<textarea id="ct-msg" name="Message" required /></label>
          </LeadForm>
        </div>
      </section>
    </>
  );
}
