"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import UniverseSwitch from "./UniverseSwitch";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMen = pathname.startsWith("/homme");
  const isWomen = pathname.startsWith("/femme");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = isMen
    ? [
        { href: "/homme", label: "Accueil" },
        { href: "/homme/services", label: "Prestations" },
        { href: "/homme/salons", label: "Salons" },
        { href: "/homme/reservation", label: "Réserver" },
      ]
    : isWomen
      ? [
          { href: "/femme", label: "Accueil" },
          { href: "/femme/services", label: "Prestations" },
          { href: "/femme/salons", label: "Salons" },
          { href: "/femme/reservation", label: "Réserver" },
        ]
      : [
          { href: "/homme", label: "Homme" },
          { href: "/femme", label: "Femme" },
          { href: "/salons", label: "Salons" },
          { href: "/a-propos", label: "À propos" },
        ];

  const reserveHref = isMen
    ? "/homme/reservation"
    : isWomen
      ? "/femme/reservation"
      : "/salons";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "var(--uni-bg)"
          : "transparent",
        borderBottom: scrolled ? "1px solid var(--uni-border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 font-heading text-xl tracking-widest uppercase"
          style={{
            color: "var(--uni-text)",
            fontFamily: isWomen
              ? "var(--font-cormorant, Georgia, serif)"
              : "var(--font-bebas, 'Arial Black', sans-serif)",
            fontSize: isWomen ? "1.25rem" : "1.5rem",
            letterSpacing: isWomen ? "0.15em" : "0.1em",
          }}
        >
          Le Cercle
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{
                color:
                  pathname === link.href
                    ? "var(--uni-accent)"
                    : "var(--uni-text-muted)",
                fontFamily: "var(--uni-font-label)",
                letterSpacing: "0.15em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <UniverseSwitch compact />
          <Link href={reserveHref} className="btn-primary text-xs py-2.5 px-5">
            Réserver
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          style={{ color: "var(--uni-text)" }}
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--uni-text)",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--uni-text)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--uni-text)",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "var(--uni-bg-2)",
            borderColor: "var(--uni-border)",
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase py-2"
                style={{
                  color: "var(--uni-text-muted)",
                  fontFamily: "var(--uni-font-label)",
                  letterSpacing: "0.15em",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="h-px my-1"
              style={{ backgroundColor: "var(--uni-border)" }}
            />
            <UniverseSwitch />
            <Link href={reserveHref} className="btn-primary self-start mt-2">
              Réserver
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
