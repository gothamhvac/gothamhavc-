"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Thermometer,
  Wind,
  Flame,
  Heater,
  Droplets,
  Zap,
  Calculator,
  Building2,
  Warehouse,
  CookingPot,
  Wrench,
  ClipboardCheck,
  Sparkles,
  Camera,
  MessageSquare,
  Phone,
  ArrowRight,
  Plus,
  Minus,
  MapPin,
  ShieldCheck,
  Gauge,
  BookOpen,
  Snowflake,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

/* ================================================================
   TYPES
   ================================================================ */

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  href: string;
  sub?: string;
  optional?: boolean;
}

/* ================================================================
   DATA
   ================================================================ */

const residentialServices: ServiceItem[] = [
  {
    icon: Thermometer,
    title: "Heating & Cooling Services",
    href: "/services/heating-cooling",
  },
  {
    icon: Wind,
    title: "Mini-Splits & Heat Pumps",
    href: "/services/heating-cooling",
  },
  {
    icon: Flame,
    title: "Boiler & Furnace Repair",
    sub: "Repair and service only — no new installations",
    href: "/services/boiler-furnace-repair",
  },
  {
    icon: Droplets,
    title: "Water Heaters",
    sub: "Tankless & heat pump water heaters",
    href: "/services/heat-pump-water-heaters",
  },
  {
    icon: Calculator,
    title: "Load Calculations",
    href: "/services/load-calculations",
  },
];

const commercialServices: ServiceItem[] = [
  {
    icon: Building2,
    title: "Commercial HVAC service and replacements",
    href: "/services/commercial-hvac",
  },
  {
    icon: Warehouse,
    title: "Package units / rooftop units",
    href: "/services/commercial-hvac",
  },
  {
    icon: CookingPot,
    title: "Restaurant hood installation and ventilation",
    href: "/services/restaurant-hoods",
  },
  {
    icon: Wrench,
    title: "Service & repair for all HVAC systems",
    href: "/services/service-repair",
  },
  {
    icon: Snowflake,
    title: "Commercial refrigeration — walk-ins, display cases, ice machines",
    href: "/services/commercial-refrigeration",
  },
  {
    icon: Wrench,
    title: "Preventative maintenance planning",
    optional: true,
    href: "/services/commercial-hvac",
  },
  {
    icon: Calculator,
    title: "Load calculations and engineering guidance",
    href: "/services/load-calculations",
  },
];

const timelineSteps = [
  "Quick intake: photos, symptoms, building type",
  "Site visit and diagnostics (or virtual triage when possible)",
  "Scope and estimate: clear options and recommendations",
  "Professional work: clean install/repair with documentation",
  "Verify performance: airflow, controls, and comfort checks",
];

const expectations = [
  {
    icon: ClipboardCheck,
    title: "Upfront scope and estimate",
    description: "Clear scope and pricing shared before any work begins.",
  },
  {
    icon: Sparkles,
    title: "Respectful, clean workmanship",
    description: "Our team works carefully and keeps your space clean.",
  },
  {
    icon: Camera,
    title: "Photos and notes available",
    description: "Documentation and photos provided upon request.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description: "Straightforward updates from start to finish.",
  },
];

