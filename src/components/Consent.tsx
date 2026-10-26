"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";
import { GTM_ID } from "@/data/site";

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
 * Bandeau cookies + chargement de Google Tag Manager.
 * GTM (mesure d'audience, suivi des clics Réserver / Appeler) n'est chargé qu'après « Accepter ».
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
  useEffect(() => {
    if (choice !== "granted") return;
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
  }, [choice]);

  const save = (c: "granted" | "denied") => {
    const before = snapshot();
    try {
      localStorage.setItem(KEY, c);
    } catch {}
    setReopened(false);
    // Retrait du consentement : on recharge pour décharger GTM.
    if (before === "granted" && c === "denied") return location.reload();
    window.dispatchEvent(new Event(EVT));
  };

  const show = choice === "none" || (reopened && choice !== "ssr");

  return (
    <>
      {choice === "granted" && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}
      {show && (
        <div className="consent" role="dialog" aria-live="polite" aria-label="Cookies">
          <p>
            Nous mesurons l&apos;audience du site et les clics sur « Réserver » avec Google Analytics. Rien n&apos;est
            déposé sans votre accord.{" "}
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
