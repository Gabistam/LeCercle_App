import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services, packs } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";
import { IconScissors, IconRazor, IconBarberChair, IconHand } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Prestations Homme — Barber, Grooming & Soins capillaires",
  description:
    "Découvrez toutes nos prestations pour hommes : coupe, barbe, rituel complet, soins cuir chevelu et tricopigmentation.",
};

const categories = [
  { key: "barber",           label: "Barber & Coupe",    Icon: IconScissors,    img: "/images/men/men-hero-barber.webp" },
  { key: "grooming",         label: "Grooming & Barbe",  Icon: IconRazor,       img: "/images/men/men-barber-chair.webp" },
  { key: "haircare",         label: "Soins capillaires", Icon: IconBarberChair, img: "/images/men/men-barber-chair.webp" },
  { key: "tricopigmentation",label: "Tricopigmentation", Icon: IconHand,        img: "/images/men/men-hero-barber.webp" },
];

const menPacks = packs.filter((p) => p.universe === "men" || p.universe === "mixed");

export default function HommeServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/images/men/men-hero-barber.webp" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,12,12,0.80)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0C0C0C 40%, transparent 100%)" }} />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <p
            className="text-xs tracking-widest uppercase opacity-50"
            style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)", letterSpacing: "0.3em" }}
          >
            Univers Homme
          </p>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
            <h1
              className="text-6xl md:text-8xl uppercase leading-none"
              style={{
                color: "#F1F1F1",
                fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
                letterSpacing: "0.06em",
              }}
            >
              Prestations
            </h1>
          </div>
          <p
            className="text-sm leading-relaxed opacity-50 max-w-md"
            style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
          >
            Chaque prestation est pensée pour l&apos;homme exigeant — précision, qualité des gestes et produits premium sélectionnés.
          </p>
        </div>
      </section>

      {/* Services par catégorie */}
      {categories.map((cat) => {
        const catServices = services.filter(
          (s) => s.category === cat.key && s.audience === "men"
        );
        if (catServices.length === 0) return null;
        return (
          <section
            key={cat.key}
            className="py-16 px-6 border-t"
            style={{ backgroundColor: "#0C0C0C", borderColor: "rgba(201,168,76,0.1)" }}
          >
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              {/* Header catégorie avec image */}
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 overflow-hidden shrink-0" style={{ borderRadius: "0px" }}>
                  <Image src={cat.img} alt="" fill sizes="64px" className="object-cover" />
                  <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,12,12,0.4)" }} />
                  <span className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0.9 }}>
                    <cat.Icon size={20} color="#C9A84C" />
                  </span>
                </div>
                <div>
                  <h2
                    className="text-3xl md:text-4xl uppercase tracking-wide"
                    style={{ color: "#C9A84C", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.1em" }}
                  >
                    {cat.label}
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
                {catServices.map((svc, i) => (
                  <ServiceCard key={svc.id} service={svc} index={i} universe="men" />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Packs */}
      <section
        className="py-16 px-6 border-t"
        style={{ backgroundColor: "#171719", borderColor: "rgba(201,168,76,0.1)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h2
            className="text-3xl md:text-4xl uppercase tracking-wide"
            style={{
              color: "#F1F1F1",
              fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
              letterSpacing: "0.1em",
            }}
          >
            Packs signature
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {menPacks.map((pack) => (
              <div
                key={pack.id}
                className="flex flex-col gap-3 p-6 border"
                style={{ backgroundColor: "#1E1E21", borderColor: "rgba(201,168,76,0.2)" }}
              >
                <span style={{ opacity: 0.5 }}><IconScissors size={18} color="#C9A84C" /></span>
                <h3
                  className="text-xl uppercase tracking-wide"
                  style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)" }}
                >
                  {pack.name}
                </h3>
                <p className="text-xs opacity-50 flex-1" style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}>
                  {pack.contents}
                </p>
                <span className="text-base" style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
                  {pack.priceLabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-2xl md:text-3xl uppercase"
            style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.06em" }}
          >
            Prêt à réserver votre rituel ?
          </p>
          <Link href="/homme/reservation" className="btn-primary shrink-0">
            Réserver maintenant
          </Link>
        </div>
      </section>
    </>
  );
}
