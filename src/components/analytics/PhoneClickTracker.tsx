"use client";

import { useEffect } from "react";
import { trackPhoneClick } from "@/lib/gtag";

/**
 * Renders nothing. Mounts one delegated click listener on `document` that
 * reports a Google Ads conversion for any <a href="tel:..."> click anywhere on
 * the site — navbar, hero, footer, mobile sticky bar, content pages, and
 * anything rendered later.
 *
 * Uses the capture phase so the conversion fires before navigation starts and
 * before any handler that calls stopPropagation(). It never calls
 * preventDefault(), so the call is not delayed or blocked.
 */
export default function PhoneClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!link) return;

      trackPhoneClick({ link_url: link.getAttribute("href") ?? undefined });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
