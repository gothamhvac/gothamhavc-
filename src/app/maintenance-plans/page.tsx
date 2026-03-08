import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaintenancePlansContent from "@/components/MaintenancePlansContent";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title:
    "HVAC Maintenance Plans NYC | Residential & Commercial Service Contracts",
  description:
    "Scheduled HVAC maintenance plans for homes and businesses in NYC. Priority service, discounted repairs, seasonal tune-ups, and compliance documentation.",
  alternates: {
    canonical: `${COMPANY.url}/maintenance-plans`,
  },
  openGraph: {
    title: "HVAC Maintenance Plans | Residential & Commercial | Gotham HVAC",
    description:
      "Protect your HVAC investment with scheduled maintenance. Priority service, discounted repairs, and fewer breakdowns for homes and businesses across NYC.",
    type: "website",
  },
};

export default function MaintenancePlansPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Maintenance Plans", href: "/maintenance-plans" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Navbar />
      <main id="main-content">
        <MaintenancePlansContent />
        <RelatedServices
          current="maintenance-plans"
          services={["heating-cooling", "service-repair", "boiler-furnace-repair"]}
        />
      </main>
      <Footer />
    </>
  );
}
