import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <span className="eyebrow">Erreur 404</span>
        <h1 className="h-page" style={{ marginTop: 0 }}>
          Cette page <em>n&apos;existe pas.</em>
        </h1>
        <div className="actions">
          <Link className="btn" href="/">Retour à l&apos;accueil</Link>
          <Link className="btn ghost" href="/homme">Voir les tarifs</Link>
        </div>
      </div>
    </section>
  );
}
