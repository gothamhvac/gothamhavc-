import Image from "next/image";
import Link from "next/link";
import {
  CookingPot,
  Store,
  Building2,
  Building,
  Dumbbell,
  Warehouse,
  Wind,
  Wrench,
  Calculator,
  ClipboardCheck,
  Camera,
  MessageSquare,
  Sparkles,
  Phone,
  ArrowRight,
  MapPin,
  Shield,
  Clock,
  Award,
  Zap,
  Thermometer,
  HelpCircle,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface IndustryCard {
  icon: LucideIcon;
  title: string;
}

const industries: IndustryCard[] = [
  { icon: CookingPot, title: "Restaurants & Kitchens" },
  { icon: Store, title: "Retail & Storefronts" },
  { icon: Building2, title: "Offices & Professional Spaces" },
  { icon: Building, title: "Multifamily Buildings" },
  { icon: Dumbbell, title: "Gyms & Studios" },
];

interface CapabilityCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const capabilities: CapabilityCard[] = [
  {
    icon: Warehouse,
    title: "Package / Rooftop Units",
    description: "Service, troubleshooting, and replacement planning",
  },
  {
    icon: Wind,
    title: "Split Systems & Mini-Splits",
    description: "Service and professional installations",
  },
  {
    icon: Thermometer,
    title: "Ventilation & Exhaust Improvements",
    description: "Airflow optimization and code-aware upgrades",
  },
  {
    icon: Wrench,
    title: "Preventative Maintenance Planning",
    description: "Planned service to reduce downtime and failures",
  },
  {
    icon: Calculator,
    title: "Engineering Guidance & Load Calculations",
    description: "Sizing analysis and system planning support",
  },
];

interface WhatYouGetCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const whatYouGet: WhatYouGetCard[] = [
  {
    icon: Camera,
    title: "Clear scope & documentation",
    description: "Photos, notes, and documented recommendations",
  },
  {
    icon: MessageSquare,
    title: "Coordination-ready communication",
    description:
      "Efficient comfort solutions for NYC apartments and homes",
  },
  {
    icon: Sparkles,
    title: "Clean, detail-driven work",
    description:
      "Attention to airflow, controls, and jobsite cleanliness",
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

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Do you service rooftop units?",
    answer:
      "Yes — package and RTU service with replacement planning.",
  },
  {
    question: "Can you handle restaurant ventilation?",
    answer:
      "Yes — commercial hood installation and ventilation work.",
  },
  {
    question: "Do you provide load calculations?",
    answer:
      "Yes — professional sizing and analysis is available.",
  },
  {
    question: "Do you work with property managers and GCs?",
    answer:
      "Yes — professional load calculations are available.",
  },
  {
    question: "Do you service multi-unit commercial buildings?",
    answer:
      "Yes — multifamily and mixed-use buildings are supported.",
  },
  {
    question: "Do you offer preventative maintenance plans?",
    answer:
      "Yes — planned maintenance is available upon request.",
  },
];

/* ================================================================== */
/*  Marquee Bar                                                        */
/* ================================================================== */

const marqueeItems = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: MapPin, text: "5 NYC Boroughs" },
  { icon: Zap, text: "Residential & Commercial" },
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

/* ================================================================== */
/*  Main Component                                                     */
/* ================================================================== */

export default function CommercialHVACContent() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO — Dark with parallax background                        */}
      {/* ============================================================ */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/commercial-hvac.jpg"
            alt="Commercial HVAC rooftop units on a New York City building"
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
            {/* Glass badge */}
            <div className="inline-flex items-center gap-3 glass-dark rounded-full px-5 py-2.5 mb-10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-white/60 text-sm font-medium">
                  Now Serving NYC &amp; Tri-State
                </span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-blue-light text-sm font-medium">Licensed &amp; Insured</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="block text-white">
                Commercial HVAC
              </span>
              <span className="block text-gradient mt-2">
                Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/50 max-w-xl mb-12 leading-relaxed">
              Rooftops, retail, restaurants, offices, and multifamily &mdash;
              engineering-led service and upgrades built for reliability.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/#contact" className="btn-primary text-base px-8 py-4">
                Request a Commercial Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={COMPANY.phoneTel} className="btn-outline-dark text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                Call {COMPANY.phone}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {["All 5 NYC Boroughs", "NYSERDA Qualified", "Same-Week Service"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-white/40">
                  <div className="w-1 h-1 rounded-full bg-blue" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ============================================================ */}
      {/*  MARQUEE BAR                                                 */}
      {/* ============================================================ */}
      <MarqueeBar />

      {/* ============================================================ */}
      {/*  INDUSTRIES SERVED                                           */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 section-cool noise-overlay grid-pattern-light relative overflow-hidden" aria-labelledby="industries-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="industries-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              Industries <span className="text-gradient">Served</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              Trusted by businesses across NYC and the Tri-State area for
              reliable commercial HVAC service.
            </p>
          </div>

          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {industries.slice(0, 3).map((industry) => (
              <div
                key={industry.title}
                className="group bg-white rounded-2xl p-8 text-center card-gradient-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-subtle flex items-center justify-center mx-auto mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                  <industry.icon className="w-7 h-7 text-blue" />
                </div>
                <h3 className="font-semibold text-dark text-[15px] leading-snug">
                  {industry.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom row — 2 centered cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {industries.slice(3).map((industry) => (
              <div
                key={industry.title}
                className="group bg-white rounded-2xl p-8 text-center card-gradient-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-subtle flex items-center justify-center mx-auto mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                  <industry.icon className="w-7 h-7 text-blue" />
                </div>
                <h3 className="font-semibold text-dark text-[15px] leading-snug">
                  {industry.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COMMERCIAL CAPABILITIES — dark bg                           */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-dark-mesh overflow-hidden relative"
        aria-labelledby="capabilities-heading"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="capabilities-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
            >
              Commercial <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
              End-to-end commercial HVAC expertise for NYC and Tri-State properties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group card-glass rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                  <cap.icon className="w-6 h-6 text-blue" />
                </div>
                <h3 className="font-bold text-white text-base mb-2 leading-snug">
                  {cap.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHAT YOU GET WITH GOTHAM HVAC                                */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden" aria-labelledby="what-you-get-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="what-you-get-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight"
            >
              What You Get with <span className="highlight">Gotham HVAC</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {whatYouGet.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-6 rounded-2xl p-7 card-accent-left"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-subtle flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AREA WE SERVE — Blue banner                                  */}
      {/* ============================================================ */}
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

      {/* ============================================================ */}
      {/*  FAQ — 2-column grid cards (NOT accordion)                   */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 section-slate" aria-labelledby="commercial-faq-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="commercial-faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              Quick answers to common questions about our commercial HVAC services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-2xl p-7 card-interactive"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-subtle flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-base mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all duration-300"
            >
              Have another question? Get in touch
              <span className="text-lg">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA — Dark rounded card                                     */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 section-cool" aria-label="Call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] overflow-hidden bg-dark p-10 sm:p-14 lg:p-20">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 max-w-2xl mx-auto">
                Ready for commercial HVAC{" "}
                <span className="text-gradient">done right?</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                From first call to final walkthrough &mdash; engineering-led
                commercial service you can trust.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/#contact" className="btn-primary text-base px-10 py-5">
                  Request a Commercial Quote
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
        </div>
      </section>
    </>
  );
}
