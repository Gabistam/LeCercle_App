import type { Metadata } from "next";
import Link from "next/link";
import { salons } from "@/data/salons";
import SalonCard from "@/components/salons/SalonCard";

export const metadata: Metadata = {
  title: "Salons Femme — Beauty Studio en Région Parisienne",
  description:
    "Retrouvez Le Cercle Femme à Saint-Denis, Asnières et Croissy-Beaubourg, au sein des centres Casa Padel.",
};

export default function FemmeSalonsPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <p
            className="text-xs tracking-widest uppercase opacity-60"
            style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)", letterSpacing: "0.3em" }}
          >
            Univers Femme
          </p>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-px" style={{ backgroundColor: "#B89A5A" }} />
            <h1
              className="text-5xl md:text-7xl leading-none italic"
              style={{ color: "#4A3428", fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300 }}
            >
              Nos salons
            </h1>
          </div>
          <p
            className="text-sm leading-relaxed opacity-60 max-w-md"
            style={{ color: "#4A3428", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 300 }}
          >
            Trois adresses premium au cœur des centres Casa Padel en Région Parisienne.
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {salons.map((salon) => (
              <SalonCard key={salon.id} salon={salon} universe="women" />
            ))}
          </div>

          <div
            className="mt-8 p-8 border-t"
            style={{ borderColor: "rgba(184,154,90,0.15)" }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p
                  className="text-xs tracking-widest uppercase opacity-50"
                  style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)" }}
                >
                  En partenariat avec
                </p>
                <p
                  className="text-xl italic"
                  style={{ color: "#4A3428", fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 400 }}
                >
                  Casa Padel
                </p>
                <p
                  className="text-xs opacity-50 max-w-md"
                  style={{ color: "#4A3428", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 300 }}
                >
                  Chaque salon Le Cercle est intégré à un centre Casa Padel, pour prolonger votre expérience sportive par un moment de soin et de beauté.
                </p>
              </div>
              <Link href="/femme/reservation" className="btn-primary shrink-0">
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
