import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { salons } from "@/data/salons";

export const metadata: Metadata = {
  title: "Contact — Le Cercle",
  description: "Contactez Le Cercle pour toute information sur nos prestations, salons ou partenariats.",
};

export default function ContactPage() {
  return (
    <div data-universe="mixed">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-20 px-6" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <p className="text-xs tracking-widest uppercase opacity-50" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)", letterSpacing: "0.3em" }}>
              Nous écrire
            </p>
            <div className="flex flex-col gap-2">
              <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
              <h1 className="text-6xl md:text-8xl uppercase leading-none" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.05em" }}>
                Contact
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Formulaire */}
            <form className="flex flex-col gap-4">
              <h2 className="text-2xl uppercase mb-2" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}>
                Formulaire de contact
              </h2>
              {[
                { id: "prenom", label: "Prénom", type: "text", required: true },
                { id: "nom", label: "Nom", type: "text", required: true },
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
                    className="w-full px-4 py-3 border bg-transparent text-sm outline-none"
                    style={{ borderColor: "rgba(201,168,76,0.2)", color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase" style={{ color: "#8A8A90", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>Sujet *</label>
                <select
                  id="sujet"
                  name="sujet"
                  className="w-full px-4 py-3 border bg-transparent text-sm outline-none"
                  style={{ borderColor: "rgba(201,168,76,0.2)", color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300, backgroundColor: "#0C0C0C" }}
                >
                  <option value="">Sélectionner...</option>
                  <option value="information">Demande d&apos;information</option>
                  <option value="presse">Presse & médias</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase" style={{ color: "#8A8A90", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border bg-transparent text-sm outline-none resize-none"
                  style={{ borderColor: "rgba(201,168,76,0.2)", color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="rgpd" name="rgpd" required className="mt-0.5" />
                <label htmlFor="rgpd" className="text-xs opacity-40" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>
                  J&apos;accepte le traitement de mes données conformément à la politique de confidentialité.
                </label>
              </div>

              <button type="submit" className="btn-primary self-start mt-2">Envoyer</button>
            </form>

            {/* Salons */}
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl uppercase" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}>
                Nos adresses
              </h2>
              <div className="flex flex-col gap-4">
                {salons.map((salon) => (
                  <div key={salon.id} className="flex flex-col gap-2 p-5 border" style={{ backgroundColor: "#171719", borderColor: "rgba(201,168,76,0.15)" }}>
                    <p className="text-xs opacity-40" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>Casa Padel · {salon.department}</p>
                    <p className="text-xl uppercase" style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)" }}>{salon.city}</p>
                    <p className="text-xs opacity-40" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>
                      {salon.address}<br />{salon.postalCode} {salon.city}
                    </p>
                    {salon.googleMapsUrl && (
                      <a href={salon.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs opacity-40 hover:opacity-70 transition-opacity mt-1" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
                        Itinéraire ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs opacity-30" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>
                Pour réserver une prestation, utilisez les boutons Réserver sur les pages Univers Homme ou Univers Femme. La réservation s&apos;effectue via Fresha.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
