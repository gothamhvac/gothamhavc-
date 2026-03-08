import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Wrench,
  Gauge,
  ClipboardList,
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
  ChevronRight,
  Flame,
  Droplets,
  ShieldCheck,
  Snowflake,
  ThermometerSun,
  BatteryCharging,
  Wind,
  Leaf,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const includedItems = [
  {
    icon: Search,
    title: "System evaluation & site review",
    description:
      "We assess your current setup, space requirements, electrical or gas capacity, and ventilation to determine the best water heater configuration — tankless or heat pump — for your property.",
  },
  {
    icon: Wrench,
    title: "Professional installation",
    description:
      "Our licensed technicians handle the full installation — removing old equipment, running new gas lines or electrical circuits, venting, condensate drainage, and ensuring proper operation.",
  },
  {
    icon: Gauge,
    title: "Efficiency & performance verification",
    description:
      "After installation we verify operating temperatures, flow rates, energy draw, and overall system performance to confirm everything meets manufacturer specifications.",
  },
  {
    icon: ClipboardList,
    title: "Clear guidance & next steps",
    description:
      "You receive a walkthrough of your new system, maintenance tips to maximize its lifespan, warranty documentation, and help applying for any available rebates or incentives.",
  },
];

const problems = [
  {
    title: "High energy bills from traditional water heaters",
    description:
      "Standard electric resistance tanks consume 3\u20134x more energy than a heat pump unit. Tankless systems eliminate standby losses entirely. Either upgrade path dramatically lowers monthly utility costs.",
  },
  {
    title: "Running out of hot water",
    description:
      "Undersized or aging tanks can\u2019t keep up with peak demand. Tankless water heaters provide unlimited on-demand hot water, while properly sized heat pump tanks handle heavy usage without temperature drops.",
  },
  {
    title: "Limited space for equipment",
    description:
      "Tankless units mount on a wall and free up floor space. Heat pump water heaters need airflow but have a similar footprint to standard tanks. We evaluate your space and recommend the best fit.",
  },
  {
    title: "Aging or failing tank systems",
    description:
      "Tanks older than 10\u201312 years are prone to sediment buildup, corroded anodes, and failing elements. Proactive replacement with a tankless or heat pump unit avoids emergency failures and water damage.",
  },
  {
    title: "Inconsistent water temperatures",
    description:
      "Fluctuating temperatures often point to a failing thermostat, corroded dip tube, or undersized system. Modern tankless and heat pump units maintain precise temperature control.",
  },
  {
    title: "Confusion around incentives or upgrade options",
    description:
      "Between federal tax credits, NYSERDA rebates, and utility programs, navigating incentives can be overwhelming. We help identify every rebate you qualify for and handle the paperwork.",
  },
];

const approachBullets = [
  "Optimal placement planning — wall-mount for tankless, airflow-optimized for heat pump",
  "Gas line or electrical panel evaluation and dedicated circuit sizing per code",
  "Proper sizing based on household occupancy, fixture count, and peak demand",
  "Full post-install commissioning with temperature, flow rate, and performance verification",
  "Rebate and incentive filing assistance for NYSERDA, federal tax credits, and utility programs",
];

