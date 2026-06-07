import Link from "next/link";
import Image from "next/image";
import type { Salon } from "@/types";

const serviceLabels: Record<string, string> = {
  barber: "Barber",
  grooming: "Grooming",
  nails: "Nail Bar",
  massage: "Massage",
  recovery: "Récupération",
  ritual: "Rituels",
};

type SalonCardProps = {
  salon: Salon;
  universe?: "men" | "women" | "mixed";
};

export default function SalonCard({ salon, universe = "mixed" }: SalonCardProps) {
  const isMen = universe === "men";
  const isWomen = universe === "women";

  const bgColor = isWomen ? "#F3EDE2" : "#1E1E21";
  const textColor = isWomen ? "#4A3428" : "#F1F1F1";
  const mutedColor = isWomen ? "#A89080" : "#8A8A90";
  const accentColor = isWomen ? "#B89A5A" : "#C9A84C";
  const borderColor = isWomen ? "rgba(184,154,90,0.3)" : "rgba(201,168,76,0.2)";
  const headingFont = isWomen
    ? "var(--font-cormorant, Georgia, serif)"
    : "var(--font-bebas, 'Arial Black', sans-serif)";
  const labelFont = isWomen
    ? "var(--font-jost, sans-serif)"
    : "var(--font-barlow-cond, sans-serif)";

  return (
    <Link
      href={`/salons/${salon.slug}`}
      className="group flex flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderRadius: isWomen ? "6px" : "0px",
      }}
    >
      {/* Image */}
      <div
        className="relative h-52 overflow-hidden"
        style={{ backgroundColor: isWomen ? "#E8DDD0" : "#171719" }}
      >
        <Image
          src={salon.image}
          alt={salon.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Filtre bas — lisibilité contenu */}
        <div
          className="absolute inset-0"
          style={{
            background: isWomen
              ? "linear-gradient(to top, rgba(243,237,226,0.7) 0%, transparent 55%)"
              : "linear-gradient(to top, rgba(20,20,22,0.8) 0%, transparent 55%)",
          }}
        />

        {/* Partner badge */}
        <div
          className="absolute top-3 right-3 px-2 py-0.5"
          style={{
            backgroundColor: "rgba(0,0,0,0.45)",
            color: accentColor,
            fontFamily: labelFont,
            letterSpacing: "0.12em",
            fontSize: "0.58rem",
            textTransform: "uppercase",
            backdropFilter: "blur(4px)",
          }}
        >
          Casa Padel
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6">
        <div>
          <p
            className="text-xs tracking-widest uppercase opacity-50 mb-1"
            style={{ color: accentColor, fontFamily: labelFont }}
          >
            {salon.postalCode} · {salon.department}
          </p>
          <h3
            className={`leading-tight ${isMen ? "text-2xl uppercase tracking-wide" : "text-xl"}`}
            style={{
              color: textColor,
              fontFamily: headingFont,
              fontWeight: isWomen ? 400 : undefined,
              fontStyle: isWomen ? "italic" : undefined,
            }}
          >
            {salon.city}
          </h3>
        </div>

        <p
          className="text-xs leading-relaxed"
          style={{ color: mutedColor, fontFamily: labelFont }}
        >
          {salon.address}
          <br />
          {salon.postalCode} {salon.city}
        </p>

        {/* Services */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {salon.services.slice(0, 4).map((svc) => (
            <span
              key={svc}
              className="px-2 py-0.5 text-xs border"
              style={{
                color: mutedColor,
                borderColor: borderColor,
                fontFamily: labelFont,
                letterSpacing: "0.08em",
                borderRadius: isWomen ? "100px" : "0px",
                fontSize: "0.6rem",
              }}
            >
              {serviceLabels[svc]}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 mt-2 text-xs tracking-widest uppercase transition-all duration-300"
          style={{ color: accentColor, fontFamily: labelFont }}
        >
          Voir le salon
          <div
            className="h-px transition-all duration-300 group-hover:w-8 w-4"
            style={{ backgroundColor: accentColor }}
          />
        </div>
      </div>
    </Link>
  );
}
