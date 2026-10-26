import { FRESHA_URL } from "@/data/site";

/**
 * Suivi des visiteurs.
 * Chaque bouton important porte data-track (l'action) et data-place (l'endroit de la page).
 * Au clic, le composant Consent envoie à Google Tag Manager un événement :
 *   { event: "clic_reserver" | "clic_appeler" | "clic_itineraire" | "clic_instagram" | ..., emplacement, page, source, ... }
 * Les liens Fresha portent aussi des paramètres UTM pour retrouver, côté Fresha et Google Analytics,
 * les réservations venues du site.
 */
export type TrackAction = "reserver" | "appeler" | "itineraire" | "avis" | "instagram" | "tiktok";

export function track(action: TrackAction, place: string) {
  return { "data-track": action, "data-place": place } as const;
}

export function bookingUrl(place: string) {
  const u = new URL(FRESHA_URL);
  u.searchParams.set("utm_source", "lecerclestudio.com");
  u.searchParams.set("utm_medium", "site");
  u.searchParams.set("utm_campaign", "reservation");
  u.searchParams.set("utm_content", place);
  return u.toString();
}
