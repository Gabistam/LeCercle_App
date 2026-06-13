import Image from "next/image";

export default function StorySection() {
  return (
    <>
      {/* ── Section intro ── */}
      <section className="px-6 py-24 md:px-16 md:py-28 text-center" style={{ backgroundColor: "#0D0D0D", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,163,90,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8px", fontWeight: 300, letterSpacing: "6px", textTransform: "uppercase", color: "#C4A35A", marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <span style={{ width: 20, height: 1, background: "#C4A35A", opacity: 0.6, display: "inline-block" }} />
            Notre histoire
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(52px, 7vw, 88px)", fontWeight: 300, lineHeight: 0.9, letterSpacing: "-2px", color: "#F1F0EC", marginBottom: 28 }}>
            Une idée<br />
            <em style={{ fontStyle: "italic", color: "#C4A35A" }}>simple.</em><br />
            Un lieu rare.
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: "clamp(18px, 2vw, 22px)", color: "rgba(241,240,236,0.55)", lineHeight: 1.6, marginBottom: 36 }}>
            Le soin premium n&apos;a pas besoin de chercher une adresse. Il mérite d&apos;être là où vous êtes déjà.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, fontSize: "7.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(241,240,236,0.35)", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
            Découvrir
            <span style={{ display: "inline-block", width: 1, height: 40, background: "linear-gradient(to bottom, #C4A35A, transparent)" }} />
          </div>
        </div>
      </section>

      {/* ── Partie 1 : Le constat ── */}
      <section className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#111111" }}>
        {/* Séparateur gold */}
        <div style={{ maxWidth: 1100, margin: "0 auto 60px", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, #C4A35A, transparent)", opacity: 0.4 }} />
          <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "9px", color: "#C4A35A", opacity: 0.6, letterSpacing: "4px" }}>◆ &nbsp; L&apos;ORIGINE</div>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, #C4A35A, transparent)", opacity: 0.4 }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div>
            <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8px", fontWeight: 300, letterSpacing: "6px", textTransform: "uppercase", color: "#C4A35A", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 16, height: 1, background: "#C4A35A", opacity: 0.6, display: "inline-block" }} />
              Le constat
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-1.5px", color: "#F1F0EC", marginBottom: 32 }}>
              Il manquait<br /><em style={{ fontStyle: "italic", color: "#C4A35A" }}>quelque chose.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 15, fontWeight: 300, color: "rgba(241,240,236,0.6)", lineHeight: 1.8, marginBottom: 20 }}>
              Dans les grandes villes, le soin premium existe. Les meilleurs barbiers, les plus beaux studios de beauté, les espaces wellness les plus soignés — ils existent. Mais ils demandent un détour. Un rendez-vous supplémentaire. Une sortie de plus dans un agenda déjà chargé.
            </p>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 15, fontWeight: 300, color: "rgba(241,240,236,0.6)", lineHeight: 1.8, marginBottom: 28 }}>
              L&apos;observation était simple : <strong style={{ color: "#F1F0EC", fontWeight: 400 }}>les gens qui prennent le plus soin d&apos;eux sont aussi ceux qui ont le moins de temps.</strong> Ils fréquentent des clubs sportifs premium, ils ont des habitudes de vie exigeantes — et pourtant, pour une coupe ou un soin des mains, ils finissaient souvent par sacrifier la qualité faute de temps.
            </p>
            <blockquote style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: 22, color: "#C4A35A", lineHeight: 1.4, borderLeft: "2px solid #C4A35A", paddingLeft: 28, margin: "0 0 28px" }}>
              &ldquo;Et si le soin venait à eux, plutôt que l&apos;inverse ?&rdquo;
            </blockquote>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 15, fontWeight: 300, color: "rgba(241,240,236,0.6)", lineHeight: 1.8 }}>
              C&apos;est là qu&apos;est née l&apos;idée du Cercle. Non pas comme un service supplémentaire, mais comme une <em style={{ color: "#C4A35A", fontStyle: "italic" }}>évidence</em> — intégrer un espace de soin premium là où une clientèle exigeante est déjà présente, déjà dans un état d&apos;esprit favorable au bien-être.
            </p>
          </div>

          {/* Image */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <Image
                src="/images/men/men-barber-chair.webp"
                alt="Le Cercle · Espace Homme · Saint-Denis"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ filter: "grayscale(0.15) brightness(0.85)" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 28px 24px", background: "linear-gradient(to top, rgba(13,13,13,0.9), transparent)", fontSize: 9, fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(196,163,90,0.7)", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
                Le Cercle · Espace Homme · Saint-Denis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partie 2 : Le choix ── */}
      <section className="px-6 py-20 md:px-16 md:py-28" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center" style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Image */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <Image
                src="/images/women/women-nail-bar.avif"
                alt="Le Cercle — Espace Femme · Brushing Bar"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ filter: "brightness(0.82)" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 28px 24px", background: "linear-gradient(to top, rgba(13,13,13,0.9), transparent)", fontSize: 9, fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(196,163,90,0.7)", fontFamily: "var(--font-barlow-cond, sans-serif)" }}>
                Le Cercle · Beauty Studio · Saint-Denis
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-barlow-cond, sans-serif)", fontSize: "8px", fontWeight: 300, letterSpacing: "6px", textTransform: "uppercase", color: "#C4A35A", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 16, height: 1, background: "#C4A35A", opacity: 0.6, display: "inline-block" }} />
              Le choix
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-1.5px", color: "#F1F0EC", marginBottom: 32 }}>
              Deux univers.<br /><em style={{ fontStyle: "italic", color: "#C4A35A" }}>Une maison.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 15, fontWeight: 300, color: "rgba(241,240,236,0.6)", lineHeight: 1.8, marginBottom: 20 }}>
              Le Cercle ne s&apos;est pas contenté d&apos;ouvrir un barbershop dans un club. Il a pensé deux espaces distincts, deux atmosphères souveraines — l&apos;une pour lui, l&apos;autre pour elle — qui coexistent sous le même toit sans jamais se ressembler.
            </p>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 15, fontWeight: 300, color: "rgba(241,240,236,0.6)", lineHeight: 1.8, marginBottom: 20 }}>
              Côté homme : cuir noir, métal brossé, lumière spot. <strong style={{ color: "#F1F0EC", fontWeight: 400 }}>Un cadre qui ne s&apos;excuse pas d&apos;être exigeant.</strong> Des gestes précis, un café servi à l&apos;arrivée, le silence respecté. Le barbier connaît son métier — inutile de le lui demander.
            </p>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 15, fontWeight: 300, color: "rgba(241,240,236,0.6)", lineHeight: 1.8, marginBottom: 28 }}>
              Côté femme : travertin, lin, lumière atmosphérique. <strong style={{ color: "#F1F0EC", fontWeight: 400 }}>Un espace où chaque détail a été pensé pour que le temps ralentisse.</strong> Ongles, soins visage, brushing, massages — dans un cadre qui aurait pu être signé par un architecte d&apos;intérieur haut de gamme.
            </p>
            <blockquote style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", fontSize: 22, color: "#C4A35A", lineHeight: 1.4, borderLeft: "2px solid #C4A35A", paddingLeft: 28, margin: "0 0 28px" }}>
              Le soin n&apos;est pas un luxe.<br />C&apos;est une décision.
            </blockquote>
            <p style={{ fontFamily: "var(--font-jost, sans-serif)", fontSize: 15, fontWeight: 300, color: "rgba(241,240,236,0.6)", lineHeight: 1.8 }}>
              Entre les deux : <em style={{ color: "#C4A35A", fontStyle: "italic" }}>une ligne dorée</em>. Celle qui sépare et qui relie à la fois. Le fil conducteur d&apos;une maison qui croit que l&apos;excellence ne devrait pas choisir de camp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
