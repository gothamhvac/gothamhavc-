import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantHoodsContent from "@/components/RestaurantHoodsContent";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema, getServiceFAQSchema } from "@/lib/structured-data";
import RelatedServices from "@/components/RelatedServices";


export const metadata: Metadata = {
  title: "Restaurant Hood Installation in NYC + Tri-State",
  description:
    "Restaurant hood installation in NYC. Commercial kitchen hoods, exhaust ventilation, and buildout coordination for restaurants, cafes, and food service.",
  alternates: {
    canonical: `${COMPANY.url}/services/restaurant-hoods`,
  },
  openGraph: {
    title: "Restaurant Hood Installation in NYC + Tri-State",
    description:
      "Commercial kitchen hood installation and ventilation for restaurants, cafes, and food service spaces across NYC and Tri-State.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What types of restaurant hoods do you install?",
    answer:
      "We install Type 1 (grease) hoods for cooking equipment and Type 2 (heat/steam) hoods for dishwashers and non-grease appliances, along with full exhaust and makeup air systems.",
  },
  {
    question: "Do you handle permits for restaurant hood installation in NYC?",
    answer:
      "Yes — we coordinate with your buildout team and handle the HVAC-related permitting and code compliance for kitchen ventilation in NYC.",
  },
  {
    question: "Can you install a hood system during a restaurant buildout?",
    answer:
      "Absolutely. We work alongside general contractors and kitchen designers to coordinate hood installation with your buildout timeline.",
  },
];

export default function RestaurantHoodsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Restaurant Hood Installation", href: "/services/restaurant-hoods" },
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
        <RestaurantHoodsContent />
        <RelatedServices
          current="restaurant-hoods"
          services={["commercial-hvac", "commercial-refrigeration", "load-calculations"]}
        />
      </main>
      <Footer />
    </>
  );
}
