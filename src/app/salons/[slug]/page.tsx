import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { salons } from "@/data/salons";
import { services } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export function generateStaticParams() {
  return salons.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const salon = salons.find((s) => s.slug === slug);
  if (!salon) return {};
  return {
    title: `${salon.name} — Barber, Nail Bar & Massage`,
    description: `Le Cercle ${salon.city} — soins premium barber, nail bar et massage au sein du centre Casa Padel. ${salon.address}, ${salon.postalCode}.`,
  };
}

const SITE_URL = "https://lecerclestudio.com";

// "09 48 19 48 24" → "+33948194824"
const toE164 = (phone: string) => `+33${phone.replace(/\s/g, "").slice(1)}`;

// "12:00" → "12h", "10:30" → "10h30"
const formatHour = (time: string) => {
  const [h, m] = time.split(":");
  return m === "00" ? `${Number(h)}h` : `${Number(h)}h${m}`;
};

const serviceLabels: Record<string, string> = {
  barber: "Barber",
  grooming: "Grooming",
  nails: "Nail Bar",
  massage: "Massage",
  recovery: "Récupération",
  ritual: "Rituels",
};

export default async function SalonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const salon = salons.find((s) => s.slug === slug);
  if (!salon) notFound();

  const menServices = services.filter((s) => s.audience === "men" && s.isFeatured);
  const womenServices = services.filter((s) => s.audience === "women" && s.isFeatured);

  return (
    <div data-universe="mixed">
      <SiteHeader />
      <main>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <Link
            href="/salons"
            className="text-xs tracking-widest uppercase opacity-40 hover:opacity-70 transition-opacity flex items-center gap-2"
            style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
          >
            ← Tous les salons
          </Link>
          <p
            className="text-xs tracking-widest uppercase opacity-40"
            style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)", letterSpacing: "0.25em" }}
          >
            Casa Padel · {salon.department}
          </p>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-px" style={{ backgroundColor: "#C9A84C" }} />
            <h1
              className="text-6xl md:text-8xl uppercase leading-none"
              style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)", letterSpacing: "0.05em" }}
            >
              {salon.city}
            </h1>
          </div>
          <p
            className="text-sm opacity-40"
            style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
          >
            {salon.address}, {salon.postalCode} {salon.city}
          </p>

          {/* Prestations disponibles */}
          <div className="flex flex-wrap gap-2 mt-2">
            {salon.services.map((svc) => (
              <span
                key={svc}
                className="px-3 py-1 border text-xs"
                style={{
                  color: "#C9A84C",
                  borderColor: "rgba(201,168,76,0.3)",
                  fontFamily: "var(--font-barlow-cond, sans-serif)",
                  letterSpacing: "0.1em",
                }}
              >
                {serviceLabels[svc]}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="/homme/reservation" className="btn-primary">
              Réserver Homme
            </Link>
            <Link
              href="/femme/reservation"
              className="btn-outline"
            >
              Réserver Femme
            </Link>
            {salon.googleMapsUrl && (
              <a
                href={salon.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Itinéraire ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section
        className="py-12 px-6 border-t"
        style={{ backgroundColor: "#171719", borderColor: "rgba(201,168,76,0.1)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <p
              className="section-overline"
              style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
            >
              Adresse
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
            >
              {salon.address}
              <br />
              {salon.postalCode} {salon.city}
            </p>
          </div>

          {salon.phone && (
            <div className="flex flex-col gap-2">
              <p
                className="section-overline"
                style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
              >
                Téléphone
              </p>
              <a
                href={`tel:${toE164(salon.phone)}`}
                className="text-sm hover:opacity-70 transition-opacity self-start"
                style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
              >
                {salon.phone}
              </a>
            </div>
          )}

          {salon.openingHours && (
            <div className="flex flex-col gap-2">
              <p
                className="section-overline"
                style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
              >
                Horaires
              </p>
              <ul
                className="text-sm flex flex-col gap-1"
                style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
              >
                {salon.openingHours.map((h) => (
                  <li key={h.label} className="flex justify-between gap-6 max-w-xs">
                    <span>{h.label}</span>
                    <span className={h.closed ? "opacity-50" : undefined}>
                      {h.closed ? "Fermé" : `${formatHour(h.opens)} – ${formatHour(h.closes)}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <p
              className="section-overline"
              style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
            >
              Partenaire
            </p>
            <p
              className="text-sm"
              style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
            >
              {salon.partnerName}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p
              className="section-overline"
              style={{ color: "#C9A84C", fontFamily: "var(--font-barlow-cond, sans-serif)" }}
            >
              Réservation
            </p>
            <p
              className="text-sm opacity-50"
              style={{ color: "#F1F1F1", fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 300 }}
            >
              Via Fresha — redirection depuis les pages Réserver.
            </p>
          </div>
        </div>

        {/* Carte Google Maps */}
        <div className="max-w-7xl mx-auto mt-10">
          <iframe
            title={`Plan d'accès — ${salon.name}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${salon.address}, ${salon.postalCode} ${salon.city}`
            )}&hl=fr&output=embed`}
            className="w-full border-0"
            style={{ height: 380, border: "1px solid rgba(201,168,76,0.2)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* Espace Homme */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="w-8 h-px" style={{ backgroundColor: "#C9A84C" }} />
              <h2
                className="text-4xl uppercase tracking-wide"
                style={{ color: "#F1F1F1", fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)" }}
              >
                Espace Homme
              </h2>
            </div>
            <Link href="/homme/reservation" className="btn-primary self-start md:self-auto text-xs py-2 px-5">
              Réserver
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
            {menServices.slice(0, 3).map((svc, i) => (
              <ServiceCard key={svc.id} service={svc} index={i} universe="men" />
            ))}
          </div>
          <Link href="/homme" className="btn-ghost self-start text-xs">
            Voir l&apos;Espace Homme →
          </Link>
        </div>
      </section>

      {/* Espace Femme */}
      <section className="py-16 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="w-8 h-px" style={{ backgroundColor: "#B89A5A" }} />
              <h2
                className="text-3xl italic"
                style={{ color: "#4A3428", fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 400 }}
              >
                Espace Femme
              </h2>
            </div>
            <Link href="/femme/reservation" className="btn-primary self-start md:self-auto text-xs py-2 px-5">
              Réserver
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {womenServices.slice(0, 4).map((svc, i) => (
              <ServiceCard key={svc.id} service={svc} index={i} universe="women" />
            ))}
          </div>
          <Link
            href="/femme"
            className="btn-ghost self-start text-xs"
            style={{ color: "#A89080" }}
          >
            Voir l&apos;Espace Femme →
          </Link>
        </div>
      </section>

      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BarberShop",
            name: salon.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: salon.address,
              postalCode: salon.postalCode,
              addressLocality: salon.city,
              addressCountry: "FR",
            },
            url: `${SITE_URL}/salons/${salon.slug}`,
            telephone: salon.phone && toE164(salon.phone),
            openingHoursSpecification: salon.openingHours
              ?.filter((h) => !h.closed)
              .map((h) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: h.days,
                opens: h.opens,
                closes: h.closes,
              })),
            geo: salon.geo && {
              "@type": "GeoCoordinates",
              latitude: salon.geo.latitude,
              longitude: salon.geo.longitude,
            },
            priceRange: salon.priceRange,
            sameAs: salon.sameAs,
          }),
        }}
      />
      </main>
      <SiteFooter />
    </div>
  );
}
