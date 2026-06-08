import type { Metadata } from "next";
import Link from "next/link";
import { salons } from "@/data/salons";
import SalonCard from "@/components/salons/SalonCard";

export const metadata: Metadata = {
  title: "Salons Homme — Barber & Grooming en Région Parisienne",
  description:
    "Retrouvez Le Cercle Homme à Saint-Denis, Asnières et Croissy-Beaubourg, au sein des centres Casa Padel.",
};

export default function HommeSalonsPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <p
            className="text-xs tracking-widest uppercase opacity-50"
            style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)", letterSpacing: "0.3em" }}
          >
            Espace Homme
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
            Trois adresses premium intégrées aux centres Casa Padel en Région Parisienne.
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {salons.map((salon) => (
              <SalonCard key={salon.id} salon={salon} universe="men" />
            ))}
          </div>

          {/* Partenariat Casa Padel */}
          <div
            className="mt-8 p-8 border-t"
            style={{ borderColor: "rgba(201,168,76,0.15)" }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p
                  className="text-xs tracking-widest uppercase opacity-50"
                  style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
                >
                  En partenariat avec
                </p>
                <p
                  className="text-2xl uppercase tracking-wide"
                  style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)" }}
                >
                  Casa Padel
                </p>
                <p
                  className="text-xs opacity-40 max-w-md"
                  style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
                >
                  Chaque salon Le Cercle est intégré à un centre Casa Padel, vous permettant de combiner votre session de padel avec un rituel de soin premium.
                </p>
              </div>
              <Link href="/homme/reservation" className="btn-primary shrink-0">
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
