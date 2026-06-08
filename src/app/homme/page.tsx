import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SalonsPreview from "@/components/sections/SalonsPreview";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Espace Homme — Barber & Grooming Premium",
  description:
    "Coupe, barbe, rituel complet et soins capillaires dans un cadre club privé au sein des centres Casa Padel.",
};

const featuredServices = services.filter(
  (s) => s.audience === "men" && s.isFeatured
);

export default function HommePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex flex-col justify-end min-h-screen px-6 pb-16 pt-32 overflow-hidden"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        {/* Image de fond */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/men/men-hero-barber.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,12,12,0.68)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C0C0C 0%, transparent 50%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.12) 0%, transparent 55%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6 max-w-3xl">
            <p
              className="text-xs tracking-widest uppercase"
              style={{
                color: "#C9A84C",
                fontFamily: "var(--font-barlow-cond, sans-serif)",
                opacity: 0.7,
                letterSpacing: "0.3em",
              }}
            >
              Le Cercle — Espace Homme
            </p>
            <h1
              className="text-7xl md:text-[10rem] uppercase leading-none"
              style={{
                color: "#F1F1F1",
                fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
                letterSpacing: "0.05em",
                lineHeight: "0.9",
              }}
            >
              Club
              <br />
              <span style={{ color: "#C9A84C" }}>Privé</span>
              <br />
              Urbain
            </h1>
            <p
              className="text-base leading-relaxed opacity-50 max-w-md"
              style={{
                color: "#F1F1F1",
                fontFamily: "var(--font-barlow, sans-serif)",
                fontWeight: 300,
              }}
            >
              Coupe, barbe et rituels signature dans un cadre noir, laiton et cuir. L&apos;expérience barber premium au sein des centres Casa Padel.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Link href="/homme/reservation" className="btn-primary">
                Réserver
              </Link>
              <Link href="/homme/services" className="btn-outline">
                Nos prestations
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative number */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-[0.03] select-none"
          style={{
            color: "#F1F1F1",
            fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
            fontSize: "22rem",
            lineHeight: 1,
          }}
        >
          H
        </div>
      </section>

      {/* Services phares */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "#171719" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p
              className="section-overline"
              style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
            >
              Prestations
            </p>
            <div className="flex flex-col gap-2">
              <div className="divider-accent" />
              <h2
                className="text-5xl md:text-6xl uppercase leading-tight"
                style={{
                  color: "#F1F1F1",
                  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
                  letterSpacing: "0.06em",
                }}
              >
                Le rituel
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,168,76,0.15)" }}>
            {featuredServices.map((svc, i) => (
              <div
                key={svc.id}
                className="flex flex-col gap-3 p-8"
                style={{ backgroundColor: "#171719" }}
              >
                <span
                  className="text-xs tracking-widest opacity-30"
                  style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-2xl uppercase tracking-wide"
                  style={{
                    color: "#F1F1F1",
                    fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-50 flex-1"
                  style={{
                    color: "#F1F1F1",
                    fontFamily: "var(--font-barlow, sans-serif)",
                    fontWeight: 300,
                  }}
                >
                  {svc.shortDescription}
                </p>
                <div className="flex items-center justify-between mt-2 pt-4 border-t" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
                  <span
                    className="text-xs opacity-40"
                    style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
                  >
                    {svc.durationLabel}
                  </span>
                  <span
                    className="text-base font-light"
                    style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
                  >
                    {svc.priceLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex">
            <Link href="/homme/services" className="btn-outline">
              Toutes les prestations
            </Link>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <p
              className="section-overline"
              style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
            >
              L&apos;expérience
            </p>
            <h2
              className="text-5xl md:text-6xl uppercase leading-tight"
              style={{
                color: "#F1F1F1",
                fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
                letterSpacing: "0.06em",
              }}
            >
              Le salon
            </h2>
            <ul className="flex flex-col gap-4 mt-2">
              {[
                { label: "Fauteuils barber", desc: "Cuir noir, métal brossé, esprit new-yorkais.", icon: "/icons/icon-barber-chair.svg" },
                { label: "Coffee bar", desc: "Expresso ou eau infusée servis à chaque visite.", icon: "/icons/icon-clock.svg" },
                { label: "Coin TV", desc: "Ambiance club avec écran intégré.", icon: "/icons/icon-razor.svg" },
                { label: "Produits", desc: "Sélection de produits grooming disponibles à l'achat.", icon: "/icons/icon-scissors.svg" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-1 pt-4 border-t"
                  style={{ borderColor: "rgba(201,168,76,0.15)" }}
                >
                  <span
                    className="text-sm font-medium tracking-wide uppercase"
                    style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-xs opacity-50"
                    style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
                  >
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-h-[400px] relative overflow-hidden">
            <Image
              src="/images/men/men-barber-chair.webp"
              alt="Fauteuil barber Le Cercle"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0C0C0C 0%, transparent 30%)" }} />
            <div className="absolute top-0 left-0 w-12 h-px" style={{ backgroundColor: "#C9A84C", opacity: 0.5 }} />
            <div className="absolute top-0 left-0 w-px h-12" style={{ backgroundColor: "#C9A84C", opacity: 0.5 }} />
            <div className="absolute bottom-0 right-0 w-12 h-px" style={{ backgroundColor: "#C9A84C", opacity: 0.3 }} />
            <div className="absolute bottom-0 right-0 w-px h-12" style={{ backgroundColor: "#C9A84C", opacity: 0.3 }} />
          </div>
        </div>
      </section>

      <SalonsPreview universe="men" />
    </>
  );
}
