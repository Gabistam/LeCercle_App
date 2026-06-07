import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { salons } from "@/data/salons";

export const metadata: Metadata = {
  title: "Nos salons — Le Cercle en Région Parisienne",
  description:
    "Découvrez les trois salons Le Cercle à Saint-Denis, Asnières et Croissy-Beaubourg, intégrés aux centres Casa Padel.",
};

const serviceLabels: Record<string, string> = {
  barber: "Barber",
  grooming: "Grooming",
  nails: "Nail Bar",
  massage: "Massage",
  recovery: "Récupération",
  ritual: "Rituels",
};

export default function SalonsPage() {
  return (
    <div data-universe="mixed">
      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <p
            className="text-xs tracking-widest uppercase opacity-50"
            style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)", letterSpacing: "0.3em" }}
          >
            Région Parisienne
          </p>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
            <h1
              className="text-6xl md:text-8xl uppercase leading-none"
              style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}
            >
              Nos salons
            </h1>
          </div>
          <p
            className="text-sm leading-relaxed opacity-50 max-w-md"
            style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
          >
            Trois adresses premium intégrées aux centres Casa Padel. Univers Homme et Femme disponibles dans chaque salon.
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {salons.map((salon, i) => (
            <div
              key={salon.id}
              className="grid grid-cols-1 md:grid-cols-3 border"
              style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: "#171719" }}
            >
              {/* Image */}
              <div className="relative min-h-[200px] md:min-h-full overflow-hidden">
                <Image
                  src={salon.image}
                  alt={salon.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(23,23,25,0.5) 0%, transparent 60%)" }} />
                <div className="absolute top-3 left-3 px-2 py-0.5" style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", backdropFilter: "blur(4px)" }}>
                  Casa Padel
                </div>
              </div>

              {/* Info */}
              <div className="col-span-2 flex flex-col justify-between gap-4 p-8">
                <div className="flex flex-col gap-3">
                  <p
                    className="text-xs tracking-widest uppercase opacity-40"
                    style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
                  >
                    {String(i + 1).padStart(2, "0")} · Casa Padel
                  </p>
                  <h2
                    className="text-3xl uppercase tracking-wide"
                    style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)" }}
                  >
                    {salon.city}
                  </h2>
                  <p
                    className="text-sm opacity-40"
                    style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
                  >
                    {salon.address}, {salon.postalCode} {salon.city}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {salon.services.map((svc) => (
                      <span
                        key={svc}
                        className="px-2 py-0.5 border text-xs"
                        style={{
                          color: "#8A8A90",
                          borderColor: "rgba(201,168,76,0.15)",
                          fontFamily: "var(--font-barlow-cond, sans-serif)",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {serviceLabels[svc]}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/homme/reservation" className="btn-primary text-xs py-2 px-4">
                    Réserver Homme
                  </Link>
                  <Link href="/femme/reservation" className="btn-outline text-xs py-2 px-4">
                    Réserver Femme
                  </Link>
                  {salon.googleMapsUrl && (
                    <a
                      href={salon.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-xs"
                    >
                      Itinéraire ↗
                    </a>
                  )}
                  <Link href={`/salons/${salon.slug}`} className="btn-ghost text-xs">
                    Fiche salon →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
