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
  Zap,
  Thermometer,
  Wind,
  Flame,
  Snowflake,
  Settings,
  AlertTriangle,
  Calendar,
  FileText,
  Headphones,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface RepairService {
  icon: LucideIcon;
  title: string;
  description: string;
}

const repairServices: RepairService[] = [
  {
    icon: Snowflake,
    title: "Air Conditioning Repair",
    description:
      "Diagnostics and repair for central AC, split systems, mini-splits, and window units. Refrigerant recharge, compressor issues, and electrical faults.",
  },
  {
    icon: Flame,
    title: "Heating System Repair",
    description:
      "Furnace, boiler, and heat pump troubleshooting and repair. Ignition problems, no-heat calls, uneven heating, and thermostat issues.",
  },
  {
    icon: Wind,
    title: "Ventilation & Airflow",
    description:
      "Ductwork repairs, blower motor replacement, damper adjustments, and airflow balancing for better comfort and efficiency.",
  },
  {
    icon: Thermometer,
    title: "Thermostat & Controls",
    description:
      "Smart thermostat installation, wiring troubleshooting, zone control repair, and system integration for all major brands.",
  },
  {
    icon: Settings,
    title: "Preventative Maintenance",
    description:
      "Seasonal tune-ups, filter changes, coil cleaning, and system inspections to catch problems before they become emergencies.",
  },
  {
    icon: Calendar,
    title: "Maintenance Contracts",
    description:
      "Ongoing service agreements with scheduled visits, priority response, and discounted rates to keep your systems running year-round.",
  },
  {
    icon: Zap,
    title: "Electrical & Component Repair",
    description:
      "Capacitor, contactor, relay, and circuit board replacement. Wiring diagnostics and electrical safety checks.",
  },
];

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Call or Message",
    description:
      "Describe the issue — what&rsquo;s happening, when it started, and your system type if known. Photos help.",
  },
  {
    step: "02",
    title: "Diagnostics",
    description:
      "We perform a thorough inspection of your system, test components, check readings, and identify the root cause.",
  },
  {
    step: "03",
    title: "Scope & Estimate",
    description:
      "You get clear options with transparent pricing before any work begins. No surprises, no pressure.",
  },
  {
    step: "04",
    title: "Expert Repair",
    description:
      "Quality parts, clean workmanship, and careful attention to your space. We fix it right the first time.",
  },
  {
    step: "05",
    title: "Test & Verify",
    description:
      "We run the system, verify performance, check temperatures and airflow, and make sure everything is working properly.",
  },
];

