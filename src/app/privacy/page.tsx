import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY.name}. Learn how we collect, use, and protect your information.`,
  alternates: {
    canonical: `${COMPANY.url}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark tracking-tight mb-8">
            Privacy Policy
          </h1>
          <p className="text-text-secondary mb-6">
            Last updated: March 5, 2026
          </p>

          <div className="prose prose-lg max-w-none text-text-secondary space-y-6">
            <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">Information We Collect</h2>
            <p>
              When you use our website or request service, we may collect your name, phone number,
              email address, and property address. This information is provided voluntarily through
              our contact form or when you call us directly.
            </p>

            <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to service requests, schedule
              appointments, provide estimates, and communicate about your HVAC service needs. We do
              not sell, rent, or share your personal information with third parties for marketing
              purposes.
            </p>

            <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">Cookies and Analytics</h2>
            <p>
              Our website may use cookies and analytics tools to understand how visitors use our
              site. This data is anonymous and used solely to improve our website experience. You can
              disable cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized
              access, alteration, or destruction. However, no method of transmission over the
              internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
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
