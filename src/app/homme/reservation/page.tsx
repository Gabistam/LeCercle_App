import type { Metadata } from "next";
import Link from "next/link";
import { salons } from "@/data/salons";

export const metadata: Metadata = {
  title: "Réservation Homme — Choisissez votre salon",
  description:
    "Choisissez votre salon Le Cercle et réservez votre prestation barber ou grooming via Fresha.",
};

export default function HommeReservationPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
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
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {salons.map((salon) => (
            <div
              key={salon.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border"
              style={{ backgroundColor: "#1E1E21", borderColor: "rgba(201,168,76,0.2)" }}
            >
              <div className="flex flex-col gap-1">
                <p
                  className="text-xs tracking-widest uppercase opacity-40"
                  style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
                >
                  Casa Padel · {salon.department}
                </p>
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

              {salon.freshaUrlMen ? (
                <a
                  href={salon.freshaUrlMen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shrink-0"
                >
                  Réserver ici
                </a>
              ) : (
                <div className="flex flex-col items-end gap-1">
                  <span
                    className="text-xs opacity-30 italic"
                    style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)" }}
                  >
                    Lien Fresha à venir
                  </span>
                  <button disabled className="btn-outline opacity-30 cursor-not-allowed text-xs py-2 px-4">
                    Bientôt disponible
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Info Fresha */}
      <section
        className="py-12 px-6 border-t"
        style={{ backgroundColor: "#171719", borderColor: "rgba(201,168,76,0.1)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          <p
            className="text-xs tracking-widest uppercase opacity-40"
            style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
          >
            Comment ça fonctionne
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
            {[
              { n: "1", t: "Choisissez votre salon", d: "Sélectionnez l'adresse la plus proche." },
              { n: "2", t: "Choisissez votre prestation", d: "Coupe, barbe, rituel ou soin capillaire." },
              { n: "3", t: "Confirmez sur Fresha", d: "Créneau, coordonnées et paiement sécurisé." },
            ].map((step) => (
              <div key={step.n} className="flex flex-col gap-2">
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
