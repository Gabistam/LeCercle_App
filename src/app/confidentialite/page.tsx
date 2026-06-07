import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Le Cercle",
};

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
            {[
              {
                title: "Responsable du traitement",
                content: "Le Cercle — coordonnées à renseigner lors de la mise en production.",
              },
              {
                title: "Données collectées",
                content: "Nous collectons uniquement les données que vous nous transmettez via nos formulaires de contact : prénom, nom, email, téléphone, société et message. Aucune donnée n'est collectée automatiquement à des fins de profilage.",
              },
              {
                title: "Finalités du traitement",
                content: "Vos données sont utilisées exclusivement pour :\n• Répondre à vos demandes de contact\n• Traiter les demandes d'information investisseurs\n• Vous contacter si nécessaire en rapport avec votre demande",
              },
              {
                title: "Durée de conservation",
                content: "Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernière interaction avec nous.",
              },
              {
                title: "Vos droits",
                content: "Conformément au RGPD, vous disposez des droits suivants :\n• Droit d'accès à vos données\n• Droit de rectification\n• Droit à l'effacement\n• Droit à la limitation du traitement\n• Droit à la portabilité\n\nPour exercer ces droits, contactez-nous via le formulaire de contact.",
              },
              {
                title: "Réservation via Fresha",
                content: "La réservation de prestations s'effectue via Fresha, plateforme tierce disposant de sa propre politique de confidentialité. Le Cercle n'est pas responsable du traitement des données effectué par Fresha.",
              },
              {
                title: "Réclamation",
                content: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).",
              },
            ].map((section) => (
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
