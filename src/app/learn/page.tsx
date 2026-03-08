import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LearnIndexContent from "@/components/LearnIndexContent";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Learn — HVAC Tips, Guides & Troubleshooting",
  description:
    "Practical HVAC guides by NYC professionals. Maintenance tips, static pressure, air filters, mini-splits vs. central air, and boiler repair.",
  alternates: {
    canonical: `${COMPANY.url}/learn`,
  },
  openGraph: {
    title: "Learn — HVAC Tips, Guides & Troubleshooting",
    description:
      "Practical HVAC guides on maintenance, troubleshooting, and system choices — written by NYC HVAC professionals.",
    type: "website",
  },
};

export default function LearnPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <LearnIndexContent />
      </main>
      <Footer />
    </>
  );
}
