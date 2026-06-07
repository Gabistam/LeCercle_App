import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Gestion des cookies — Le Cercle",
};

export default function CookiesPage() {
  return (
    <div data-universe="mixed">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
              <h1 className="text-5xl uppercase leading-none" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.05em" }}>
                Cookies
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {[
              {
                title: "Qu'est-ce qu'un cookie ?",
                content: "Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d'un site web. Il permet au site de mémoriser certaines informations sur votre navigation.",
              },
              {
                title: "Cookies utilisés sur ce site",
                content: "Ce site utilise uniquement des cookies strictement nécessaires à son fonctionnement. Aucun cookie de tracking publicitaire n'est déposé sans votre consentement explicite.",
              },
              {
                title: "Cookies strictement nécessaires",
                content: "Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés. Ils n'enregistrent aucune information personnellement identifiable.",
              },
              {
                title: "Cookies analytiques (optionnels)",
                content: "Si des outils d'analyse sont activés à l'avenir (ex. : Google Analytics, Plausible), ils feront l'objet d'un recueil de consentement préalable via un bandeau dédié.",
              },
              {
                title: "Gestion de vos préférences",
                content: "Vous pouvez à tout moment modifier vos préférences cookies via les paramètres de votre navigateur. La désactivation de certains cookies peut affecter l'expérience de navigation.",
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
              <Link href="/confidentialite" className="btn-ghost text-xs">Confidentialité →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
