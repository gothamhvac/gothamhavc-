"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Calendar,
  FileText,
  Headphones,
  Phone,
  Plus,
  Minus,
  Home,
  Building2,
  ArrowRight,
  Percent,
  Zap,
  DollarSign,
  Heart,
  ClipboardCheck,
  Smile,
  TrendingUp,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  AnimatedNumber (matches Stats.tsx pattern)                         */
/* ------------------------------------------------------------------ */

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      let eased: number;
      if (progress < 0.9) {
        eased = 1 - Math.pow(1 - progress / 0.9, 3);
        eased *= 0.95;
      } else {
        const bounceProgress = (progress - 0.9) / 0.1;
        eased = 0.95 + 0.05 * (1 + Math.sin(bounceProgress * Math.PI));
        eased = Math.min(eased, 1);
      }
      setDisplayed(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {displayed}{suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Why Maintenance Matters — data                                     */
/* ------------------------------------------------------------------ */

const whyStats: { value: number; suffix: string; label: string }[] = [
  { value: 40, suffix: "%", label: "Fewer Breakdowns" },
  { value: 25, suffix: "%", label: "Lower Energy Bills" },
  { value: 50, suffix: "%", label: "Longer Equipment Life" },
  { value: 24, suffix: "/7", label: "Priority Response" },
];

const valueProps: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ShieldCheck,
    title: "Prevent Costly Surprises",
    desc: "Small issues caught during routine visits before they become $3,000+ emergency repairs.",
  },
  {
    icon: ClipboardCheck,
    title: "Keep Warranties Valid",
    desc: "Many manufacturers require documented annual maintenance to honor equipment warranties.",
  },
  {
    icon: Heart,
    title: "Better Air Quality",
    desc: "Clean filters, clear drains, and inspected components mean healthier air for your home or building.",
  },
  {
    icon: FileText,
    title: "Stay Code-Compliant",
    desc: "Commercial properties need documented maintenance records for inspections and insurance.",
  },
  {
    icon: Smile,
    title: "Peace of Mind",
    desc: "Set it and forget it — we schedule your visits and handle everything.",
  },
  {
    icon: TrendingUp,
    title: "Protect Your Investment",
    desc: "HVAC systems are one of the biggest investments in any property — maintenance protects that value.",
  },
];

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const residentialChecklist = [
  "Filter replacement or cleaning",
  "Thermostat calibration check",
  "Electrical connections inspection",
  "Condensate drain clearing",
  "Refrigerant pressure check (cooling)",
  "Heat exchanger / burner inspection (heating)",
  "Blower motor and fan cleaning",
  "Safety controls test",
  "System performance report",
];

const residentialBenefits: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Clock,
    title: "Priority Scheduling",
    desc: "Contract members get moved to the front of the line for service calls and emergencies.",
  },
  {
    icon: Percent,
    title: "Discounted Repairs",
    desc: "Reduced labor and parts pricing on any repairs needed during or outside scheduled visits.",
  },
  {
    icon: Zap,
    title: "Extended Equipment Life",
    desc: "Regular maintenance catches small issues before they become expensive breakdowns.",
  },
  {
    icon: Calendar,
    title: "2 Visits Per Year",
    desc: "Spring cooling tune-up and fall heating tune-up — we schedule them so you don't have to.",
  },
];

const commercialChecklist = [
  "Rooftop unit inspection and cleaning",
  "Belt and bearing checks",
  "Economizer and damper operation",
  "Refrigerant circuit check",
  "Electrical and control panel inspection",
  "Coil cleaning (evaporator + condenser)",
  "Drain pan and condensate clearing",
  "Combustion analysis (gas equipment)",
  "Filter replacement",
  "Written report with findings and recommendations",
];

const commercialBenefits: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Headphones,
    title: "Priority Emergency Response",
    desc: "Commercial clients with contracts get priority for emergency service and after-hours calls.",
  },
  {
    icon: Clock,
    title: "Reduced Downtime",
    desc: "Proactive maintenance keeps your systems running and your business operating without interruption.",
  },
  {
    icon: FileText,
    title: "Compliance Documentation",
    desc: "Written reports and maintenance records for inspections, insurance, and regulatory requirements.",
  },
  {
    icon: Calendar,
    title: "Quarterly or Semi-Annual Visits",
    desc: "Flexible scheduling based on your equipment needs — quarterly for high-demand systems, semi-annual for standard.",
  },
];

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What does a maintenance visit include?",
    answer:
      "Each visit includes a full system inspection, filter replacement, cleaning of key components, electrical and safety checks, and a written performance report. The exact scope depends on whether it's a residential or commercial plan — see the details above for each.",
  },
  {
    question: "How often should I schedule maintenance?",
    answer:
      "For residential systems, we recommend twice a year — once in the spring for cooling and once in the fall for heating. Commercial systems may benefit from quarterly visits depending on usage, equipment age, and the demands of the space.",
  },
  {
    question: "Do I get priority service with a contract?",
    answer:
      "Yes. All maintenance contract holders receive priority scheduling for both routine and emergency service calls. You move to the front of the line when something goes wrong.",
  },
  {
    question: "Are repairs included in the plan?",
    answer:
      "The maintenance plan covers scheduled preventive service. If we discover an issue during a visit that requires repair, contract holders receive discounted labor and parts rates. Major repairs are quoted separately with transparent pricing before any work begins.",
  },
  {
    question: "What's the difference between residential and commercial plans?",
    answer:
      "Residential plans focus on home HVAC systems with two seasonal visits per year. Commercial plans cover rooftop units, package systems, and larger equipment with more comprehensive inspections, compliance documentation, and flexible quarterly or semi-annual scheduling.",
  },
  {
    question: "Can I cancel my maintenance contract?",
    answer:
      "Yes — our contracts are straightforward with no hidden cancellation fees. We want to keep your business because the service is worth it, not because of fine print.",
  },
  {
    question: "Do you service all HVAC brands?",
    answer:
      "Yes. We service and maintain all major HVAC brands including Carrier, Lennox, Trane, Mitsubishi, Daikin, Fujitsu, LG, Rheem, Bryant, Goodman, and more — both residential and commercial equipment.",
  },
];

