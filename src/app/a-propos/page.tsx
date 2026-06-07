import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "À propos — Le concept Le Cercle x Casa Padel",
  description:
    "Le Cercle naît de la rencontre entre l'expérience sportive des centres Casa Padel et l'exigence du soin premium. Découvrez notre concept.",
};

const timeline = [
  {
    label: "Le constat",
    title: "Sport et bien-être, séparés.",
    body: "Les centres sportifs premium proposent une expérience sportive soignée. Mais le soin et la récupération restent absents ou externalisés. Le Cercle comble ce manque.",
  },
  {
    label: "La rencontre",
    title: "Le Cercle x Casa Padel.",
    body: "Casa Padel est positionné comme un lieu de vie sportif, convivial et premium. Ses clubs rassemblent une clientèle CSP++, active et exigeante. C'est là que Le Cercle s'intègre naturellement.",
  },
  {
    label: "Le concept",
    title: "Soin intégré. Avant, pendant, après.",
    body: "Le Cercle propose une maison de soins premium à l'intérieur même des centres : barber, grooming, nail bar, massage et récupération après sport — dans un cadre confidentiel et élégant.",
  },
  {
    label: "La vision",
    title: "Un réseau. Un standard.",
    body: "Chaque ouverture dans un nouveau centre Casa Padel respecte le même niveau d'exigence. Mêmes rituels, même ambiance, mêmes produits. Le Cercle est un concept scalable pensé pour le réseau.",
  },
];

const pillars = [
  { title: "Excellence", body: "Praticiens experts, produits sélectionnés, gestes maîtrisés.", icon: "/icons/icon-scissors.svg" },
  { title: "Élégance", body: "Matériaux nobles, lumière soignée, ambiance confidentielle.", icon: "/icons/icon-razor.svg" },
  { title: "Appartenance", body: "Esprit club, clientèle qualifiée, sentiment de privilège.", icon: "/icons/icon-nail-polish.svg" },
  { title: "Récupération", body: "Soins pensés pour l'après-match, avec des protocoles sport-santé.", icon: "/icons/icon-padel-racket.svg" },
  { title: "Fluidité", body: "Réservation simple, expérience sans friction de A à Z.", icon: "/icons/icon-arrow-right.svg" },
];

export default function AProposPage() {
  return (
    <div data-universe="mixed">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 100%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-6 max-w-3xl">
            <p className="text-xs tracking-widest uppercase opacity-50" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)", letterSpacing: "0.3em" }}>
              Notre histoire
            </p>
            <div className="flex flex-col gap-2">
              <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
              <h1 className="text-6xl md:text-8xl uppercase leading-none" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.05em" }}>
                À propos
              </h1>
            </div>
            <p className="text-base leading-relaxed opacity-60 max-w-lg" style={{ color: "#F1F1F1", fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic" }}>
              Le soin après l&apos;effort. L&apos;élégance avant tout. Une maison de soins premium née à l&apos;intérieur des centres Casa Padel.
            </p>
          </div>
        </section>

        {/* Timeline concept */}
        <section className="py-24 px-6" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div
                key={item.label}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-t"
                style={{ borderColor: "rgba(201,168,76,0.12)" }}
              >
                <div className="md:col-span-2 flex flex-col gap-1">
                  <span className="text-xs tracking-widest uppercase opacity-30" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs tracking-widest uppercase opacity-50" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
                    {item.label}
                  </span>
                </div>
                <div className="md:col-span-10 flex flex-col gap-3">
                  <h2 className="text-3xl md:text-4xl uppercase tracking-wide" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}>
                    {item.title}
                  </h2>
                  <p className="text-sm leading-relaxed opacity-50 max-w-2xl" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pilliers */}
        <section className="py-24 px-6" style={{ backgroundColor: "#171719" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
              <h2 className="text-5xl md:text-6xl uppercase" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}>
                Nos piliers
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-px" style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
              {pillars.map((p) => (
                <div key={p.title} className="flex flex-col gap-3 p-6" style={{ backgroundColor: "#171719" }}>
                  <img src={p.icon} aria-hidden width={20} height={20} style={{ opacity: 0.6, filter: "invert(72%) sepia(40%) saturate(400%) hue-rotate(5deg)" }} />
                  <h3 className="text-xl uppercase tracking-wide" style={{ color: "#C9A84C", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)" }}>
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed opacity-50" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casa Padel */}
        <section className="py-24 px-6" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <p className="section-overline" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>Partenaire</p>
              <h2 className="text-5xl uppercase" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}>
                Pourquoi<br />Casa Padel
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  "Un réseau de centres sportifs premium en pleine expansion.",
                  "Une clientèle CSP++ naturellement alignée avec le positionnement Le Cercle.",
                  "Des espaces conçus pour accueillir des services complémentaires.",
                  "Un esprit club, convivial et premium, cohérent avec notre identité.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#C9A84C" }} />
                    <p className="text-sm opacity-50" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-h-[360px] relative overflow-hidden">
              <Image
                src="/images/recovery/recovery-after-padel.webp"
                alt="Casa Padel — partenaire Le Cercle"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to left, #0C0C0C 0%, transparent 40%)" }} />
              <div className="absolute top-0 left-0 w-12 h-px" style={{ backgroundColor: "#C9A84C", opacity: 0.4 }} />
              <div className="absolute top-0 left-0 w-px h-12" style={{ backgroundColor: "#C9A84C", opacity: 0.4 }} />
              <div className="absolute bottom-0 right-0 w-12 h-px" style={{ backgroundColor: "#C9A84C", opacity: 0.3 }} />
              <div className="absolute bottom-0 right-0 w-px h-12" style={{ backgroundColor: "#C9A84C", opacity: 0.3 }} />
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-16 px-6 border-t" style={{ backgroundColor: "#0C0C0C", borderColor: "rgba(201,168,76,0.1)" }}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            <Link href="/homme" className="btn-primary">Univers Homme</Link>
            <Link href="/femme" className="btn-outline">Univers Femme</Link>
            <Link href="/investisseurs" className="btn-ghost">Investisseurs →</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
