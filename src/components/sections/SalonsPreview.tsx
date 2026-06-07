import Link from "next/link";
import { salons } from "@/data/salons";
import SalonCard from "@/components/salons/SalonCard";

type SalonsPreviewProps = {
  universe?: "men" | "women" | "mixed";
};

export default function SalonsPreview({ universe = "mixed" }: SalonsPreviewProps) {
  const isWomen = universe === "women";
  const bgColor = isWomen ? "#FAF7F2" : "#0C0C0C";
  const textColor = isWomen ? "#4A3428" : "#F1F1F1";
  const accentColor = isWomen ? "#B89A5A" : "#C9A84C";
  const mutedColor = isWomen ? "#A89080" : "#8A8A90";
  const headingFont = isWomen
    ? "var(--font-cormorant, Georgia, serif)"
    : "var(--font-bebas, 'Arial Black', sans-serif)";
  const labelFont = isWomen
    ? "var(--font-jost, sans-serif)"
    : "var(--font-barlow-cond, sans-serif)";

  return (
    <section className="py-24 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <p
              className="section-overline"
              style={{ color: accentColor, fontFamily: labelFont }}
            >
              Région Parisienne
            </p>
            <div className="flex flex-col gap-2">
              <div className="divider-accent" />
              <h2
                className={`leading-tight ${!isWomen ? "text-5xl md:text-6xl uppercase tracking-wide" : "text-4xl md:text-5xl"}`}
                style={{
                  color: textColor,
                  fontFamily: headingFont,
                  fontWeight: isWomen ? 300 : undefined,
                  fontStyle: isWomen ? "italic" : undefined,
                }}
              >
                Nos salons
              </h2>
            </div>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: mutedColor, fontFamily: labelFont, fontWeight: 300 }}
            >
              Trois adresses premium au sein des centres Casa Padel.
            </p>
          </div>
          <Link
            href="/salons"
            className="self-start md:self-end btn-outline"
            style={{
              borderColor: `${accentColor}40`,
              color: accentColor,
            }}
          >
            Tous les salons
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {salons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} universe={universe} />
          ))}
        </div>
      </div>
    </section>
  );
}
