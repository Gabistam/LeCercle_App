import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { salons } from "@/data/salons";

export const metadata: Metadata = {
  title: "Réservation Homme — Choisissez votre salon",
  description:
    "Choisissez votre salon Le Cercle et réservez votre prestation barber ou grooming via Fresha.",
};

const serviceHighlights = ["Coupe", "Barbe", "Rituel", "Soin"];

export default function HommeReservationPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 px-6 overflow-hidden"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/men/men-barber-chair.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,12,12,0.78)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0C0C0C 45%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C0C0C 0%, transparent 40%)" }} />
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-6 relative z-10">
          <p
            className="text-xs tracking-widest uppercase opacity-50"
            style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)", letterSpacing: "0.3em" }}
          >
            Univers Homme
          </p>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
            <h1
              className="text-6xl md:text-7xl uppercase leading-none"
              style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}
            >
              Réserver
            </h1>
          </div>
          <p
            className="text-sm leading-relaxed opacity-50 max-w-md"
            style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
          >
            Sélectionnez votre salon. Vous serez redirigé vers Fresha pour choisir votre prestation, votre créneau et finaliser votre réservation.
          </p>

          {/* Services rapides */}
          <div className="flex items-center gap-4 mt-2 flex-wrap">
            {serviceHighlights.map((s) => (
              <span
                key={s}
                className="text-xs tracking-widest uppercase px-3 py-1.5 border"
                style={{ color: "#C9A84C", borderColor: "rgba(201,168,76,0.3)", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Salons */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {salons.map((salon) => (
            <div
              key={salon.id}
              className="overflow-hidden border"
              style={{ backgroundColor: "#1E1E21", borderColor: "rgba(201,168,76,0.2)" }}
            >
              {/* Image du salon */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={salon.image}
                  alt={salon.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                  style={{ filter: "brightness(0.75) saturate(0.8)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1E1E21 0%, transparent 60%)" }} />
                <div className="absolute top-3 left-4">
                  <span
                    className="text-xs tracking-widest uppercase px-2 py-1"
                    style={{
                      backgroundColor: "rgba(12,12,12,0.7)",
                      color: "#C9A84C",
                      fontFamily: "var(--font-barlow-cond, sans-serif)",
                      border: "1px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    Casa Padel · {salon.department}
                  </span>
                </div>
              </div>

              {/* Infos + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 p-5">
                <div className="flex flex-col gap-1">
                  <p
                    className="text-2xl uppercase tracking-wide"
                    style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)" }}
                  >
                    {salon.city}
                  </p>
                  <p
                    className="text-xs opacity-40"
                    style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
                  >
                    {salon.address}, {salon.postalCode}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {salon.googleMapsUrl && (
                    <a
                      href={salon.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-xs py-2 px-3"
                    >
                      Itinéraire ↗
                    </a>
                  )}
                  {salon.freshaUrlMen ? (
                    <a
                      href={salon.freshaUrlMen}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Réserver ici
                    </a>
                  ) : (
                    <button disabled className="btn-outline opacity-30 cursor-not-allowed text-xs py-2 px-4">
                      Bientôt disponible
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section
        className="py-12 px-6 border-t"
        style={{ backgroundColor: "#171719", borderColor: "rgba(201,168,76,0.1)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <p
            className="text-xs tracking-widest uppercase opacity-40"
            style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
          >
            Comment ça fonctionne
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { n: "1", t: "Choisissez votre salon",      d: "Sélectionnez l'adresse la plus proche." },
              { n: "2", t: "Choisissez votre prestation", d: "Coupe, barbe, rituel ou soin capillaire." },
              { n: "3", t: "Confirmez sur Fresha",        d: "Créneau, coordonnées et paiement sécurisé." },
            ].map((step) => (
              <div
                key={step.n}
                className="flex flex-col gap-3 p-4 border"
                style={{ borderColor: "rgba(201,168,76,0.12)", backgroundColor: "rgba(201,168,76,0.03)" }}
              >
                <span
                  className="text-3xl opacity-30"
                  style={{ color: "#C9A84C", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)" }}
                >
                  {step.n}
                </span>
                <p className="text-sm font-medium" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>{step.t}</p>
                <p className="text-xs opacity-40" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-6" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/homme/services" className="btn-ghost text-xs">
            ← Voir toutes les prestations
          </Link>
        </div>
      </section>
    </>
  );
}
