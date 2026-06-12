"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/home/CustomCursor"), { ssr: false });

export default function CustomCursorLoader() {
  return <CustomCursor />;
}
