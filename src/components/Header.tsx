"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { bookingUrl, track } from "@/data/track";

const links = [
  { href: "/homme", label: "Homme" },
  { href: "/femme", label: "Beauty Studio" },
  { href: "/salons", label: "Nos salons" },
  { href: "/investisseurs", label: "Investisseurs" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="top">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Le Cercle, accueil">
          <Image
            src="/images/logos/le-cercle-logo-blanc.png"
            alt="Le Cercle, coiffeur-barbier"
            width={900}
            height={843}
            priority
            sizes="62px"
          />
        </Link>
        <nav id="nav" className={`nav${open ? " open" : ""}`} aria-label="Navigation principale">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === l.href || pathname.startsWith(l.href + "/") ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a className="btn" href={bookingUrl("entete")} target="_blank" rel="noopener" {...track("reserver", "entete")}>
          Réserver
        </a>
        <button
          className="burger"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
