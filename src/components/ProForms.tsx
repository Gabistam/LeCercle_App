"use client";

import { useEffect, useState } from "react";
import LeadForm from "@/components/LeadForm";

type Tab = "invest" | "club";

export default function ProForms() {
  const [tab, setTab] = useState<Tab>("invest");

  // Les boutons « Proposer mon club » / « Ouvrir mon Cercle » de la page choisissent l'onglet.
  useEffect(() => {
    const pick = (e: Event) => setTab((e as CustomEvent<Tab>).detail);
    window.addEventListener("lecercle:tab", pick);
    return () => window.removeEventListener("lecercle:tab", pick);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 34, minWidth: 0 }}>
      <div className="tabs" role="tablist" aria-label="Type de demande">
        <button role="tab" id="t-invest" aria-selected={tab === "invest"} aria-controls="invest" onClick={() => setTab("invest")}>
          Investisseur · franchisé
        </button>
        <button role="tab" id="t-club" aria-selected={tab === "club"} aria-controls="club" onClick={() => setTab("club")}>
          Club · salle de sport
        </button>
      </div>

      <div role="tabpanel" aria-labelledby="t-invest" hidden={tab !== "invest"}>
        <LeadForm
          id="invest"
          subject="Demande investisseur / franchise Le Cercle"
          submitLabel="Recevoir le dossier"
          success="Merci. Nous vous envoyons le dossier et nous vous rappelons sous 48 heures ouvrées."
          consent="J'accepte que mes données servent à traiter ma demande."
        >
          <label htmlFor="i-prenom">Prénom<input id="i-prenom" name="Prénom" required autoComplete="given-name" /></label>
          <label htmlFor="i-nom">Nom<input id="i-nom" name="Nom" required autoComplete="family-name" /></label>
          <label htmlFor="i-email">Email<input id="i-email" name="email" type="email" required autoComplete="email" /></label>
          <label htmlFor="i-tel">Téléphone<input id="i-tel" name="Téléphone" type="tel" autoComplete="tel" /></label>
          <label htmlFor="i-ville">Ville ou secteur visé<input id="i-ville" name="Ville visée" /></label>
          <label htmlFor="i-profil">
            Profil
            <select id="i-profil" name="Profil">
              <option>Barber qui veut ouvrir son Cercle</option>
              <option>Investisseur</option>
              <option>Les deux</option>
            </select>
          </label>
          <label htmlFor="i-apport" className="full">
            Apport envisagé
            <select id="i-apport" name="Apport">
              <option>Moins de 30 000 €</option>
              <option>30 000 à 60 000 €</option>
              <option>Plus de 60 000 €</option>
            </select>
          </label>
          <label htmlFor="i-msg" className="full">Message<textarea id="i-msg" name="Message" /></label>
        </LeadForm>
      </div>

      <div role="tabpanel" aria-labelledby="t-club" hidden={tab !== "club"}>
        <LeadForm
          id="club"
          subject="Club de padel intéressé par Le Cercle"
          submitLabel="Proposer mon club"
          success="Merci. Nous vous rappelons sous 48 heures ouvrées pour parler de votre club."
          consent="J'accepte que mes données servent à traiter ma demande."
        >
          <label htmlFor="c-prenom">Prénom<input id="c-prenom" name="Prénom" required autoComplete="given-name" /></label>
          <label htmlFor="c-nom">Nom<input id="c-nom" name="Nom" required autoComplete="family-name" /></label>
          <label htmlFor="c-fonction">Fonction<input id="c-fonction" name="Fonction" /></label>
          <label htmlFor="c-club">Nom du club<input id="c-club" name="Club" required /></label>
          <label htmlFor="c-ville">Ville<input id="c-ville" name="Ville" required /></label>
          <label htmlFor="c-membres">Membres ou joueurs<input id="c-membres" name="Membres" inputMode="numeric" /></label>
          <label htmlFor="c-surface">Surface disponible (m²)<input id="c-surface" name="Surface (m²)" inputMode="numeric" /></label>
          <label htmlFor="c-email">Email<input id="c-email" name="email" type="email" required autoComplete="email" /></label>
          <label htmlFor="c-tel" className="full">Téléphone<input id="c-tel" name="Téléphone" type="tel" autoComplete="tel" /></label>
          <label htmlFor="c-msg" className="full">Message<textarea id="c-msg" name="Message" /></label>
        </LeadForm>
      </div>
    </div>
  );
}

export function TabLink({ tab, className, children }: { tab: Tab; className: string; children: React.ReactNode }) {
  return (
    <a
      className={className}
      href="#contact-pro"
      onClick={() => window.dispatchEvent(new CustomEvent("lecercle:tab", { detail: tab }))}
    >
      {children}
    </a>
  );
}
