import Link from "next/link";

export default function EspaceeChoice() {
  return (
    <section className="py-2 px-6" style={{ backgroundColor: "#0C0C0C" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0.5">
        {/* Homme */}
        <Link
          href="/homme"
          className="group relative overflow-hidden flex flex-col justify-end p-10 min-h-[480px] cursor-pointer"
          style={{ backgroundColor: "#171719" }}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%)",
            }}
          />

          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px transition-all duration-300"
            style={{ backgroundColor: "rgba(201, 168, 76, 0.3)" }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-4">
            <p
              className="text-xs tracking-widest uppercase opacity-50"
              style={{
                color: "#C9A84C",
                fontFamily: "var(--font-barlow-cond, sans-serif)",
              }}
            >
              01 — Barber · Grooming · Tricopigmentation
            </p>
            <h2
              className="text-6xl md:text-7xl uppercase leading-none"
              style={{
                color: "#F1F1F1",
                fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
                letterSpacing: "0.08em",
              }}
            >
              Espace
              <br />
              Homme
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xs opacity-60"
              style={{
                color: "#F1F1F1",
                fontFamily: "var(--font-barlow, sans-serif)",
                fontWeight: 300,
              }}
            >
              Club privé urbain. Coupe, barbe, rituels signature dans un cadre noir, laiton et cuir.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span
                className="text-xs tracking-widest uppercase transition-colors duration-300 group-hover:opacity-100 opacity-50"
                style={{
                  color: "#C9A84C",
                  fontFamily: "var(--font-barlow-cond, sans-serif)",
                }}
              >
                Découvrir
              </span>
              <div
                className="h-px transition-all duration-300 group-hover:w-12 w-5"
                style={{ backgroundColor: "#C9A84C" }}
              />
            </div>
          </div>

          {/* Number */}
          <span
            className="absolute top-8 right-8 text-8xl opacity-5 leading-none select-none"
            style={{
              color: "#F1F1F1",
              fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
            }}
          >
            H
          </span>
        </Link>

        {/* Femme */}
        <Link
          href="/femme"
          className="group relative overflow-hidden flex flex-col justify-end p-10 min-h-[480px] cursor-pointer"
          style={{ backgroundColor: "#F3EDE2" }}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(184,154,90,0.12) 0%, transparent 60%)",
            }}
          />

          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ backgroundColor: "rgba(184, 154, 90, 0.4)" }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-4">
            <p
              className="text-xs tracking-widest uppercase opacity-50"
              style={{
                color: "#B89A5A",
                fontFamily: "var(--font-jost, sans-serif)",
              }}
            >
              02 — Nail Bar · Massage · Rituels
            </p>
            <h2
              className="text-6xl md:text-7xl leading-none italic"
              style={{
                color: "#4A3428",
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontWeight: 300,
                letterSpacing: "0.02em",
              }}
            >
              Espace
              <br />
              Femme
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xs opacity-70"
              style={{
                color: "#4A3428",
                fontFamily: "var(--font-jost, sans-serif)",
                fontWeight: 300,
              }}
            >
              Beauty studio chaleureux. Manucure, soins, massages dans un cadre crème, nude et or.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span
                className="text-xs tracking-widest uppercase transition-colors duration-300 group-hover:opacity-100 opacity-50"
                style={{
                  color: "#B89A5A",
                  fontFamily: "var(--font-jost, sans-serif)",
                }}
              >
                Découvrir
              </span>
              <div
                className="h-px transition-all duration-300 group-hover:w-12 w-5"
                style={{ backgroundColor: "#B89A5A" }}
              />
            </div>
          </div>

          {/* Number */}
          <span
            className="absolute top-8 right-8 text-8xl opacity-5 leading-none select-none italic"
            style={{
              color: "#4A3428",
              fontFamily: "var(--font-cormorant, Georgia, serif)",
            }}
          >
            F
          </span>
        </Link>
      </div>
    </section>
  );
}
