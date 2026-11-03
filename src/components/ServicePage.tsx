import Link from "next/link";
import { Gallery, JsonLd, MenuItems } from "@/components/ui";
import type { Item } from "@/data/carte";
import type { QA } from "@/data/faq";
import { mainSalon } from "@/data/salons";
import { breadcrumb, faqSchema } from "@/data/schema";
import { SITE_URL } from "@/data/site";
import { bookingUrl, track } from "@/data/track";

export type ServiceProps = {
  slug: string;
  crumb: string;
  eyebrow: string;
  title: string;
  titleEm: string;
  lede: string;
  body: string[];
  pricesTitle: string;
  prices: Item[];
  faq: QA[];
  /** Nom du service pour les données structurées Google. */
  serviceName: string;
};

/** Page de prestation (dégradé, barbe, enfant) : texte, tarifs, FAQ, liens vers la réservation et le salon. */
export default function ServicePage(p: ServiceProps) {
  const s = mainSalon;
  const place = `service-${p.slug}`;
  const path = `/homme/${p.slug}`;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.serviceName,
    url: `${SITE_URL}${path}`,
    areaServed: { "@type": "City", name: "Saint-Denis" },
    provider: { "@id": `${SITE_URL}/salons/${s.slug}#salon` },
    offers: p.prices
      .filter((i) => /\d/.test(i.price))
      .map((i) => ({
        "@type": "Offer",
        name: i.name,
        price: i.price.replace(/[^\d,]/g, "").replace(",", "."),
        priceCurrency: "EUR",
      })),
  };

  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={faqSchema(p.faq)} />
      <JsonLd
        data={breadcrumb([
          { name: "Accueil", path: "/" },
          { name: "Espace Homme", path: "/homme" },
          { name: p.crumb, path },
        ])}
      />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap cols2 end">
          <div>
            <Link href="/homme" className="eyebrow dim link-arrow">
              ← Espace Homme
            </Link>
            <span className="eyebrow" style={{ display: "block", marginTop: 18 }}>
              {p.eyebrow}
            </span>
            <h1 className="h-page">
              {p.title} <em>{p.titleEm}</em>
            </h1>
          </div>
          <div>
            <p className="lede">{p.lede}</p>
            <div className="actions">
              <a className="btn" href={bookingUrl(place)} target="_blank" rel="noopener" {...track("reserver", place)}>
                Réserver
              </a>
              <a className="btn ghost" href={`tel:${s.phoneE164}`} {...track("appeler", place)}>
                {s.phone}
              </a>
            </div>
            <p className="muted small">
              {s.rating!.value} sur Google · {s.rating!.count} avis · {s.address}, {s.city} · {s.location}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="intro">
            <span className="eyebrow">Tarifs</span>
            <h2 className="h-sub">{p.pricesTitle}</h2>
            <p className="muted">Tarifs TTC du salon de {s.city}.</p>
            <div className="actions">
              <Link className="btn ghost" href="/homme">
                Toute la carte
              </Link>
            </div>
          </div>
          <div>
            <div className="menu">
              <div className="menu-group">
                <MenuItems items={p.prices} />
              </div>
            </div>
            {p.body.map((t) => (
              <p className="muted" key={t.slice(0, 24)} style={{ marginTop: 22 }}>
                {t}
              </p>
            ))}
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
              Le salon est {s.location.toLowerCase()}, {s.address} à {s.city}.{" "}
              <Link href={`/salons/${s.slug}`}>Horaires, accès et parking</Link>.
            </p>
          </div>
          <div className="faq">
            {p.faq.map((q) => (
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
