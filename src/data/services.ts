import type { ServiceProps } from "@/components/ServicePage";
import { carte, forfaits, type Item } from "@/data/carte";

const all: Item[] = [...forfaits, ...carte.flatMap((g) => g.items)];
const pick = (...names: string[]) =>
  names.map((n) => {
    const it = all.find((i) => i.name === n);
    if (!it) throw new Error(`Prestation inconnue : ${n}`);
    return it;
  });

const rdv = {
  q: "Faut-il prendre rendez-vous ?",
  a: "Non. Vous pouvez réserver en ligne ou passer directement : s'il y a un fauteuil libre, on vous prend tout de suite, sinon on vous donne l'heure du prochain créneau. Annulation gratuite jusqu'à 24 h avant.",
};
const horaires = {
  q: "Quels sont les horaires ?",
  a: "Le lundi et le mardi de 12 h à 21 h, du mercredi au samedi de 10 h à 21 h. Fermé le dimanche.",
};

export const services: Record<"degrade" | "barbe" | "enfant", ServiceProps & { metaTitle: string; metaDescription: string }> = {
  degrade: {
    slug: "degrade",
    crumb: "Dégradé",
    serviceName: "Coupe dégradée",
    metaTitle: "Dégradé homme Saint-Denis : coupe dès 24 €",
    metaDescription:
      "Dégradé à Saint-Denis, à côté du Casa Padel : coupe tondeuse 24 €, coupe et barbe 35 €. Avec ou sans rendez-vous, du lundi au samedi jusqu'à 21 h.",
    eyebrow: "Dégradé · Saint-Denis",
    title: "Le dégradé,",
    titleEm: "net jusqu'à la nuque.",
    lede: "Bas, moyen, haut ou à blanc : vous choisissez la hauteur, le barber l'adapte à la forme de votre tête. Coupe tondeuse dès 24 €.",
    pricesTitle: "Dégradé et forfaits",
    prices: pick("Coupe tondeuse", "Coupe tondeuse + shampoing", "Signature tondeuse", "Contours seuls"),
    body: [
      "Le dégradé se fait à la tondeuse, avec finitions au rasoir sur les contours. Un dégradé bas reste discret, un dégradé haut ou à blanc découvre davantage les côtés.",
      "Pour garder des contours nets entre deux coupes, la reprise des contours seuls coûte 10 €.",
    ],
    faq: [
      {
        q: "Combien coûte un dégradé ?",
        a: "Le dégradé est une coupe tondeuse : 24 €, ou 27 € avec shampoing. Avec la barbe, le forfait Signature tondeuse est à 35 €.",
      },
      {
        q: "Quelle différence entre dégradé bas, moyen, haut et à blanc ?",
        a: "C'est la hauteur où commence le dégradé sur les côtés. Bas : juste au-dessus de l'oreille. Moyen : à mi-hauteur. Haut : près du sommet du crâne. À blanc : la peau apparaît en bas du dégradé.",
      },
      rdv,
      horaires,
    ],
  },
  barbe: {
    slug: "barbe",
    crumb: "Barbe",
    serviceName: "Taille de barbe",
    metaTitle: "Taille de barbe Saint-Denis : dès 15 €",
    metaDescription:
      "Taille de barbe à Saint-Denis : barbe tondeuse 15 €, barbe signature avec serviette chaude 20 €, coupe et barbe dès 35 €. Avec ou sans rendez-vous.",
    eyebrow: "Barbe · Saint-Denis",
    title: "La barbe,",
    titleEm: "taillée à la lame.",
    lede: "Barbe tondeuse, barbe signature avec serviette chaude et finition à la lame, coloration. Seule ou avec la coupe.",
    pricesTitle: "Barbe et soins",
    prices: pick(
      "Barbe tondeuse",
      "Barbe signature",
      "Coloration barbe",
      "Soin du visage",
      "Black mask",
      "Signature tondeuse",
      "Premium Le Cercle",
    ),
    body: [
      "La barbe signature commence par une serviette chaude, qui ramollit le poil, et se termine par une finition à la lame sur les contours.",
      "Le forfait Premium réunit coupe, barbe, serviette chaude et soin du visage, pour environ une heure.",
    ],
    faq: [
      {
        q: "Combien coûte une taille de barbe ?",
        a: "Barbe tondeuse 15 €, barbe signature (serviette chaude et finition à la lame) 20 €. Avec une coupe tondeuse, le forfait Signature est à 35 €.",
      },
      {
        q: "Faites-vous la coloration de barbe ?",
        a: "Oui, la coloration barbe est à 15 €.",
      },
      rdv,
      horaires,
    ],
  },
  enfant: {
    slug: "enfant",
    crumb: "Enfant",
    serviceName: "Coupe enfant",
    metaTitle: "Coupe enfant à Saint-Denis (93) : dès 15 €",
    metaDescription:
      "Coupe enfant de moins de 10 ans à Saint-Denis : tondeuse 15 €, ciseaux 20 €. Avec ou sans rendez-vous, le mercredi et le samedi dès 10 h.",
    eyebrow: "Enfants · Saint-Denis",
    title: "La coupe enfant,",
    titleEm: "dès 15 €.",
    lede: "Pour les moins de 10 ans, à la tondeuse ou aux ciseaux. Le mercredi et le samedi, le salon ouvre dès 10 h.",
    pricesTitle: "Enfants, moins de 10 ans",
    prices: pick(
      "Coupe enfant tondeuse",
      "Coupe enfant tondeuse + shampoing",
      "Coupe enfant ciseaux",
      "Coupe enfant ciseaux + shampoing",
    ),
    body: [
      "La coupe enfant suit la même carte que celle des adultes, à la tondeuse ou aux ciseaux, avec ou sans shampoing.",
      "Le salon est ouvert à tous, joueurs de padel ou non : pas besoin d'être membre du club.",
    ],
    faq: [
      {
        q: "Jusqu'à quel âge le tarif enfant s'applique-t-il ?",
        a: "Le tarif enfant concerne les moins de 10 ans : 15 € à la tondeuse, 20 € aux ciseaux, 3 € de plus avec shampoing.",
      },
      {
        q: "Peut-on venir avec plusieurs enfants ?",
        a: "Oui. Pour éviter l'attente, réservez un créneau par enfant en ligne, ou appelez le salon au 09 48 19 48 24.",
      },
      rdv,
      horaires,
    ],
  },
};
