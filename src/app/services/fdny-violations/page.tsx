import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FDNYViolationsContent from "@/components/FDNYViolationsContent";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema, getServiceFAQSchema } from "@/lib/structured-data";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title:
    "Resolve FDNY HVAC Violations VC19 & VC26 | NYC Violation Resolution",
  description:
    "FDNY HVAC violation resolution in NYC. VC19 missing DOB compliance and VC26 unlawful installation — DOB document recovery, physical correction, FB-09 filing, and OATH hearing representation.",
  alternates: {
    canonical: `${COMPANY.url}/services/fdny-violations`,
  },
  openGraph: {
    title: "Resolve FDNY HVAC Violations VC19 & VC26 | Gotham HVAC",
    description:
      "End-to-end FDNY HVAC violation resolution. DOB document recovery, physical correction, FB-09 Certificate of Correction filing, and OATH hearing representation across all five NYC boroughs.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is an FDNY VC19 HVAC violation?",
    answer:
      "VC19 is issued when required DOB compliance documentation is missing or cannot be produced for HVAC equipment — including Equipment Use Permits, Certificates of Compliance, and sign-off records.",
  },
  {
    question: "What is an FDNY VC26 HVAC violation?",
    answer:
      "VC26 is issued for physical safety violations related to HVAC equipment — such as ductwork blocking egress, installations in restricted locations, missing fire protection components, or improper venting clearances.",
  },
  {
    question: "Do you file the FDNY Certificate of Correction (FB-09)?",
    answer:
      "Yes. Once the condition is corrected and documentation is assembled, we prepare and file the FDNY Certificate of Correction (FB-09) with supporting proof including photos, DOB records, and equipment specifications.",
  },
  {
    question: "Can you attend the OATH hearing on my behalf?",
    answer:
      "Yes. We attend OATH hearings to present proof of compliance and pursue full dismissal or penalty reduction. Our documentation packages are specifically structured for OATH proceedings.",
  },
  {
    question: "How much time do I have to cure a violation?",
    answer:
      "Cure periods are typically 30 to 60 days from the date of the summons. Contact us as soon as you receive the summons — earlier intervention gives us more options for resolution.",
  },
];

export default function FDNYViolationsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "FDNY Violation Resolution", href: "/services/fdny-violations" },
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
        <FDNYViolationsContent />
        <RelatedServices
          current="fdny-violations"
          services={["commercial-hvac", "service-repair", "heating-cooling"]}
        />
      </main>
      <Footer />
    </>
  );
}
