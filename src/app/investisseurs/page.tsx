import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { salons } from "@/data/salons";

export const metadata: Metadata = {
  title: "Investisseurs — Le Cercle, concept premium scalable",
  description:
    "Le Cercle est un modèle réplicable de soins premium intégré aux centres sportifs. Découvrez le potentiel du concept réseau.",
};

const revenus = [
  "Prestations unitaires Homme & Femme",
  "Packs signature & abonnements Club Member",
  "Vente de produits grooming & beauté",
  "Partenariats marques premium",
  "Offres entreprises & événements privés",
  "Fidélisation des membres de clubs",
];

const atouts = [
  { n: "01", t: "Clientèle captive", d: "Joueurs de padel CSP++ déjà présents dans le centre, sans coût d'acquisition." },
  { n: "02", t: "Intégration naturelle", d: "Le soin prolonge l'expérience sportive — avant, pendant ou après un match." },
  { n: "03", t: "Concept scalable", d: "Même standard, même identité visuelle, même niveau d'exigence dans chaque centre." },
  { n: "04", t: "Marché en croissance", d: "Le grooming masculin et le bien-être féminin sont des marchés en forte progression." },
  { n: "05", t: "Partenaire solide", d: "Casa Padel est le premier réseau de padel premium en France avec une forte expansion." },
  { n: "06", t: "Multi-revenus", d: "Prestations, produits, abonnements et événements — plusieurs lignes de revenus complémentaires." },
];

export default function InvestisseursPage() {
  return (
    <div data-universe="mixed">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 120%, rgba(201,168,76,0.1) 0%, transparent 55%)" }} />
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-6">
            <p className="text-xs tracking-widest uppercase opacity-50" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)", letterSpacing: "0.3em" }}>
              Partenaires & Investisseurs
            </p>
            <div className="flex flex-col gap-2">
              <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
              <h1 className="text-6xl md:text-8xl uppercase leading-none" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.05em" }}>
                Un concept<br /><span style={{ color: "#C9A84C" }}>pensé</span><br />pour le réseau
              </h1>
            </div>
            <p className="text-sm leading-relaxed opacity-50 max-w-md" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>
              Le Cercle est un modèle réplicable de maison de soins premium intégrée aux centres sportifs. Découvrez le potentiel du concept.
            </p>
            <a href="#contact-investisseurs" className="btn-primary self-start mt-4">
              Nous contacter
            </a>
          </div>
        </section>

        {/* Le marché */}
        <section className="py-24 px-6 border-t" style={{ backgroundColor: "#171719", borderColor: "rgba(201,168,76,0.1)" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
                <h2 className="text-5xl uppercase" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}>
                  Le marché
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { stat: "+35%", label: "Croissance du marché grooming masculin en France (2020–2024)" },
                  { stat: "12M+", label: "Licenciés et pratiquants de padel en Europe" },
                  { stat: "CSP++", label: "Clientèle cible — revenus élevés, sensibles au bien-être et au style" },
                ].map((item) => (
                  <div key={item.stat} className="flex items-start gap-6 pt-4 border-t" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                    <span className="text-4xl shrink-0" style={{ color: "#C9A84C", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)" }}>{item.stat}</span>
                    <p className="text-sm opacity-50 mt-2" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
                <h2 className="text-5xl uppercase" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}>
                  Les revenus
                </h2>
              </div>
              <div className="flex flex-col gap-2">
                {revenus.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
                    <span className="text-xs opacity-30" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Les atouts */}
        <section className="py-24 px-6" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
              <h2 className="text-5xl uppercase" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}>
                Pourquoi Le Cercle
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
              {atouts.map((a) => (
                <div key={a.n} className="flex flex-col gap-3 p-8" style={{ backgroundColor: "#0C0C0C" }}>
                  <span className="text-xs opacity-30" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>{a.n}</span>
                  <h3 className="text-2xl uppercase" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}>{a.t}</h3>
                  <p className="text-xs leading-relaxed opacity-50" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Centres pilotes */}
        <section className="py-24 px-6 border-t" style={{ backgroundColor: "#171719", borderColor: "rgba(201,168,76,0.1)" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
              <h2 className="text-5xl uppercase" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}>
                Centres pilotes
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {salons.map((salon) => (
                <div key={salon.id} className="flex flex-col gap-3 p-6 border" style={{ backgroundColor: "#1E1E21", borderColor: "rgba(201,168,76,0.15)" }}>
                  <p className="text-xs opacity-40" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>Casa Padel · {salon.department}</p>
                  <h3 className="text-2xl uppercase" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)" }}>{salon.city}</h3>
                  <p className="text-xs opacity-40" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>{salon.address}</p>
                  <Link href={`/salons/${salon.slug}`} className="text-xs opacity-40 hover:opacity-70 transition-opacity mt-2" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
                    Voir la fiche →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulaire contact */}
        <section id="contact-investisseurs" className="py-24 px-6" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
              <h2 className="text-5xl uppercase" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}>
                Parlons-en
              </h2>
              <p className="text-sm opacity-50" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>
                Vous êtes investisseur, exploitant ou partenaire potentiel ? Contactez-nous.
              </p>
            </div>

            <form className="flex flex-col gap-4">
              {[
                { id: "prenom", label: "Prénom", type: "text", required: true },
                { id: "nom", label: "Nom", type: "text", required: true },
                { id: "societe", label: "Société", type: "text", required: false },
                { id: "fonction", label: "Fonction", type: "text", required: false },
                { id: "email", label: "Email", type: "email", required: true },
                { id: "telephone", label: "Téléphone", type: "tel", required: false },
              ].map((field) => (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-widest uppercase" style={{ color: "#8A8A90", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
                    {field.label}{field.required && " *"}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required={field.required}
                    className="w-full px-4 py-3 border bg-transparent text-sm outline-none transition-colors focus:border-opacity-60"
                    style={{
                      borderColor: "rgba(201,168,76,0.2)",
                      color: "#F1F1F1",
                      fontFamily: "var(--font-barlow, sans-serif)",
                      fontWeight: 300,
                    }}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase" style={{ color: "#8A8A90", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
                  Type de demande
                </label>
                <select
                  id="type"
                  name="type"
                  className="w-full px-4 py-3 border bg-transparent text-sm outline-none"
                  style={{ borderColor: "rgba(201,168,76,0.2)", color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300, backgroundColor: "#0C0C0C" }}
                >
                  <option value="">Sélectionner...</option>
                  <option value="investissement">Investissement</option>
                  <option value="partenariat">Partenariat commercial</option>
                  <option value="franchise">Franchise / déploiement</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase" style={{ color: "#8A8A90", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border bg-transparent text-sm outline-none resize-none"
                  style={{ borderColor: "rgba(201,168,76,0.2)", color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
                />
              </div>

              <div className="flex items-start gap-3 mt-1">
                <input type="checkbox" id="rgpd" name="rgpd" required className="mt-0.5" />
                <label htmlFor="rgpd" className="text-xs opacity-40" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>
                  J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément à la politique de confidentialité.
                </label>
              </div>

              <button type="submit" className="btn-primary self-start mt-2">
                Envoyer
              </button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
