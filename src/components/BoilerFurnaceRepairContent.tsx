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
  HelpCircle,
  MapPin,
  Shield,
  Clock,
  Award,
  Thermometer,
  Zap,
  Flame,
  Wind,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const includedItems = [
  {
    icon: Search,
    title: "Full system diagnostics",
    description:
      "We test pressure levels, controls, ignition, airflow, and safety devices to pinpoint exactly what is causing your boiler or furnace to underperform.",
  },
  {
    icon: Wrench,
    title: "Component repair & replacement",
    description:
      "From circulator pumps and zone valves to igniters, blower motors, and gas valves — we replace faulty parts with manufacturer-grade components.",
  },
  {
    icon: Gauge,
    title: "Safety & performance checks",
    description:
      "Every service includes combustion analysis, gas-leak detection, carbon monoxide screening, and a pressure or heat-exchanger inspection to confirm safe operation.",
  },
  {
    icon: ClipboardList,
    title: "Written findings & recommendations",
    description:
      "You receive a clear summary of what we found, what we fixed, and any additional maintenance we recommend — no surprises, no guesswork.",
  },
];

const boilerProblems = [
  {
    title: "Boiler not producing heat",
    description:
      "Could be a failed circulator pump, bad zone valve, faulty aquastat, or airlock in the system. We diagnose the root cause and restore heat quickly.",
  },
  {
    title: "Uneven or inconsistent heating",
    description:
      "Often caused by air trapped in radiators, a failing zone valve, or imbalanced water flow. We balance the system and verify each zone responds correctly.",
  },
  {
    title: "Unusual noises or vibration",
    description:
      "Banging, kettling, or gurgling sounds typically indicate mineral buildup, air in the lines, or a failing pump bearing. We identify and resolve the noise source.",
  },
  {
    title: "Pressure loss or frequent shutdowns",
    description:
      "Usually traced to a leaking expansion tank, faulty pressure-relief valve, or a small system leak. We pressure-test the system and replace failed components.",
  },
  {
    title: "Leaks or corrosion",
    description:
      "Pinhole leaks, corroded fittings, and weeping valves can cause water damage and efficiency loss. We locate the leak, assess pipe condition, and make reliable repairs.",
  },
];

const furnaceProblems = [
  {
    title: "Furnace not turning on",
    description:
      "Often caused by a faulty igniter, tripped safety switch, or a malfunctioning control board. We test each component in sequence to isolate and resolve the failure.",
  },
  {
    title: "Weak or uneven heat output",
    description:
      "Clogged filters, failing blower motors, or partially blocked ductwork can starve rooms of heat. We measure airflow and temperature rise to find the restriction.",
  },
  {
    title: "Frequent cycling or shutdowns",
    description:
      "Short cycling usually points to an overheating heat exchanger, a dirty flame sensor, or incorrect thermostat wiring. We diagnose the root cause so the fix lasts.",
  },
  {
    title: "Unusual noises or vibrations",
    description:
      "Banging, squealing, or rattling can signal loose blower wheels, worn bearings, or expanding ductwork. We inspect mechanical components and secure or replace worn parts.",
  },
  {
    title: "Blower or ignition issues",
    description:
      "A blower that won't start or an igniter that fails to glow prevents the entire heating cycle. We test capacitors, motors, and ignition assemblies to restore operation.",
  },
];

const approachBullets = [
  "Control & safety checks — every limit switch, aquastat, pressure switch, and safety control verified before we proceed",
  "Combustion analysis — measuring flue gas temperatures and CO levels to ensure a clean, efficient burn and safe venting",
  "Circulation & airflow assessment — testing pump operation, blower performance, static pressure, and temperature rise",
  "Heat delivery verification — confirming each zone reaches target temperature evenly and consistently",
  "Written findings — a clear summary of what we found, what we fixed, and what to watch going forward",
];

