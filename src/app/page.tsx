import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SplitHero from "@/components/home/SplitHero";
import ManifesteTicker from "@/components/home/ManifesteTicker";
import StorySection from "@/components/home/StorySection";
import ManifesteSection from "@/components/home/ManifesteSection";
import ConceptPanneaux from "@/components/home/ConceptPanneaux";
import AvisClients from "@/components/home/AvisClients";
import CtaFinal from "@/components/home/CtaFinal";

export const metadata: Metadata = {
  title: "Le Cercle — Maison de soins premium | Casa Padel",
  description:
    "Le Cercle, maison de soins premium intégrée aux centres Casa Padel en Région Parisienne. Barber, grooming, nail bar, massage et récupération après sport.",
};

export default function HomePage() {
  return (
    <div data-universe="mixed">
      <SiteHeader />
      <main>
        <SplitHero />
        <ManifesteTicker />
        <StorySection />
        <ManifesteSection />
        <ConceptPanneaux />
        <AvisClients />
        <CtaFinal />
      </main>
      <SiteFooter />
    </div>
  );
}
