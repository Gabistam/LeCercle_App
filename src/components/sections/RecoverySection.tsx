import Link from "next/link";
import Image from "next/image";

export default function RecoverySection() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="/images/recovery/recovery-after-padel.webp"
            alt="Récupération après padel — Le Cercle"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, #0C0C0C 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(12,12,12,0.4) 0%, transparent 50%)" }} />
          <div className="absolute top-0 left-0 w-12 h-px" style={{ backgroundColor: "#C9A84C", opacity: 0.5 }} />
          <div className="absolute top-0 left-0 w-px h-12" style={{ backgroundColor: "#C9A84C", opacity: 0.5 }} />
          <div className="absolute bottom-0 right-0 w-12 h-px" style={{ backgroundColor: "#B89A5A", opacity: 0.4 }} />
          <div className="absolute bottom-0 right-0 w-px h-12" style={{ backgroundColor: "#B89A5A", opacity: 0.4 }} />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <p
            className="section-overline"
            style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
          >
            Récupération après padel
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
              Après le match,
              <br />
              <span style={{ color: "#C9A84C" }}>l&apos;essentiel</span>
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed opacity-60 max-w-sm"
            style={{
              color: "#F1F1F1",
              fontFamily: "var(--font-barlow, sans-serif)",
              fontWeight: 300,
            }}
          >
            Le Cercle propose des soins pensés pour la récupération sportive. Massage deep tissue, drainage des jambes, rituel complet — directement au sein des centres Casa Padel.
          </p>

          <ul className="flex flex-col gap-3 mt-2">
            {[
              { label: "Massage récupération 30 ou 60 min", icon: "/icons/icon-massage.svg" },
              { label: "Jambes légères / drainage lymphatique", icon: "/icons/icon-padel-racket.svg" },
              { label: "Rituel Récupération Le Cercle — 75 min", icon: "/icons/icon-clock.svg" },
              { label: "Massage duo après match", icon: "/icons/icon-massage.svg" },
            ].map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 text-sm"
                style={{
                  color: "#8A8A90",
                  fontFamily: "var(--font-barlow, sans-serif)",
                  fontWeight: 300,
                }}
              >
                <img src={item.icon} aria-hidden width={16} height={16} style={{ opacity: 0.55, filter: "invert(72%) sepia(40%) saturate(400%) hue-rotate(5deg)", flexShrink: 0 }} />
                {item.label}
              </li>
            ))}
          </ul>

          <Link href="/salons" className="btn-outline self-start mt-4">
            Nos salons
          </Link>
        </div>
      </div>
    </section>
  );
}