/* ------------------------------------------------------------------ */
/*  Accordion Item                                                     */
/* ------------------------------------------------------------------ */

function AccordionItem({
  faq,
  isOpen,
  toggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-dark group-hover:text-blue transition-colors pr-4">
          {faq.question}
        </h3>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-blue text-white"
              : "bg-surface text-text-secondary"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-inner">
          <p className="text-text-secondary leading-relaxed pb-6 pr-12">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Plan Section (reusable for residential + commercial)               */
/* ------------------------------------------------------------------ */

function PlanSection({
  id,
  icon: Icon,
  badge,
  title,
  titleHighlight,
  subtitle,
  checklist,
  benefits,
  bgClass,
  reverse,
}: {
  id: string;
  icon: LucideIcon;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  checklist: string[];
  benefits: { icon: LucideIcon; title: string; desc: string }[];
  bgClass: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className={`py-24 sm:py-32 ${bgClass} relative overflow-hidden scroll-mt-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${reverse ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""}`}>
          {/* Left — Info + Benefits */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/5 border border-blue/10 text-sm text-blue font-medium mb-6">
              <Icon className="w-4 h-4" />
              {badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4">
              {title}{" "}
              <span className="highlight">{titleHighlight}</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              {subtitle}
            </p>

            <div className="space-y-4">
              {benefits.map((benefit) => (
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

          {/* Right — Checklist card */}
          <div>
            <div className="card-gradient-border rounded-2xl p-8 sm:p-10">
              <h3 className="text-xl font-bold text-dark mb-6">
                What&rsquo;s Included Each Visit
              </h3>
              <div className="space-y-4">
                {checklist.map((item) => (
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
                <Link
                  href="/#contact"
                  className="btn-primary w-full text-center"
                >
                  Request a Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function MaintenancePlansContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* ============================================================= */}
      {/*  HERO                                                          */}
      {/* ============================================================= */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden section-dark-mesh noise-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-6">
              <Shield className="w-4 h-4 text-blue" />
              Preventive Maintenance &bull; Residential &bull; Commercial
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Maintenance{" "}
              <span className="text-gradient">Plans</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mb-8">
              Protect your investment with scheduled preventive maintenance.
              Fewer breakdowns, lower energy bills, and priority service when
              you need it most.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#residential" className="btn-primary">
                Residential Plans
              </Link>
              <Link
                href="#commercial"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Commercial Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  WHY MAINTENANCE MATTERS — Stats                               */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="gradient-orb w-[500px] h-[300px] bg-blue/8 top-[-80px] left-[10%]" />
        <div className="gradient-orb w-[400px] h-[250px] bg-blue/6 bottom-[-60px] right-[15%]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Why Maintenance{" "}
              <span className="text-gradient">Matters</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              The numbers speak for themselves — routine maintenance pays for
              itself many times over.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {whyStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center px-4 ${
                  i < whyStats.length - 1 ? "lg:border-r lg:border-white/10" : ""
                }`}
              >
                <div className="stat-glow mb-4">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
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

      {/* ============================================================= */}
      {/*  WHY MAINTENANCE MATTERS — Value Props                         */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4">
              What You <span className="highlight">Gain</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Beyond fewer breakdowns — here&rsquo;s how a maintenance plan
              protects your property, your wallet, and your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="card-gradient-border rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue/[0.07] flex items-center justify-center mb-5">
                  <prop.icon className="w-6 h-6 text-blue" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {prop.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  RESIDENTIAL PLANS                                             */}
      {/* ============================================================= */}
      <PlanSection
        id="residential"
        icon={Home}
        badge="Residential"
        title="Residential"
        titleHighlight="Maintenance"
        subtitle="Keep your home comfortable year-round with scheduled seasonal tune-ups. We catch small issues before they become expensive emergencies."
        checklist={residentialChecklist}
        benefits={residentialBenefits}
        bgClass="bg-white"
      />

      {/* ============================================================= */}
      {/*  COMMERCIAL PLANS                                              */}
      {/* ============================================================= */}
      <PlanSection
        id="commercial"
        icon={Building2}
        badge="Commercial"
        title="Commercial"
        titleHighlight="Maintenance"
        subtitle="Proactive maintenance for rooftop units, package systems, and large-scale equipment. Minimize downtime and stay compliant."
        checklist={commercialChecklist}
        benefits={commercialBenefits}
        bgClass="section-cool noise-overlay"
        reverse
      />

      {/* ============================================================= */}
      {/*  FAQ                                                           */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — Header (sticky) */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="section-line mb-6" />
              <h2 className="text-4xl sm:text-5xl font-bold text-dark tracking-tight mb-6">
                Maintenance{" "}
                <span className="text-gradient">FAQ</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Answers to common questions about our maintenance plans,
                scheduling, and what&rsquo;s included.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all duration-300"
              >
                Still have questions? Get in touch
                <span className="text-lg">&rarr;</span>
              </Link>
            </div>

            {/* Right — Accordion */}
            <div>
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === i}
                  toggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              ))}
            </div>
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
              Protect Your{" "}
              <span className="text-gradient">System</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
              Get ahead of breakdowns with a scheduled maintenance plan.
              Contact us to get started.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="btn-primary">
                Request a Plan
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
