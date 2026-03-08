import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${COMPANY.name}. Read our terms and conditions for using our website and services.`,
  alternates: {
    canonical: `${COMPANY.url}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark tracking-tight mb-8">
            Terms of Service
          </h1>
          <p className="text-text-secondary mb-6">
            Last updated: March 5, 2026
          </p>

          <div className="prose prose-lg max-w-none text-text-secondary space-y-6">
            <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using the {COMPANY.name} website, you agree to be bound by these
              terms. If you do not agree, please do not use our website.
            </p>

            <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">Services</h2>
            <p>
              {COMPANY.name} provides HVAC services including but not limited to heating, cooling,
              ventilation, refrigeration, and related services in the New York City metropolitan
              area. All services are subject to availability, scheduling, and applicable local codes
              and regulations.
            </p>

            <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">Estimates and Pricing</h2>
            <p>
              Any estimates provided through our website or during a consultation are approximate and
              subject to change based on actual site conditions, scope of work, and material costs.
              Final pricing is confirmed before work begins.
            </p>

            <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">Limitation of Liability</h2>
            <p>
              The information on this website is provided for general informational purposes only.
              While we strive for accuracy, {COMPANY.name} makes no warranties about the
              completeness, reliability, or accuracy of website content. HVAC work should always be
              performed by licensed professionals.
            </p>

            <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, and design — is the
              property of {COMPANY.name} and is protected by applicable intellectual property laws.
              You may not reproduce, distribute, or use any content without written permission.
            </p>

            <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-blue hover:underline">
                {COMPANY.email}
              </a>{" "}
              or call{" "}
              <a href={COMPANY.phoneTel} className="text-blue hover:underline">
                {COMPANY.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
