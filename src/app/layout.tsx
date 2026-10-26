import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fontsource/bodoni-moda/400.css";
import "@fontsource/bodoni-moda/400-italic.css";
import "@fontsource/bodoni-moda/500.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Consent from "@/components/Consent";
import { JsonLd } from "@/components/ui";
import { GTM_ID, SITE_NAME, SITE_URL, socials } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Le Cercle, coiffeur-barbier dans les clubs de padel",
    template: "%s · Le Cercle",
  },
  description:
    "Le Cercle, coiffeur-barbier. Des barbers installés dans les clubs de padel, ouverts à tous, avec ou sans rendez-vous. Coupe dès 24 €.",
  applicationName: SITE_NAME,
  icons: {
    icon: [
      { url: "/images/logos/favicon/favicon.ico" },
      { url: "/images/logos/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/images/logos/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/images/logos/favicon/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    images: [{ url: "/images/og-le-cercle.jpg", width: 1200, height: 630, alt: "Le Cercle, coiffeur-barbier" }],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
  colorScheme: "dark",
  viewportFit: "cover",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organisation`,
  name: SITE_NAME,
  alternateName: "Le Cercle Studio",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logos/le-cercle-logo-blanc.png`,
  sameAs: [socials.instagram, socials.tiktok],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        {/* Mode consentement Google (v2) : tout est refusé par défaut, puis mis à jour selon le choix du visiteur.
            Sans accord, Google ne reçoit que des signaux anonymes sans cookie. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);
try{if(localStorage.getItem('lecercle-consent')==='granted'){gtag('consent','update',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});}}catch(e){}`}
        </Script>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <JsonLd data={organization} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Consent />
      </body>
    </html>
  );
}
