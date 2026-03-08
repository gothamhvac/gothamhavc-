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
  AlertTriangle,
  Thermometer,
  Wind,
  Flame,
  Heater,
  Droplets,
  Zap,
  ShieldCheck,
  MapPin,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const includedItems = [
  { icon: Search, title: "Diagnostic & troubleshooting" },
  { icon: Wrench, title: "Repair or replacement of failed components" },
  { icon: Gauge, title: "System performance checks" },
  { icon: ClipboardList, title: "Clear recommendations & next steps" },
];

const problems = [
  "System not heating or cooling properly",
  "Unusual noise or vibration",
  "Short cycling or poor airflow",
  "High utility bills",
  "Inconsistent temperatures from room to room",
];

const approachBullets = [
  "Airflow & distribution checks",
  "Controls & performance verification",
  "System sizing assumptions reviewed",
];

const systemTypes = [
  {
    icon: Wind,
    title: "Mini-Splits & Ductless",
    description:
      "Perfect for NYC apartments, additions, and spaces without ductwork. Individual zone control for maximum comfort and efficiency.",
  },
  {
    icon: Thermometer,
    title: "Central Air & Heat Pumps",
    description:
      "Whole-home heating and cooling through your existing duct system. Modern heat pumps provide both heating and cooling from one unit.",
  },
  {
    icon: Flame,
    title: "Boilers & Radiators",
    description:
      "Hot water and steam boiler diagnostics, repair, and maintenance. Common in older NYC buildings — we know these systems inside and out.",
  },
  {
    icon: Heater,
    title: "Furnaces & Forced Air",
    description:
      "Gas and electric furnace repair, filter replacement, and efficiency optimization. We diagnose before we fix.",
  },
  {
    icon: Droplets,
    title: "Tankless Water Heaters",
    description:
      "On-demand hot water without a storage tank. Space-saving, energy-efficient, and never run out of hot water again.",
  },
  {
    icon: Zap,
    title: "Heat Pump Water Heaters",
    description:
      "The most efficient way to heat water — uses heat pump technology. NYSERDA-eligible for rebates in New York.",
  },
];

const maintenanceTips = [
  "Replace or clean filters every 1-3 months during heavy use",
  "Keep outdoor units clear of debris, leaves, and snow",
  "Check thermostat batteries and settings seasonally",
  "Listen for unusual sounds — clicking, banging, or hissing",
  "Schedule professional maintenance before peak heating and cooling seasons",
  "Ensure all vents and registers are open and unobstructed",
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

export default function HeatingCoolingContent() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO — Dark with background image                           */}
      {/* ============================================================ */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/heating-cooling-hero.webp"
            alt="Commercial HVAC condenser units mounted on a building exterior"
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
                Heating &amp; Cooling
              </span>
              <span className="block text-gradient mt-2">
                Services
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-xl mb-12 leading-relaxed">
              Reliable heating and cooling service, repair, and system upgrades
              for homes and buildings — diagnosed, sized, and installed right the first time.
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
      <section className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden" aria-labelledby="included-heading">
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
                className="group bg-surface rounded-2xl p-8 text-center card-interactive"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-subtle flex items-center justify-center mx-auto mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-blue" />
                </div>
                <h3 className="font-semibold text-dark text-[15px] leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SYSTEMS WE SERVICE                                          */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 section-dark-blue relative overflow-hidden" aria-labelledby="systems-heading">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="systems-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
            >
              Systems We <span className="text-gradient">Service</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              We work on all major heating and cooling systems — residential and commercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemTypes.map((system) => (
              <article
                key={system.title}
                className="group card-glass p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                  <system.icon className="w-6 h-6 text-blue" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">
                  {system.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {system.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COMMON PROBLEMS WE FIX                                      */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-white grid-pattern-light" aria-labelledby="problems-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-line mb-6" />
              <h2
                id="problems-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-8"
              >
                Common <span className="highlight">Problems</span> We Fix
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

                <li className="flex items-start gap-3 text-dark font-medium text-base leading-relaxed">
                  <AlertTriangle className="w-5 h-5 text-red flex-shrink-0 mt-0.5" />
                  Leaks, odors, or safety concerns (investigate immediately)
                </li>
              </ul>
            </div>

            <div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hvac-multimeter.webp"
                  alt="HVAC technician using a multimeter to diagnose a mini-split unit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  OUR APPROACH                                                */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 section-slate noise-overlay relative overflow-hidden" aria-labelledby="approach-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hvac-approach.jpg"
                  alt="Red industrial valve controls in a building mechanical room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
                We don&apos;t guess. We verify. Gotham HVAC uses a disciplined
                diagnostic process&mdash;checking airflow, controls, refrigerant
                side (when applicable), and system sizing&mdash;so the root cause
                is addressed, not just the symptoms.
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
      {/*  MAINTENANCE TIPS                                            */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 section-dark-mesh overflow-hidden relative" aria-labelledby="tips-heading">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-line mb-6" />
              <h2
                id="tips-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6"
              >
                Maintenance <span className="text-gradient">Tips</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10">
                Simple steps to extend the life of your HVAC system and keep it
                running efficiently between professional visits.
              </p>

              <ul className="space-y-4">
                {maintenanceTips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 text-white/70 text-base leading-relaxed"
                  >
                    <ShieldCheck className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hvac-fan-diagnostic.webp"
                  alt="Technician using a diagnostic meter on an HVAC condenser fan motor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA — dark bg                                               */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 section-cool" aria-label="Call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] overflow-hidden bg-dark p-10 sm:p-14 lg:p-20">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 max-w-2xl mx-auto">
                Ready to get your heating &amp; cooling{" "}
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
        </div>
      </section>
    </>
  );
}
