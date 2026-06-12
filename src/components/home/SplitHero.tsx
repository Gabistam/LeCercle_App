import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const SplitHeroDesktop = dynamic(() => import("./SplitHeroDesktop"), { ssr: false });

export default function SplitHero() {
  return (
    <>
      {/* ── MOBILE : deux blocs empilés, pur SSR, pas d'interactivité ── */}
      <section className="flex flex-col md:hidden" style={{ height: "100svh" }}>

        {/* Panneau Homme */}
        <Link
          href="/homme"
          className="relative overflow-hidden"
          style={{ flex: "0 0 50%", backgroundColor: "#0C0C0C" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/men/men-hero-barber.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,12,12,0.60)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(201,168,76,0.14) 0%, transparent 55%)" }} />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px z-10" style={{ backgroundColor: "rgba(201,168,76,0.5)" }} />

          <div className="relative z-10 h-full grid grid-cols-2 px-6 gap-4" style={{ alignItems: "center" }}>
            <div className="flex flex-col gap-3">
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)", opacity: 0.7, letterSpacing: "0.25em" }}
              >
                Barber · Grooming
              </p>
              <div className="flex flex-col gap-1">
                <div className="w-6 h-px" style={{ backgroundColor: "rgba(201,168,76,0.6)" }} />
                <h2
                  className="uppercase leading-none"
                  style={{
                    color: "#F1F1F1",
                    fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
                    fontSize: "clamp(2.2rem, 10vw, 3.5rem)",
                    letterSpacing: "0.06em",
                    lineHeight: 0.9,
                    textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  Espace<br />
                  <span style={{ color: "#C9A84C" }}>Homme</span>
                </h2>
              </div>
              <ul className="flex flex-col gap-1">
                {["Coupe & Barbe", "Rituel serviette", "Soin du visage"].map((s) => (
                  <li
                    key={s}
                    className="text-xs tracking-wide uppercase"
                    style={{ color: "rgba(192,192,200,0.65)", fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "0.6rem" }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-end justify-center gap-4">
              <Image
                src="/images/logos/LogosSimples/logoSimpleHomme-LeCercle1.png"
                alt="Le Cercle Homme"
                width={90}
                height={45}
                style={{ objectFit: "contain", filter: "invert(1)", opacity: 0.85 }}
              />
              <div
                className="btn-primary"
                style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "0.65rem", padding: "0.5rem 1.2rem", whiteSpace: "nowrap" }}
              >
                Entrer
              </div>
            </div>
          </div>
        </Link>

        {/* Panneau Femme */}
        <Link
          href="/femme"
          className="relative overflow-hidden"
          style={{ flex: "0 0 50%", backgroundColor: "#FAF7F2" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/women/women-hero-beauty-studio.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(8,5,2,0.55)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(255deg, rgba(184,154,90,0.12) 0%, transparent 55%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(250,247,242,0.45) 0%, transparent 25%, transparent 75%, rgba(250,247,242,0.45) 100%)" }} />
          </div>

          <div className="relative z-10 h-full grid grid-cols-2 px-6 gap-4" style={{ alignItems: "center" }}>
            <div className="flex flex-col items-start justify-center gap-4">
              <Image
                src="/images/logos/LogosSimples/logoSimpleFemme-LeCercle.webp"
                alt="Le Cercle Femme"
                width={90}
                height={45}
                style={{ objectFit: "contain", opacity: 0.92 }}
              />
              <div
                className="btn-primary"
                style={{ backgroundColor: "#B89A5A", fontFamily: "var(--font-jost, sans-serif)", fontSize: "0.65rem", padding: "0.5rem 1.2rem", whiteSpace: "nowrap" }}
              >
                Entrer
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 text-right">
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "#D4B87A", fontFamily: "var(--font-jost, sans-serif)", opacity: 0.8, letterSpacing: "0.2em" }}
              >
                Nail Bar · Soins
              </p>
              <div className="flex flex-col items-end gap-1">
                <div className="w-6 h-px" style={{ backgroundColor: "rgba(212,184,122,0.6)" }} />
                <h2
                  className="leading-none italic"
                  style={{
                    color: "#F5EFE6",
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "clamp(2.2rem, 10vw, 3.5rem)",
                    fontWeight: 300,
                    letterSpacing: "0.02em",
                    lineHeight: 0.9,
                  }}
                >
                  Espace<br />
                  <span style={{ color: "#D4B87A" }}>Femme</span>
                </h2>
              </div>
              <ul className="flex flex-col items-end gap-1">
                {["Manucure & Nail", "Soins visage", "Épilation"].map((s) => (
                  <li
                    key={s}
                    className="text-xs tracking-wide uppercase"
                    style={{ color: "rgba(235,220,200,0.75)", fontFamily: "var(--font-jost, sans-serif)", fontSize: "0.6rem" }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>

      </section>

      {/* ── DESKTOP : chargé dynamiquement, JS non bloquant ── */}
      <div className="hidden md:block">
        <SplitHeroDesktop />
      </div>
    </>
  );
}
