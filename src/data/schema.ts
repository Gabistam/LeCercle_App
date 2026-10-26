import type { Salon } from "@/data/salons";
import { SITE_URL } from "@/data/site";

/** Données structurées « salon de coiffure » pour Google (fiche locale). */
export function salonSchema(s: Salon) {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${SITE_URL}/salons/${s.slug}#salon`,
    name: s.name,
    url: `${SITE_URL}/salons/${s.slug}`,
    image: [`${SITE_URL}/images/cercle/portrait-barbe.webp`, `${SITE_URL}/images/og-le-cercle.jpg`],
    logo: `${SITE_URL}/images/logos/le-cercle-logo-blanc.png`,
    telephone: s.phoneE164,
    priceRange: "15 € – 49 €",
    currenciesAccepted: "EUR",
    parentOrganization: { "@id": `${SITE_URL}/#organisation` },
    address: {
      "@type": "PostalAddress",
      streetAddress: s.address,
      postalCode: s.postalCode,
      addressLocality: s.city,
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: s.geo && { "@type": "GeoCoordinates", latitude: s.geo.latitude, longitude: s.geo.longitude },
    hasMap: s.googleMapsUrl,
    openingHoursSpecification: s.hours
      ?.filter((h) => h.opens && h.closes)
      .map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
    sameAs: s.sameAs,
    potentialAction: s.bookingUrl && {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", urlTemplate: s.bookingUrl, actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"] },
      result: { "@type": "Reservation", name: "Rendez-vous barber" },
    },
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}
