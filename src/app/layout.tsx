import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { getLocalBusinessSchema, getServiceSchema, getWebSiteSchema } from "@/lib/structured-data";
import { COMPANY } from "@/lib/constants";
import PromoPopup from "@/components/PromoPopup";
import PhoneClickTracker from "@/components/analytics/PhoneClickTracker";
import { GADS_ID, GADS_WEBSITE_CALL_CONVERSION, hasGoogleAdsId } from "@/lib/gtag";

const GA_ID = "G-0PCJGXY3J9";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: "Gotham HVAC | Engineering-Led Heating & Cooling for NYC + Tri-State",
    template: "%s | Gotham HVAC",
  },
  description:
    "NYC HVAC contractor serving all five boroughs, Lower Westchester, and Long Island. Mini-splits, heat pumps, boilers, restaurant hoods, and more.",
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: "Gotham HVAC | Engineering-Led Heating & Cooling for NYC + Tri-State",
    description:
      "Professional HVAC firm serving NYC and the Tri-State area. Residential and commercial heating, cooling, ventilation — done right the first time.",
    images: [
      {
        url: `${COMPANY.url}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Gotham HVAC — Engineering-Led Heating & Cooling for NYC + Tri-State",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: COMPANY.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#0B1120",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = getLocalBusinessSchema();
  const serviceSchema = getServiceSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
            ${hasGoogleAdsId ? `gtag('config', '${GADS_ID}');` : ""}
          `}
        </Script>
        {hasGoogleAdsId && (
          /* Website call tracking: for visitors who came from an ad, Google
             returns a forwarding number. The default swap only changes text,
             so this callback also rewrites tel: links (Google's documented
             approach) and catches numbers React renders later. */
          <Script id="gads-call-tracking" strategy="afterInteractive">
            {`
              (function () {
                var DISPLAY = ${JSON.stringify(COMPANY.phone)};
                var TEL = ${JSON.stringify(COMPANY.phoneTel)};
                function swapNumber(formatted, mobile) {
                  if (!formatted || !mobile || formatted === DISPLAY) return;
                  var href = 'tel:' + mobile;
                  function swap(root) {
                    if (root.nodeType === 3) {
                      if (root.nodeValue.indexOf(DISPLAY) !== -1) root.nodeValue = root.nodeValue.split(DISPLAY).join(formatted);
                      return;
                    }
                    if (root.nodeType !== 1) return;
                    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
                    var node;
                    while ((node = walker.nextNode())) {
                      if (node.nodeValue.indexOf(DISPLAY) !== -1) node.nodeValue = node.nodeValue.split(DISPLAY).join(formatted);
                    }
                    if (root.matches && root.matches('a[href="' + TEL + '"]')) root.setAttribute('href', href);
                    var links = root.querySelectorAll('a[href="' + TEL + '"]');
                    for (var i = 0; i < links.length; i++) links[i].setAttribute('href', href);
                  }
                  swap(document.body);
                  new MutationObserver(function (mutations) {
                    mutations.forEach(function (m) { m.addedNodes.forEach(swap); });
                  }).observe(document.body, { childList: true, subtree: true });
                }
                window.dataLayer = window.dataLayer || [];
                var g = window.gtag || function () { window.dataLayer.push(arguments); };
                g('config', '${GADS_WEBSITE_CALL_CONVERSION}', {
                  phone_conversion_number: DISPLAY,
                  phone_conversion_callback: swapNumber
                });
              })();
            `}
          </Script>
        )}
      </head>
      <body className={`${inter.variable} antialiased`}>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {children}
        <PromoPopup />
        <PhoneClickTracker />
      </body>
    </html>
  );
}
