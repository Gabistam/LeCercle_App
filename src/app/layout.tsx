import type { Metadata, Viewport } from "next";
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
import { SITE_NAME, SITE_URL, socials } from "@/data/site";

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
        <JsonLd data={organization} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Consent />
      </body>
    </html>
  );
}
