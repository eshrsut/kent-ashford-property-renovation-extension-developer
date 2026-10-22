"use client";

import { useEffect } from "react";
import { site } from "@/data/site";

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

/** Renders nothing until a Tawk.to propertyId/widgetId is set in site.ts. */
export default function TawkChat() {
  const { propertyId, widgetId } = site.tawkTo;

  useEffect(() => {
    if (!propertyId || !widgetId) return;
    if (document.getElementById("tawk-to-script")) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id = "tawk-to-script";
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, [propertyId, widgetId]);

  return null;
}
