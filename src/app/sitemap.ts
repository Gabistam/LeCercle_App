import type { MetadataRoute } from "next";
import { openSalons } from "@/data/salons";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/homme", priority: 0.9, freq: "monthly" },
    { path: "/salons", priority: 0.8, freq: "monthly" },
    ...openSalons.map((s) => ({ path: `/salons/${s.slug}`, priority: 0.9, freq: "monthly" as const })),
    { path: "/femme", priority: 0.6, freq: "monthly" },
    { path: "/investisseurs", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.4, freq: "monthly" },
  ];
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
