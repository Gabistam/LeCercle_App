import type { Salon } from "@/data/salons";
import { formatHour } from "@/data/salons";

export type QA = { q: string; a: string };

/** Questions fréquentes d'un salon, affichées sur sa page et envoyées à Google (FAQPage). */
export function faq(s: Salon): QA[] {
  const weekday = s.hours?.find((h) => h.label === "Mercredi");
  const monday = s.hours?.find((h) => h.label === "Lundi");
  return [
    {
      q: "Faut-il prendre rendez-vous ?",
      a: "Non. Vous pouvez réserver en ligne sur Fresha ou passer directement : s'il y a un fauteuil libre, on vous prend tout de suite, sinon on vous donne l'heure du prochain créneau.",
    },
    {
      q: "Faut-il jouer au padel ou être membre du Casa Padel ?",
      a: `Non. ${s.name} est ouvert à tout le monde, joueurs de padel ou non. Le salon est ${s.location.toLowerCase()}, ${s.address}.`,
    },
    {
      q: "Comment venir en transports ?",
      a: "La gare de Saint-Denis (RER D, ligne H et tramway T1) est à environ 600 m, soit une dizaine de minutes à pied. La station Saint-Denis – Porte de Paris (métro 13) est à environ 800 m. Depuis Paris, la station Saint-Denis – Pleyel (métro 14) est à environ 1,3 km.",
    },
    {
      q: "Peut-on se garer ?",
      a: "Oui, un parking est accessible aux clients du salon.",
    },
    {
      q: "Quels sont les horaires ?",
      a:
        monday?.opens && weekday?.opens
          ? `Le lundi et le mardi de ${formatHour(monday.opens)} à ${formatHour(monday.closes!)}, du mercredi au samedi de ${formatHour(weekday.opens)} à ${formatHour(weekday.closes!)}. Fermé le dimanche.`
          : "Les horaires sont indiqués plus haut sur cette page.",
    },
    {
      q: "Combien coûte une coupe ?",
      a: "Coupe tondeuse 24 €, coupe ciseaux 29 €, coupe et barbe à partir de 35 €, forfait Premium (coupe, barbe, serviette chaude et soin du visage) 49 €. Coupe enfant de moins de 10 ans à partir de 15 €.",
    },
    {
      q: "Coupez-vous les enfants ?",
      a: "Oui, à partir de 15 € pour les moins de 10 ans, à la tondeuse ou aux ciseaux.",
    },
    {
      q: "Peut-on annuler un rendez-vous ?",
      a: "Oui, gratuitement jusqu'à 24 h avant, directement depuis la confirmation Fresha. La réservation en ligne ne demande pas de carte bancaire.",
    },
    {
      q: "Le salon accueille-t-il les femmes ?",
      a: "Le Beauty Studio (ongles, soins du visage, brushing) ouvre prochainement dans le même espace. Vous pouvez vous inscrire sur la page Beauty Studio pour être prévenue de l'ouverture.",
    },
  ];
}
