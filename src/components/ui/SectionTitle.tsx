type SectionTitleProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export default function SectionTitle({
  overline,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${centered ? "items-center text-center" : ""} ${className}`}
    >
      {overline && <p className="section-overline">{overline}</p>}
      <div className={`flex flex-col gap-2 ${centered ? "items-center" : ""}`}>
        <div className="divider-accent" />
        <h2 className="font-heading text-4xl md:text-5xl leading-tight text-uni">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-uni-muted text-sm leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
