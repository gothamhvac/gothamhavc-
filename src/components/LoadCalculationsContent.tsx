import Image from "next/image";
import Link from "next/link";
import {
  ClipboardList,
  Ruler,
  LayoutGrid,
  Settings,
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
  Shield,
  Clock,
  Award,
  Zap,
  Thermometer,
  HelpCircle,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const includedItems = [
  {
    icon: ClipboardList,
    title: "Building review & inputs collection",
    description:
      "We gather dimensions, orientation, insulation details, window types, and occupancy data to build an accurate load profile.",
  },
  {
    icon: Ruler,
    title: "Sizing guidance (capacity ranges)",
    description:
      "Clear BTU/tonnage ranges based on your building's actual heat gain and loss — not rules of thumb.",
  },
  {
    icon: LayoutGrid,
    title: "Room-by-room notes (when applicable)",
    description:
      "For multi-zone or mini-split layouts, we break down capacity needs per room so every space is properly addressed.",
  },
  {
    icon: Settings,
    title: "Practical system recommendations",
    description:
      "Equipment suggestions matched to your building type, budget, and long-term comfort goals.",
  },
];

const problems = [
  "Rooms that are too hot or too cold",
  "Short cycling or oversized equipment issues",
  "High utility bills linked to poor sizing",
  "Uneven comfort room-to-room",
  "Confusing mini-split sizing decisions",
  "Planning upgrades without clear capacity guidance",
];

const approachBullets = [
  "Clear assumptions and inputs documented",
  "Right-sized capacity ranges (not guesses)",
  "Manufacturer-recommended sizing",
  "Recommendations aligned to your system type",
];

const faqs = [
  {
    q: "Is this only for new installs?",
    a: "No — load calculations are also useful for diagnosing comfort issues, evaluating existing equipment, and planning upgrades.",
  },
  {
    q: "Can this help with mini-split sizing?",
    a: "Yes — proper sizing is critical for mini-split performance. Oversized units short-cycle and undersized units can't keep up.",
  },
  {
    q: "What do you need from me to start?",
    a: "Basic dimensions or a floor plan plus photos if available. We'll handle the rest during the assessment.",
  },
  {
    q: "Do you provide room-by-room results?",
    a: "When applicable, yes — based on the layout, scope, and whether you're planning a multi-zone system.",
  },
  {
    q: "Will this reduce short cycling and discomfort?",
    a: "Yes — right-sizing improves temperature consistency, reduces energy waste, and extends equipment lifespan.",
  },
  {
    q: "Do you also advise on system type?",
    a: "Yes — recommendations can cover mini-split vs. ducted approaches, hybrid setups, and equipment brand selection.",
  },
];

const serviceAreas = [
  "Bronx",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Staten Island",
  "Lower Westchester",
  "Long Island",
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

export default function LoadCalculationsContent() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO — Dark with background                                 */}
      {/* ============================================================ */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hvac-blueprint.webp"
            alt="Architectural blueprint for HVAC load calculation and system sizing"
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
                  Now Serving NYC &amp; Tri-State
                </span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-blue-light text-sm font-medium">Licensed &amp; Insured</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="block text-white">
                HVAC Load
              </span>
              <span className="block text-gradient mt-2">
                Calculations
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-xl mb-12 leading-relaxed">
              Professional sizing and load calculations to improve comfort,
              reduce short cycling, and support efficient system planning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/#contact" className="btn-primary text-base px-8 py-4">
                Request Service
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={COMPANY.phoneTel} className="btn-outline-dark text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                Call {COMPANY.phone}
              </a>
            </div>

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
      {/*  WHAT'S INCLUDED                                             */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 section-dark-mesh relative overflow-hidden" aria-labelledby="included-heading">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="included-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
            >
              What&apos;s <span className="highlight">Included</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              Every load calculation covers the essentials for confident sizing decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedItems.map((item) => (
              <div
                key={item.title}
                className="group card-glass p-8 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-blue" />
                </div>
                <h3 className="font-semibold text-white text-[15px] leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COMMON PROBLEMS — Split layout                              */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden" aria-labelledby="problems-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-line mb-6" />
              <h2
                id="problems-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-8"
              >
                Common <span className="highlight">Problems</span> We Solve
              </h2>

              <ul className="space-y-4">
                {problems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-secondary text-base leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/tankless-common-problems.webp"
                  alt="HVAC tools and pressure gauges used for system diagnostics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  OUR APPROACH — Reversed split                               */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-white noise-overlay relative overflow-hidden" aria-labelledby="approach-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hvac-blueprint.webp"
                  alt="Architectural blueprint used for HVAC load calculation analysis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="section-line mb-6" />
              <h2
                id="approach-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-6"
              >
                Our <span className="highlight">Approach</span>
              </h2>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                Comfort isn&apos;t guesswork. We use a disciplined process based on
                fundamentals &mdash; load, airflow assumptions, building conditions,
                and verification &mdash; so recommendations are practical for real
                NYC buildings.
              </p>

              <ul className="space-y-4">
                {approachBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-dark font-medium text-base"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AREAS WE SERVE — Blue banner                                */}
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
      {/*  FAQ — 2-column grid cards                                   */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 section-slate" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              Questions &amp; <span className="text-gradient">Answers</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              Common questions about HVAC load calculations and what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl p-7 card-interactive"
              >
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-dark text-base leading-snug">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Contact CTA inside FAQ */}
          <div className="text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all duration-300"
            >
              Didn&apos;t find the answer? Get in touch
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
                Ready for properly sized HVAC{" "}
                <span className="text-gradient">done right?</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                From first call to final walkthrough &mdash; engineering-led
                load calculations you can trust.
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
        </div>
      </section>
    </>
  );
}
