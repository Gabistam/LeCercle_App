"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { FORM_EMAIL } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Formulaire envoyé par email via FormSubmit (formsubmit.co), sans serveur à gérer.
 * Le premier envoi déclenche un email d'activation à FORM_EMAIL : il faut cliquer dessus une fois.
 */
export default function LeadForm({
  id,
  subject,
  submitLabel,
  success,
  consent,
  children,
}: {
  id: string;
  subject: string;
  submitLabel: string;
  success: string;
  consent: string;
  children: ReactNode;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("_honey")) return;
    const data: Record<string, string> = {};
    fd.forEach((v, k) => {
      if (k === "_honey") return;
      data[k] = data[k] ? `${data[k]}, ${v}` : String(v);
    });
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: subject, _template: "table", _captcha: "false" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
      const w = window as unknown as { dataLayer?: object[] };
      w.dataLayer?.push({ event: "formulaire_envoye", formulaire: id, page: location.pathname });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" id={id} onSubmit={onSubmit}>
      {children}
      <label className="hp" aria-hidden="true">
        Ne pas remplir
        <input name="_honey" tabIndex={-1} autoComplete="off" />
      </label>
      <label htmlFor={`${id}-rgpd`} className="check full">
        <input id={`${id}-rgpd`} type="checkbox" required />
        <span>
          {consent} <Link href="/confidentialite" style={{ color: "inherit" }}>Politique de confidentialité</Link>.
        </span>
      </label>
      <div className="full">
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Envoi…" : submitLabel}
        </button>
      </div>
      {status === "sent" && (
        <p className="sent" role="status">
          {success}
        </p>
      )}
      {status === "error" && (
        <p className="sent" role="alert">
          L&apos;envoi n&apos;a pas abouti. Réessayez dans un instant ou écrivez à {FORM_EMAIL}.
        </p>
      )}
    </form>
  );
}
