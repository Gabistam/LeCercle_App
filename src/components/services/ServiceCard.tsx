"use client";

import { useState } from "react";
import type { Service } from "@/types";
import {
  IconScissors, IconRazor, IconBarberChair, IconHand,
  IconNailPolish, IconMassage, IconPadelRacket, IconClock, IconArrowRight,
} from "@/components/icons/Icons";

type ServiceCardProps = {
  service: Service;
  index?: number;
  universe: "men" | "women";
  onLight?: boolean; // women only: true = section claire (#FAF7F2) → carte sur #F3EDE2
};

export default function ServiceCard({ service, index = 0, universe, onLight = true }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);
  const isMen = universe === "men";

  // Pour women : si la section est claire, la carte est sur le fond crème foncé, et inversement
  const bgColor     = isMen ? "#1E1E21" : onLight ? "#F3EDE2" : "#FAF7F2";
  const bgHover     = isMen ? "#252528" : onLight ? "#EBE4D6" : "#F3EDE2";
  const textColor   = isMen ? "#F1F1F1" : "#4A3428";
  const mutedColor  = isMen ? "#8A8A90" : "#A89080";
  const accentColor = isMen ? "#C9A84C" : "#B89A5A";
  const borderColor = isMen ? "rgba(201,168,76,0.15)" : "rgba(184,154,90,0.2)";
  const borderHover = isMen ? "rgba(201,168,76,0.55)" : "rgba(184,154,90,0.55)";
  const headingFont = isMen
    ? "var(--font-bebas, 'Arial Black', sans-serif)"
    : "var(--font-cormorant, Georgia, serif)";
  const labelFont = isMen
    ? "var(--font-barlow-cond, sans-serif)"
    : "var(--font-jost, sans-serif)";
  const bodyFont = isMen ? "var(--font-barlow, sans-serif)" : "var(--font-jost, sans-serif)";

  type IconComp = React.FC<{ size?: number; color?: string }>;
  const categoryIconMap: Record<string, IconComp> = {
    barber:            IconScissors,
    grooming:          IconRazor,
    haircare:          IconBarberChair,
    tricopigmentation: IconHand,
    nails:             IconNailPolish,
    massage:           IconMassage,
    recovery:          IconPadelRacket,
    ritual:            IconHand,
  };
  const IconComp = categoryIconMap[service.category] ?? IconArrowRight;

  return (
    <div
      className="relative flex flex-col gap-0 overflow-hidden"
      style={{
        backgroundColor: hovered ? bgHover : bgColor,
        borderRadius: isMen ? "0px" : "6px",
        border: `1px solid ${hovered ? borderHover : borderColor}`,
        transition: "background-color 0.4s ease, border-color 0.4s ease",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Barre laiton top — s'étend au hover */}
      <div
        style={{
          height: 2,
          backgroundColor: accentColor,
          width: hovered ? "100%" : "0%",
          transition: "width 0.4s ease",
          flexShrink: 0,
        }}
      />

      {/* Glow radial au hover */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isMen
            ? `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)`
            : `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(184,154,90,0.1) 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Lettre décorative en fond */}
      <div
        className="absolute right-3 bottom-2 select-none pointer-events-none leading-none"
        style={{
          fontFamily: headingFont,
          fontSize: "6rem",
          color: accentColor,
          opacity: hovered ? 0.07 : 0.025,
          fontStyle: isMen ? "normal" : "italic",
          transition: "opacity 0.4s ease, transform 0.5s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0px)",
          lineHeight: 1,
        }}
      >
        {service.title.charAt(0)}
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col gap-3 p-6 flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between gap-2">
          <span
            style={{
              color: accentColor,
              opacity: hovered ? 0.9 : 0.55,
              flexShrink: 0,
              display: "flex",
              transform: hovered ? "scale(1.15) rotate(-5deg)" : "scale(1) rotate(0deg)",
              transition: "opacity 0.3s ease, transform 0.4s ease",
            }}
          >
            <IconComp size={18} color={accentColor} />
          </span>
          <div className="flex items-center gap-2">
            <span
              className="text-xs tracking-widest"
              style={{ color: accentColor, fontFamily: labelFont, opacity: hovered ? 0.6 : 0.3, transition: "opacity 0.3s ease" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {service.isSignature && (
              <span
                className="text-xs px-2 py-0.5 border"
                style={{
                  color: accentColor,
                  borderColor: `${accentColor}50`,
                  fontFamily: labelFont,
                  letterSpacing: "0.1em",
                  fontSize: "0.6rem",
                  borderRadius: isMen ? "0px" : "100px",
                  backgroundColor: hovered ? `${accentColor}12` : "transparent",
                  transition: "background-color 0.3s ease",
                }}
              >
                Signature
              </span>
            )}
          </div>
        </div>

        {/* Titre */}
        <h3
          className={`leading-tight ${isMen ? "text-xl uppercase tracking-wide" : "text-lg italic"}`}
          style={{
            color: hovered ? accentColor : textColor,
            fontFamily: headingFont,
            fontWeight: isMen ? undefined : 400,
            transition: "color 0.35s ease",
          }}
        >
          {service.title}
        </h3>

        {/* Ligne laiton */}
        <div
          style={{
            height: 1,
            backgroundColor: accentColor,
            width: hovered ? 32 : 0,
            opacity: 0.5,
            transition: "width 0.35s ease 0.05s",
          }}
        />

        {/* Description */}
        <p
          className="text-xs leading-relaxed flex-1"
          style={{
            color: mutedColor,
            fontFamily: bodyFont,
            fontWeight: 300,
            opacity: hovered ? 1 : 0.75,
            transition: "opacity 0.3s ease",
          }}
        >
          {service.shortDescription}
        </p>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-3 border-t"
          style={{ borderColor: hovered ? borderHover : borderColor, transition: "border-color 0.4s ease" }}
        >
          <div className="flex items-center gap-1.5">
            <span style={{ color: accentColor, opacity: 0.4, display: "flex" }}>
              <IconClock size={12} color={accentColor} />
            </span>
            <span
              className="text-xs"
              style={{ color: textColor, fontFamily: labelFont, opacity: 0.5 }}
            >
              {service.durationLabel}
            </span>
          </div>
          <span
            className="text-sm font-light"
            style={{
              color: accentColor,
              fontFamily: labelFont,
              fontSize: hovered ? "1rem" : "0.875rem",
              transition: "font-size 0.2s ease",
            }}
          >
            {service.priceLabel}
          </span>
        </div>
      </div>

      {/* Coin bas-droit décoratif */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: hovered ? 24 : 0,
          height: 1,
          backgroundColor: accentColor,
          opacity: 0.4,
          transition: "width 0.3s ease 0.1s",
        }}
      />
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: 1,
          height: hovered ? 24 : 0,
          backgroundColor: accentColor,
          opacity: 0.4,
          transition: "height 0.3s ease 0.1s",
        }}
      />
    </div>
  );
}
