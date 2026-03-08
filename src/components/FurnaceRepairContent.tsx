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
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const includedItems = [
  {
    icon: Search,
    title: "Furnace diagnostics & troubleshooting",
    description:
      "We test ignition, airflow, controls, and safety switches to pinpoint exactly why your furnace is underperforming or failing to start.",
  },
  {
    icon: Wrench,
    title: "Repair of failed furnace components",
    description:
      "From flame sensors and igniters to blower motors and gas valves, we replace worn or broken parts with manufacturer-grade components.",
  },
  {
    icon: Gauge,
    title: "Safety & heating performance checks",
    description:
      "Every repair includes a combustion analysis, heat-exchanger visual inspection, and carbon monoxide safety screening before sign-off.",
  },
  {
    icon: ClipboardList,
    title: "Clear repair recommendations",
    description:
      "You receive a written summary of our findings, the work performed, and any follow-up service we recommend to keep your system reliable.",
  },
];

const problems = [
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
  {
    title: "Control or thermostat problems",
    description:
      "Miscommunication between the thermostat and the furnace board can cause erratic behavior. We verify wiring, calibrate settings, and replace faulty controls as needed.",
  },
];

const approachBullets = [
  "Ignition system testing — hot-surface igniters, flame sensors, and pilot assemblies checked for proper operation",
  "Heat exchanger inspection — visual and temperature-differential checks to detect cracks or corrosion early",
  "Airflow and blower analysis — static pressure readings and motor amp draws to confirm adequate circulation",
  "Electrical and control board diagnostics — voltage, relay, and sequence-of-operation testing across all circuits",
  "Safety device verification — high-limit switches, pressure switches, and gas valve response confirmed to code",
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
    question: "Do you install new furnaces?",
    answer:
      "No, we specialize exclusively in furnace repair and maintenance services. Our technicians focus on diagnosing, repairing, and restoring existing furnace systems rather than new installations. This specialization allows us to invest deeply in repair-specific training, tooling, and parts inventory so we can resolve issues faster and more accurately.",
  },
  {
    question: "What furnace types do you service?",
    answer:
      "We service virtually all residential and commercial furnace systems, including single-stage, two-stage, and modulating gas furnaces as well as oil-fired and electric models. Our technicians carry diagnostic equipment compatible with major brands such as Carrier, Lennox, Trane, Rheem, Goodman, and Bryant. If your building has a rooftop unit or a packaged heating system, we can handle that too.",
  },
  {
    question: "Do you service older furnaces?",
    answer:
      "Absolutely. We regularly work on legacy and older furnace models that many contractors turn away. Our team maintains access to hard-to-find replacement parts and has hands-on experience with standing-pilot systems, older gas valves, and discontinued control boards. If a part is no longer manufactured, we will let you know upfront and discuss the best path forward.",
  },
  {
    question: "How do I know my furnace needs service?",
    answer:
      "Common warning signs include inconsistent temperatures from room to room, the furnace cycling on and off more frequently than usual, and a noticeable increase in your energy bills. Strange sounds like banging, rattling, or high-pitched squealing during operation are also red flags. If you detect an unusual smell or notice the pilot light or flame color has changed from blue to yellow, contact us right away as these can indicate safety concerns.",
  },
  {
    question: "Can you check furnace safety issues?",
    answer:
      "Yes, every service visit includes a thorough safety evaluation. We inspect the heat exchanger for cracks, test gas connections for leaks, verify that all safety switches and limit controls respond correctly, and perform a carbon monoxide screening at the supply registers. If we identify any condition that poses an immediate risk, we will shut the system down safely and walk you through your options before proceeding.",
  },
  {
    question: "Will I receive an estimate first?",
    answer:
      "Yes. After our initial diagnostic assessment, we provide a clear written summary of our findings along with a detailed estimate of recommended repairs before any work begins. There are no surprise charges. If additional issues are discovered during the repair, we will pause and discuss them with you so you can make an informed decision about how to proceed.",
  },
  {
    question: "What are common signs a furnace needs repair?",
    answer:
      "Watch for these key warning signs: the furnace struggles to maintain the set temperature, you hear unusual banging or clicking sounds at startup, the blower runs constantly without producing adequate heat, or you notice a musty or burning smell when the system kicks on. Visible rust or corrosion on the furnace cabinet, a yellow or flickering pilot flame, and rising utility bills without a change in usage patterns are also strong indicators that a professional inspection is overdue.",
  },
  {
    question: "How often should a furnace be serviced?",
    answer:
      "We recommend scheduling professional furnace maintenance at least once a year, ideally in early fall before the heating season begins. An annual tune-up typically includes cleaning the burner assembly, inspecting the heat exchanger, testing safety controls, checking the ignition system, and replacing the air filter. Regular maintenance helps prevent unexpected breakdowns, extends the life of your equipment, and keeps your system running at peak efficiency, which can meaningfully reduce your heating costs over time.",
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
  { icon: Thermometer, text: "Furnace Repair" },
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

export default function FurnaceRepairContent() {
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
            src="/furnace-repair.jpg"
            alt="Technician performing furnace repair service"
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
        <div
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-32 lg:pt-40 pb-52 lg:pb-56"
        >
          <div className="max-w-3xl">
            {/* Glassmorphism badge */}
            <div
              className="inline-flex items-center gap-3 glass-dark rounded-full px-5 py-2.5 mb-10"
            >
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

            {/* H1 */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              <span className="block text-white">
                Furnace Repair
              </span>
              <span className="block text-gradient mt-2">
                Services
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-white/50 max-w-xl mb-12 leading-relaxed"
            >
              Reliable furnace repair and service to restore safe, consistent
              heating for homes and buildings &mdash; no new furnace
              installations.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
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

            {/* Trust badges */}
            <div
              className="flex flex-wrap gap-x-8 gap-y-3"
            >
              {[
                "All 5 NYC Boroughs",
                "Repair & Service Only",
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
      {/*  WHAT'S INCLUDED                                             */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-dark-blue relative overflow-hidden"
        aria-labelledby="included-heading"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="included-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              What&apos;s <span className="highlight">Included</span>
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {includedItems.map((item) => (
              <div
                key={item.title}
                className="group card-glass p-8 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-blue" />
                </div>
                <h3 className="font-semibold text-white/90 text-[15px] leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mt-3">
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
        className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden"
        aria-labelledby="problems-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text left */}
            <div>
              <div className="section-line mb-6" />
              <h2
                id="problems-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-8"
              >
                Common <span className="highlight">Problems</span> We Fix
              </h2>

              <ul className="space-y-5">
                {problems.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 text-base leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-dark">{item.title}</span>
                      <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image right */}
            <div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hvac-diagnostic.jpg"
                  alt="Close-up of brass mechanical components used in furnace diagnostics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
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
        className="py-24 sm:py-32 bg-white relative overflow-hidden"
        aria-labelledby="approach-heading"
      >
        <div className="gradient-orb w-[300px] h-[300px] bg-blue/8 top-[20%] left-[-100px]" />
        <div className="gradient-orb w-[200px] h-[200px] bg-indigo-500/6 bottom-[10%] right-[-50px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image left */}
            <div
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hvac-approach.jpg"
                  alt="Red industrial valve controls in a building mechanical room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            </div>

            {/* Text right */}
            <div
              className="order-1 lg:order-2"
            >
              <div className="section-line mb-6" />
              <h2
                id="approach-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-6"
              >
                Our <span className="highlight">Approach</span>
              </h2>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                We use a diagnostic process to evaluate furnace controls,
                airflow, and safety systems. Our goal is to identify the real
                cause of failure and restore reliable heating &mdash; not
                temporary fixes.
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
      {/*  AREA WE SERVE — Blue banner                                 */}
      {/* ============================================================ */}
      <section className="bg-blue py-12 sm:py-16" aria-label="Service areas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center"
          >
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
      {/*  FAQ — 2-column card grid                                    */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 bg-white noise-overlay relative overflow-hidden"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              Questions &amp;{" "}
              <span className="highlight">Answers</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              Common questions about our furnace repair services.
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
      <section className="py-24 sm:py-32 section-slate" aria-label="Call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-[32px] overflow-hidden bg-dark p-10 sm:p-14 lg:p-20"
          >
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 max-w-2xl mx-auto">
                Ready to fix your furnace{" "}
                <span className="text-gradient">done right?</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                From first call to final walkthrough &mdash; reliable furnace
                repair you can trust.
              </p>

              <div
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
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
