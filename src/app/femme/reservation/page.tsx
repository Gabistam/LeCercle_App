import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { salons } from "@/data/salons";

export const metadata: Metadata = {
  title: "Réservation Femme — Choisissez votre salon",
  description:
    "Choisissez votre salon Le Cercle et réservez votre soin beauté, manucure ou massage via Fresha.",
};

const serviceHighlights = [
  { icon: "/icons/icon-nail-polish.svg",  label: "Nail Bar" },
  { icon: "/icons/icon-massage.svg",      label: "Massage" },
  { icon: "/icons/icon-hand.svg",         label: "Rituels" },
  { icon: "/icons/icon-clock.svg",        label: "Soins" },
];

export default function FemmeReservationPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 px-6 overflow-hidden"
        style={{ backgroundColor: "#FAF7F2" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/women/women-manicure-detail.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(250,247,242,0.80)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #FAF7F2 45%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #FAF7F2 0%, transparent 40%)" }} />
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-6 relative z-10">
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

          {/* Services rapides */}
          <div className="flex items-center gap-6 mt-2">
            {serviceHighlights.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <div
                  className="w-10 h-10 flex items-center justify-center border"
                  style={{ borderColor: "rgba(184,154,90,0.3)", backgroundColor: "rgba(184,154,90,0.08)", borderRadius: "50%" }}
                >
                  <Image
                    src={s.icon}
                    alt={s.label}
                    width={17}
                    height={17}
                    unoptimized
                    style={{ opacity: 0.65, filter: "invert(55%) sepia(30%) saturate(500%) hue-rotate(5deg)" }}
                  />
                </div>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)", opacity: 0.65 }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salons */}
      <section className="py-16 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {salons.map((salon) => (
            <div
              key={salon.id}
              className="overflow-hidden border"
              style={{ backgroundColor: "#F3EDE2", borderColor: "rgba(184,154,90,0.2)", borderRadius: "6px" }}
            >
              {/* Image du salon */}
              <div className="relative h-40 overflow-hidden" style={{ borderRadius: "6px 6px 0 0" }}>
                <Image
                  src={salon.image}
                  alt={salon.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                  style={{ filter: "brightness(0.85) saturate(0.9)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #F3EDE2 0%, transparent 60%)" }}
                />
                <div className="absolute top-3 left-4">
                  <span
                    className="text-xs tracking-widest uppercase px-2 py-1"
                    style={{
                      backgroundColor: "rgba(250,247,242,0.82)",
                      color: "#B89A5A",
                      fontFamily: "var(--font-jost, sans-serif)",
                      border: "1px solid rgba(184,154,90,0.3)",
                      borderRadius: "2px",
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
                    className="text-xl italic"
                    style={{ color: "#4A3428", fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 400 }}
                  >
                    {salon.city}
                  </p>
                  <p
                    className="text-xs opacity-50 flex items-center gap-2"
                    style={{ color: "#4A3428", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 300 }}
                  >
                    <Image
                      src="/icons/icon-location-pin.svg"
                      alt=""
                      width={12}
                      height={12}
                      unoptimized
                      style={{ opacity: 0.5, filter: "invert(35%) sepia(20%) saturate(400%) hue-rotate(5deg)" }}
                    />
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
                      style={{ color: "#A89080" }}
                    >
                      Itinéraire ↗
                    </a>
                  )}
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
        style={{ backgroundColor: "#F3EDE2", borderColor: "rgba(184,154,90,0.15)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <p
            className="text-xs tracking-widest uppercase opacity-40"
            style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)" }}
          >
            Comment ça fonctionne
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { n: "1", icon: "/icons/icon-location-pin.svg", t: "Choisissez votre salon", d: "Sélectionnez l'adresse la plus proche." },
              { n: "2", icon: "/icons/icon-nail-polish.svg",  t: "Choisissez votre soin", d: "Manucure, massage, rituel ou beauté des pieds." },
              { n: "3", icon: "/icons/icon-clock.svg",        t: "Confirmez sur Fresha", d: "Créneau, coordonnées et paiement sécurisé." },
            ].map((step) => (
              <div
                key={step.n}
                className="flex flex-col gap-3 p-4 border"
                style={{ borderColor: "rgba(184,154,90,0.15)", backgroundColor: "rgba(184,154,90,0.04)", borderRadius: "4px" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(184,154,90,0.12)", border: "1px solid rgba(184,154,90,0.25)", borderRadius: "50%" }}
                  >
                    <Image
                      src={step.icon}
                      alt=""
                      width={14}
                      height={14}
                      unoptimized
                      style={{ opacity: 0.65, filter: "invert(55%) sepia(30%) saturate(500%) hue-rotate(5deg)" }}
                    />
                  </div>
                  <span
                    className="text-2xl italic opacity-25"
                    style={{ color: "#B89A5A", fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                  >
                    {step.n}
                  </span>
                </div>
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
