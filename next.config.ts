import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // Anciennes adresses du site : redirigées vers les nouvelles pour garder le référencement.
  async redirects() {
    return [
      { source: "/homme/services", destination: "/homme", permanent: true },
      { source: "/homme/salons", destination: "/salons", permanent: true },
      { source: "/homme/reservation", destination: "/salons/saint-denis", permanent: true },
      { source: "/femme/services", destination: "/femme", permanent: true },
      { source: "/femme/salons", destination: "/femme", permanent: true },
      { source: "/femme/reservation", destination: "/femme", permanent: true },
      { source: "/salons/asnieres", destination: "/salons", permanent: false },
      { source: "/salons/croissy-beaubourg", destination: "/salons", permanent: false },
      { source: "/a-propos", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
