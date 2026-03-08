import Image from "next/image";
import Link from "next/link";
import {
  Snowflake,
  DollarSign,
  Shield,
  MapPin,
  Zap,
  Award,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  Users,
  FileCheck,
  AlertTriangle,
  ClipboardList,
  Stethoscope,
  Wind,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const programs = [
  {
    icon: Snowflake,
    badge: "Annual Program",
    color: "blue" as const,
    title: "HEAP Cooling Assistance",
    subtitle: "NYS OTDA / NYC Human Resources Administration",
    plain:
      "A federally funded program that provides eligible low-income NYC households with a free air conditioner or fan \u2014 purchased and installed at no cost to you. The state pays the approved vendor (that\u2019s us) directly. Covers the unit, installation labor, materials, and removal of old equipment.",
    eligible: [
      "Household income at or below HEAP guidelines (or receiving SNAP, TA, SSI)",
      "At least one member age 60+, under 6, or with a heat-sensitive medical condition",
      "No working AC, or existing unit is 5+ years old",
      "No HEAP-funded AC received in the past 5 years",
      "U.S. Citizen or Qualified Non-Citizen in the household",
    ],
    equipment: [
      "Window air conditioner",
      "Portable air conditioner",
      "Wall sleeve air conditioner",
      "Standing fan if AC cannot be safely installed",
    ],
    howToApply: [
      "Online through ACCESS HRA (access.nyc.gov)",
      "By phone: 718-557-1399",
      "In person at an HRA Benefit Access Center",
    ],
    season: "Opens April 15, 2026 \u2014 first-come, first-served until funds run out",
  },
  {
    icon: Stethoscope,
    badge: "Health Plan Benefit",
    color: "green" as const,
    title: "Essential Plan Cooling Program",
    subtitle: "NY State of Health / NYS Department of Health",
    plain:
      "Launched by Governor Hochul in 2025, the Essential Plan Cooling Program provides free air conditioning units to New Yorkers enrolled in the Essential Plan who have persistent asthma. Extreme heat, allergens, and poor air quality can worsen asthma symptoms \u2014 this program aims to prevent ER visits and hospitalizations by keeping homes cool.",
    eligible: [
      "Must be enrolled in NY State of Health\u2019s Essential Plan",
      "Must have persistent asthma (symptoms most of the time or daily medication)",
      "No HEAP-funded AC received in the past 5 years",
      "Installation at permanent residential address on file with NY State of Health",
      "One cooling unit per eligible person every 5 years",
    ],
    equipment: [
      "Window air conditioner",
      "Portable air conditioner",
      "Wall sleeve replacement",
      "Standing floor fan if AC cannot be installed safely",
    ],
    howToApply: [
      "Online through NY State of Health Zendesk portal",
      "By phone: 1-855-355-5777 (Mon\u2013Fri 8am\u20138pm, Sat 9am\u20131pm)",
      "Decision via email within 2\u20133 weeks",
    ],
    season: "Seasonal \u2014 2026 dates TBD pending funding (2025 ran June\u2013Sept 30)",
  },
];

const heapIncomeTable = [
  { size: "1", income: "$3,473" },
  { size: "2", income: "$4,542" },
  { size: "3", income: "$5,611" },
  { size: "4", income: "$6,680" },
  { size: "5", income: "$7,749" },
  { size: "6", income: "$8,818" },
];

const autoEligible = [
  "SNAP (food stamps) recipients",
  "Temporary Assistance (TA) recipients",
  "SSI Code A recipients",
  "Received a HEAP benefit this program year",
];

const howItWorksHeap = [
  {
    step: "01",
    icon: Phone,
    title: "Apply for the Benefit",
    description:
      "Apply through ACCESS HRA online, by phone (718-557-1399), or in person. NYC residents can scan documents via the ACCESS HRA mobile app.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Eligibility Review",
    description:
      "HRA reviews your application, income, and household eligibility. Phone interviews are available \u2014 you may not need an office visit.",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "Pre-Install Assessment",
    description:
      "An approved vendor (Gotham HVAC) visits your home to assess the space, determine the right cooling option, and schedule installation.",
  },
  {
    step: "04",
    icon: Snowflake,
    title: "Free Installation",
    description:
      "We deliver and install your AC at no cost. Old units removed. Manufacturer warranty registered. System verified working.",
  },
];

const howItWorksEpcp = [
  {
    step: "01",
    icon: Phone,
    title: "Complete Online Application",
    description:
      "Apply through the NY State of Health Zendesk portal (5\u201310 minutes). Complete in one sitting \u2014 progress is not saved if you navigate away.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Receive Your Decision",
    description:
      "You\u2019ll get an approval or denial via email within 2\u20133 weeks. If approved, the email includes instructions to schedule with your vendor.",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "Schedule Two Appointments",
    description:
      "Book a pre-installation assessment (to determine the right unit) and an installation appointment with Gotham HVAC.",
  },
  {
    step: "04",
    icon: Snowflake,
    title: "Free Installation",
    description:
      "We deliver, install, and verify your AC. We also help register the manufacturer\u2019s warranty. You pay nothing.",
  },
];

const faqs = [
  {
    q: "What\u2019s the difference between HEAP Cooling and the Essential Plan Cooling Program?",
    a: "HEAP Cooling is income-based and serves low-income households with seniors, young children, or heat-sensitive medical conditions. The Essential Plan Cooling Program is specifically for people enrolled in NY State of Health\u2019s Essential Plan who have persistent asthma. They\u2019re run by different agencies but both provide free AC installation. You cannot receive both within 5 years.",
  },
  {
    q: "Can I qualify for both programs?",
    a: "You can apply to both, but if you received a HEAP-funded AC in the past 5 years, you\u2019re not eligible for the Essential Plan Cooling Program (and vice versa for HEAP). The programs are designed to complement each other \u2014 covering different populations who need cooling assistance.",
  },
  {
    q: "How do I apply for HEAP Cooling Assistance in NYC?",
    a: "Apply through ACCESS HRA online at access.nyc.gov, by phone at 718-557-1399, or in person at an HRA Benefit Access Center. You can scan and upload documents via the ACCESS HRA mobile app. Apply as early as possible \u2014 the program is first-come, first-served and funding runs out fast.",
  },
  {
    q: "How do I apply for the Essential Plan Cooling Program?",
    a: "Apply online through the NY State of Health Zendesk portal \u2014 it takes about 5\u201310 minutes. You can also call 1-855-355-5777 (Mon\u2013Fri 8am\u20138pm, Saturday 9am\u20131pm). Complete the application in one sitting, as progress isn\u2019t saved. You\u2019ll get an email decision within 2\u20133 weeks.",
  },
  {
    q: "Does Gotham HVAC participate as an approved vendor for both programs?",
    a: "Yes \u2014 Gotham HVAC is an approved vendor for both the HEAP Cooling Assistance program (vendor agreement with NYS OTDA) and the Essential Plan Cooling Program (enrolled through Health Research, Inc.). We handle pre-installation assessments, equipment delivery, installation, and warranty registration for both programs.",
  },
  {
    q: "Can I get a mini-split or central AC through these programs?",
    a: "No \u2014 both programs cover window ACs, portable ACs, wall sleeve ACs, and fans only. Mini-splits and central air systems are not covered. However, you may qualify for NYSERDA heat pump rebates for those systems \u2014 check our NYSERDA rebates page for details.",
  },
  {
    q: "I\u2019m on SNAP / food stamps \u2014 do I automatically qualify for HEAP?",
    a: "You\u2019re automatically income-eligible if you receive SNAP, Temporary Assistance, SSI Code A, or a current HEAP benefit. You still need a vulnerable household member (60+, under 6, or heat-sensitive medical condition) and must not have a working AC under 5 years old.",
  },
  {
    q: "What does \u2018persistent asthma\u2019 mean for the Essential Plan Cooling Program?",
    a: "Persistent asthma means you experience asthma symptoms (shortness of breath, wheezing, coughing attacks, chest tightness, or chest pain) most of the time, OR you need to take daily medication to control your asthma symptoms. You\u2019ll need to attest to this on the application.",
  },
  {
    q: "When do these programs open for 2026?",
    a: "HEAP Cooling Assistance is scheduled to open April 15, 2026. The Essential Plan Cooling Program\u2019s 2026 dates haven\u2019t been announced yet \u2014 it\u2019s pending funding. In 2025, EPCP ran June through September 30. Both programs are first-come, first-served.",
  },
  {
    q: "What areas do you serve for cooling assistance?",
    a: "We serve all five NYC boroughs \u2014 Manhattan, Brooklyn, Queens, Bronx, and Staten Island \u2014 plus Lower Westchester and Long Island for HEAP Cooling. The Essential Plan Cooling Program covers all of New York State.",
  },
];

const marqueeItems = [
  { icon: Shield, text: "Approved HEAP Vendor" },
  { icon: Stethoscope, text: "Essential Plan Cooling Vendor" },
  { icon: DollarSign, text: "Free AC Installation" },
  { icon: MapPin, text: "All NYC Boroughs" },
  { icon: Users, text: "Seniors & Vulnerable" },
  { icon: Wind, text: "Asthma Relief" },
  { icon: Award, text: "Licensed & Insured" },
  { icon: FileCheck, text: "We Handle Everything" },
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
/*  Marquee Bar                                                        */
/* ------------------------------------------------------------------ */

function MarqueeBar() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <section
      className="py-6 bg-dark overflow-hidden"
      aria-label="Program highlights"
    >
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

export default function CoolingAssistanceContent() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section
        className="relative min-h-[75vh]"
        aria-label="Cooling Assistance Hero"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/nyc-window-ac.webp"
              alt="Window AC units mounted on a NYC brick building — cooling assistance programs"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/40" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-36 lg:pt-44 pb-32 lg:pb-40"
        >
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-3 glass-dark rounded-full px-5 py-2.5 mb-10"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400 absolute inset-0 animate-ping" />
                </div>
                <span className="text-white/60 text-sm font-medium">
                  Approved Vendor &mdash; Both Programs
                </span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-blue-light text-sm font-medium">
                Free AC Installation
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              <span className="block text-white">
                HEAP &amp; Essential Plan
              </span>
              <span className="block text-gradient mt-2">
                Cooling Assistance
              </span>
              <span className="block text-white/50 mt-2">
                Free AC for NYC Residents
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-white/50 max-w-xl mb-12 leading-relaxed"
            >
              Two programs. One goal: keeping vulnerable New Yorkers safe from
              extreme heat. Free air conditioners for income-eligible
              households (HEAP) and Essential Plan members with persistent
              asthma (EPCP). We&rsquo;re an approved vendor for both.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link
                href="/#contact"
                className="btn-primary text-base px-8 py-4"
              >
                Check Eligibility
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

            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "HEAP Cooling Vendor",
                  "Essential Plan Cooling Vendor",
                  "Licensed & Insured NYC",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-white/40"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent z-[5]" />
      </section>

      {/* ============================================================ */}
      {/*  MARQUEE                                                     */}
      {/* ============================================================ */}
      <MarqueeBar />

      {/* ============================================================ */}
      {/*  TRUST BADGES                                                */}
      {/* ============================================================ */}
      <section
        className="py-12 sm:py-16 bg-white border-y border-gray-100"
        aria-label="Certifications"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue" />
              </div>
              <div>
                <p className="text-dark font-semibold text-sm">
                  HEAP Approved
                </p>
                <p className="text-text-secondary text-xs">
                  Cooling Assistance Vendor
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                <Stethoscope className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="text-dark font-semibold text-sm">
                  Essential Plan
                </p>
                <p className="text-text-secondary text-xs">
                  Cooling Program Vendor
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <p className="text-dark font-semibold text-sm">
                  Licensed &amp; Insured
                </p>
                <p className="text-text-secondary text-xs">
                  NYC &amp; Tri-State
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PLAIN ENGLISH INTRO                                         */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden"
        aria-labelledby="what-heading"
      >
        <div className="gradient-orb w-[350px] h-[350px] bg-blue/8 bottom-[-100px] left-[-100px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-line mb-6" />
              <h2
                id="what-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-6"
              >
                Two Programs,{" "}
                <span className="text-gradient">One Goal</span>
              </h2>
              <div className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-dark">Extreme heat kills more
                  New Yorkers than any other weather event.</strong> These two
                  state and city programs provide free air conditioners to the
                  people who need them most.
                </p>
                <p>
                  <strong className="text-dark">HEAP Cooling Assistance</strong>{" "}
                  serves low-income households with seniors, young children, or
                  members with heat-sensitive medical conditions. It&rsquo;s
                  federally funded and administered by NYC&rsquo;s Human Resources
                  Administration.
                </p>
                <p>
                  The{" "}
                  <strong className="text-dark">
                    Essential Plan Cooling Program
                  </strong>{" "}
                  is a newer initiative launched in 2025 that specifically serves
                  New Yorkers enrolled in the Essential Plan health insurance who
                  have{" "}
                  <strong className="text-dark">persistent asthma</strong>.
                  Heat and poor air quality trigger asthma attacks &mdash; home
                  cooling prevents ER visits and hospitalizations.
                </p>
                <p>
                  As an approved vendor for both programs, Gotham HVAC handles
                  the installation side &mdash; assessment, delivery,
                  installation, and warranty registration.
                </p>
              </div>
            </div>

            <div>
              <div className="space-y-5">
                <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Snowflake className="w-5 h-5 text-blue" />
                    <h3 className="font-bold text-dark">HEAP Cooling</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "For low-income households with vulnerable members",
                      "Free window AC, portable AC, or wall sleeve unit",
                      "Income-based or automatic if on SNAP / TA / SSI",
                      "Opens April 15, 2026 — apply immediately",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-text-muted text-sm leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="w-5 h-5 text-green-600" />
                    <h3 className="font-bold text-dark">
                      Essential Plan Cooling
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "For Essential Plan members with persistent asthma",
                      "Free window AC, portable AC, wall sleeve, or fan",
                      "Apply through NY State of Health portal",
                      "Decision via email within 2\u20133 weeks of applying",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-text-muted text-sm leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROGRAM CARDS (50/50)                                       */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 bg-white relative overflow-hidden"
        aria-labelledby="programs-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="programs-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              Program <span className="highlight">Details</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Full breakdown of both cooling assistance programs &mdash;
              eligibility, benefits, covered equipment, and how to apply.
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {programs.map((program) => (
              <div
                key={program.title}
                className="group relative bg-white rounded-3xl p-8 sm:p-10 card-gradient-border overflow-hidden"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    program.color === "green"
                      ? "bg-green-50 group-hover:bg-green-100"
                      : "bg-blue-subtle group-hover:bg-blue/10"
                  }`}>
                    <program.icon className={`w-7 h-7 ${
                      program.color === "green" ? "text-green-600" : "text-blue"
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-0.5">
                      {program.title}
                    </h3>
                    <div className="text-text-tertiary text-sm">
                      {program.subtitle}
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {program.plain}
                </p>

                <div className="border-t border-border pt-5 mb-5">
                  <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                    Eligibility Requirements
                  </div>
                  <ul className="space-y-2">
                    {program.eligible.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-muted"
                      >
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          program.color === "green"
                            ? "text-green-500"
                            : "text-blue"
                        }`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-5 mb-5">
                  <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                    Equipment Covered
                  </div>
                  <ul className="space-y-2">
                    {program.equipment.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <Snowflake className="w-3.5 h-3.5 text-blue/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-5 mb-5">
                  <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                    How to Apply
                  </div>
                  <ul className="space-y-2">
                    {program.howToApply.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-blue/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-text-tertiary flex-shrink-0" />
                    <span className="text-sm text-text-secondary font-medium">
                      {program.season}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 bg-amber-50 border border-amber-200/60 rounded-2xl p-6 sm:p-8 text-center"
          >
            <p className="text-dark text-base sm:text-lg font-medium">
              <strong>Both programs are first-come, first-served</strong> and
              funding runs out fast. HEAP Cooling closed in under 2 months in
              2025. Apply as soon as each program opens.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS — HEAP                                         */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 bg-white relative overflow-hidden"
        aria-labelledby="heap-process-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="heap-process-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              How <span className="text-gradient">HEAP Cooling</span> Works
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              The step-by-step process from application to installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksHeap.map((step) => (
              <div
                key={step.title}
                className="group bg-surface rounded-2xl p-8 card-interactive text-center relative"
              >
                <div className="text-5xl font-bold text-blue/40 mb-4 select-none">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-subtle flex items-center justify-center mx-auto mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-blue" />
                </div>
                <h3 className="font-bold text-dark text-base mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS — EPCP                                         */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-slate noise-overlay relative overflow-hidden"
        aria-labelledby="epcp-process-heading"
      >
        <div className="gradient-orb w-[350px] h-[350px] bg-green-500/8 bottom-[-100px] right-[-100px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="epcp-process-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              How the{" "}
              <span className="text-gradient">Essential Plan</span>{" "}
              Program Works
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              The application process for Essential Plan Cooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksEpcp.map((step) => (
              <div
                key={step.title}
                className="group bg-white rounded-2xl p-8 card-interactive text-center relative"
              >
                <div className="text-5xl font-bold text-green-500/40 mb-4 select-none">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-100 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-dark text-base mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HEAP INCOME TABLE                                           */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 bg-white relative overflow-hidden"
        aria-labelledby="income-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="section-line mb-6" />
              <h2
                id="income-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-6"
              >
                HEAP Income{" "}
                <span className="text-gradient">Guidelines</span>
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                For HEAP Cooling, your monthly household income must be at or
                below these limits. If you already receive SNAP, TA, or SSI
                &mdash; you&rsquo;re automatically income-eligible.
              </p>

              <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="grid grid-cols-2 bg-surface border-b border-border">
                  <div className="px-6 py-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                    Household Size
                  </div>
                  <div className="px-6 py-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                    Max Monthly Income
                  </div>
                </div>
                {heapIncomeTable.map((row) => (
                  <div
                    key={row.size}
                    className="grid grid-cols-2 border-b border-border last:border-0"
                  >
                    <div className="px-6 py-4 text-dark font-medium">
                      {row.size} {row.size === "1" ? "person" : "people"}
                    </div>
                    <div className="px-6 py-4 text-blue font-bold">
                      {row.income}
                    </div>
                  </div>
                ))}
                <div className="px-6 py-3 bg-surface text-text-tertiary text-xs">
                  Each additional member: +$687/month
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-sm mb-6">
                <h3 className="font-bold text-dark text-xl mb-6">
                  Automatic HEAP Income Eligibility
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  You&rsquo;re automatically income-eligible if your
                  household currently receives any of these:
                </p>
                <ul className="space-y-3">
                  {autoEligible.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-text-muted text-base"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200/60 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-dark text-base">
                    Essential Plan Cooling &mdash; No Income Test
                  </h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  The Essential Plan Cooling Program does not have separate
                  income guidelines. If you&rsquo;re already enrolled in NY
                  State of Health&rsquo;s Essential Plan and have persistent
                  asthma, you meet the eligibility criteria. The Essential Plan
                  itself has income requirements built in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-slate"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              Cooling Assistance{" "}
              <span className="text-gradient">
                Questions &amp; Answers
              </span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Common questions about HEAP Cooling, the Essential Plan Cooling
              Program, eligibility, and how both programs work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="group bg-white rounded-2xl p-7 card-interactive"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-subtle flex items-center justify-center flex-shrink-0 group-hover:bg-blue/10 transition-colors duration-300">
                    <HelpCircle className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-base mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all duration-300"
            >
              Have more questions? Get in touch
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AREAS WE SERVE                                              */}
      {/* ============================================================ */}
      <section
        className="bg-blue py-12 sm:py-16"
        aria-label="Service areas for cooling assistance"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white/80" />
              <span className="text-white font-bold text-lg sm:text-xl">
                Cooling Assistance Available In:
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
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-cool"
        aria-label="Call to action"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-6">
              Need Help With{" "}
              <span className="text-gradient">Cooling Assistance</span>?
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you need help with HEAP Cooling, the Essential Plan
              Cooling Program, or understanding which program you qualify for
              &mdash; we&rsquo;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/#contact"
                className="btn-primary text-base px-10 py-5"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={COMPANY.phoneTel}
                className="btn-secondary text-base px-10 py-5 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