const warningSignals = [
  "System not heating or cooling properly",
  "Unusual noises — banging, grinding, or squealing",
  "Frequent on/off cycling (short cycling)",
  "Spike in energy bills without usage change",
  "Weak or no airflow from vents",
  "Water leaks or ice buildup on equipment",
  "Strange odors when system runs",
  "Thermostat not responding correctly",
  "System running constantly without reaching set temperature",
  "Visible rust, corrosion, or damage on equipment",
];

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How fast can you respond to a service call?",
    answer:
      "We aim to respond the same day for most service calls, subject to availability. For urgent situations like no heat in winter or no cooling in summer, we prioritize accordingly and do our best to get to you quickly.",
  },
  {
    question: "Do you repair all brands and system types?",
    answer:
      "Yes — we service and repair all major HVAC brands including Carrier, Lennox, Trane, Mitsubishi, Daikin, Fujitsu, LG, Rheem, Bryant, Goodman, and more. Both residential and commercial systems.",
  },
  {
    question: "How much does a typical repair cost?",
    answer:
      "Repair costs vary depending on the issue. A standard diagnostic visit has a set fee, and we provide transparent pricing for any additional work before proceeding. No hidden fees or surprise charges.",
  },
  {
    question: "Should I repair or replace my system?",
    answer:
      "It depends on the age of the system, cost of repair vs. replacement, and efficiency. As a general rule, if repair costs exceed 50% of a new system and the unit is over 10-15 years old, replacement may be more cost-effective. We always give honest recommendations.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes — we offer ongoing maintenance contracts with scheduled seasonal visits, priority service response, and discounted repair rates. Contracts are available for both residential and commercial systems and can be tailored to your needs.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We serve all five NYC boroughs — Manhattan, Brooklyn, Queens, Bronx, and Staten Island — plus Lower Westchester, Long Island, and parts of the Tri-State area.",
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

export default function ServiceRepairContent() {
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
            src="/gotham-van.webp"
            alt="Gotham HVAC service van ready for HVAC repair calls"
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
              <Wrench className="w-4 h-4 text-blue" />
              Diagnostics &bull; Repair &bull; Maintenance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              HVAC Service{" "}
              <span className="text-gradient">&amp; Repair</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mb-8">
              Fast, honest diagnostics and expert repair for all heating,
              cooling, and ventilation systems. Residential and commercial
              across NYC and the Tri-State area.
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
      {/*  WHAT WE REPAIR                                                */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="section-line mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4">
              What We <span className="highlight">Service</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              From quick fixes to complex diagnostics — we handle the full
              spectrum of HVAC repair and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repairServices.map((service) => (
              <div
                key={service.title}
                className="card-interactive p-8 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-blue" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  WARNING SIGNS                                                 */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-line mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4">
                Signs Your System Needs{" "}
                <span className="highlight">Attention</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Don&rsquo;t wait for a complete breakdown. These warning signs
                mean it&rsquo;s time to call a professional.
              </p>
              <div className="space-y-3">
                {warningSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-start gap-3"
                  >
                    <AlertTriangle className="w-4 h-4 text-accent-red mt-1 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">
                      {signal}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="img-overlay rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/tankless-common-problems.webp"
                  alt="HVAC tools and pressure gauges used for system diagnostics"
                  fill
                  className="object-cover"
                  quality={80}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  OUR PROCESS                                                   */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 section-dark-blue noise-overlay relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Our Service <span className="text-gradient">Process</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              A straightforward approach — from your first call to a fully
              verified repair.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue/50 mb-3">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  MAINTENANCE CONTRACTS                                         */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/5 border border-blue/10 text-sm text-blue font-medium mb-6">
                <FileText className="w-4 h-4" />
                Service Agreements
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4">
                Maintenance{" "}
                <span className="highlight">Contracts</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                Protect your investment with a scheduled maintenance plan.
                Regular service prevents costly breakdowns, extends equipment
                life, and keeps your systems running at peak efficiency all year.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Calendar,
                    title: "Scheduled Seasonal Visits",
                    desc: "Pre-season tune-ups for heating and cooling — we come to you so you never have to remember.",
                  },
                  {
                    icon: Clock,
                    title: "Priority Service Response",
                    desc: "Contract members move to the front of the line for repairs and emergency calls.",
                  },
                  {
                    icon: Shield,
                    title: "Discounted Repair Rates",
                    desc: "Reduced labor and parts pricing on any repairs needed during or outside scheduled visits.",
                  },
                  {
                    icon: Headphones,
                    title: "Dedicated Support",
                    desc: "A direct line to our team — no call centers, no runaround.",
                  },
                ].map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-surface/60 border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue/[0.07] flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark text-sm mb-0.5">
                        {benefit.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — What's Included card */}
            <div>
              <div className="card-gradient-border rounded-2xl p-8 sm:p-10">
                <h3 className="text-xl font-bold text-dark mb-6">
                  What&rsquo;s Included
                </h3>
                <div className="space-y-4">
                  {[
                    "Full system inspection — heating & cooling",
                    "Filter replacement each visit",
                    "Coil cleaning (evaporator & condenser)",
                    "Refrigerant level check",
                    "Thermostat calibration & testing",
                    "Electrical connection tightening",
                    "Condensate drain clearing",
                    "Blower & motor lubrication",
                    "Safety controls verification",
                    "Written report after every visit",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-blue mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-text-secondary text-sm mb-4">
                    Available for residential and commercial systems. Custom plans
                    for multi-unit buildings and commercial properties.
                  </p>
                  <Link
                    href="/#contact"
                    className="btn-primary w-full text-center"
                  >
                    Request a Maintenance Contract
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  WHY GOTHAM                                                    */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4">
              Why Choose <span className="highlight">Gotham</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Fast Response",
                description:
                  "Same-day service for most calls. We know downtime isn't an option.",
              },
              {
                icon: Shield,
                title: "Licensed & Insured",
                description:
                  "Fully licensed and insured for residential and commercial work across NYC.",
              },
              {
                icon: FileText,
                title: "Transparent Pricing",
                description:
                  "Clear estimates before work begins. No hidden fees, no surprises.",
              },
              {
                icon: Award,
                title: "Engineering-Led",
                description:
                  "We diagnose with data, not guesswork. Proper troubleshooting every time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-accent-left p-6 rounded-2xl"
              >
                <item.icon className="w-8 h-8 text-blue mb-4" />
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  SERVICE AREAS                                                 */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight mb-3">
              Service Areas
            </h2>
            <p className="text-text-secondary">
              HVAC service and repair across the NYC metro area.
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
              Need a Repair?{" "}
              <span className="text-gradient">Let&rsquo;s Talk.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
              Describe the issue and we&rsquo;ll get back to you with next
              steps — usually the same day.
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
