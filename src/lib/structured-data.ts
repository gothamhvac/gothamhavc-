import { COMPANY } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    description:
      "Engineering-led HVAC contracting and design firm serving New York City, Lower Westchester, and Long Island. Residential and commercial heating, cooling, ventilation, and refrigeration services.",
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.8468,
      longitude: -73.8287,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    areaServed: COMPANY.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: [
      COMPANY.socials.instagram,
      "https://www.google.com/maps/place/Gotham+HVAC/@40.8448877,-73.8447628,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2f514141cf4f5:0x9a6b43b43bf9bcd4!8m2!3d40.8448877!4d-73.8447628!16s%2Fg%2F11z0g80st2",
    ],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mini-Split & Heat Pump Installation",
            description:
              "Efficient ductless mini-split and heat pump installation for NYC apartments and homes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial HVAC",
            description:
              "Package units, rooftop units, and commercial HVAC service for restaurants, retail, and offices.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Boiler & Furnace Repair",
            description:
              "Expert boiler and furnace repair and service throughout NYC and the Tri-State area.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Restaurant Hood Installation",
            description:
              "Commercial kitchen hood and ventilation system installation for NYC restaurants.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Load Calculations",
            description:
              "Professional Manual J load calculations for proper HVAC system sizing.",
          },
        },
      ],
    },
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you install boilers or furnaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We repair and service boilers and furnaces, but we do not install new systems.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work on commercial buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — restaurants, retail, offices, and multifamily properties.",
        },
      },
      {
        "@type": "Question",
        name: "Do you service all NYC boroughs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Bronx, Manhattan, Brooklyn, Queens, and Staten Island.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer load calculations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — professional load calculations are available to ensure your HVAC system is properly sized for your space.",
        },
      },
      {
        "@type": "Question",
        name: "Can you install mini-splits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — mini-splits and heat pumps are core services. We handle the full installation process.",
        },
      },
      {
        "@type": "Question",
        name: "How do I request service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Use the contact form on our website or call ${COMPANY.phone}.`,
        },
      },
    ],
  };
}

export function getBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: COMPANY.url,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${COMPANY.url}${item.href}`,
      })),
    ],
  };
}

export function getServiceFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: COMPANY.url,
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "HVAC Services",
    provider: {
      "@type": "HVACBusiness",
      name: COMPANY.name,
      url: COMPANY.url,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 40.8468,
        longitude: -73.8287,
      },
      geoRadius: "50",
    },
    description:
      "Residential and commercial HVAC service, repairs, and upgrades including mini-splits, heat pumps, boiler repair, furnace repair, restaurant hood installation, and load calculations.",
  };
}
