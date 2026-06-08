"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UniverseSwitch({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();

  const isMen = pathname.startsWith("/homme");
  const isWomen = pathname.startsWith("/femme");

  if (!isMen && !isWomen) return null;

  const href = isMen ? "/femme" : "/homme";
  const label = isMen ? "Espace Femme" : "Espace Homme";

  if (compact) {
    return (
      <Link
        href={href}
        className="btn-ghost text-xs"
        style={{ color: "var(--uni-text-muted)" }}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors"
      style={{
        color: "var(--uni-text-muted)",
        fontFamily: "var(--uni-font-label)",
        letterSpacing: "0.15em",
      }}
    >
      <span
        className="block w-5 h-px"
        style={{ backgroundColor: "var(--uni-text-muted)" }}
      />
      Voir {label}
    </Link>
  );
}
