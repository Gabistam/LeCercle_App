import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/data/services";

const p = services.barbe;

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: { canonical: "/homme/barbe" },
};

export default function Page() {
  return <ServicePage {...p} />;
}
