import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoolingAssistanceContent from "@/components/CoolingAssistanceContent";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema, getServiceFAQSchema } from "@/lib/structured-data";
import RelatedServices from "@/components/RelatedServices";


export const metadata: Metadata = {
  title:
    "HEAP Cooling & Essential Plan Cooling Program NYC | Free AC Installation",
  description:
    "Approved NYC vendor for HEAP Cooling Assistance and the Essential Plan Cooling Program. Free AC installation for eligible low-income residents.",
  alternates: {
    canonical: `${COMPANY.url}/services/cooling-assistance`,
  },
  openGraph: {
    title:
      "HEAP Cooling & Essential Plan Cooling Program NYC",
    description:
      "HEAP Cooling Assistance and Essential Plan Cooling Program vendor in NYC. Free AC installation for eligible low-income and health-qualified residents.",
    type: "website",
  },
};

const faqs = [
  {
    question: "Who qualifies for free AC through the HEAP Cooling program?",
    answer:
      "Eligibility is based on household income, age (60+), or medical condition. You must apply through your local Department of Social Services and receive a HEAP Cooling benefit authorization.",
  },
  {
    question: "What is the Essential Plan Cooling Program (EPCP)?",
    answer:
      "EPCP provides free air conditioning to NY State of Health Essential Plan members who have persistent asthma or another qualifying respiratory condition.",
  },
  {
    question: "How do I get a free air conditioner installed through these programs?",
    answer:
      "Once you receive your benefit authorization from HEAP or EPCP, contact us and we'll schedule the installation at no cost to you. We're an approved vendor for both programs.",
  },
];

export default function CoolingAssistancePage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Cooling Assistance", href: "/services/cooling-assistance" },
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
        <CoolingAssistanceContent />
        <RelatedServices
          current="cooling-assistance"
          services={["heating-cooling", "service-repair", "maintenance-plans"]}
        />
      </main>
      <Footer />
    </>
  );
}
