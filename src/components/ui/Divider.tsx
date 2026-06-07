type DividerProps = {
  accent?: boolean;
  className?: string;
};

export default function Divider({ accent = false, className = "" }: DividerProps) {
  return (
    <div
      className={`w-full h-px ${accent ? "bg-uni-accent" : "border-uni opacity-40"} ${className}`}
      style={accent ? { backgroundColor: "var(--uni-accent)" } : { backgroundColor: "var(--uni-border)" }}
    />
  );
}
