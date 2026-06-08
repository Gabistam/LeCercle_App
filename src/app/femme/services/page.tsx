import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services, packs } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";
import { IconNailPolish, IconMassage, IconPadelRacket, IconHand } from "@/components/icons/Icons";
import PackCard from "@/components/services/PackCard";

export const metadata: Metadata = {
  title: "Prestations Femme — Nail Bar, Massage & Rituels",
  description:
    "Découvrez toutes nos prestations : manucure, nail bar, beauté des pieds, massages et rituels bien-être signature.",
};

const categories = [
  { key: "nails",    label: "Nail Bar & Manucure",  Icon: IconNailPolish,  img: "/images/women/women-nail-bar.avif" },
  { key: "massage",  label: "Massage & Relaxation", Icon: IconMassage,     img: "/images/recovery/recovery-after-padel.webp" },
  { key: "recovery", label: "Récupération & Sport", Icon: IconPadelRacket, img: "/images/recovery/recovery-after-padel.webp" },
  { key: "ritual",   label: "Rituels signature",    Icon: IconHand,        img: "/images/women/women-manicure-detail.avif" },
];

const womenPacks = packs.filter((p) => p.universe === "women" || p.universe === "mixed");

export default function FemmeServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{ backgroundColor: "#FAF7F2" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/images/women/women-hero-beauty-studio.webp" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(250,247,242,0.78)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #FAF7F2 40%, transparent 100%)" }} />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
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
              style={{
                color: "#4A3428",
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontWeight: 300,
              }}
            >
              Nos soins
            </h1>
          </div>
          <p
            className="text-sm leading-relaxed opacity-60 max-w-md"
            style={{ color: "#4A3428", fontFamily: "var(--font-jost, sans-serif)", fontWeight: 300 }}
          >
            Des prestations pensées pour révéler votre beauté naturelle, dans un cadre chaleureux et confidentiel.
          </p>
        </div>
      </section>

      {/* Services par catégorie — alternance #FAF7F2 / #F3EDE2 */}
      {categories.map((cat, catIndex) => {
        const catServices = services.filter(
          (s) => s.category === cat.key && (s.audience === "women" || s.audience === "unisex")
        );
        if (catServices.length === 0) return null;
        // sections paires = fond clair, impaires = fond crème
        const isLight = catIndex % 2 === 0;
        const sectionBg = isLight ? "#FAF7F2" : "#F3EDE2";
        const overlayBg = isLight ? "rgba(250,247,242,0.35)" : "rgba(243,237,226,0.35)";
        return (
          <section
            key={cat.key}
            className="py-16 px-6 border-t"
            style={{ backgroundColor: sectionBg, borderColor: "rgba(184,154,90,0.15)" }}
          >
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 overflow-hidden shrink-0" style={{ borderRadius: "50%" }}>
                  <Image src={cat.img} alt="" fill sizes="64px" className="object-cover" />
                  <div className="absolute inset-0" style={{ backgroundColor: overlayBg }} />
                  <span className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0.9 }}>
                    <cat.Icon size={20} color="#B89A5A" />
                  </span>
                </div>
                <h2
                  className="text-2xl md:text-3xl italic"
                  style={{ color: "#B89A5A", fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 400 }}
                >
                  {cat.label}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {catServices.map((svc, i) => (
                  <ServiceCard key={svc.id} service={svc} index={i} universe="women" onLight={isLight} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Packs */}
      <section
        className="py-16 px-6 border-t"
        style={{ backgroundColor: "#F3EDE2", borderColor: "rgba(184,154,90,0.15)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h2
            className="text-2xl md:text-3xl italic"
            style={{ color: "#4A3428", fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 400 }}
          >
            Packs signature
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {womenPacks.map((pack) => (
              <PackCard
                key={pack.id}
                pack={pack}
                icon={<IconNailPolish size={18} color="#B89A5A" />}
                universe="women"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-2xl md:text-3xl italic"
            style={{ color: "#4A3428", fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300 }}
          >
            Prête pour votre moment de soin ?
          </p>
          <Link href="/femme/reservation" className="btn-primary shrink-0">
            Réserver
          </Link>
        </div>
      </section>
    </>
  );
}
