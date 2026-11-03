import type { Metadata } from "next";
import Link from "next/link";
import { Gallery, JsonLd } from "@/components/ui";
import { formatHour, mainSalon } from "@/data/salons";
import { breadcrumb } from "@/data/schema";
import { bookingUrl, track } from "@/data/track";

export const metadata: Metadata = {
  title: { absolute: "Barber in Saint-Denis, north of Paris · Le Cercle" },
  description:
    "Le Cercle, barber in Saint-Denis (93200), next to Casa Padel. Haircut from €24, haircut and beard from €35. Walk-ins welcome, Monday to Saturday until 9 pm.",
  alternates: { canonical: "/en", languages: { fr: "/salons/saint-denis", en: "/en" } },
};

const days: Record<string, string> = {
  Lundi: "Monday",
  Mardi: "Tuesday",
  Mercredi: "Wednesday",
  Jeudi: "Thursday",
  Vendredi: "Friday",
  Samedi: "Saturday",
  Dimanche: "Sunday",
};
const h = (t: string) => formatHour(t).replace(" h ", ":").replace(" h", ":00");

const prices = [
  { name: "Clipper haircut (fade)", price: "€24" },
  { name: "Scissor haircut", price: "€29" },
  { name: "Beard trim", price: "€15" },
  { name: "Haircut and beard", price: "from €35" },
  { name: "Premium: haircut, beard, hot towel, facial", price: "€49" },
  { name: "Kids under 10", price: "from €15" },
];

export default function English() {
  const s = mainSalon;
  return (
    <div lang="en">
      <JsonLd data={breadcrumb([{ name: "Accueil", path: "/" }, { name: "English", path: "/en" }])} />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap cols2 end">
          <div>
            <span className="eyebrow">Barber · Saint-Denis, north of Paris</span>
            <h1 className="h-page">
              Barber in <em>Saint-Denis.</em>
            </h1>
          </div>
          <div>
            <p className="lede">
              Le Cercle is a barbershop next to Casa Padel, {s.address}, 93200 Saint-Denis. Open to everyone, with or
              without an appointment.
            </p>
            <div className="actions">
              <a className="btn" href={bookingUrl("en")} target="_blank" rel="noopener" {...track("reserver", "en")}>
                Book online
              </a>
              <a className="btn ghost" href={`tel:${s.phoneE164}`} {...track("appeler", "en")}>
                +33 9 48 19 48 24
              </a>
            </div>
            <p className="muted small">
              Rated {s.rating!.value.replace(",", ".")} on Google · {s.rating!.count} reviews · No card needed to book
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols2">
          <div>
            <span className="eyebrow">Prices</span>
            <div className="menu" style={{ marginTop: 18 }}>
              <div className="menu-group">
                {prices.map((p) => (
                  <div className="item" key={p.name}>
                    <span className="n">{p.name}</span>
                    <span className="p">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Opening hours</span>
            <ul className="list" style={{ marginTop: 18 }}>
              {s.hours?.map((d) => (
                <li key={d.label}>
                  <span>{days[d.label]}</span>
                  <span className={d.opens ? undefined : "muted"}>
                    {d.opens && d.closes ? `${h(d.opens)} to ${h(d.closes)}` : "Closed"}
                  </span>
                </li>
              ))}
            </ul>
            <span className="eyebrow" style={{ display: "block", marginTop: 34 }}>
              Getting here
            </span>
            <p className="muted">
              Saint-Denis station (RER D, line H, tram T1) is about 600 m away. Saint-Denis – Porte de Paris (metro 13) is
              about 800 m away. From Paris, Saint-Denis – Pleyel (metro 14) is about 1.3 km away. Parking is available for
              customers.
            </p>
            <div className="actions">
              <a className="btn ghost" href={s.googleMapsUrl} target="_blank" rel="noopener" {...track("itineraire", "en")}>
                Open in Maps
              </a>
              <Link className="btn ghost" href={`/salons/${s.slug}`} hrefLang="fr">
                Version française
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Gallery start={3} />
    </div>
  );
}
