import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeatingCoolingContent from "@/components/HeatingCoolingContent";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema, getServiceFAQSchema } from "@/lib/structured-data";
import RelatedServices from "@/components/RelatedServices";


export const metadata: Metadata = {
  title: "Heating & Cooling Services in NYC + Tri-State",
  description:
    "Heating and cooling services in NYC and Tri-State. Expert HVAC repair, diagnostics, and upgrades for homes and buildings. Licensed and insured.",
  alternates: {
    canonical: `${COMPANY.url}/services/heating-cooling`,
  },
  openGraph: {
    title: "Heating & Cooling Services in NYC + Tri-State",
    description:
      "Reliable heating and cooling service, repair, and system upgrades for homes and buildings across NYC and the Tri-State area.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What types of heating and cooling systems do you service?",
    answer:
      "We service mini-splits, heat pumps, central air systems, boilers, furnaces, and ductless systems for both residential and commercial properties across NYC and the Tri-State area.",
  },
  {
    question: "How quickly can you schedule a heating or cooling repair?",
    answer:
      "We typically respond within one business day and can often schedule service within the same week. For urgent situations, call us directly for priority scheduling.",
  },
  {
    question: "Do you offer free estimates for new heating and cooling installations?",
    answer:
      "Yes — we provide free on-site estimates for new system installations. Every estimate includes a load calculation to ensure proper sizing for your space.",
  },
];

export default function HeatingCoolingPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Heating & Cooling", href: "/services/heating-cooling" },
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
        <HeatingCoolingContent />
        <RelatedServices
          current="heating-cooling"
          services={["boiler-furnace-repair", "load-calculations", "service-repair", "maintenance-plans"]}
        />
      </main>
      <Footer />
    </>
  );
}