const faqItems = [
  {
    q: "Do you install new boilers or furnaces?",
    a: "Our focus is on repair, diagnostics, and maintenance rather than full installations. This specialization allows us to invest deeply in understanding existing systems, extending their lifespan, and keeping them running safely.",
  },
  {
    q: "What types of boilers do you service?",
    a: "We service gas-fired, oil-fired, steam, and hot-water boiler systems across residential and commercial properties — from single wall-hung combi boilers to multi-boiler plants and cast-iron sectional systems.",
  },
  {
    q: "What furnace types do you service?",
    a: "We service single-stage, two-stage, and modulating gas furnaces, along with oil-fired and electric models. Our technicians carry diagnostic equipment compatible with major brands like Carrier, Lennox, Trane, Rheem, Goodman, and Bryant.",
  },
  {
    q: "Do you service older systems?",
    a: "Absolutely. NYC is full of pre-war buildings with cast-iron steam boilers and legacy furnaces. We have extensive experience with older systems, hard-to-find parts, and discontinued control boards.",
  },
  {
    q: "Can you diagnose safety issues?",
    a: "Yes. Every service call includes gas-leak detection, carbon monoxide screening, pressure-relief or heat-exchanger inspection, and verification that all safety controls shut the system down when they should.",
  },
  {
    q: "Will I receive an estimate first?",
    a: "Yes. After our initial diagnostic visit, we provide a clear written estimate before any repair work begins. You approve the scope of work before we proceed — no surprises.",
  },
  {
    q: "How often should my system be serviced?",
    a: "We recommend having your boiler or furnace professionally serviced at least once a year, ideally before the heating season begins in early fall. Annual maintenance catches small problems before they become expensive failures.",
  },
  {
    q: "What are signs my system needs repair?",
    a: "Common warning signs include unusual noises, uneven heating, frequent shutdowns, visible leaks or corrosion, a yellow pilot flame, and higher-than-normal energy bills. If you notice any of these, schedule a diagnostic visit.",
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

/* ================================================================== */
/*  Marquee Bar                                                        */
/* ================================================================== */

const marqueeItems = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: MapPin, text: "5 NYC Boroughs" },
  { icon: Zap, text: "Residential & Commercial" },
  { icon: Award, text: "NYSERDA Qualified" },
  { icon: Clock, text: "Same-Week Service" },
  { icon: Thermometer, text: "Boiler & Furnace Repair" },
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

export default function BoilerFurnaceRepairContent() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        <div className="absolute inset-0">
          <Image
            src="/boiler-furnace-hero.webp"
            alt="Residential mechanical room with furnace, water heater, and tankless unit"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/80 to-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-dark/40" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

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
                Boiler &amp; Furnace
              </span>
              <span className="block text-gradient mt-2">
                Repair Services
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-xl mb-12 leading-relaxed">
              Reliable boiler and furnace repair for residential and commercial
              systems &mdash; focused on safety, diagnostics, and dependable
              heat across NYC and the Tri-State area.
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

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ============================================================ */}
      {/*  MARQUEE BAR                                                 */}
      {/* ============================================================ */}
      <MarqueeBar />

      {/* ============================================================ */}
      {/*  WHAT'S INCLUDED                                             */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden"
        aria-labelledby="included-heading"
      >
        <div className="gradient-orb w-[400px] h-[400px] bg-blue/10 top-[-100px] right-[-100px]" />
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
                <h3 className="font-semibold text-dark text-[15px] leading-snug">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BOILER PROBLEMS                                             */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-dark-mesh relative overflow-hidden"
        aria-labelledby="boiler-problems-heading"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-line mb-6" />
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-6 h-6 text-blue" />
                <span className="text-blue text-sm font-bold uppercase tracking-widest">
                  Boiler Systems
                </span>
              </div>
              <h2
                id="boiler-problems-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8"
              >
                Common <span className="highlight">Boiler</span> Problems
              </h2>

              <ul className="space-y-5">
                {boilerProblems.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 text-base leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">
                        {item.title}
                      </span>
                      <p className="text-white/50 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/boiler-room.jpg"
                  alt="Commercial boiler room with piping and expansion tank"
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
      {/*  FURNACE PROBLEMS                                            */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden"
        aria-labelledby="furnace-problems-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/furnace-unit.webp"
                  alt="Residential gas furnace unit in a utility room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="section-line mb-6" />
              <div className="flex items-center gap-3 mb-4">
                <Wind className="w-6 h-6 text-blue" />
                <span className="text-blue text-sm font-bold uppercase tracking-widest">
                  Furnace Systems
                </span>
              </div>
              <h2
                id="furnace-problems-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-8"
              >
                Common <span className="highlight">Furnace</span> Problems
              </h2>

              <ul className="space-y-5">
                {furnaceProblems.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 text-base leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-dark">
                        {item.title}
                      </span>
                      <p className="text-text-secondary text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  OUR APPROACH                                                */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 bg-white noise-overlay relative overflow-hidden"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-line mb-6" />
              <h2
                id="approach-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-6"
              >
                Our <span className="highlight">Approach</span>
              </h2>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                Whether it&apos;s a boiler or furnace, we take an
                engineering-led approach &mdash; verifying controls, pressure
                behavior, airflow, and system response before recommending any
                repair. Our focus is resolving the cause, not masking symptoms.
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

            <div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hvac-blueprint.webp"
                  alt="HVAC ductwork and airflow engineering blueprint"
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
      {/*  AREAS WE SERVE                                              */}
      {/* ============================================================ */}
      <section className="py-8 bg-blue" aria-label="Areas we serve">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <MapPin className="w-5 h-5 text-white flex-shrink-0" />
            <span className="text-white font-semibold text-sm sm:text-base mr-1">
              Areas We Serve:
            </span>
            {serviceAreas.map((area, i) => (
              <span key={area} className="flex items-center gap-3">
                <span className="text-white/90 text-sm sm:text-base font-medium">
                  {area}
                </span>
                {i < serviceAreas.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                )}
              </span>
            ))}
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
              Questions &amp; <span className="highlight">Answers</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              Common questions about our boiler and furnace repair services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {faqItems.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl p-7 card-accent-left"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-subtle flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark text-base mb-2">
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
              Didn&apos;t find the answer? Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
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
          <div className="relative rounded-[32px] overflow-hidden bg-dark p-10 sm:p-14 lg:p-20">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 max-w-2xl mx-auto">
                Ready to fix your heating system?{" "}
                <span className="text-gradient">Done right.</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                From first call to final walkthrough &mdash; engineering-led
                boiler and furnace service you can trust.
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
