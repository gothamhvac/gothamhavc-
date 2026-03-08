import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeatPumpWaterHeatersContent from "@/components/HeatPumpWaterHeatersContent";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema, getServiceFAQSchema } from "@/lib/structured-data";
import RelatedServices from "@/components/RelatedServices";


export const metadata: Metadata = {
  title:
    "Water Heater Services — Tankless & Heat Pump | NYC + Tri-State",
  description:
    "Tankless and heat pump water heater installation, repair, and service in NYC. Energy-efficient upgrades, NYSERDA rebate guidance, and expert sizing.",
  alternates: {
    canonical: `${COMPANY.url}/services/heat-pump-water-heaters`,
  },
  openGraph: {
    title:
      "Water Heater Services — Tankless & Heat Pump",
    description:
      "Tankless and heat pump water heater installation for homes and buildings in NYC and Tri-State. Lower energy bills and rebate-ready service.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What's the difference between a tankless and heat pump water heater?",
    answer:
      "Tankless water heaters use gas or electric to heat water on demand with no storage tank. Heat pump water heaters (HPWHs) use electricity to move heat from the air into the water — they're 2-3x more efficient than conventional electric heaters.",
  },
  {
    question: "Are there NYSERDA rebates for water heater upgrades?",
    answer:
      "Yes — NYSERDA offers rebates for qualifying heat pump water heaters. We help you navigate the paperwork and ensure your installation qualifies.",
  },
  {
    question: "How long does a tankless water heater installation take?",
    answer:
      "Most tankless installations are completed in one day. Heat pump water heaters may take slightly longer depending on electrical requirements and venting.",
  },
];

export default function HeatPumpWaterHeatersPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Water Heaters", href: "/services/heat-pump-water-heaters" },
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
        <HeatPumpWaterHeatersContent />
        <RelatedServices
          current="heat-pump-water-heaters"
          services={["heating-cooling", "load-calculations", "service-repair"]}
        />
      </main>
      <Footer />
    </>
  );
}
