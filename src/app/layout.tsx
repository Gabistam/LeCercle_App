import type { Metadata } from "next";
import Script from "next/script";
import {
  Cormorant_Garamond,
  Jost,
  Bebas_Neue,
  Barlow_Condensed,
  Barlow,
} from "next/font/google";
import "./globals.css";
import CustomCursorLoader from "@/components/layout/CustomCursorLoader";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-cond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Le Cercle — Maison de soins premium",
    template: "%s | Le Cercle",
  },
  description:
    "Le Cercle est une maison de soins premium intégrée aux centres Casa Padel. Barber, grooming, nail bar, massage et récupération après sport en Région Parisienne.",
  keywords: [
    "Le Cercle",
    "barber premium",
    "nail bar",
    "massage récupération",
    "Casa Padel",
    "soins premium",
    "grooming",
  ],
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
    siteName: "Le Cercle",
  },
};

const fontVars = [
  cormorant.variable,
  jost.variable,
  bebasNeue.variable,
  barlowCondensed.variable,
  barlow.variable,
].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={fontVars}>
      <body className="min-h-screen antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JJCJ7MZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JJCJ7MZ');`}
        </Script>
        <CustomCursorLoader />
        {children}
      </body>
    </html>
  );
}
