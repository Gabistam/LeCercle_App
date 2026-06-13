const phrases = [
  { text: "Le soin après l'effort", font: "cormorant", style: "italic" },
  { text: "◆", font: "barlow", style: "normal" },
  { text: "L'élégance avant tout", font: "cormorant", style: "italic" },
  { text: "◆", font: "barlow", style: "normal" },
  { text: "CLUB PRIVÉ URBAIN", font: "bebas", style: "normal" },
  { text: "◆", font: "barlow", style: "normal" },
  { text: "Beauty Studio Premium", font: "cormorant", style: "italic" },
  { text: "◆", font: "barlow", style: "normal" },
  { text: "RÉCUPÉRATION APRÈS PADEL", font: "bebas", style: "normal" },
  { text: "◆", font: "barlow", style: "normal" },
  { text: "Casa Padel · Région Parisienne", font: "cormorant", style: "italic" },
  { text: "◆", font: "barlow", style: "normal" },
];

const fontMap: Record<string, string> = {
  cormorant: "var(--font-cormorant, Georgia, serif)",
  bebas: "var(--font-bebas, 'Arial Black', sans-serif)",
  barlow: "var(--font-barlow-cond, sans-serif)",
};

export default function ManifesteTicker() {
  const doubled = [...phrases, ...phrases];

  return (
    <div
      className="relative overflow-hidden py-5 border-y"
      style={{ backgroundColor: "#0C0C0C", borderColor: "rgba(201,168,76,0.15)" }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #0C0C0C, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #0C0C0C, transparent)" }} />

      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-track { animation: ticker 28s linear infinite; }
      `}</style>

      <div className="ticker-track flex items-center gap-8 whitespace-nowrap will-change-transform">
        {doubled.map((phrase, i) => (
          <span
            key={i}
            style={{
              fontFamily: fontMap[phrase.font],
              fontStyle: phrase.style === "italic" ? "italic" : "normal",
              fontSize: phrase.font === "bebas" ? "0.85rem" : phrase.text === "◆" ? "0.5rem" : "1.1rem",
              letterSpacing: phrase.font === "bebas" ? "0.2em" : phrase.text === "◆" ? "0" : "0.02em",
              color: phrase.text === "◆" ? "#C9A84C" : phrase.font === "bebas" ? "#F1F1F1" : "rgba(241,241,241,0.55)",
              fontWeight: phrase.font === "cormorant" ? 300 : undefined,
            }}
          >
            {phrase.text}
          </span>
        ))}
      </div>
    </div>
  );
}
