import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadCalculationsContent from "@/components/LoadCalculationsContent";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema, getServiceFAQSchema } from "@/lib/structured-data";
import RelatedServices from "@/components/RelatedServices";


export const metadata: Metadata = {
  title: "HVAC Load Calculations in NYC + Tri-State",
  description:
    "HVAC load calculations in NYC. Manual J, system sizing, room-by-room analysis, and capacity planning for homes and buildings across Tri-State.",
  alternates: {
    canonical: `${COMPANY.url}/services/load-calculations`,
  },
  openGraph: {
    title: "HVAC Load Calculations in NYC + Tri-State",
    description:
      "Professional HVAC load calculations, system sizing, and capacity planning for homes and buildings across NYC and the Tri-State area.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is a Manual J load calculation?",
    answer:
      "Manual J is the industry-standard method for calculating how much heating and cooling a building needs. It accounts for insulation, window area, orientation, occupancy, and climate to determine the correct equipment size.",
  },
  {
    question: "Why do I need a load calculation before installing HVAC?",
    answer:
      "An oversized system short-cycles, wastes energy, and creates uneven temperatures. An undersized system runs constantly and never reaches comfort. Proper sizing is the single most important factor in HVAC performance.",
  },
  {
    question: "How long does a load calculation take?",
    answer:
      "A residential load calculation typically takes 1-2 hours on-site for measurements, plus time for the engineering analysis. We deliver a full report with equipment recommendations.",
  },
];

export default function LoadCalculationsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Load Calculations", href: "/services/load-calculations" },
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
        <LoadCalculationsContent />
        <RelatedServices
          current="load-calculations"
          services={["heating-cooling", "commercial-hvac", "heat-pump-water-heaters"]}
        />
      </main>
      <Footer />
    </>
  );
}