const faqs = [
  {
    q: "Do you install tankless and heat pump water heaters?",
    a: "Yes \u2014 we handle full installations for both tankless and heat pump water heaters across the NYC tri-state area. Our licensed technicians manage everything from removing your old tank to running new gas lines or electrical circuits, venting, condensate drainage, and commissioning the new system. We work with leading brands including Rinnai, Navien, Noritz, Rheem, A.O. Smith, and Stiebel Eltron.",
  },
  {
    q: "What's the difference between tankless and heat pump water heaters?",
    a: "Tankless water heaters use gas or electric to heat water on demand as it flows through the unit \u2014 no storage tank needed. Heat pump water heaters use a compressor to extract heat from the surrounding air and transfer it to a storage tank, using roughly 60\u201370% less electricity than a standard electric tank. Tankless is ideal when space is limited or you want unlimited hot water flow. Heat pump is best for maximizing energy savings and qualifying for NYSERDA rebates.",
  },
  {
    q: "Do incentives apply to water heater upgrades?",
    a: "Yes \u2014 NYSERDA offers instant rebates on qualifying heat pump water heater installations. The federal Inflation Reduction Act also provides tax credits for high-efficiency water heaters installed in your primary residence. Some local utilities offer their own rebate programs as well. We help identify every incentive you qualify for and assist with the application paperwork.",
  },
  {
    q: "Can a tankless or heat pump unit replace my existing tank?",
    a: "Absolutely. Both are designed as direct replacements for existing tank systems. Tankless units mount on a wall and free up floor space. Heat pump units have a similar footprint to a standard tank. We verify clearances, gas or electrical requirements, and venting during our site evaluation. Most transitions are completed in a single day.",
  },
  {
    q: "Do these systems work in colder climates?",
    a: "Yes. Modern tankless units are rated for cold-water inlet temperatures common in New York winters and adjust burner output accordingly. Heat pump water heaters extract heat from indoor ambient air, so as long as they are installed in a space that stays above roughly 40\u00b0F, they operate at full efficiency. In extremely cold conditions, most HPWH units switch to a hybrid mode to maintain consistent hot water.",
  },
  {
    q: "Will I get an estimate before work begins?",
    a: "Always. After our initial site evaluation we provide a detailed written estimate that includes equipment costs, labor, any gas, electrical, or plumbing modifications, permit fees, and a breakdown of applicable rebates. There are no hidden charges. We review the scope of work with you before scheduling the installation.",
  },
  {
    q: "Which brands do you work with?",
    a: "For tankless we install and service Rinnai, Navien, Noritz, Rheem, and Bosch. For heat pump water heaters we work with Rheem, A.O. Smith, Bradford White, and Stiebel Eltron. We recommend the best option based on your space, usage, and budget.",
  },
  {
    q: "How do I know which type is right for me?",
    a: "It depends on your space, hot water demand, fuel availability, and goals. If you have natural gas and want endless hot water in a compact footprint, tankless is a great fit. If you want maximum energy savings and qualify for rebates, a heat pump water heater is the way to go. During our site evaluation we assess your situation and recommend the best option.",
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

/* ------------------------------------------------------------------ */
/*  Marquee Bar                                                        */
/* ------------------------------------------------------------------ */

const marqueeItems = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: MapPin, text: "5 NYC Boroughs" },
  { icon: Zap, text: "Residential & Commercial" },
  { icon: Award, text: "NYSERDA Qualified" },
  { icon: Clock, text: "Same-Week Service" },
  { icon: Thermometer, text: "Water Heater Experts" },
  { icon: MapPin, text: "Tri-State Coverage" },
  { icon: Shield, text: "Code Compliant" },
];

function MarqueeBar() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <section
      className="py-6 bg-dark overflow-hidden"
      aria-label="Company highlights"
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

