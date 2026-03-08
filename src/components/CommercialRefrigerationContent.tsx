import Image from "next/image";
import Link from "next/link";
import {
  Snowflake,
  Thermometer,
  Wrench,
  ArrowRight,
  Phone,
  HelpCircle,
  MapPin,
  Shield,
  Clock,
  Award,
  Zap,
  Box,
  Store,
  ShoppingCart,
  AlertTriangle,
  Gauge,
  Settings,
  FileText,
  CheckCircle2,
  Building2,
  CookingPot,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface EquipmentType {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
}

const equipmentTypes: EquipmentType[] = [
  {
    icon: Box,
    title: "Walk-In Coolers & Freezers",
    description:
      "Service, repair, and installation for walk-in refrigeration boxes used in restaurants, delis, supermarkets, and commercial kitchens. We handle compressor issues, evaporator coil problems, door seal replacements, temperature control failures, and full system installations.",
    examples: [
      "Walk-in cooler repair & maintenance",
      "Walk-in freezer compressor replacement",
      "Door gasket & seal replacement",
      "Evaporator & condenser coil service",
      "Temperature control & thermostat repair",
      "New walk-in box installation",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Open Display Merchandisers",
    description:
      "Service and repair for open-air refrigerated display cases — the open-front coolers used in delis, bodegas, supermarkets, and convenience stores to showcase beverages, produce, dairy, and deli items. Multi-deck and single-deck units.",
    examples: [
      "Multi-deck open display cooler repair",
      "Grab-and-go case service",
      "Beverage merchandiser maintenance",
      "Produce & dairy case repair",
      "Night curtain & cover adjustments",
      "Refrigerant charge & leak repair",
    ],
  },
  {
    icon: Store,
    title: "Reach-In Coolers & Freezers",
    description:
      "Repair and maintenance for commercial reach-in refrigerators and freezers — glass-door display units, solid-door units, and under-counter refrigeration common in restaurants, bars, cafes, and commercial kitchens.",
    examples: [
      "Glass-door display cooler repair",
      "Solid-door reach-in maintenance",
      "Under-counter refrigeration service",
      "Bar cooler & keg cooler repair",
      "Compressor & fan motor replacement",
      "Thermostat & defrost cycle repair",
    ],
  },
  {
    icon: Snowflake,
    title: "Ice Machines",
    description:
      "Service, cleaning, and repair for commercial ice machines. Scale buildup, low production, leaks, and compressor issues. All major brands and configurations.",
    examples: [
      "Ice machine cleaning & descaling",
      "Low ice production troubleshooting",
      "Water leak & drain line repair",
      "Compressor & condenser service",
      "Ice bin & dispenser maintenance",
    ],
  },
  {
    icon: CookingPot,
    title: "Prep Tables & Specialty Units",
    description:
      "Service for sandwich/salad prep tables, pizza prep tables, chef bases, and specialty refrigeration equipment used in commercial food preparation areas.",
    examples: [
      "Prep table refrigeration repair",
      "Pizza prep table service",
      "Chef base compressor repair",
      "Deli case & butcher display service",
      "Blast chiller maintenance",
    ],
  },
];

interface IndustryServed {
  icon: LucideIcon;
  title: string;
}

const industriesServed: IndustryServed[] = [
  { icon: CookingPot, title: "Restaurants & Kitchens" },
  { icon: Store, title: "Delis & Bodegas" },
  { icon: ShoppingCart, title: "Supermarkets & Grocery" },
  { icon: Building2, title: "Hotels & Hospitality" },
  { icon: Box, title: "Convenience Stores" },
  { icon: Zap, title: "Bars & Nightlife" },
];

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How quickly can you respond to a refrigeration emergency?",
    answer:
      "We understand that refrigeration failures mean potential product loss. We prioritize emergency refrigeration calls and aim for same-day response. For urgent situations — walk-in down, product at risk — contact us immediately and we'll mobilize as fast as possible.",
  },
  {
    question: "Do you service all brands of commercial refrigeration?",
    answer:
      "Yes — we work on all major commercial refrigeration brands including True, Turbo Air, Beverage-Air, Hussmann, Heatcraft, Copeland, Tecumseh, and many more. Walk-ins, display cases, reach-ins, and ice machines.",
  },
  {
    question: "Can you install a new walk-in cooler or freezer?",
    answer:
      "Yes — we handle walk-in cooler and freezer installations including box assembly, refrigeration system installation, electrical connections, and temperature verification. We work with your general contractor or directly as needed.",
  },
  {
    question: "How often should commercial refrigeration be serviced?",
    answer:
      "We recommend quarterly preventative maintenance for most commercial refrigeration equipment. This includes coil cleaning, refrigerant checks, thermostat calibration, door seal inspection, and drain line clearing. Regular maintenance prevents costly breakdowns and keeps food at safe temperatures.",
  },
  {
    question: "My walk-in is not holding temperature — what could be wrong?",
    answer:
      "Common causes include a failing compressor, low refrigerant (often from a leak), dirty condenser coils, a faulty evaporator fan, damaged door seals, or a thermostat issue. We'll diagnose the root cause and give you clear repair options before proceeding.",
  },
  {
    question: "Do you handle refrigerant leak detection and repair?",
    answer:
      "Yes — we perform electronic leak detection, repair leaks, and recharge systems with the proper refrigerant. We follow all EPA regulations for refrigerant handling and can help with refrigerant transition planning if your system uses an older refrigerant.",
  },
];

