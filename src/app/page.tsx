import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";
import SplitHero from "@/components/home/SplitHero";
import ManifesteTicker from "@/components/home/ManifesteTicker";
import PiliersMiroir from "@/components/home/PiliersMiroir";
import RecoveryBande from "@/components/home/RecoveryBande";
import SalonsPreview from "@/components/sections/SalonsPreview";

export const metadata: Metadata = {
  title: "Le Cercle — Maison de soins premium | Casa Padel",
  description:
    "Le Cercle, maison de soins premium intégrée aux centres Casa Padel en Région Parisienne. Barber, grooming, nail bar, massage et récupération après sport.",
};

export default function HomePage() {
  return (
    <div data-universe="mixed">
      <main>
        <SplitHero />
        <ManifesteTicker />
        <PiliersMiroir />
        <RecoveryBande />
        <SalonsPreview universe="mixed" />
      </main>
      <SiteFooter />
    </div>
  );
}