export default function HeatPumpWaterHeatersContent() {
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
            src="/tankless-water-heater.webp"
            alt="Tankless water heater installed with copper piping in a basement utility room"
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
              <span className="text-blue-light text-sm font-medium">
                Licensed &amp; Insured
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="block text-white">
                Water Heater
              </span>
              <span className="block text-gradient mt-2">
                Services
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-xl mb-12 leading-relaxed">
              Tankless and heat pump water heater installation, repair, and
              upgrades — designed for efficiency, reliability, and long-term performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/#contact"
                className="btn-primary text-base px-8 py-4"
              >
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

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                "All 5 NYC Boroughs",
                "NYSERDA Qualified",
                "Same-Week Service",
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

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ============================================================ */}
      {/*  MARQUEE BAR                                                 */}
      {/* ============================================================ */}
      <MarqueeBar />

      {/* ============================================================ */}
      {/*  TANKLESS vs HEAT PUMP EXPLAINER                             */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4">
              Two Modern Solutions,{" "}
              <span className="text-gradient">One Goal</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Both tankless and heat pump water heaters are major upgrades over
              traditional tanks. Here&apos;s how each one works and why they&apos;re
              worth considering.
            </p>
          </div>

          {/* Two-column cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ---- TANKLESS ---- */}
            <div className="relative bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-3xl p-8 sm:p-10 border border-orange-100/60 overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/4" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200/60 text-sm font-semibold text-orange-700 mb-6">
                  <Flame className="w-4 h-4" />
                  Tankless Water Heaters
                </div>

                {/* How it works */}
                <h3 className="text-xl sm:text-2xl font-bold text-dark mb-3">
                  How It Works
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Water flows through the unit and is heated instantly by a
                  powerful gas burner or electric element — only when you turn on
                  the tap. There&apos;s no storage tank, so there&apos;s no
                  standby energy loss and no waiting for a tank to refill.
                </p>

                {/* Benefits */}
                <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-orange-600/70 mb-4">
                  Key Benefits
                </h4>
                <div className="space-y-3.5">
                  {[
                    {
                      icon: Zap,
                      title: "Instantly Hot",
                      desc: "Hot water on demand the moment you turn the faucet — no waiting for a tank to heat up.",
                    },
                    {
                      icon: Droplets,
                      title: "Never Run Out",
                      desc: "Continuous hot water flow no matter how many showers, loads of laundry, or dishes you run back to back.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "No Tank Rusting",
                      desc: "No storage tank means no rust, no sediment buildup, no risk of a tank leak flooding your home.",
                    },
                    {
                      icon: Shield,
                      title: "Safer by Design",
                      desc: "No large volume of stored hot water. Modern units have built-in safety shutoffs and ventilation sensors.",
                    },
                    {
                      icon: BatteryCharging,
                      title: "Energy Efficient",
                      desc: "Only heats water when you need it — eliminates the standby losses that make traditional tanks expensive to run.",
                    },
                  ].map((benefit) => (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <benefit.icon className="w-[18px] h-[18px] text-orange-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-dark text-sm">
                          {benefit.title}
                        </div>
                        <div className="text-text-secondary text-sm leading-relaxed">
                          {benefit.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ---- HEAT PUMP ---- */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-3xl p-8 sm:p-10 border border-blue-100/60 overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/4" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200/60 text-sm font-semibold text-blue-700 mb-6">
                  <ThermometerSun className="w-4 h-4" />
                  Heat Pump Water Heaters
                </div>

                {/* How it works */}
                <h3 className="text-xl sm:text-2xl font-bold text-dark mb-3">
                  How It Works
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  A compressor extracts heat from the surrounding air —
                  even in cooler temperatures — and transfers it into a
                  storage tank. Think of it like a refrigerator in reverse.
                  It uses up to 70% less electricity than a standard electric
                  tank because it moves heat rather than generating it.
                </p>

                {/* Benefits */}
                <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-blue-600/70 mb-4">
                  Key Benefits
                </h4>
                <div className="space-y-3.5">
                  {[
                    {
                      icon: Thermometer,
                      title: "Consistent Temperature",
                      desc: "Advanced inverter-driven compressors maintain a steady, precise water temperature — no fluctuations, no cold surprises.",
                    },
                    {
                      icon: Snowflake,
                      title: "Works in Cold Weather",
                      desc: "Pulls heat from indoor air (basements, garages, utility rooms). As long as the space is above ~40\u00b0F, it runs at full efficiency. In extreme cold, a hybrid mode kicks in automatically.",
                    },
                    {
                      icon: Leaf,
                      title: "Maximum Energy Savings",
                      desc: "Uses 60\u201370% less electricity than a standard electric tank — one of the most efficient water heating technologies available today.",
                    },
                    {
                      icon: Wind,
                      title: "Quiet & Low Maintenance",
                      desc: "Modern units run quietly with minimal moving parts. No combustion, no gas line needed — just a standard electrical connection and occasional filter cleaning.",
                    },
                    {
                      icon: Award,
                      title: "Rebate Eligible",
                      desc: "Qualifies for NYSERDA instant rebates and federal tax credits — significantly reducing the upfront cost of your upgrade.",
                    },
                  ].map((benefit) => (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <benefit.icon className="w-[18px] h-[18px] text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-dark text-sm">
                          {benefit.title}
                        </div>
                        <div className="text-text-secondary text-sm leading-relaxed">
                          {benefit.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHAT'S INCLUDED                                             */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden"
        aria-labelledby="included-heading"
      >
        <div className="gradient-orb w-[350px] h-[350px] bg-blue/10 top-[-80px] right-[-80px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="included-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight"
            >
              What&apos;s <span className="highlight">Included</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedItems.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-8 text-center card-gradient-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-subtle flex items-center justify-center mx-auto mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-blue" />
                </div>
                <h3 className="font-semibold text-dark text-[15px] leading-snug mb-2">
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

      {/* ============================================================ */}
      {/*  COMMON PROBLEMS                                             */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-dark-blue relative overflow-hidden"
        aria-labelledby="problems-heading"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text — left */}
            <div>
              <div className="section-line mb-6" />
              <h2
                id="problems-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8"
              >
                Common <span className="highlight">Problems</span>
              </h2>

              <ul className="space-y-5">
                {problems.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 text-base leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">{item.title}</span>
                      <p className="text-white/50 text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image — right */}
            <div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/tankless-common-problems-repair.webp"
                  alt="Technician repairing a tankless water heater with copper piping and valves"
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
      <section
        className="py-24 sm:py-32 bg-white noise-overlay relative overflow-hidden"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image — left */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/tankless-common-problems.webp"
                  alt="HVAC tools and pressure gauges used for tankless water heater service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                />
              </div>
            </div>

            {/* Text — right */}
            <div className="order-1 lg:order-2">
              <div className="section-line mb-6" />
              <h2
                id="approach-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-6"
              >
                Our <span className="highlight">Approach</span>
              </h2>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                We take an engineering-led approach to water heater
                upgrades&nbsp;&mdash; whether tankless or heat pump. Proper
                placement, sizing, and real-world efficiency are planned from
                the start so your system performs reliably for years.
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
              Questions &amp; <span className="text-gradient">Answers</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              Common questions about tankless and heat pump water heater
              installation, efficiency, and what to expect.
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

          {/* Contact CTA within FAQ */}
          <div className="text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all duration-300"
            >
              Didn&apos;t find the answer? Get in touch
              <ChevronRight className="w-4 h-4" />
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
                Ready for a water heater upgrade{" "}
                <span className="text-gradient">done right?</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                From first call to final walkthrough&nbsp;&mdash;
                engineering-led service you can trust.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/#contact"
                  className="btn-primary text-base px-10 py-5"
                >
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
