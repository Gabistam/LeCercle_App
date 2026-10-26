import type { Metadata } from "next";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookies",
  alternates: { canonical: "/cookies" },
  robots: { index: false, follow: true },
};

export default function Cookies() {
  return (
    <section className="section">
      <div className="wrap legal">
        <div>
          <span className="eyebrow">Traceurs</span>
          <h1 className="h-page" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>Cookies</h1>
        </div>
        <div>
          <h2>Traceurs nécessaires</h2>
          <p>
            Le site mémorise votre choix sur les cookies dans votre navigateur. Ce stockage ne sert qu&apos;à ne pas vous
            reposer la question et ne demande pas de consentement.
          </p>
        </div>
        <div>
          <h2>Mesure d&apos;audience</h2>
          <p>
            Google Tag Manager et Google Analytics comptent les visites, leur provenance (Google, publicité, réseaux sociaux) et les clics sur les boutons « Réserver », « Itinéraire » et
            « Appeler ». Ils ne sont chargés qu&apos;après votre accord dans le bandeau. Sans accord, aucun traceur Google
            n&apos;est déposé.
          </p>
        </div>
        <div>
          <h2>Contenus tiers</h2>
          <p>
            Les liens vers Google Maps, Fresha, Instagram et TikTok ouvrent les sites concernés, qui appliquent leurs
            propres règles.
          </p>
        </div>
        <div>
          <h2>Changer d&apos;avis</h2>
          <p>
            Vous pouvez modifier votre choix à tout moment : <span style={{ color: "var(--brass)" }}><CookieSettingsButton /></span>
          </p>
        </div>
      </div>
    </section>
  );
}