const hvacGuides = [
  {
    icon: Wind,
    title: "What Is a Mini-Split?",
    description:
      "A mini-split (or ductless system) provides heating and cooling without ductwork. It consists of an outdoor compressor and one or more indoor air handlers. Ideal for NYC apartments, additions, and spaces where running ducts isn't practical.",
  },
  {
    icon: Thermometer,
    title: "Heat Pump vs. Traditional AC",
    description:
      "Heat pumps both heat and cool using the same system. Unlike traditional AC + furnace setups, a heat pump moves heat rather than generating it — making it significantly more efficient. Modern cold-climate heat pumps work effectively even in NYC winters.",
  },
  {
    icon: Gauge,
    title: "Why System Sizing Matters",
    description:
      "An oversized system short-cycles, wastes energy, and creates uneven temperatures. An undersized system runs constantly and never reaches comfort. A proper Manual J load calculation ensures the right capacity for your exact space.",
  },
  {
    icon: ShieldCheck,
    title: "When to Repair vs. Replace",
    description:
      "If your system is over 15 years old, requires frequent repairs, or uses R-22 refrigerant (now phased out), replacement may be more cost-effective. We always try to repair first and give you honest recommendations.",
  },
  {
    icon: BookOpen,
    title: "Understanding SEER & HSPF Ratings",
    description:
      "SEER measures cooling efficiency and HSPF measures heating efficiency. Higher numbers mean lower operating costs. Minimum federal standards are SEER 15 / HSPF 8.8 — but high-efficiency units reach SEER 20+ and can qualify for NYSERDA rebates.",
  },
  {
    icon: Zap,
    title: "NYSERDA & NYC Incentives",
    description:
      "New York State offers significant rebates for heat pumps and high-efficiency equipment through NYSERDA programs. NYC Clean Heat also provides incentives for buildings transitioning away from oil heating. We help you understand what you may qualify for.",
  },
];

const serviceAreas = [
  "Bronx",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Staten Island",
  "New Jersey",
  "Connecticut",
];

const faqs = [
  {
    question: "How do I know if my system needs service?",
    answer:
      "If it isn't heating, cooling, or running properly, it likely needs attention. Unusual noises, weak airflow, short cycling, or a spike in energy bills are common signs. When in doubt, reach out and we can help you assess the situation.",
  },
  {
    question: "Do you work on both heating and cooling systems?",
    answer:
      "Yes — both heating and cooling. We service and install a wide range of equipment including mini-splits, heat pumps, boilers, furnaces, and central air systems for residential and commercial properties.",
  },
  {
    question: "How long does a service visit take?",
    answer:
      "Typically a few hours, depending on the scope. A standard diagnostic or repair is usually completed in a single visit. Installations and larger projects may require additional time, which we communicate upfront.",
  },
  {
    question: "Do you service older systems?",
    answer:
      "Yes — older and newer systems. We diagnose and repair a wide variety of equipment regardless of age. If a system is beyond repair, we'll be upfront about replacement options.",
  },
  {
    question: "Do you repair or replace systems?",
    answer:
      "We repair first and recommend replacement if needed. Our approach is to fix what can be fixed and advise honestly when a replacement makes more sense for your comfort and budget.",
  },
  {
    question: "Will you explain the issue before work begins?",
    answer:
      "Yes — findings are reviewed first. Before any work starts, we walk you through what we found, what we recommend, and what it will cost. No surprises.",
  },
  {
    question: "Do you check airflow and controls?",
    answer:
      "Yes — airflow and controls are checked as part of our standard process. Proper airflow and control settings are critical for comfort, efficiency, and system longevity.",
  },
  {
    question: "Can you help improve efficiency and comfort?",
    answer:
      "Yes — comfort and efficiency issues are addressed. Whether it's adjusting airflow, recommending upgrades, or right-sizing equipment, we focus on practical improvements that make a real difference.",
  },
];

/* ================================================================
   SUB-COMPONENTS
   ================================================================ */

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
      >
        <h3 className="text-lg font-semibold text-dark group-hover:text-blue transition-colors pr-4">
          {faq.question}
        </h3>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-blue text-white"
              : "bg-surface text-text-secondary"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-inner">
          <p className="text-text-secondary leading-relaxed pb-6 pr-12">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   MAIN COMPONENT
   ================================================================ */

