import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { legal } from "@/data/legal";

export const metadata: Metadata = {
  title: "Mentions légales — Le Cercle",
};

const { editor, host, developer } = legal;

const sections = [
  {
    title: "Éditeur du site",
    content: `Le site ${legal.siteUrl} est édité par la société ${editor.name}, qui exploite la marque Le Cercle (Le Cercle Studio) en partenariat avec Casa Padel.\n\nForme juridique : ${editor.legalForm}\nCapital social : ${editor.capital}\nSIRET / RCS : ${editor.registration}\nTVA intracommunautaire : ${editor.vat}\nSiège social : ${editor.address}\nDirecteur de la publication : ${editor.publicationDirector}\nContact : ${editor.email} · ${editor.phone}`,
  },
  {
    title: "Partenaire",
    content: `Les salons Le Cercle sont implantés au sein des centres Casa Padel. Casa Padel est partenaire de Le Cercle ; l'édition de ce site relève de la société ${editor.name}.`,
  },
  {
    title: "Hébergement",
    content: `${host.name}\n${host.location}\n${host.url}`,
  },
  {
    title: "Conception et développement",
    content: `${developer.brand}, exploité par ${developer.owner}\n${developer.city} · SIRET ${developer.siret}\n${developer.url}`,
  },
  {
    title: "Propriété intellectuelle",
    content: "L'ensemble du contenu de ce site (textes, images, logotypes, design) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable. Les marques et logos Le Cercle et Casa Padel appartiennent à leurs titulaires respectifs.",
  },
  {
    title: "Données personnelles",
    content: `Le traitement de vos données personnelles est décrit dans notre politique de confidentialité. Vous pouvez exercer vos droits d'accès, de rectification et de suppression par e-mail à ${editor.email}.`,
  },
  {
    title: "Cookies",
    content: "Des traceurs peuvent être utilisés pour le fonctionnement du site et la mesure d'audience. Leur gestion est détaillée dans la page Cookies.",
  },
  {
    title: "Responsabilité",
    content: "Le Cercle s'efforce d'assurer l'exactitude des informations diffusées sur ce site. Toutefois, il ne peut garantir l'exhaustivité ou l'absence d'erreur. Les tarifs et horaires sont donnés à titre indicatif et peuvent évoluer.",
  },
  {
    title: "Réservation",
    content: "La réservation de prestations s'effectue via la plateforme Fresha, tiers indépendant. Le Cercle n'est pas responsable du fonctionnement de cette plateforme.",
  },
  {
    title: "Droit applicable",
    content: "Le présent site est soumis au droit français. En cas de litige, les tribunaux français sont compétents, sous réserve des dispositions d'ordre public applicables aux consommateurs.",
  },
];

export default function MentionsLegalesPage() {
  return (
    <div data-universe="mixed">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
              <h1 className="text-5xl uppercase leading-none" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.05em" }}>
                Mentions légales
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
              <Link href="/confidentialite" className="btn-ghost text-xs">Politique de confidentialité →</Link>
              <Link href="/cookies" className="btn-ghost text-xs">Gestion des cookies →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
