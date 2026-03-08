import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceAreasIndexContent from "@/components/ServiceAreasIndexContent";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas — NYC, Westchester & Long Island",
  description:
    "Gotham HVAC serves all five NYC boroughs, Lower Westchester, and Nassau County. Find HVAC services near you.",
  alternates: {
    canonical: `${COMPANY.url}/service-areas`,
  },
  openGraph: {
    title: "Service Areas — NYC, Westchester & Long Island",
    description:
      "HVAC services for homes and businesses across all five NYC boroughs, Westchester, and Nassau County.",
    type: "website",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceAreasIndexContent />
      </main>
      <Footer />
    </>
  );
}
