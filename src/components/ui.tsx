import Image from "next/image";
import type { Item } from "@/data/carte";

/** Les deux arcs du logo, dessinés à l'ouverture de la page. */
export function Ring() {
  return (
    <svg className="ring" viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="98" transform="rotate(-104 100 100)" />
      <circle className="a2" cx="100" cy="100" r="98" transform="rotate(74 100 100)" />
    </svg>
  );
}

export function MenuItems({ items }: { items: Item[] }) {
  return (
    <>
      {items.map((it) => (
        <div className="item" key={it.name}>
          <span className="n">
            {it.name}
            {it.tag && <span className="tag">{it.tag}</span>}
          </span>
          <span className="p">{it.price}</span>
          {it.detail && <span className="d">{it.detail}</span>}
        </div>
      ))}
    </>
  );
}

const photos = [
  { src: "/images/cercle/coiffage-texture.webp", alt: "Barber du Cercle coiffant un client" },
  { src: "/images/cercle/degrade-barbe-profil.webp", alt: "Client du Cercle de profil après sa coupe" },
  { src: "/images/cercle/barber-dessin-nuque.webp", alt: "Barber du Cercle au travail sur la nuque d'un client" },
  { src: "/images/cercle/coupe-mi-longue-motif.webp", alt: "Client du Cercle de profil" },
  { src: "/images/cercle/portrait-barbe.webp", alt: "Client du Cercle de face, barbe taillée" },
];

export function Gallery({ start = 0 }: { start?: number }) {
  const list = [...photos.slice(start), ...photos.slice(0, start)];
  return (
    <div className="wrap gallery">
      {list.map((p, i) => (
        <figure key={p.src}>
          <Image src={p.src} alt={p.alt} fill sizes={i === 0 ? "(max-width: 760px) 100vw, 40vw" : "(max-width: 760px) 50vw, 30vw"} />
        </figure>
      ))}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
