import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BoilerFurnaceRepairContent from "@/components/BoilerFurnaceRepairContent";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema, getServiceFAQSchema } from "@/lib/structured-data";
import RelatedServices from "@/components/RelatedServices";


export const metadata: Metadata = {
  title: "Boiler & Furnace Repair Services in NYC + Tri-State",
  description:
    "Boiler and furnace repair in NYC. Diagnostics and repair for steam boilers, hot water boilers, gas and oil furnaces. Licensed, insured, NYSERDA qualified.",
  alternates: {
    canonical: `${COMPANY.url}/services/boiler-furnace-repair`,
  },
  openGraph: {
    title: "Boiler & Furnace Repair Services in NYC + Tri-State",
    description:
      "Boiler and furnace repair for residential and commercial systems across NYC and Tri-State. Safety-first diagnostics and same-week service.",
    type: "website",
  },
};

const faqs = [
  {
    question: "Do you install new boilers or furnaces?",
    answer:
      "We specialize in repair and service only — not new installations. This focus lets us diagnose and fix problems accurately without upselling replacements.",
  },
  {
    question: "What types of boilers do you repair?",
    answer:
      "We repair steam boilers, hot water boilers, cast iron boilers, and steel boilers — both residential and commercial systems throughout NYC.",
  },
  {
    question: "How do I know if my boiler needs repair or replacement?",
    answer:
      "Cast iron boilers can last 30–50 years with maintenance. If yours is under 15 and needs a single component fix, repair makes sense. Over 20 with a cracked heat exchanger or multiple expensive repairs — replacement may be more cost-effective.",
  },
  {
    question: "Do you offer emergency boiler repair?",
    answer:
      "Yes — we offer priority scheduling for urgent heating failures. Call us directly and we'll work to get a technician to you as quickly as possible.",
  },
];

export default function BoilerFurnaceRepairPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
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
        <BoilerFurnaceRepairContent />
        <RelatedServices
          current="boiler-furnace-repair"
          services={["heating-cooling", "service-repair", "maintenance-plans"]}
        />
      </main>
      <Footer />
    </>
  );
}
