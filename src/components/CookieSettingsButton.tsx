"use client";

export default function CookieSettingsButton() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("lecercle:cookies"))}>
      Gérer mes cookies
    </button>
  );
}
