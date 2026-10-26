"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

const KEY = "lecercle-consent";
const EVT = "lecercle:consent";
const ORIGIN_KEY = "lecercle-origine";

function subscribe(cb: () => void) {
  window.addEventListener(EVT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVT, cb);
    window.removeEventListener("storage", cb);
  };
}
function snapshot() {
  try {
    return localStorage.getItem(KEY) ?? "none";
  } catch {
    return "none";
  }
}

/**
 * Bandeau cookies. Google Tag Manager est chargé pour tous (layout.tsx) en mode consentement :
 * « Accepter » active les cookies Google, « Refuser » laisse Google en mode anonyme sans cookie.
 */
export default function Consent() {
  const choice = useSyncExternalStore(subscribe, snapshot, () => "ssr");
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener("lecercle:cookies", reopen);
    return () => window.removeEventListener("lecercle:cookies", reopen);
  }, []);

  // Mémorise d'où vient le visiteur (lien de pub, Google, Instagram…) le temps de sa visite.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(ORIGIN_KEY)) return;
      const q = new URLSearchParams(location.search);
      const ref = document.referrer && !document.referrer.startsWith(location.origin) ? new URL(document.referrer).hostname : "";
      sessionStorage.setItem(
        ORIGIN_KEY,
        JSON.stringify({
          source: q.get("utm_source") || (q.get("gclid") ? "google-ads" : q.get("fbclid") ? "meta" : ref || "direct"),
          medium: q.get("utm_medium") || (q.get("gclid") ? "cpc" : ref ? "referral" : "none"),
          campagne: q.get("utm_campaign") || "",
          page_arrivee: location.pathname,
        }),
      );
    } catch {}
  }, []);

  // Envoie à GTM chaque clic sur un bouton balisé : clic_reserver, clic_appeler, clic_itineraire…
  // Sans accord, Google ne reçoit ces clics que sous forme anonyme (mode consentement).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      let origin = {};
      try {
        origin = JSON.parse(sessionStorage.getItem(ORIGIN_KEY) || "{}");
      } catch {}
      const w = window as unknown as { dataLayer?: object[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: `clic_${el.dataset.track}`,
        emplacement: el.dataset.place,
        page: location.pathname,
        ...origin,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const save = (c: "granted" | "denied") => {
    const before = snapshot();
    try {
      localStorage.setItem(KEY, c);
    } catch {}
    setReopened(false);
    const value = c === "granted" ? "granted" : "denied";
    const w = window as unknown as { gtag?: (...a: unknown[]) => void };
    w.gtag?.("consent", "update", {
      ad_storage: value,
      analytics_storage: value,
      ad_user_data: value,
      ad_personalization: value,
    });
    // Retrait du consentement : on recharge pour effacer l'état de la page.
    if (before === "granted" && c === "denied") return location.reload();
    window.dispatchEvent(new Event(EVT));
  };

  const show = choice === "none" || (reopened && choice !== "ssr");

  return (
    <>
      {show && (
        <div className="consent" role="dialog" aria-live="polite" aria-label="Cookies">
          <p>
            Nous utilisons des cookies Google pour mesurer l&apos;audience et savoir quelles pages amènent des
            réservations. Sans votre accord, aucun cookie n&apos;est déposé et Google ne reçoit que des données
            anonymes.{" "}
            <Link href="/cookies" style={{ color: "var(--brass)" }}>
              En savoir plus
            </Link>
          </p>
          <div className="actions">
            <button className="btn ghost" type="button" onClick={() => save("denied")}>
              Refuser
            </button>
            <button className="btn" type="button" onClick={() => save("granted")}>
              Accepter
            </button>
          </div>
        </div>
      )}
    </>
  );
}
