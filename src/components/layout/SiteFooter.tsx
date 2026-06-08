import Link from "next/link";
import { salons } from "@/data/salons";

export default function SiteFooter() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--uni-bg-2)",
        borderColor: "var(--uni-border)",
        color: "var(--uni-text-muted)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="font-heading text-2xl tracking-widest uppercase"
            style={{
              color: "var(--uni-text)",
              fontFamily: "var(--uni-font-heading)",
            }}
          >
            Le Cercle
          </Link>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "var(--uni-text-muted)" }}
          >
            Maison de soins premium intégrée aux centres Casa Padel.
          </p>
          <div className="flex gap-4 mt-2">
            {/* Social links — URLs à renseigner */}
            <a
              href="#"
              className="text-xs tracking-widest uppercase transition-colors hover:opacity-100 opacity-50"
              aria-label="Instagram"
              style={{ color: "var(--uni-text)" }}
            >
              IG
            </a>
            <a
              href="#"
              className="text-xs tracking-widest uppercase transition-colors hover:opacity-100 opacity-50"
              aria-label="TikTok"
              style={{ color: "var(--uni-text)" }}
            >
              TK
            </a>
            <a
              href="#"
              className="text-xs tracking-widest uppercase transition-colors hover:opacity-100 opacity-50"
              aria-label="Facebook"
              style={{ color: "var(--uni-text)" }}
            >
              FB
            </a>
          </div>
        </div>

        {/* Univers */}
        <div className="flex flex-col gap-4">
          <p
            className="section-overline"
            style={{ fontFamily: "var(--uni-font-label)" }}
          >
            Espaces
          </p>
          <nav className="flex flex-col gap-2">
            {[
              { href: "/homme", label: "Espace Homme" },
              { href: "/homme/services", label: "Prestations Homme" },
              { href: "/femme", label: "Espace Femme" },
              { href: "/femme/services", label: "Prestations Femme" },
              { href: "/a-propos", label: "À propos" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-wide transition-colors hover:text-uni-accent"
                style={{
                  color: "var(--uni-text-muted)",
                  fontFamily: "var(--uni-font-label)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Salons */}
        <div className="flex flex-col gap-4">
          <p
            className="section-overline"
            style={{ fontFamily: "var(--uni-font-label)" }}
          >
            Nos salons
          </p>
          <nav className="flex flex-col gap-2">
            {salons.map((salon) => (
              <Link
                key={salon.slug}
                href={`/salons/${salon.slug}`}
                className="text-xs tracking-wide transition-colors hover:text-uni-accent"
                style={{
                  color: "var(--uni-text-muted)",
                  fontFamily: "var(--uni-font-label)",
                }}
              >
                {salon.city}
              </Link>
            ))}
            <Link
              href="/investisseurs"
              className="text-xs tracking-wide transition-colors hover:text-uni-accent mt-2"
              style={{
                color: "var(--uni-text-muted)",
                fontFamily: "var(--uni-font-label)",
              }}
            >
              Investisseurs
            </Link>
          </nav>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <p
            className="section-overline"
            style={{ fontFamily: "var(--uni-font-label)" }}
          >
            Informations
          </p>
          <nav className="flex flex-col gap-2">
            {[
              { href: "/contact", label: "Contact" },
              { href: "/mentions-legales", label: "Mentions légales" },
              { href: "/confidentialite", label: "Confidentialité" },
              { href: "/cookies", label: "Cookies" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-wide transition-colors hover:text-uni-accent"
                style={{
                  color: "var(--uni-text-muted)",
                  fontFamily: "var(--uni-font-label)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "var(--uni-border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p
            className="text-xs opacity-40"
            style={{ fontFamily: "var(--uni-font-label)" }}
          >
            © {new Date().getFullYear()} Le Cercle — En partenariat avec Casa Padel
          </p>
          <p
            className="text-xs opacity-40"
            style={{ fontFamily: "var(--uni-font-label)" }}
          >
            Réservation via Fresha
          </p>
        </div>
      </div>
    </footer>
  );
}
