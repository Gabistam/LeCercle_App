import type { Metadata } from "next";
import Link from "next/link";
import { salons } from "@/data/salons";

export const metadata: Metadata = {
  title: "Réservation Femme — Choisissez votre salon",
  description:
    "Choisissez votre salon Le Cercle et réservez votre soin beauté, manucure ou massage via Fresha.",
};

export default function FemmeReservationPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <p
            className="text-xs tracking-widest uppercase opacity-60"
            style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)", letterSpacing: "0.3em" }}
          >
            Univers Femme
          </p>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-px" style={{ backgroundColor: "#B89A5A" }} />
            <h1
              className="text-5xl md:text-6xl leading-none italic"
              style={{ color: "#4A3428", fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300 }}
            >
              Réserver
            </h1>
          </div>
          <p
            className="text-sm leading-relaxed opacity-60 max-w-md"
            style={{ color: "#4A3428", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 300 }}
          >
            Choisissez votre salon. Vous serez redirigée vers Fresha pour sélectionner votre soin, votre créneau et finaliser la réservation.
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {salons.map((salon) => (
            <div
              key={salon.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border"
              style={{ backgroundColor: "#F3EDE2", borderColor: "rgba(184,154,90,0.2)", borderRadius: "6px" }}
            >
              <div className="flex flex-col gap-1">
                <p
                  className="text-xs tracking-widest uppercase opacity-40"
                  style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)" }}
                >
                  Casa Padel · {salon.department}
                </p>
                <p
                  className="text-xl italic"
                  style={{ color: "#4A3428", fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 400 }}
                >
                  {salon.city}
                </p>
                <p
                  className="text-xs opacity-50"
                  style={{ color: "#4A3428", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 300 }}
                >
                  {salon.address}, {salon.postalCode}
                </p>
              </div>

              {salon.freshaUrlWomen ? (
                <a
                  href={salon.freshaUrlWomen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shrink-0"
                >
                  Réserver ici
                </a>
              ) : (
                <div className="flex flex-col items-end gap-1">
                  <span
                    className="text-xs opacity-40 italic"
                    style={{ color: "#4A3428", fontFamily: "var(--font-jost, sans-serif)" }}
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
        style={{ backgroundColor: "#F3EDE2", borderColor: "rgba(184,154,90,0.15)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          <p
            className="text-xs tracking-widest uppercase opacity-40"
            style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)" }}
          >
            Comment ça fonctionne
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
            {[
              { n: "1", t: "Choisissez votre salon", d: "Sélectionnez l'adresse la plus proche." },
              { n: "2", t: "Choisissez votre soin", d: "Manucure, massage, rituel ou beauté des pieds." },
              { n: "3", t: "Confirmez sur Fresha", d: "Créneau, coordonnées et paiement sécurisé." },
            ].map((step) => (
              <div key={step.n} className="flex flex-col gap-2">
                <span
                  className="text-3xl italic opacity-30"
                  style={{ color: "#B89A5A", fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                >
                  {step.n}
                </span>
                <p className="text-sm" style={{ color: "#4A3428", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 500 }}>{step.t}</p>
                <p className="text-xs opacity-50" style={{ color: "#4A3428", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 300 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/femme/services" className="btn-ghost text-xs" style={{ color: "#A89080" }}>
            ← Voir tous nos soins
          </Link>
        </div>
      </section>
    </>
  );
}
