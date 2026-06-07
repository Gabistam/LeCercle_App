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

export type Salon = {
  id: string;
  slug: string;
  name: string;
  partnerName: "Casa Padel";
  city: string;
  department?: string;
  address: string;
  postalCode?: string;
  phone?: string;
  email?: string;
  freshaUrlMen?: string;
  freshaUrlWomen?: string;
  freshaUrlGlobal?: string;
  googleMapsUrl?: string;
  services: SalonService[];
  openingHours?: {
    label: string;
    days: string;
    hours: string;
  }[];
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
