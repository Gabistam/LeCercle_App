import Link from "next/link";

export default function MixedHero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 110%, rgba(201,168,76,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Decorative arc lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5"
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
        >
          <circle cx="400" cy="400" r="300" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="360" stroke="#C9A84C" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl">
        {/* Overline */}
        <p
          className="text-xs tracking-widest uppercase opacity-50"
          style={{
            color: "#C9A84C",
            fontFamily: "var(--font-jost, sans-serif)",
            letterSpacing: "0.3em",
          }}
        >
          En partenariat avec Casa Padel
        </p>

        {/* Logo wordmark */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="w-12 h-px mx-auto"
            style={{ backgroundColor: "#C9A84C" }}
          />
          <h1
            className="text-7xl md:text-9xl tracking-widest uppercase leading-none"
            style={{
              color: "#F1F1F1",
              fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
              letterSpacing: "0.2em",
            }}
          >
            Le Cercle
          </h1>
          <div
            className="w-12 h-px mx-auto"
            style={{ backgroundColor: "#C9A84C" }}
          />
        </div>

        {/* Tagline */}
        <p
          className="text-base md:text-lg leading-relaxed opacity-70 max-w-md"
          style={{
            color: "#F1F1F1",
            fontFamily: "var(--font-cormorant, Georgia, serif)",
            fontStyle: "italic",
            letterSpacing: "0.02em",
          }}
        >
          Le soin après l&apos;effort. L&apos;élégance avant tout.
        </p>

        {/* Universe choice buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link
            href="/homme"
            className="group relative overflow-hidden flex flex-col items-start gap-1 px-8 py-5 border transition-all duration-300 w-52"
            style={{
              borderColor: "rgba(201, 168, 76, 0.3)",
              backgroundColor: "rgba(201, 168, 76, 0.05)",
            }}
          >
            <span
              className="text-xs tracking-widest uppercase opacity-60"
              style={{
                color: "#C9A84C",
                fontFamily: "var(--font-barlow-cond, sans-serif)",
              }}
            >
              Univers
            </span>
            <span
              className="text-2xl tracking-wide uppercase"
              style={{
                color: "#F1F1F1",
                fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
                letterSpacing: "0.1em",
              }}
            >
              Homme
            </span>
            <span
              className="text-xs opacity-40 mt-1"
              style={{
                color: "#F1F1F1",
                fontFamily: "var(--font-barlow-cond, sans-serif)",
              }}
            >
              Barber · Grooming
            </span>
          </Link>

          <span
            className="text-xs opacity-20"
            style={{ color: "#F1F1F1" }}
          >
            ×
          </span>

          <Link
            href="/femme"
            className="group relative overflow-hidden flex flex-col items-start gap-1 px-8 py-5 border transition-all duration-300 w-52"
            style={{
              borderColor: "rgba(184, 154, 90, 0.3)",
              backgroundColor: "rgba(250, 247, 242, 0.03)",
            }}
          >
            <span
              className="text-xs tracking-widest uppercase opacity-60"
              style={{
                color: "#B89A5A",
                fontFamily: "var(--font-jost, sans-serif)",
              }}
            >
              Univers
            </span>
            <span
              className="text-xl italic"
              style={{
                color: "#FAF7F2",
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontWeight: 300,
                letterSpacing: "0.05em",
                fontSize: "1.5rem",
              }}
            >
              Femme
            </span>
            <span
              className="text-xs opacity-40 mt-1"
              style={{
                color: "#FAF7F2",
                fontFamily: "var(--font-jost, sans-serif)",
              }}
            >
              Beauty · Nail Bar · Massage
            </span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#F1F1F1", fontFamily: "var(--font-jost, sans-serif)" }}
          >
            Découvrir
          </span>
          <div className="w-px h-8" style={{ backgroundColor: "#C9A84C" }} />
        </div>
      </div>
    </section>
  );
}