const serviceAreas = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
  "Lower Westchester",
  "Long Island",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CommercialRefrigerationContent() {
  return (
    <>
      {/* ============================================================= */}
      {/*  HERO                                                          */}
      {/* ============================================================= */}
      <section
        className="relative min-h-[70vh] flex items-end overflow-hidden"
      >
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/commercial-hvac.jpg"
            alt="Commercial refrigeration equipment"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-6">
              <Snowflake className="w-4 h-4 text-blue" />
              Walk-Ins &bull; Display Cases &bull; Ice Machines
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Commercial{" "}
              <span className="text-gradient">Refrigeration</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mb-8">
              Expert service, repair, and installation for walk-in coolers,
              walk-in freezers, display merchandisers, reach-in units, and
              commercial ice machines across NYC and the Tri-State area.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="btn-primary">
                Schedule Service
              </Link>
              <a
                href={COMPANY.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  EQUIPMENT TYPES                                               */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="section-line mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4">
              Equipment We <span className="highlight">Service</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              From walk-in boxes to open display cases — we service the full
              range of commercial refrigeration equipment.
            </p>
          </div>

          <div className="space-y-6">
            {equipmentTypes.map((equipment) => (
              <div
                key={equipment.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center flex-shrink-0">
                      <equipment.icon className="w-7 h-7 text-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-dark mb-3">
                        {equipment.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-5">
                        {equipment.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {equipment.examples.map((example) => (
                          <div
                            key={example}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue flex-shrink-0" />
                            <span className="text-sm text-text-secondary">
                              {example}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  INDUSTRIES SERVED                                             */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4">
              Industries We <span className="highlight">Serve</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Commercial refrigeration for every type of food service and
              retail business in NYC.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industriesServed.map((industry) => (
              <div
                key={industry.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface hover:bg-blue/5 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-4 shadow-sm">
                  <industry.icon className="w-6 h-6 text-blue" />
                </div>
                <span className="text-sm font-semibold text-dark">
                  {industry.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  WHY GOTHAM FOR REFRIGERATION                                  */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 section-dark-blue noise-overlay relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Why <span className="text-gradient">Gotham</span> for
              Refrigeration
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Refrigeration failures cost money — in spoiled product, lost
              revenue, and health code risk. We get it fixed fast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Priority Response",
                description:
                  "Refrigeration emergencies get priority scheduling. Product loss doesn't wait — neither do we.",
              },
              {
                icon: Gauge,
                title: "Proper Diagnostics",
                description:
                  "We diagnose with gauges, meters, and data — not guesswork. Find the root cause, fix it right.",
              },
              {
                icon: Shield,
                title: "EPA Certified",
                description:
                  "Full EPA Section 608 certification for refrigerant handling. Compliant, legal, and safe.",
              },
              {
                icon: Award,
                title: "All Brands & Types",
                description:
                  "Walk-ins, display cases, reach-ins, ice machines — all major brands and configurations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-blue mb-4" />
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  COMMON ISSUES                                                 */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-line mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4">
                Common Refrigeration{" "}
                <span className="highlight">Issues</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                These are the problems we solve every day for NYC businesses.
                If it sounds familiar, give us a call.
              </p>
              <div className="space-y-4">
                {[
                  "Walk-in not holding temperature",
                  "Compressor running but not cooling",
                  "Ice buildup on evaporator coils",
                  "Water leaking inside the walk-in",
                  "Display case fogging or sweating",
                  "Loud or unusual compressor noises",
                  "Refrigerant leaks and low charge",
                  "Door seals worn or not sealing properly",
                  "Ice machine not producing or low output",
                  "Thermostat or controller malfunctions",
                ].map((issue) => (
                  <div
                    key={issue}
                    className="flex items-start gap-3"
                  >
                    <AlertTriangle className="w-4 h-4 text-accent-red mt-1 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">
                      {issue}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-surface rounded-2xl p-8 sm:p-10">
                <h3 className="text-xl font-bold text-dark mb-6">
                  Our Refrigeration Service Process
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Emergency Intake",
                      desc: "Tell us what's happening — equipment type, symptoms, and urgency level.",
                    },
                    {
                      step: "02",
                      title: "On-Site Diagnostics",
                      desc: "Gauge readings, temperature checks, electrical tests, and visual inspection.",
                    },
                    {
                      step: "03",
                      title: "Clear Estimate",
                      desc: "Transparent pricing and options before we proceed with any repair work.",
                    },
                    {
                      step: "04",
                      title: "Expert Repair",
                      desc: "Quality parts, proper refrigerant handling, and clean workmanship.",
                    },
                    {
                      step: "05",
                      title: "Verify & Monitor",
                      desc: "Temperature verification, performance checks, and maintenance recommendations.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex gap-4"
                    >
                      <div className="text-2xl font-bold text-blue/50 leading-none pt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-1">
                          {item.title}
                        </h4>
                        <p className="text-text-secondary text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  SERVICE AREAS                                                 */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-20 section-cool noise-overlay relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight mb-3">
              Service Areas
            </h2>
            <p className="text-text-secondary">
              Commercial refrigeration service across the NYC metro area.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-100 text-sm font-medium text-dark shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-blue" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  FAQ                                                           */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="section-line mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4">
              Common <span className="highlight">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="card-interactive p-6 rounded-2xl"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-dark mb-2">
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
        </div>
      </section>

      {/* ============================================================= */}
      {/*  CTA                                                           */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 section-dark-mesh noise-overlay relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Refrigeration Down?{" "}
              <span className="text-gradient">We&rsquo;re On It.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
              Don&rsquo;t risk product loss. Call us now or send a message and
              we&rsquo;ll prioritize your repair.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="btn-primary">
                Request Service
              </Link>
              <a
                href={COMPANY.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
