export type Universe = "mixed" | "men" | "women";

export type ServiceAudience = "men" | "women" | "unisex";

export type ServiceCategory =
  | "barber"
  | "grooming"
  | "haircare"
  | "tricopigmentation"
  | "nails"
  | "massage"
  | "recovery"
  | "ritual";

export type Service = {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  audience: ServiceAudience;
  universe: Universe;
  shortDescription: string;
  longDescription?: string;
  durationMinutes?: number;
  durationLabel: string;
  priceFrom?: number;
  priceLabel: string;
  isSignature?: boolean;
  isFeatured?: boolean;
  image?: string;
};

export type SalonService =
  | "barber"
  | "grooming"
  | "nails"
  | "massage"
  | "recovery"
  | "ritual";

export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type OpeningHours =
  | { label: string; days: DayOfWeek[]; opens: string; closes: string; closed?: false }
  | { label: string; days: DayOfWeek[]; closed: true };

export type Salon = {
  id: string;
  slug: string;
  name: string;
  partnerName: "Casa Padel";
  city: string;
  department?: string;
  address: string;
  postalCode?: string;
  /** Numéro français au format d'affichage, ex. "09 48 19 48 24" */
  phone?: string;
  email?: string;
  freshaUrlMen?: string;
  freshaUrlWomen?: string;
  freshaUrlGlobal?: string;
  googleMapsUrl?: string;
  services: SalonService[];
  openingHours?: OpeningHours[];
  geo?: { latitude: number; longitude: number };
  priceRange?: string;
  sameAs?: string[];
  image: string;
  isComingSoon?: boolean;
};

export const universeThemes = {
  mixed: "mixed",
  men: "men",
  women: "women",
} as const;

export type SocialLinks = {
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  linkedin?: string;
};

export type ServicePack = {
  id: string;
  slug: string;
  name: string;
  contents: string;
  priceFrom: number;
  priceLabel: string;
  universe: Universe;
};

export type ForfaitHomme = {
  id: string;
  name: string;
  includes: string[];
  priceFrom: number;
  priceLabel: string;
  isFeatured?: boolean;
};
