"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { getFAQSchema } from "@/lib/structured-data";
import { FadeIn } from "@/components/motion/FadeIn";

const faqs = [
  {
    question: "Do you install boilers or furnaces?",
    answer: "We repair and service boilers and furnaces, but we do not install new systems. Our focus is on diagnostics, maintenance, and getting your existing equipment running reliably.",
  },
  {
    question: "Do you work on commercial buildings?",
    answer: "Yes — restaurants, retail, offices, and multifamily properties throughout NYC and the Tri-State area. We handle rooftop units, package systems, kitchen ventilation, and more.",
  },
  {
    question: "Do you service all NYC boroughs?",
    answer: "Yes — we serve all five boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. We also cover Lower Westchester and parts of Long Island close to the city.",
  },
  {
    question: "Do you offer load calculations?",
    answer: "Yes — we provide professional Manual J load calculations to ensure your HVAC system is properly sized. This is critical for comfort, efficiency, and code compliance.",
  },
  {
    question: "Can you install mini-splits and heat pumps?",
    answer: "Absolutely — mini-splits and heat pumps are among our core services. We handle everything from initial consultation and sizing to full installation and commissioning.",
  },
  {
    question: "How do I request service?",
    answer: `Use the contact form below or call us at ${COMPANY.phone}. We typically respond within one business day and can often schedule service within the same week.`,
  },
];

function AccordionItem({
  faq,
  isOpen,
  toggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${faq.question.slice(0, 20).replace(/\s/g, "-")}`}
      >
        <h3 className="text-lg font-semibold text-dark group-hover:text-blue transition-colors pr-4">
          {faq.question}
        </h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? "bg-blue text-white rotate-0" : "bg-surface text-text-secondary rotate-0"}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div
        id={`faq-panel-${faq.question.slice(0, 20).replace(/\s/g, "-")}`}
        role="region"
        className={`accordion-content ${isOpen ? "open" : ""}`}
      >
        <div className="accordion-inner">
          <p className="text-text-secondary leading-relaxed pb-6 pr-12">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqSchema = getFAQSchema();

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Header (sticky) */}
          <FadeIn className="lg:sticky lg:top-32 lg:self-start" x={-30} y={0}>
            <div className="section-line mb-6" />
            <h2 id="faq-heading" className="text-4xl sm:text-5xl font-bold text-dark tracking-tight mb-6">
              Questions &amp;<br />
              <span className="text-gradient">Answers</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Quick answers to the most common questions about our HVAC services, coverage areas, and process.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all duration-300"
            >
              Still have questions? Get in touch
              <span className="text-lg">&rarr;</span>
            </Link>
          </FadeIn>

          {/* Right - Accordion */}
          <FadeIn delay={0.15} x={30} y={0}>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