export default function ServicesPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main id="main-content">
      {/* ========================================================
          HERO — Dark with background image (matches homepage)
          ======================================================== */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        aria-label="Services hero"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/gotham-van.webp"
            alt="Gotham HVAC branded service van on a New York City street"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/80 to-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-dark/40" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-32 lg:pt-40 pb-52 lg:pb-56">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 glass-dark rounded-full px-5 py-2.5 mb-10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-white/60 text-sm font-medium">
                  Residential &amp; Commercial
                </span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-blue-light text-sm font-medium">NYC + Tri-State</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Our HVAC{" "}
              <span className="text-gradient">Services</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-xl leading-relaxed mb-12">
              From mini-splits and heat pumps to rooftop units and restaurant
              ventilation — engineered HVAC solutions for every space across
              NYC and the Tri-State area.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary text-base px-8 py-4">
                Request Service
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={COMPANY.phoneTel}
                className="btn-outline-dark text-base px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ========================================================
          MARQUEE BAR
          ======================================================== */}
      <MarqueeBar />

      {/* ========================================================
          RESIDENTIAL SERVICES
          ======================================================== */}
      <section
        className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden"
        aria-labelledby="residential-heading"
      >
        <div className="gradient-orb w-[400px] h-[400px] bg-blue/8 top-[-100px] left-[-100px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mb-6 mx-auto" />
            <h2
              id="residential-heading"
              className="text-4xl sm:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              <span className="highlight">Residential</span> Services
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              Reliable heating and cooling services for apartments and homes
              across NYC and the Tri-State area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {residentialServices.slice(0, 4).map((service) => (
              <div key={service.title}>
                <Link
                  href={service.href}
                  className="group block bg-white rounded-2xl p-6 sm:p-7 card-interactive h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-subtle flex items-center justify-center mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-blue" />
                  </div>
                  <h3 className="font-bold text-dark text-base mb-1">
                    {service.title}
                  </h3>
                  {service.sub && (
                    <p className="text-text-tertiary text-sm mb-3">
                      {service.sub}
                    </p>
                  )}
                  <div className="flex items-center gap-1.5 text-blue text-sm font-semibold mt-3 group-hover:gap-2.5 transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {residentialServices.slice(4).map((service) => (
              <div key={service.title}>
                <Link
                  href={service.href}
                  className="group block bg-white rounded-2xl p-6 sm:p-7 card-interactive h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-subtle flex items-center justify-center mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-blue" />
                  </div>
                  <h3 className="font-bold text-dark text-base mb-1">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-blue text-sm font-semibold mt-3 group-hover:gap-2.5 transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          COMMERCIAL SERVICES
          ======================================================== */}
      <section
        className="py-24 sm:py-32 section-dark-blue relative overflow-hidden"
        aria-labelledby="commercial-heading"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="section-line mb-6 mx-auto" />
            <h2
              id="commercial-heading"
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4"
            >
              <span className="highlight">Commercial</span> Services
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              Engineered HVAC solutions for buildings, rooftops, restaurants,
              and commercial spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commercialServices.map((service) => (
              <div key={service.title}>
                <Link
                  href={service.href}
                  className="group block card-glass p-6 sm:p-7 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-blue" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-1">
                    {service.title}
                  </h3>
                  {service.optional && (
                    <p className="text-white/40 text-sm mb-1">
                      (optional)
                    </p>
                  )}
                  <div className="flex items-center gap-1.5 text-blue text-sm font-semibold mt-3 group-hover:gap-2.5 transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          HOW WE WORK (Timeline)
          ======================================================== */}
      <section
        className="py-24 sm:py-32 section-dark-mesh overflow-hidden relative"
        aria-labelledby="how-we-work-heading"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="section-line mb-6 mx-auto" />
            <h2
              id="how-we-work-heading"
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4"
            >
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-white/40 text-lg max-w-lg mx-auto">
              From first call to final walkthrough — a clear, proven process.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 sm:left-7 top-8 bottom-8 w-px border-l-2 border-dashed border-white/10 pointer-events-none" />

            <div className="space-y-0">
              {timelineSteps.map((step, i) => (
                <div
                  key={i}
                  className="relative flex items-start gap-5 sm:gap-6 py-5"
                >
                  <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue text-white flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-5">
                    <p className="text-white/80 font-medium leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHAT TO EXPECT
          ======================================================== */}
      <section
        className="py-24 sm:py-32 bg-white noise-overlay relative overflow-hidden"
        aria-labelledby="expect-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mb-6 mx-auto" />
            <h2
              id="expect-heading"
              className="text-4xl sm:text-5xl font-bold text-dark tracking-tight"
            >
              What to <span className="highlight">Expect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expectations.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 sm:p-7 card-gradient-border text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-subtle flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-blue" />
                </div>
                <h3 className="font-bold text-dark text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          HVAC 101 — Educational Content
          ======================================================== */}
      <section
        className="py-24 sm:py-32 section-slate grid-pattern-light"
        aria-labelledby="hvac-guide-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mb-6 mx-auto" />
            <h2
              id="hvac-guide-heading"
              className="text-4xl sm:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              HVAC <span className="text-gradient">101</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              Learn about the systems that keep your home or building comfortable.
              Understanding your HVAC helps you make better decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hvacGuides.map((guide) => (
              <article
                key={guide.title}
                className="group bg-white rounded-2xl p-7 card-interactive"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-subtle flex items-center justify-center mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                  <guide.icon className="w-6 h-6 text-blue" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-3">
                  {guide.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {guide.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          AREA WE SERVE BANNER
          ======================================================== */}
      <section className="bg-blue py-12 sm:py-16" aria-label="Service areas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white/80" />
              <span className="text-white font-bold text-lg sm:text-xl">
                Areas We Serve:
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {serviceAreas.map((area, i) => (
                <span
                  key={area}
                  className="text-white/90 font-medium text-base sm:text-lg flex items-center gap-3"
                >
                  {area}
                  {i < serviceAreas.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FAQ
          ======================================================== */}
      <section
        className="py-24 sm:py-32 bg-white"
        aria-labelledby="services-faq-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="section-line mb-6" />
              <h2
                id="services-faq-heading"
                className="text-4xl sm:text-5xl font-bold text-dark tracking-tight mb-6"
              >
                Questions &amp;
                <br />
                <span className="text-gradient">Answers</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Common questions about our HVAC services, process, and what to
                expect when you work with us.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all duration-300"
              >
                Didn&apos;t find the answer? Get in touch
                <span className="text-lg">&rarr;</span>
              </Link>
            </div>

            <div>
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openFaqIndex === i}
                  toggle={() =>
                    setOpenFaqIndex(openFaqIndex === i ? null : i)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CTA
          ======================================================== */}
      <section className="py-24 sm:py-32 section-dark-mesh overflow-hidden relative" aria-label="Call to action">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 max-w-2xl mx-auto">
              Ready to get your HVAC{" "}
              <span className="text-gradient">done right?</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              From first call to final walkthrough &mdash; engineering-led
              service you can trust.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#contact" className="btn-primary text-base px-10 py-5">
                Request Service
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={COMPANY.phoneTel}
                className="btn-outline-dark text-base px-10 py-5"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================================================================
   MARQUEE BAR (same as homepage)
   ================================================================ */

import { Zap as ZapIcon, Shield, Clock, Award } from "lucide-react";

const marqueeItems = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: MapPin, text: "5 NYC Boroughs" },
  { icon: ZapIcon, text: "Residential & Commercial" },
  { icon: Award, text: "NYSERDA Qualified" },
  { icon: Clock, text: "Same-Week Service" },
  { icon: Thermometer, text: "Heating & Cooling" },
  { icon: MapPin, text: "Tri-State Coverage" },
  { icon: Shield, text: "Code Compliant" },
];

function MarqueeBar() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <section className="py-6 bg-dark overflow-hidden" aria-label="Company highlights">
      <div className="marquee-track flex items-center gap-12 w-max">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-2">
            <item.icon className="w-4 h-4 text-blue flex-shrink-0" />
            <span className="text-white/50 text-sm font-medium whitespace-nowrap uppercase tracking-wider">
              {item.text}
            </span>
            <span className="text-white/10 ml-8">///</span>
          </div>
        ))}
      </div>
    </section>
  );
}
