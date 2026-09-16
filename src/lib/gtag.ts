/**
 * Google Ads conversion helpers.
 *
 * These ride on the Google tag (gtag.js) already loaded in the root layout for
 * GA4. The Ads account is added as a second destination on that same tag with
 * `gtag('config', GADS_ID)` — Google's documented multi-destination setup. One
 * loader, two destinations; a second gtag/js script is not needed.
 *
 * Env overrides (optional):
 *   NEXT_PUBLIC_GADS_TAG_ID="AW-17972837903"
 *   NEXT_PUBLIC_GADS_PHONE_CONV="AW-17972837903/<phone label>"
 *   NEXT_PUBLIC_GADS_FORM_CONV="AW-17972837903/<form label>"
 *
 * NEXT_PUBLIC_* values are inlined at build time, so changing them requires a
 * rebuild/redeploy.
 */

/** Google Ads account id. Configured on every page so the base tag is present. */
export const GADS_ID = process.env.NEXT_PUBLIC_GADS_TAG_ID || "AW-17972837903";

/** send_to value for a phone-call (tel: click) conversion. */
export const GADS_PHONE_CONVERSION =
  process.env.NEXT_PUBLIC_GADS_PHONE_CONV ||
  `${GADS_ID}/sIOFCND_tPkcEI_8jvpC`;

/** send_to value for a contact-form submission conversion. */
export const GADS_FORM_CONVERSION =
  process.env.NEXT_PUBLIC_GADS_FORM_CONV ||
  `${GADS_ID}/fEylCM3_tPkcEI_8jvpC`;

/** True once the AW- account id is real (it is, unless overridden to junk). */
export const hasGoogleAdsId = /^AW-\d{6,}$/.test(GADS_ID);

/**
 * A send_to is only usable once its conversion label is filled in. Until then
 * the base tag still loads (so Ads can verify the site), but no conversion
 * events fire against a non-existent label.
 */
function hasRealLabel(sendTo: string): boolean {
  const label = sendTo.split("/")[1];
  return Boolean(label) && label !== "PHONE_LABEL" && label !== "FORM_LABEL";
}

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
 * Fire a Google Ads conversion. No-ops during SSR, when the Google tag has not
 * loaded (ad blocker, consent tooling, tag still fetching), and when the
 * conversion label is still a placeholder — so it is always safe to call.
 */
export function reportConversion(
  sendTo: string,
  extra?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;
  if (!hasRealLabel(sendTo)) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[gtag] conversion label not configured yet: ${sendTo}`);
    }
    return;
  }

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
