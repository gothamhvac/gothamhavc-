import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NyserdaRebatesContent from "@/components/NyserdaRebatesContent";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "NYSERDA Rebates & HVAC Incentives NYC | Heat Pump Rebates Up to $10,000",
  description:
    "Save thousands with NYSERDA rebates and NYC HVAC incentives. Heat pump rebates up to $10,000 for homes, $7,000/unit for multifamily. We handle paperwork.",
  alternates: {
    canonical: `${COMPANY.url}/nyserda-rebates`,
  },
  openGraph: {
    title:
      "NYSERDA Rebates & HVAC Incentives NYC | Homes, Multifamily & Commercial",
    description:
      "Save thousands with NYSERDA rebates and Con Edison Clean Heat incentives. Up to $7,000/unit for multifamily. Gotham HVAC handles the paperwork.",
    type: "website",
  },
};

export default function NyserdaRebatesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <NyserdaRebatesContent />
      </main>
      <Footer />
    </>
  );
}
