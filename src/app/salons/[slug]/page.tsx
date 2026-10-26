import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery, JsonLd, MenuItems } from "@/components/ui";
import { favorites } from "@/data/carte";
import { formatHour, openSalons } from "@/data/salons";
import { breadcrumb, faqSchema, salonSchema } from "@/data/schema";
import { faq } from "@/data/faq";
import { bookingUrl, track } from "@/data/track";

export const dynamicParams = false;

export function generateStaticParams() {
  return openSalons.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = openSalons.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `Barber ${s.city}, ${(s.address ?? "").replace(/^\d+\s/, "")}`,
    description: `${s.name}, barber ${s.location.toLowerCase()}, ${s.address} à ${s.city}. Avec ou sans rendez-vous, du lundi au samedi. Coupe dès 24 €.`,
    alternates: { canonical: `/salons/${s.slug}` },
  };
}

export default async function SalonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = openSalons.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <JsonLd data={salonSchema(s)} />
      <JsonLd data={faqSchema(faq(s))} />
      <JsonLd
        data={breadcrumb([
          { name: "Accueil", path: "/" },
          { name: "Nos salons", path: "/salons" },
          { name: s.city, path: `/salons/${s.slug}` },
        ])}
      />
      <section className="section tight-bottom">
        <div className="wrap">
          <Link href="/salons" className="eyebrow dim link-arrow">
            ← Nos salons
          </Link>
          <h1 className="h-page">
            Barber à <em>{s.city}.</em>
          </h1>
          <p className="lede" style={{ marginTop: 26 }}>
            {s.name} est {s.location.toLowerCase()}, {s.address}. Il est ouvert à tous, joueurs de padel ou non, avec ou
            sans rendez-vous.
          </p>
        </div>
      </section>

      <div className="facts boxed">
        <div>
          <span className="eyebrow">Adresse</span>
          <span className="v">{s.address}</span>
          <span className="s">
            {s.postalCode} {s.city}
          </span>
          <a className="eyebrow link-arrow" style={{ marginTop: 8 }} href={s.googleMapsUrl} target="_blank" rel="noopener" {...track("itineraire", "salon-infos")}>
            Itinéraire →
          </a>
        </div>
        <div>
          <span className="eyebrow">Téléphone</span>
          <a className="v link-arrow" href={`tel:${s.phoneE164}`} {...track("appeler", "salon-infos")}>
            {s.phone}
          </a>
          <span className="s">Appel ou passage direct au salon</span>
        </div>
        <div>
          <span className="eyebrow">Note Google</span>
          <span className="v">{s.rating?.value} sur 5</span>
          <a className="s" href={s.googleReviewsUrl} target="_blank" rel="noopener" {...track("avis", "salon-infos")}>
            {s.rating?.count} avis
          </a>
        </div>
      </div>

      <section className="section">
        <div className="wrap cols2">
          <div>
            <h2 className="eyebrow" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 11, letterSpacing: ".32em" }}>
              Horaires
            </h2>
            <ul className="list">
              {s.hours?.map((h) => (
                <li key={h.label}>
                  <span>{h.label}</span>
                  <span className={h.opens ? undefined : "muted"}>
                    {h.opens && h.closes ? `${formatHour(h.opens)} à ${formatHour(h.closes)}` : "Fermé"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Réserver</span>
            <p className="quote" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>
              En ligne ou sur place.
            </p>
            <p className="muted">
              Nos barbers vous reçoivent du lundi au samedi. Le Beauty Studio ouvrira dans le même espace.
            </p>
            <div className="actions" style={{ marginTop: 10 }}>
              <a className="btn" href={bookingUrl(`salon-${s.slug}`)} target="_blank" rel="noopener" {...track("reserver", `salon-${s.slug}`)}>
                Réserver
              </a>
              <a className="btn ghost" href={s.googleMapsUrl} target="_blank" rel="noopener" {...track("itineraire", "salon-reserver")}>
                Ouvrir dans Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />
      <section className="section">
        <div className="wrap split">
          <div className="intro">
            <span className="eyebrow">Tarifs</span>
            <h2 className="h-sub">
              Les coupes les plus <em>demandées.</em>
            </h2>
            <div className="actions">
              <Link className="btn ghost" href="/homme">
                Toute la carte
              </Link>
            </div>
          </div>
          <div className="menu">
            <div className="menu-group">
              <MenuItems items={favorites} />
            </div>
          </div>
        </div>
      </section>

      <Gallery start={1} />

      <section className="section tight-top">
        <div className="wrap split">
          <div className="intro">
            <span className="eyebrow">Questions fréquentes</span>
            <h2 className="h-sub">
              Avant de <em>venir.</em>
            </h2>
            <p className="muted">
              Une autre question ? Appelez le salon au{" "}
              <a href={`tel:${s.phoneE164}`} {...track("appeler", "salon-faq")}>
                {s.phone}
              </a>
              .
            </p>
          </div>
          <div className="faq">
            {faq(s).map((q) => (
              <details key={q.q}>
                <summary>{q.q}</summary>
                <p>{q.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
