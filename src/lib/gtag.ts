/**
 * Google Ads conversion helpers.
 *
 * These ride on the Google tag (gtag.js) that is already loaded in the root
 * layout for GA4 — no second tag is injected. The Google Ads account is added
 * as an extra destination on that same tag via `gtag('config', AW-...)`.
 *
 * Env overrides (optional — placeholders are used when unset):
 *   NEXT_PUBLIC_GADS_PHONE_CONV="AW-1234567890/AbC-D_efG123"
 *   NEXT_PUBLIC_GADS_FORM_CONV="AW-1234567890/XyZ-1_234abc"
 *
 * NEXT_PUBLIC_* values are inlined at build time, so changing them requires a
 * rebuild/redeploy.
 */

const PHONE_CONVERSION_FALLBACK = "AW-XXXXXXXXX/PHONE_LABEL";
const FORM_CONVERSION_FALLBACK = "AW-XXXXXXXXX/FORM_LABEL";

/** send_to value for a phone-call (tel: click) conversion. */
export const GADS_PHONE_CONVERSION =
  process.env.NEXT_PUBLIC_GADS_PHONE_CONV || PHONE_CONVERSION_FALLBACK;

/** send_to value for a contact-form submission conversion. */
export const GADS_FORM_CONVERSION =
  process.env.NEXT_PUBLIC_GADS_FORM_CONV || FORM_CONVERSION_FALLBACK;

/**
 * The Google Ads account id ("AW-XXXXXXXXX") derived from the conversion
 * labels above, so there is a single place to swap real values in.
 */
export const GADS_CONVERSION_ID = GADS_PHONE_CONVERSION.split("/")[0];

/** True once a real AW- id is configured (not the placeholder). */
export const hasGoogleAdsId =
  GADS_CONVERSION_ID.startsWith("AW-") && !GADS_CONVERSION_ID.includes("XXXXXXXXX");

type GtagFn = (
  command: "config" | "event" | "js" | "set",
  targetOrEventName: string | Date,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/**
 * Fire a Google Ads conversion. No-ops during SSR and when the Google tag has
 * not loaded (ad blocker, consent tooling, tag still fetching), so it is always
 * safe to call from an event handler.
 */
export function reportConversion(
  sendTo: string,
  extra?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;

  const gtag = window.gtag;
  if (typeof gtag !== "function") return;

  gtag("event", "conversion", { send_to: sendTo, ...extra });
}

/** Conversion for a click on any tel: link. */
export function trackPhoneClick(extra?: Record<string, unknown>): void {
  reportConversion(GADS_PHONE_CONVERSION, extra);
}

/** Conversion for a successful "Request Service" form submission. */
export function trackFormSubmit(extra?: Record<string, unknown>): void {
  reportConversion(GADS_FORM_CONVERSION, extra);
}
