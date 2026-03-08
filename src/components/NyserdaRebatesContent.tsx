"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  DollarSign,
  Leaf,
  ArrowRight,
  Phone,
  CheckCircle2,
  Shield,
  MapPin,
  Zap,
  Award,
  Clock,
  HelpCircle,
  ChevronRight,
  Home,
  Building2,
  Users,
  FileCheck,
  BadgeDollarSign,
  Snowflake,
  Droplets,
  ClipboardList,
  Store,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Animated counter                                                   */
/* ------------------------------------------------------------------ */

function AnimatedDollar({
  value,
  prefix = "$",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = performance.now();
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayed.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const rebatePrograms = [
  {
    icon: Snowflake,
    title: "Home Heat Pump Rebates",
    subtitle: "Mini-splits, ducted systems & VRF",
    program: "NYS Clean Heat + Con Edison",
    amount: "Up to $10,000",
    plain: "If you own a 1-4 unit home in NYC and switch to a heat pump, you can get up to $10,000 taken right off your bill. The more efficient the system and the older your current heating, the bigger your rebate. No checks to wait for — the discount is instant.",
    eligible: [
      "1-4 unit homes in NYC or Tri-State",
      "Con Edison, National Grid, or NYSEG account",
      "Bigger rebate when you replace oil or gas heating",
    ],
    badge: "Most Popular",
  },
  {
    icon: Building2,
    title: "Multifamily Building Rebates",
    subtitle: "5+ unit apartment buildings",
    program: "Con Edison Multifamily Clean Heat",
    amount: "Up to $7,000/unit",
    plain: "Apartment buildings get the biggest incentives. A 20-unit building switching to heat pumps could receive $100,000\u2013$140,000 or more in rebates. Incentives are paid per dwelling unit, so larger buildings save more. You can also add $1,000/unit for heat pump water heaters.",
    eligible: [
      "Buildings with 5 or more units",
      "Con Edison electric account required",
      "Must replace or disable fossil fuel heating for full amount",
    ],
    badge: "Highest Savings",
  },
  {
    icon: Store,
    title: "Commercial & Small Business Rebates",
    subtitle: "Offices, retail, restaurants & more",
    program: "Con Edison C&I Clean Heat",
    amount: "Up to $200,000",
    plain: "Businesses can get major rebates on heat pumps, VRF systems, and efficient HVAC upgrades. Small businesses under 300 kW demand get their own program with up to $200,000 per project. Some NYC neighborhoods qualify for even higher coverage \u2014 up to 100% of project cost.",
    eligible: [
      "Any commercial property with Con Edison account",
      "Small businesses under 300 kW demand",
      "Restaurants, offices, retail, nonprofits all qualify",
    ],
  },
  {
    icon: Droplets,
    title: "Heat Pump Water Heater Rebates",
    subtitle: "Residential & multifamily",
    program: "Con Edison + NYSERDA",
    amount: "Up to $1,000",
    plain: "Replace your old water heater with a heat pump water heater and get an instant $1,000 rebate. These systems use up to 70% less energy than standard tanks. For multifamily buildings, the rebate is $1,000 per unit on top of your heating rebates.",
    eligible: [
      "Residential homes and apartments",
      "Con Edison electric account",
      "ENERGY STAR certified units",
    ],
  },
  {
    icon: Users,
    title: "EmPower+ Income Assistance",
    subtitle: "Free or low-cost upgrades for qualifying households",
    program: "NYSERDA EmPower+",
    amount: "Free / Low-Cost",
    plain: "If your household income is at or below 80% of the Area Median Income, you may qualify for free or heavily discounted energy upgrades. This includes a free home energy assessment, insulation, air sealing, and enhanced rebates on heat pumps \u2014 sometimes covering the full cost.",
    eligible: [
      "Household income at or below 80% AMI",
      "Homeowners and renters both qualify",
      "1-4 family homes in New York State",
    ],
    badge: "Income Eligible",
  },
];

const howItWorks = [
  {
    step: "01",
    icon: Phone,
    title: "Tell Us About Your Building",
    description:
      "Call or fill out our form. Tell us about your current heating system, building type, and what you want to upgrade. We figure out which programs you qualify for.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Free Rebate Assessment",
    description:
      "We look at your utility account, property size, and location. Then we tell you exactly how much you can save \u2014 no cost, no obligation.",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "We Handle All the Paperwork",
    description:
      "We\u2019re a NYSERDA-qualified contractor, so we submit everything for you. No confusing forms, no back-and-forth with the utility company.",
  },
  {
    step: "04",
    icon: BadgeDollarSign,
    title: "Install & Save Instantly",
    description:
      "We install your new system and the rebate comes right off your invoice. You see the savings on day one \u2014 no waiting for reimbursement checks.",
  },
];

const eligibilityTypes = [
  {
    icon: Home,
    title: "Homeowners (1-4 Units)",
    description:
      "You own a house, condo, or small multi-family home in NYC or the Tri-State area.",
    items: [
      "Up to $10,000 off heat pump installation",
      "$1,000 off heat pump water heaters",
      "Higher rebates if you replace oil or gas",
      "No minimum income requirement",
    ],
  },
  {
    icon: Building2,
    title: "Multifamily Buildings (5+ Units)",
    description:
      "You own or manage an apartment building with five or more units.",
    items: [
      "Up to $7,000 per unit for heat pumps",
      "$1,000 per unit for HP water heaters",
      "Project cap up to $1 million",
      "Local Law 97 compliance credits included",
    ],
  },
  {
    icon: Store,
    title: "Commercial & Small Business",
    description:
      "You own or operate a business, restaurant, office, or retail space.",
    items: [
      "Up to $200,000 per project (small biz)",
      "Custom incentives based on energy saved",
      "Some NYC neighborhoods get up to 100% covered",
      "Restaurants, retail, offices, nonprofits all qualify",
    ],
  },
  {
    icon: Users,
    title: "Income-Eligible Households",
    description:
      "Your household earns at or below 80% of the Area Median Income.",
    items: [
      "Free home energy assessment",
      "Insulation and air sealing at no cost",
      "Enhanced heat pump rebates (25-40% more)",
      "Some upgrades fully covered by EmPower+",
    ],
  },
];

const savingsStats = [
  { value: 10000, prefix: "$", suffix: "+", label: "Max Home Rebate" },
  { value: 7000, prefix: "$", suffix: "/unit", label: "Multifamily Per Unit" },
  { value: 200, prefix: "$", suffix: "K", label: "Max Commercial Rebate" },
];

const faqs = [
  {
    q: "What NYSERDA rebates are available for heat pumps in NYC?",
    a: "Homeowners with 1-4 unit homes can get up to $10,000 in instant rebates through the NYS Clean Heat program. Multifamily buildings (5+ units) can receive up to $7,000 per dwelling unit. The rebate is taken directly off your invoice \u2014 no checks to wait for.",
  },
  {
    q: "How much can a multifamily building save?",
    a: "A lot. The rebate is up to $7,000 per unit for heat pumps, plus $1,000 per unit for heat pump water heaters. A 20-unit building could receive $140,000+ in incentives. The project cap is $1 million or 50% of project costs, whichever is lower.",
  },
  {
    q: "Are restaurants and commercial businesses eligible?",
    a: "Yes. Commercial properties qualify through the Con Edison C&I Clean Heat program. Small businesses under 300 kW demand can receive up to $200,000 per project. Some NYC neighborhoods qualify for incentives covering up to 100% of project cost.",
  },
  {
    q: "Do I have to apply for the rebate myself?",
    a: "No \u2014 as a NYSERDA-qualified contractor, Gotham HVAC handles the entire application process. Your rebate is applied as an instant discount on your invoice. No forms to fill out, no checks to wait for.",
  },
  {
    q: "What is EmPower+ and do I qualify?",
    a: "EmPower+ is NYSERDA\u2019s program for lower-income households. If your household earns at or below 80% of the Area Median Income, you may get free home energy assessments, insulation, and enhanced heat pump rebates \u2014 sometimes covering the full project cost.",
  },
  {
    q: "Do mini-split systems qualify for rebates?",
    a: "Yes \u2014 ductless mini-splits are one of the most common systems that qualify. Both single-zone and multi-zone systems are eligible when they meet cold climate performance standards. We install mini-splits across all five boroughs.",
  },
  {
    q: "What is Local Law 97 and how do rebates help?",
    a: "Local Law 97 requires NYC buildings over 25,000 sq ft to meet emissions limits or face annual penalties. Switching to heat pumps reduces your building\u2019s emissions and earns compliance credits. Heat pump installations through 2026 earn double credits.",
  },
  {
    q: "Can I combine multiple rebate programs?",
    a: "Yes \u2014 NYSERDA rebates stack with Con Edison utility incentives, Local Law 97 compliance credits, and EmPower+ income assistance. We help you identify and claim every dollar available for your property.",
  },
  {
    q: "How long does the rebate process take?",
    a: "The rebate is instant \u2014 it comes right off your invoice on installation day. There\u2019s no separate waiting period. We complete all the paperwork before and during your project so you don\u2019t have to worry about it.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all five NYC boroughs \u2014 Manhattan, Brooklyn, Queens, Bronx, and Staten Island \u2014 plus Lower Westchester and Long Island. Rebate amounts may vary by your utility provider and location.",
  },
];

const stackingIncentives = [
  {
    source: "NYS Clean Heat (Residential)",
    amount: "Up to $10,000",
    detail: "1-4 unit homes",
  },
  {
    source: "Con Edison Multifamily Clean Heat",
    amount: "Up to $7,000/unit",
    detail: "5+ unit buildings",
  },
  {
    source: "Con Edison C&I Clean Heat",
    amount: "Up to $200,000",
    detail: "Commercial & small biz",
  },
  {
    source: "Heat Pump Water Heater Rebate",
    amount: "$1,000/unit",
    detail: "All property types",
  },
  {
    source: "EmPower+ (Income-Eligible)",
    amount: "Free\u2013Low Cost",
    detail: "Income \u2264 80% AMI",
  },
  {
    source: "Local Law 97 Credits (2x thru 2026)",
    amount: "Compliance savings",
    detail: "Buildings 25K+ sq ft",
  },
  {
    source: "NYC Accelerator (Free Guidance)",
    amount: "Free program",
    detail: "All building types",
  },
];

const serviceAreas = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
  "Westchester",
  "Long Island",
];

/* ------------------------------------------------------------------ */
/*  Marquee Bar                                                        */
/* ------------------------------------------------------------------ */

const marqueeItems = [
  { icon: Shield, text: "NYSERDA Qualified" },
  { icon: DollarSign, text: "Instant Rebates" },
  { icon: MapPin, text: "All NYC Boroughs" },
  { icon: Zap, text: "Residential & Commercial" },
  { icon: Award, text: "Licensed & Insured" },
  { icon: Clock, text: "Free Rebate Assessment" },
  { icon: Leaf, text: "Clean Heat Program" },
  { icon: FileCheck, text: "We Handle Paperwork" },
];

function MarqueeBar() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <section
      className="py-6 bg-dark overflow-hidden"
      aria-label="Rebate highlights"
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

export default function NyserdaRebatesContent() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section
        className="relative min-h-[75vh]"
        aria-label="NYSERDA Rebates Hero"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/hero-bg.jpg"
              alt="HVAC system installation eligible for NYSERDA rebates in New York City"
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
            {/* Left -- Text content */}
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-3 glass-dark rounded-full px-5 py-2.5 mb-10"
              >
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-white/60 text-sm font-medium">
                    Rebates &amp; Financial Assistance
                  </span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <span className="text-blue-light text-sm font-medium">
                  NYSERDA Qualified
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
              >
                <span className="block text-white">
                  NYSERDA Rebates &amp;
                </span>
                <span className="block text-gradient mt-2">
                  HVAC Incentives
                </span>
                <span className="block text-white/50 mt-2">
                  for NYC Homes &amp; Buildings
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl text-white/50 max-w-xl mb-12 leading-relaxed"
              >
                Homes, apartment buildings, and businesses across NYC can save
                thousands on heat pumps and HVAC upgrades. We find your rebates,
                handle the paperwork, and take the discount right off your bill.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 mb-16"
              >
                <Link
                  href="/#contact"
                  className="btn-primary text-base px-8 py-4"
                >
                  Check My Rebate Eligibility
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
                className="flex flex-wrap items-center gap-x-6 gap-y-2"
              >
                {[
                  "Con Edison Contractor",
                  "NYSERDA Qualified",
                  "We Handle All Paperwork",
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

            {/* Right -- Con Edison badge */}
            <div
              className="hidden lg:flex flex-col items-center gap-5"
            >
              <Image
                src="/con-edison-badge.jpg"
                alt="Con Edison Participating Contractor"
                width={220}
                height={220}
                className="rounded-full"
              />
              <div className="text-center">
                <p className="text-white/60 text-sm font-semibold">Con Edison</p>
                <p className="text-white/30 text-xs">Participating Contractor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade into dark Marquee */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent z-[5]" />
      </section>

      {/* ============================================================ */}
      {/*  MARQUEE                                                     */}
      {/* ============================================================ */}
      <MarqueeBar />

      {/* ============================================================ */}
      {/*  SAVINGS STATS                                               */}
      {/* ============================================================ */}
      <section
        className="py-20 sm:py-28 bg-dark relative overflow-hidden"
        aria-label="Rebate savings overview"
      >
        <div className="absolute inset-0 grid-pattern" />
        <div className="gradient-orb w-[500px] h-[300px] bg-blue/8 top-[-80px] left-[10%]" />
        <div className="gradient-orb w-[400px] h-[250px] bg-green-500/6 bottom-[-60px] right-[15%]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Real Savings for NYC Homes, Buildings &amp; Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-4 max-w-4xl mx-auto">
            {savingsStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center px-4 ${
                  i < savingsStats.length - 1
                    ? "sm:border-r sm:border-white/10"
                    : ""
                }`}
              >
                <div className="stat-glow mb-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                    <AnimatedDollar
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </span>
                </div>
                <div className="text-white/30 text-sm font-medium uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TRUST BADGES                                                */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 bg-white border-y border-gray-100" aria-label="Certifications">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/con-edison-badge-outline.jpg"
                alt="Con Edison Participating Contractor badge"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <p className="text-dark font-semibold text-sm">Con Edison</p>
                <p className="text-text-secondary text-xs">Participating Contractor</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="text-dark font-semibold text-sm">NYSERDA</p>
                <p className="text-text-secondary text-xs">Qualified Contractor</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue" />
              </div>
              <div>
                <p className="text-dark font-semibold text-sm">Licensed &amp; Insured</p>
                <p className="text-text-secondary text-xs">NYC &amp; Tri-State</p>
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
                What Is <span className="text-gradient">NYSERDA</span> and
                Why Should You Care?
              </h2>
              <div className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-dark">NYSERDA</strong> (New York
                  State Energy Research and Development Authority) is a
                  state agency that helps New Yorkers save money on energy.
                  They offer <strong className="text-dark">rebates and
                  financial assistance</strong> to help you switch to more
                  efficient heating and cooling.
                </p>
                <p>
                  In plain terms: <strong className="text-dark">the state
                  and your utility company will pay part of the cost</strong> when
                  you upgrade to a heat pump or energy-efficient HVAC system.
                  The money comes off your invoice instantly — you never pay
                  the full price.
                </p>
                <p>
                  This applies to <strong className="text-dark">
                  homeowners, apartment buildings, and businesses</strong> across
                  NYC. The programs are real, well-funded, and we handle the
                  full application process for you.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-sm">
                <h3 className="font-bold text-dark text-xl mb-6">
                  Here&apos;s the Short Version
                </h3>
                <ul className="space-y-4">
                  {[
                    "You want to upgrade your heating or cooling system",
                    "State and utility programs pay a big chunk of the cost",
                    "The rebate comes right off your bill — instant savings",
                    "We handle all the applications and paperwork for you",
                    "Homes, apartment buildings, and businesses all qualify",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-text-muted text-base leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/*  HOW HEAT PUMPS WORK                                         */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-dark-mesh relative overflow-hidden"
        aria-labelledby="how-hp-heading"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="how-hp-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
            >
              How Do <span className="text-gradient">Heat Pumps</span> Actually Work?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Heat pumps aren&apos;t new — but the technology has changed dramatically. Today&apos;s systems work in temperatures that would have been impossible just 10 years ago.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left -- The explanation */}
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    The Simple Version
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    A heat pump moves heat instead of creating it. In winter, it pulls heat from the outside air and moves it inside. In summer, it does the reverse — pulls heat out of your home and sends it outside. It&apos;s an air conditioner that also heats. One system, year-round comfort.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    &ldquo;But Does It Work in the Cold?&rdquo;
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed mb-4">
                    This is the #1 question we get — and the answer is <strong className="text-white">yes</strong>. Older heat pumps struggled below 30&deg;F. But modern <strong className="text-white">cold climate heat pumps</strong> are completely different.
                  </p>
                  <p className="text-white/50 text-base leading-relaxed">
                    Today&apos;s systems use <strong className="text-white">inverter-driven compressors</strong> and advanced refrigerants that keep producing heat down to <strong className="text-white">-15&deg;F and below</strong>. At 5&deg;F — a typical NYC cold snap — a modern cold climate heat pump still runs at <strong className="text-white">80-100% capacity</strong>. These aren&apos;t the heat pumps your parents had.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Why NYC Is Perfect for Heat Pumps
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    NYC rarely drops below 10&deg;F. That means a cold climate heat pump runs at full output for virtually the entire winter. Combine that with NYSERDA rebates covering a big chunk of the cost, and the math works out fast — most homeowners see lower energy bills from month one.
                  </p>
                </div>
              </div>
            </div>

            {/* Right -- Key facts */}
            <div>
              <div className="space-y-5">
                {[
                  {
                    label: "Works Down to -15\u00B0F",
                    detail:
                      "Modern cold climate heat pumps produce reliable heat well below zero. NYC winters rarely go below 10\u00B0F \u2014 well within the comfort zone.",
                  },
                  {
                    label: "Heats AND Cools",
                    detail:
                      "One system replaces both your furnace/boiler and your air conditioner. Less equipment, less maintenance, one thermostat.",
                  },
                  {
                    label: "2-3x More Efficient Than Gas",
                    detail:
                      "Heat pumps deliver 2-3 units of heat for every 1 unit of electricity. A gas furnace maxes out at less than 1-to-1. That\u2019s real savings on your bill.",
                  },
                  {
                    label: "No Combustion, No Gas Line",
                    detail:
                      "Heat pumps run on electricity \u2014 no pilot lights, no carbon monoxide risk, no gas leaks. Safer for your family and better for the building.",
                  },
                  {
                    label: "Qualifies for the Biggest Rebates",
                    detail:
                      "Cold climate heat pumps are exactly what NYSERDA and Con Edison incentivize. Switching from oil or gas heating gets you the maximum rebate amount.",
                  },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="card-glass p-6"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-white font-semibold text-base mb-1">
                          {fact.label}
                        </div>
                        <div className="text-white/40 text-sm leading-relaxed">
                          {fact.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cold climate callout */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 glass-dark rounded-full px-6 py-3">
              <Snowflake className="w-5 h-5 text-blue" />
              <span className="text-white/70 text-sm font-medium">
                All heat pump systems we install are <strong className="text-white">cold climate rated</strong> — engineered for 0&deg;F and below
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/*  REBATE PROGRAMS                                             */}
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
              Available <span className="highlight">Rebate</span> Programs
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you own a home, manage an apartment building, or run a
              business — there&apos;s a rebate program for you. Here&apos;s
              what&apos;s available right now.
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {rebatePrograms.map((program) => (
              <div
                key={program.title}
                className="group relative bg-white rounded-3xl p-8 sm:p-10 card-gradient-border overflow-hidden"
              >

                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-subtle flex items-center justify-center flex-shrink-0 group-hover:bg-blue/10 transition-colors duration-300">
                    <program.icon className="w-7 h-7 text-blue" />
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

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-gradient">
                    {program.amount}
                  </span>
                  <span className="text-text-tertiary text-sm ml-2">
                    via {program.program}
                  </span>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {program.plain}
                </p>

                <div className="border-t border-border pt-5">
                  <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                    Who Qualifies
                  </div>
                  <ul className="space-y-2">
                    {program.eligible.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Extra note for multifamily */}
          <div
            className="mt-10 bg-blue-subtle rounded-2xl p-6 sm:p-8 text-center"
          >
            <p className="text-dark text-base sm:text-lg font-medium">
              <strong>Multifamily buildings get the most money.</strong> A
              20-unit building can qualify for $100,000\u2013$160,000+ in combined
              rebates. The bigger the building, the bigger the savings.
            </p>
          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-slate noise-overlay relative overflow-hidden"
        aria-labelledby="process-heading"
      >
        <div className="gradient-orb w-[350px] h-[350px] bg-blue/8 bottom-[-100px] left-[-100px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              How <span className="text-gradient">Rebate Assistance</span>{" "}
              Works
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              We make it simple. No confusing forms, no waiting for
              reimbursement. Here&apos;s what happens when you call us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div
                key={step.title}
                className="group bg-white rounded-2xl p-8 card-interactive text-center relative"
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
      {/*  WHO QUALIFIES                                               */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-dark-mesh relative overflow-hidden"
        aria-labelledby="eligibility-heading"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="eligibility-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
            >
              Who <span className="text-gradient">Qualifies</span>?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Almost everyone. If you own a home, manage a building, or run a
              business in NYC — chances are you qualify for at least one
              rebate program.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibilityTypes.map((type) => (
              <div
                key={type.title}
                className="group card-glass p-7 sm:p-8"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-5 group-hover:bg-blue/10 group-hover:border-blue/20 transition-all duration-300">
                  <type.icon className="w-6 h-6 text-blue" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {type.title}
                </h3>
                <p className="text-white/40 text-sm mb-5 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-2.5">
                  {type.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-white/50 text-sm leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/*  INCENTIVE STACKING                                          */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 bg-white relative overflow-hidden"
        aria-labelledby="stacking-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-line mb-6" />
              <h2
                id="stacking-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-6"
              >
                You Can <span className="text-gradient">Stack</span> Multiple
                Incentives
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
                Many of these programs can be combined. That means you
                don&apos;t have to pick one — you can layer them together to
                maximize your total savings.
              </p>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-10">
                We help you identify every rebate, credit, and assistance
                program available for your specific property. Most people
                leave money on the table because they don&apos;t know what
                they qualify for.
              </p>

              <Link
                href="/#contact"
                className="btn-primary text-base px-8 py-4 inline-flex"
              >
                Get My Free Rebate Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div>
              <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border">
                <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-5">
                  Programs You Can Combine
                </div>
                <div className="space-y-0">
                  {stackingIncentives.map((item) => (
                    <div
                      key={item.source}
                      className="flex items-center justify-between py-4 border-b border-border last:border-0 gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <CheckCircle2 className="w-4 h-4 text-blue flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="text-dark font-medium text-sm truncate">
                            {item.source}
                          </div>
                          <div className="text-text-tertiary text-xs">
                            {item.detail}
                          </div>
                        </div>
                      </div>
                      <span className="text-blue font-bold text-sm whitespace-nowrap">
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
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
              Rebate{" "}
              <span className="text-gradient">Questions &amp; Answers</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Common questions about NYSERDA rebates, HVAC incentives, and how
              the process works for homes, apartment buildings, and businesses
              in NYC.
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
        aria-label="Service areas for rebate assistance"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white/80" />
              <span className="text-white font-bold text-lg sm:text-xl">
                Rebate Assistance Available In:
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
          <div
            className="relative rounded-[32px] overflow-hidden bg-dark p-10 sm:p-14 lg:p-20"
          >
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 max-w-3xl mx-auto">
                Don&apos;t Leave Money on the Table&nbsp;&mdash;{" "}
                <span className="text-gradient">
                  Check Your Rebate Eligibility
                </span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Most NYC homeowners and building owners qualify for at least
                one program. Let us find every dollar available for your
                project — it&apos;s free to check.
              </p>

              <div
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                  href="/#contact"
                  className="btn-primary text-base px-10 py-5"
                >
                  Get My Free Rebate Assessment
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
