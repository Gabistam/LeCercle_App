import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SalonsPreview from "@/components/sections/SalonsPreview";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Univers Femme — Beauty Studio & Nail Bar Premium",
  description:
    "Manucure, nail bar, massages et rituels bien-être dans un cadre crème, nude et or au sein des centres Casa Padel.",
};

const featuredServices = services.filter(
  (s) => s.audience === "women" && s.isFeatured
);

export default function FemmePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex flex-col justify-end min-h-screen px-6 pb-16 pt-32 overflow-hidden"
        style={{ backgroundColor: "#FAF7F2" }}
      >
        {/* Image de fond */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/women/women-hero-beauty-studio.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(250,247,242,0.62)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #FAF7F2 0%, transparent 50%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(184,154,90,0.18) 0%, transparent 55%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6 max-w-3xl">
            <p
              className="text-xs tracking-widest uppercase opacity-60"
              style={{
                color: "#B89A5A",
                fontFamily: "var(--font-jost, sans-serif)",
                letterSpacing: "0.3em",
              }}
            >
              Le Cercle — Univers Femme
            </p>
            <h1
              className="text-6xl md:text-8xl leading-none italic"
              style={{
                color: "#4A3428",
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontWeight: 300,
                letterSpacing: "0.02em",
                lineHeight: "0.95",
              }}
            >
              Beauty
              <br />
              <span style={{ color: "#B89A5A" }}>Studio</span>
              <br />
              Premium
            </h1>
            <p
              className="text-base leading-relaxed opacity-60 max-w-md"
              style={{
                color: "#4A3428",
                fontFamily: "var(--font-jost, sans-serif)",
                fontWeight: 300,
              }}
            >
              Nail bar, massages et rituels signature dans un espace doux, chaleureux et confidentiel, au cœur des centres Casa Padel.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Link href="/femme/reservation" className="btn-primary">
                Réserver
              </Link>
              <Link href="/femme/services" className="btn-outline">
                Nos prestations
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative letter */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-[0.04] select-none italic"
          style={{
            color: "#4A3428",
            fontFamily: "var(--font-cormorant, Georgia, serif)",
            fontSize: "22rem",
            lineHeight: 1,
          }}
        >
          F
        </div>
      </section>

      {/* Services phares */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "#F3EDE2" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p
              className="text-xs tracking-widest uppercase opacity-60"
              style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)" }}
            >
              Prestations
            </p>
            <div className="flex flex-col gap-2">
              <div className="w-10 h-px" style={{ backgroundColor: "#B89A5A" }} />
              <h2
                className="text-4xl md:text-5xl leading-tight italic"
                style={{
                  color: "#4A3428",
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontWeight: 300,
                }}
              >
                Nos soins signature
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {featuredServices.map((svc) => (
              <div
                key={svc.id}
                className="flex flex-col gap-3 p-6 border"
                style={{
                  backgroundColor: "#FAF7F2",
                  borderColor: "rgba(184,154,90,0.2)",
                  borderRadius: "6px",
                }}
              >
                <h3
                  className="text-lg leading-snug italic"
                  style={{
                    color: "#4A3428",
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontWeight: 400,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-xs leading-relaxed opacity-60 flex-1"
                  style={{
                    color: "#4A3428",
                    fontFamily: "var(--font-jost, sans-serif)",
                    fontWeight: 300,
                  }}
                >
                  {svc.shortDescription}
                </p>
                <div
                  className="flex items-center justify-between pt-3 border-t"
                  style={{ borderColor: "rgba(184,154,90,0.2)" }}
                >
                  <span
                    className="text-xs opacity-50"
                    style={{ color: "#4A3428", fontFamily: "var(--font-jost, sans-serif)" }}
                  >
                    {svc.durationLabel}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 400 }}
                  >
                    {svc.priceLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Link href="/femme/services" className="btn-outline self-start">
            Toutes les prestations
          </Link>
        </div>
      </section>

      {/* L'expérience salon */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "#FAF7F2" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="min-h-[400px] relative overflow-hidden" style={{ borderRadius: "6px" }}>
            <Image
              src="/images/women/women-nail-bar.avif"
              alt="Nail bar Le Cercle"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, #FAF7F2 0%, transparent 30%)" }} />
            <div className="absolute top-0 right-0 w-12 h-px" style={{ backgroundColor: "#B89A5A", opacity: 0.5 }} />
            <div className="absolute top-0 right-0 w-px h-12" style={{ backgroundColor: "#B89A5A", opacity: 0.5 }} />
            <div className="absolute bottom-0 left-0 w-12 h-px" style={{ backgroundColor: "#B89A5A", opacity: 0.3 }} />
            <div className="absolute bottom-0 left-0 w-px h-12" style={{ backgroundColor: "#B89A5A", opacity: 0.3 }} />
          </div>

          <div className="flex flex-col gap-6">
            <p
              className="text-xs tracking-widest uppercase opacity-60"
              style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)" }}
            >
              L&apos;expérience
            </p>
            <h2
              className="text-4xl md:text-5xl leading-tight italic"
              style={{
                color: "#4A3428",
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontWeight: 300,
              }}
            >
              Un espace pensé
              <br />pour votre bien-être
            </h2>

            <ul className="flex flex-col gap-4">
              {[
                { label: "Lumière atmosphérique", desc: "Éclairage indirect, chaleureux et flatteur.", icon: "/icons/icon-clock.svg" },
                { label: "Matières nobles", desc: "Travertin, bois clair, lin et céramique nude.", icon: "/icons/icon-nail-polish.svg" },
                { label: "Accueil & boisson", desc: "Thé, eau infusée ou café servis à chaque visite.", icon: "/icons/icon-hand.svg" },
                { label: "Confidentialité", desc: "Un espace intime et feutré, loin de l'agitation.", icon: "/icons/icon-location-pin.svg" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex gap-4 pt-4 border-t items-start"
                  style={{ borderColor: "rgba(184,154,90,0.2)" }}
                >
                  <Image src={item.icon} alt="" aria-hidden width={18} height={18} unoptimized style={{ marginTop: 2, opacity: 0.55, filter: "invert(55%) sepia(30%) saturate(500%) hue-rotate(5deg)", flexShrink: 0 }} />
                  <div className="flex flex-col gap-1">
                  <span
                    className="text-sm tracking-wide"
                    style={{ color: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 500 }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-xs opacity-60"
                    style={{ color: "#4A3428", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 300 }}
                  >
                    {item.desc}
                  </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SalonsPreview universe="women" />
    </>
  );
}
