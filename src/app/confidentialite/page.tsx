import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { legal } from "@/data/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Le Cercle",
};

const { editor, host } = legal;

const sections = [
  {
    title: "Responsable du traitement",
    content: `Le responsable du traitement des données collectées sur ce site est la société ${editor.name} (marque Le Cercle), ${editor.address}.\nContact : ${editor.email} · ${editor.phone}`,
  },
  {
    title: "Données collectées",
    content: "• Via nos formulaires (contact, investisseurs) : prénom, nom, e-mail, téléphone (facultatif), société et fonction (formulaire investisseurs), sujet et message.\n• Lors de votre navigation : données techniques (adresse IP, type d'appareil et de navigateur, pages consultées) traitées par les outils de mesure d'audience déployés via Google Tag Manager.\n• Lors de l'affichage de la carte d'une page salon : votre adresse IP et des informations techniques sont transmises à Google (Google Maps).\n• Lors d'une réservation : les données sont saisies directement sur Fresha et non sur ce site (voir ci-dessous).\n\nAucune donnée n'est utilisée à des fins de profilage.",
  },
  {
    title: "Finalités et bases légales",
    content: "• Répondre à vos demandes de contact et d'information — votre consentement (case à cocher du formulaire).\n• Traiter les demandes des investisseurs et partenaires — votre consentement (case à cocher du formulaire).\n• Mesurer l'audience et améliorer le site — votre consentement pour les traceurs non strictement nécessaires (voir la page Cookies).\n• Assurer la sécurité et le bon fonctionnement du site — notre intérêt légitime.",
  },
  {
    title: "Destinataires",
    content: `Vos données sont destinées aux équipes habilitées de ${editor.name}. Elles peuvent être traitées par nos prestataires techniques, uniquement pour les besoins décrits ci-dessus : ${host.name} (hébergement), Google (Google Tag Manager, Google Maps) et Fresha (réservation).\n\nVos données ne sont ni vendues ni cédées à des tiers à des fins commerciales.`,
  },
  {
    title: "Transferts hors Union européenne",
    content: "Certains prestataires, notamment Google, peuvent traiter des données en dehors de l'Union européenne. Ces transferts sont alors encadrés par les garanties prévues par le RGPD (clauses contractuelles types ou décision d'adéquation).",
  },
  {
    title: "Durée de conservation",
    content: "• Demandes de contact et d'information : 3 ans maximum à compter de votre dernière interaction avec nous.\n• Traceurs et données de mesure d'audience : voir la page Cookies.\n• Données de réservation : selon la politique de conservation de Fresha.",
  },
  {
    title: "Réservation via Fresha",
    content: "La réservation de prestations s'effectue via Fresha, plateforme tierce qui agit pour sa part en responsable de traitement et dispose de sa propre politique de confidentialité (www.fresha.com). Le Cercle n'est pas responsable du traitement des données effectué par Fresha.",
  },
  {
    title: "Vos droits",
    content: `Conformément au RGPD, vous disposez des droits suivants :\n• Droit d'accès à vos données\n• Droit de rectification\n• Droit à l'effacement\n• Droit à la limitation du traitement\n• Droit d'opposition\n• Droit à la portabilité\n• Droit de retirer votre consentement à tout moment\n• Droit de définir des directives relatives au sort de vos données après votre décès\n\nPour exercer ces droits, écrivez-nous à ${editor.email}. Nous répondons dans un délai d'un mois. En cas de doute raisonnable sur votre identité, nous pouvons vous demander un justificatif.`,
  },
  {
    title: "Sécurité",
    content: "Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données (connexion chiffrée HTTPS, accès restreint aux données).",
  },
  {
    title: "Réclamation",
    content: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr.",
  },
  {
    title: "Mise à jour",
    content: `Dernière mise à jour : ${legal.lastUpdate}. Cette politique peut évoluer ; la version en vigueur est celle publiée sur cette page.`,
  },
];

export default function ConfidentialitePage() {
  return (
    <div data-universe="mixed">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
              <h1 className="text-5xl uppercase leading-none" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.05em" }}>
                Politique de<br />confidentialité
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3 pt-6 border-t" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                <h2 className="text-xl uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.08em" }}>
                  {section.title}
                </h2>
                <p className="text-sm leading-relaxed opacity-50 whitespace-pre-line" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>
                  {section.content}
                </p>
              </div>
            ))}

            <div className="flex gap-4 pt-6 border-t" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
              <Link href="/mentions-legales" className="btn-ghost text-xs">Mentions légales →</Link>
              <Link href="/cookies" className="btn-ghost text-xs">Cookies →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
