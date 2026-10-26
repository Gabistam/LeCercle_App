import { FRESHA_URL, socials } from "@/data/site";

export type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type Hours = { label: string; days: Day[]; opens?: string; closes?: string };

export type Salon = {
  slug: string;
  name: string;
  city: string;
  /** Où se trouve le salon par rapport au club, tel qu'affiché sur le site. */
  location: string;
  address?: string;
  postalCode?: string;
  phone?: string;
  phoneE164?: string;
  hours?: Hours[];
  geo?: { latitude: number; longitude: number };
  bookingUrl?: string;
  googleMapsUrl?: string;
  googleReviewsUrl?: string;
  rating?: { value: string; count: number };
  sameAs?: string[];
  open: boolean;
};

export const salons: Salon[] = [
  {
    slug: "saint-denis",
    name: "Le Cercle Saint-Denis",
    city: "Saint-Denis",
    location: "À côté du Casa Padel",
    address: "103 rue Charles Michels",
    postalCode: "93200",
    phone: "09 48 19 48 24",
    phoneE164: "+33948194824",
    hours: [
      { label: "Lundi", days: ["Monday"], opens: "12:00", closes: "21:00" },
      { label: "Mardi", days: ["Tuesday"], opens: "12:00", closes: "21:00" },
      { label: "Mercredi", days: ["Wednesday"], opens: "10:00", closes: "21:00" },
      { label: "Jeudi", days: ["Thursday"], opens: "10:00", closes: "21:00" },
      { label: "Vendredi", days: ["Friday"], opens: "10:00", closes: "21:00" },
      { label: "Samedi", days: ["Saturday"], opens: "10:00", closes: "21:00" },
      { label: "Dimanche", days: ["Sunday"] },
    ],
    geo: { latitude: 48.9297577, longitude: 2.3455134 },
    bookingUrl: FRESHA_URL,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Le+Cercle+Studio+Barber&query_place_id=ChIJyR13C_dv5kcRT841z4AlVi8",
    googleReviewsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJyR13C_dv5kcRT841z4AlVi8",
    rating: { value: "4,9", count: 143 },
    sameAs: [
      socials.instagram,
      socials.tiktok,
      "https://www.planity.com/le-cercle-studio-barber-chez-casapadel-93200-saint-denis",
      "https://www.fresha.com/a/le-cercle-coiffeur-barbier-saint-denis-saint-denis-103-rue-charles-michels-ztrzxzu1",
    ],
    open: true,
  },
  {
    slug: "asnieres",
    name: "Le Cercle Asnières-sur-Seine",
    city: "Asnières-sur-Seine",
    location: "Dans le Casa Padel d'Asnières",
    open: false,
  },
  {
    slug: "croissy-beaubourg",
    name: "Le Cercle Croissy-Beaubourg",
    city: "Croissy-Beaubourg",
    location: "Dans le Casa Padel de Croissy-Beaubourg",
    open: false,
  },
];

export const openSalons = salons.filter((s) => s.open);
export const mainSalon = openSalons[0];

/** "12:00" → "12 h", "10:30" → "10 h 30" */
export function formatHour(t: string) {
  const [h, m] = t.split(":");
  return m === "00" ? `${Number(h)} h` : `${Number(h)} h ${m}`;
}
