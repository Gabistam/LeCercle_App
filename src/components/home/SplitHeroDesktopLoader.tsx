"use client";

import dynamic from "next/dynamic";

const SplitHeroDesktop = dynamic(() => import("./SplitHeroDesktop"), { ssr: false });

export default function SplitHeroDesktopLoader({ freshaUrl }: { freshaUrl: string }) {
  return <SplitHeroDesktop freshaUrl={freshaUrl} />;
}
