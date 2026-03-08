import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPageContent from "@/components/ServicesPageContent";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HVAC Services for Homes, Buildings, and Restaurants",
  description:
    "Residential and commercial HVAC services in NYC and Tri-State. Mini-splits, heat pumps, boiler repair, restaurant hoods, and more. Request service today.",
  alternates: {
    canonical: `${COMPANY.url}/services`,
  },
  openGraph: {
    title: "HVAC Services for Homes, Buildings, and Restaurants",
    description:
      "Residential and commercial HVAC services across NYC and the Tri-State area. Heating, cooling, ventilation, and more — done right the first time.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </>
  );
}
