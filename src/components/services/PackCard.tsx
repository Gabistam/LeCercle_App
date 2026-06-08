"use client";

import { useState } from "react";
import type { ServicePack } from "@/types";

interface PackCardProps {
  pack: ServicePack;
  icon: React.ReactNode;
  universe: "men" | "women";
}

export default function PackCard({ pack, icon, universe }: PackCardProps) {
  const [hovered, setHovered] = useState(false);

  const isMen = universe === "men";

  return (
    <div
      className="flex flex-col gap-3 p-6 border transition-all duration-300 cursor-default"
      style={{
        backgroundColor: hovered
          ? isMen ? "#252528" : "#F3EDE2"
          : isMen ? "#1E1E21" : "#FAF7F2",
        borderColor: hovered
          ? isMen ? "rgba(201,168,76,0.5)" : "rgba(184,154,90,0.5)"
          : isMen ? "rgba(201,168,76,0.2)" : "rgba(184,154,90,0.2)",
        borderRadius: isMen ? "0px" : "6px",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered
          ? isMen
            ? "0 8px 32px rgba(201,168,76,0.08)"
            : "0 8px 32px rgba(184,154,90,0.1)"
          : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          opacity: hovered ? 0.8 : 0.5,
          transition: "opacity 0.3s ease",
        }}
      >
        {icon}
      </span>

      {isMen ? (
        <h3
          className="text-xl uppercase tracking-wide"
          style={{
            color: hovered ? "#F1F1F1" : "#F1F1F1",
            fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
          }}
        >
          {pack.name}
        </h3>
      ) : (
        <h3
          className="text-lg italic"
          style={{
            color: "#4A3428",
            fontFamily: "var(--font-cormorant, Georgia, serif)",
            fontWeight: 400,
          }}
        >
          {pack.name}
        </h3>
      )}

      <p
        className="text-xs flex-1"
        style={{
          opacity: hovered ? 0.7 : 0.5,
          color: isMen ? "#F1F1F1" : "#4A3428",
          fontFamily: isMen
            ? "var(--font-barlow, sans-serif)"
            : "var(--font-jost, sans-serif)",
          fontWeight: 300,
          transition: "opacity 0.3s ease",
        }}
      >
        {pack.contents}
      </p>

      <div className="flex items-center justify-between mt-1 pt-3 border-t" style={{
        borderColor: isMen ? "rgba(201,168,76,0.15)" : "rgba(184,154,90,0.2)",
      }}>
        <span
          className="text-base"
          style={{
            color: isMen ? "#C9A84C" : "#B89A5A",
            fontFamily: isMen
              ? "var(--font-barlow-cond, sans-serif)"
              : "var(--font-jost, sans-serif)",
          }}
        >
          {pack.priceLabel}
        </span>
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: isMen ? "#C9A84C" : "#B89A5A",
            fontFamily: isMen
              ? "var(--font-barlow-cond, sans-serif)"
              : "var(--font-jost, sans-serif)",
            opacity: hovered ? 0.8 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          Inclus →
        </span>
      </div>
    </div>
  );
}
