import Link from "next/link";
import Image from "next/image";
import { mainSalon } from "@/data/salons";
import { socials } from "@/data/site";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { bookingUrl, track } from "@/data/track";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="foot">
            <div>
              <Link className="logo" href="/" aria-label="Le Cercle, accueil">
                <Image src="/images/logos/le-cercle-logo-blanc.png" alt="Le Cercle, coiffeur-barbier" width={900} height={843} sizes="111px" />
              </Link>
              <p className="muted" style={{ maxWidth: "22em", marginTop: 10 }}>
                Coiffeurs-barbiers installés dans les clubs de padel.
              </p>
            </div>
            <div>
              <span className="eyebrow">{mainSalon.name}</span>
              <span>{mainSalon.address}</span>
              <span>
                {mainSalon.postalCode} {mainSalon.city}
              </span>
              <a href={`tel:${mainSalon.phoneE164}`} {...track("appeler", "pied-de-page")}>{mainSalon.phone}</a>
            </div>
            <div>
              <span className="eyebrow">Maison</span>
              <Link href="/homme">Espace Homme</Link>
              <Link href="/femme">Beauty Studio</Link>
              <Link href="/salons">Nos salons</Link>
              <Link href="/investisseurs">Investisseurs</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              <span className="eyebrow">Suivre</span>
              <a href={socials.instagram} target="_blank" rel="noopener" {...track("instagram", "pied-de-page")}>Instagram</a>
              <a href={socials.tiktok} target="_blank" rel="noopener" {...track("tiktok", "pied-de-page")}>TikTok</a>
              {mainSalon.googleReviewsUrl && (
                <a href={mainSalon.googleReviewsUrl} target="_blank" rel="noopener" {...track("avis", "pied-de-page")}>Avis Google</a>
              )}
            </div>
          </div>
          <div className="fine">
            <span>© {new Date().getFullYear()} Le Cercle Studio</span>
            <nav aria-label="Informations légales">
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/confidentialite">Confidentialité</Link>
              <Link href="/cookies">Cookies</Link>
              <CookieSettingsButton />
            </nav>
          </div>
        </div>
      </footer>
      <div className="mbar">
        <a className="btn" href={bookingUrl("barre-mobile")} target="_blank" rel="noopener" {...track("reserver", "barre-mobile")}>
          Réserver
        </a>
        <a className="btn ghost" href={`tel:${mainSalon.phoneE164}`} {...track("appeler", "barre-mobile")}>
          Appeler
        </a>
      </div>
    </>
  );
}
