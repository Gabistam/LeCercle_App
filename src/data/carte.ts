// Carte homme du Cercle Saint-Denis (prix TTC).

export type Item = { name: string; price: string; detail?: string; tag?: string };
export type Group = { title: string; items: Item[] };

export const forfaits: Item[] = [
  { name: "Signature tondeuse", price: "35 €", detail: "Coupe tondeuse et barbe · environ 40 min" },
  { name: "Signature tondeuse + shampoing", price: "38 €", detail: "Coupe tondeuse, barbe et shampoing · environ 45 min" },
  { name: "Signature ciseaux", price: "40 €", detail: "Coupe ciseaux et barbe · environ 45 min" },
  { name: "Signature ciseaux + shampoing", price: "45 €", detail: "Coupe ciseaux, barbe et shampoing · environ 50 min" },
  {
    name: "Premium Le Cercle",
    price: "49 €",
    detail: "Coupe, barbe, serviette chaude et soin du visage · environ 1 h",
    tag: "Le plus demandé",
  },
];

export const carte: Group[] = [
  {
    title: "Coupes",
    items: [
      { name: "Coupe tondeuse", price: "24 €" },
      { name: "Coupe tondeuse + shampoing", price: "27 €" },
      { name: "Coupe ciseaux", price: "29 €" },
      { name: "Coupe ciseaux + shampoing", price: "32 €" },
      { name: "Rasage de crâne", price: "15 €" },
    ],
  },
  {
    title: "Enfants, moins de 10 ans",
    items: [
      { name: "Coupe enfant tondeuse", price: "15 €" },
      { name: "Coupe enfant tondeuse + shampoing", price: "18 €" },
      { name: "Coupe enfant ciseaux", price: "20 €" },
      { name: "Coupe enfant ciseaux + shampoing", price: "23 €" },
    ],
  },
  {
    title: "Barbe et soins",
    items: [
      { name: "Barbe tondeuse", price: "15 €" },
      { name: "Barbe signature", price: "20 €", detail: "Serviette chaude, finition à la lame" },
      { name: "Soin du visage", price: "15 €", detail: "Nettoyage et hydratation" },
      { name: "Coloration barbe", price: "15 €" },
      { name: "Contours seuls", price: "10 €" },
      { name: "Black mask", price: "10 €" },
      { name: "Massage crânien", price: "10 €" },
      { name: "Shampoing", price: "5 €" },
      { name: "Épilation nez et oreilles", price: "5 €" },
      { name: "Tricopigmentation", price: "Sur devis" },
    ],
  },
];

export const favorites: Item[] = [
  { name: "Coupe tondeuse", price: "24 €", detail: "Dégradé net, finitions au rasoir." },
  { name: "Coupe ciseaux", price: "29 €", detail: "Pour les longueurs et les coupes texturées." },
  { name: "Signature tondeuse", price: "35 €", detail: "Coupe tondeuse et barbe. Environ 40 minutes." },
  {
    name: "Premium Le Cercle",
    price: "49 €",
    detail: "Coupe, barbe, serviette chaude et soin du visage. Environ une heure.",
    tag: "Le plus demandé",
  },
];
