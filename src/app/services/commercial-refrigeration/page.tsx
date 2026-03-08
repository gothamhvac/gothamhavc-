import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommercialRefrigerationContent from "@/components/CommercialRefrigerationContent";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema, getServiceFAQSchema } from "@/lib/structured-data";
import RelatedServices from "@/components/RelatedServices";


export const metadata: Metadata = {
  title:
    "Commercial Refrigeration Services NYC | Walk-In Coolers & Freezers",
  description:
    "Commercial refrigeration service, repair, and installation in NYC. Walk-in coolers, freezers, display merchandisers, and reach-in units. Licensed, insured.",
  alternates: {
    canonical: `${COMPANY.url}/services/commercial-refrigeration`,
  },
  openGraph: {
    title:
      "Commercial Refrigeration Services NYC | Walk-In Coolers & Freezers",
    description:
      "Commercial refrigeration service and repair for walk-in coolers, freezers, and display merchandisers. Serving NYC and the Tri-State area.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What types of commercial refrigeration do you service?",
    answer:
      "Walk-in coolers, walk-in freezers, open display merchandisers, reach-in coolers and freezers, prep tables, and ice machines for restaurants, delis, bodegas, and supermarkets.",
  },
  {
    question: "Do you offer emergency refrigeration repair?",
    answer:
      "Yes — we understand that refrigeration failures can mean lost inventory. Call us directly for priority scheduling on urgent refrigeration repairs.",
  },
  {
    question: "Can you install a new walk-in cooler or freezer?",
    answer:
      "Yes — we handle full walk-in cooler and freezer installations including refrigeration systems, insulated panels, and electrical connections.",
  },
];

export default function CommercialRefrigerationPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Commercial Refrigeration", href: "/services/commercial-refrigeration" },
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
        <CommercialRefrigerationContent />
        <RelatedServices
          current="commercial-refrigeration"
          services={["commercial-hvac", "restaurant-hoods", "service-repair"]}
        />
      </main>
      <Footer />
    </>
  );
}
