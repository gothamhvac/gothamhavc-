import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommercialHVACContent from "@/components/CommercialHVACContent";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema, getServiceFAQSchema } from "@/lib/structured-data";
import RelatedServices from "@/components/RelatedServices";


export const metadata: Metadata = {
  title: "Commercial HVAC Services in NYC + Tri-State",
  description:
    "Commercial HVAC services in NYC. Rooftop units, package units, ventilation, restaurant hoods, and preventative maintenance for offices, retail, and more.",
  alternates: {
    canonical: `${COMPANY.url}/services/commercial-hvac`,
  },
  openGraph: {
    title: "Commercial HVAC Services in NYC + Tri-State",
    description:
      "Engineering-led commercial HVAC service, repair, and upgrades for restaurants, offices, retail, and multifamily buildings across NYC and Tri-State.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What types of commercial buildings do you service?",
    answer:
      "Restaurants, retail stores, offices, gyms, multifamily buildings, warehouses, and more. We handle rooftop units, package systems, split systems, and kitchen ventilation.",
  },
  {
    question: "Do you offer commercial HVAC maintenance contracts?",
    answer:
      "Yes — we offer scheduled maintenance plans for commercial properties that include priority service, seasonal tune-ups, compliance documentation, and discounted repairs.",
  },
  {
    question: "Can you help with restaurant buildouts and hood installations?",
    answer:
      "Absolutely. We handle full kitchen ventilation including hood installation, exhaust systems, and makeup air — coordinated with your buildout timeline.",
  },
];

export default function CommercialHVACPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Commercial HVAC", href: "/services/commercial-hvac" },
  ]);
  const faqSchema = getServiceFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main id="main-content">
        <CommercialHVACContent />
        <RelatedServices
          current="commercial-hvac"
          services={["restaurant-hoods", "commercial-refrigeration", "maintenance-plans", "load-calculations"]}
        />
      </main>
      <Footer />
    </>
  );
}
