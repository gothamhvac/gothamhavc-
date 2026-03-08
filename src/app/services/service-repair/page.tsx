import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceRepairContent from "@/components/ServiceRepairContent";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema, getServiceFAQSchema } from "@/lib/structured-data";
import RelatedServices from "@/components/RelatedServices";


export const metadata: Metadata = {
  title: "HVAC Service & Repair in NYC + Tri-State",
  description:
    "HVAC service and repair in NYC and Tri-State. Fast diagnostics and expert repair for heating, cooling, and ventilation systems. Licensed and insured.",
  alternates: {
    canonical: `${COMPANY.url}/services/service-repair`,
  },
  openGraph: {
    title: "HVAC Service & Repair in NYC + Tri-State",
    description:
      "Expert HVAC service and repair for residential and commercial systems across NYC and Tri-State. Fast response and honest diagnostics.",
    type: "website",
  },
};

const faqs = [
  {
    question: "How quickly can you respond to an HVAC repair request?",
    answer:
      "We typically respond within one business day and schedule service within the same week. For urgent heating or cooling failures, call us directly for priority scheduling.",
  },
  {
    question: "Do your technicians carry parts on the truck?",
    answer:
      "Yes — our techs carry common parts like capacitors, contactors, igniters, thermostats, and filters so most repairs can be completed in a single visit.",
  },
  {
    question: "Do you offer preventive maintenance plans?",
    answer:
      "Yes — our maintenance plans include seasonal tune-ups, priority scheduling, and discounted repairs. Regular maintenance prevents most emergency breakdowns.",
  },
];

export default function ServiceRepairPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Service & Repair", href: "/services/service-repair" },
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
        <ServiceRepairContent />
        <RelatedServices
          current="service-repair"
          services={["maintenance-plans", "heating-cooling", "boiler-furnace-repair"]}
        />
      </main>
      <Footer />
    </>
  );
}
