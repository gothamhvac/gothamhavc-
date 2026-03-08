import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Clock,
  Award,
  Zap,
  Wrench,
  Wind,
  CalendarCheck,
  Building2,
  RefreshCw,
  AlertTriangle,
  ClipboardList,
  Ruler,
  HardHat,
  ShieldCheck,
  ChefHat,
  Flame,
  ThermometerSun,
  MessageSquare,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const whatWeDoItems = [
  {
    icon: Wrench,
    title: "Commercial kitchen hood installation",
    description: "Installed per project scope and approved plans.",
  },
  {
    icon: Wind,
    title: "Ventilation and exhaust support",
    description: "Proper airflow and exhaust for restaurant kitchens.",
  },
  {
    icon: CalendarCheck,
    title: "Coordination with buildout timelines",
    description: "Works alongside contractors and inspectors.",
  },
];

const bestForItems = [
  {
    icon: Building2,
    title: "New restaurant buildouts & renovations",
    description: "Ideal for new kitchens and remodels.",
  },
  {
    icon: RefreshCw,
    title: "Outdated or undersized hood systems",
    description: "Replacement planning for code compliance.",
  },
  {
    icon: AlertTriangle,
    title: "Smoke, odor, or poor capture issues",
    description: "Solving ventilation and capture problems.",
  },
];

const problems = [
  "Smoke or grease not being captured properly",
  "Strong odors lingering in the kitchen or dining area",
  "Undersized or outdated hood systems",
  "Poor exhaust airflow or noise issues",
  "Code or inspection-related concerns",
  "Kitchen overheating during service hours",
];

const approachBullets = [
  "Equipment heat and exhaust needs",
  "Hood sizing and placement",
  "Airflow balance and exhaust performance",
  "Clear coordination with contractors and timelines",
];

const howWeWorkSteps = [
  {
    step: 1,
    title: "Quick Intake",
    description: "Kitchen type, equipment list, and timeline.",
  },
  {
    step: 2,
    title: "Site Visit & Measurements",
    description: "On-site assessment of the space and existing systems.",
  },
  {
    step: 3,
    title: "Scope & Quote",
    description: "Upfront pricing with a clear scope of work.",
  },
  {
    step: 4,
    title: "Installation & Verification",
    description: "Final system checks and performance verification.",
  },
];

const faqItems = [
  {
    question: "Do you install commercial kitchen hoods?",
    answer: "Yes — commercial hood installation is provided.",
  },
  {
    question: "Do you handle ventilation and exhaust systems?",
    answer: "Yes — kitchen ventilation and exhaust are included.",
  },
  {
    question: "Can you work with general contractors?",
    answer:
      "Yes — coordination with GCs and build-out teams is available.",
  },
  {
    question: "Do you help with inspections or code requirements?",
    answer:
      "We design and install with code considerations in mind.",
  },
  {
    question: "Do you replace existing hood systems?",
    answer: "Yes — outdated or undersized systems can be replaced.",
  },
  {
    question: "Do you serve outside Manhattan?",
    answer: "Yes — NYC plus NJ and CT as scheduled.",
  },
];

/* ================================================================== */
/*  Marquee Bar                                                        */
/* ================================================================== */

const marqueeItems = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: MapPin, text: "5 NYC Boroughs" },
  { icon: ChefHat, text: "Restaurant Specialists" },
  { icon: Award, text: "Code Compliant" },
  { icon: Clock, text: "Coordinated Scheduling" },
  { icon: Wind, text: "Kitchen Ventilation" },
  { icon: MapPin, text: "Tri-State Coverage" },
  { icon: Zap, text: "Commercial Grade" },
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
/*  Area We Serve Banner                                               */
/* ================================================================== */

function AreaWeServeBanner() {
  return (
    <section className="py-16 sm:py-20 bg-blue" aria-labelledby="area-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="area-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6"
          >
            Areas We Serve
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Restaurant hood installation across all five NYC boroughs and the
            Tri-State area — Manhattan, Brooklyn, Queens, Bronx, Staten Island,
            plus New Jersey and Connecticut.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ...COMPANY.serviceAreas,
              "New Jersey",
              "Connecticut",
            ].map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2.5 text-white text-sm font-medium"
              >
                <MapPin className="w-3.5 h-3.5" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Main Component                                                     */
/* ================================================================== */

export default function RestaurantHoodsContent() {
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
            src="/restaurant-hood-hero.webp"
            alt="Commercial kitchen ventilation ductwork and exhaust hood system"
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
                Restaurant Hood
              </span>
              <span className="block text-gradient mt-2">
                Installation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-xl mb-12 leading-relaxed">
              Commercial kitchen hood installation and ventilation support for
              restaurants, cafes, and food service spaces across NYC and the
              Tri-State area.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/#contact"
                className="btn-primary text-base px-8 py-4"
              >
                Request a Quote
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
                "Commercial Grade",
                "Coordinated Scheduling",
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
      {/*  WHAT WE DO                                                  */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden"
        aria-labelledby="whatwedo-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="whatwedo-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              What We <span className="text-gradient">Do</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              End-to-end hood installation and kitchen ventilation for
              commercial food service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeDoItems.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl p-8 card-accent-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-subtle flex items-center justify-center mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-blue" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-3">
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
      {/*  BEST FOR — Split layout                                     */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-dark-mesh relative overflow-hidden"
        aria-labelledby="bestfor-heading"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Cards — left */}
            <div>
              <div className="section-line mb-6" />
              <h2
                id="bestfor-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-10"
              >
                Best <span className="highlight">For</span>
              </h2>

              <div className="space-y-5">
                {bestForItems.map((item) => (
                  <div
                    key={item.title}
                    className="group flex gap-5 card-glass p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-blue/10 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image — right */}
            <div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/ductwork-install.webp"
                  alt="Commercial HVAC ductwork installation with insulated flex duct and vents"
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
      {/*  COMMON PROBLEMS                                             */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 bg-white"
        aria-labelledby="problems-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-line mb-6" />
              <h2
                id="problems-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-8"
              >
                Common <span className="highlight">Problems</span>
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
                  src="/exhaust-hood.webp"
                  alt="Industrial exhaust hood with ductwork in a commercial kitchen"
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
        className="py-24 sm:py-32 section-slate noise-overlay relative overflow-hidden"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image — left */}
            <div className="order-2 lg:order-1">
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
                We take a practical approach to kitchen ventilation. Each project
                starts with understanding how the kitchen actually operates
                &mdash; equipment type, heat load, and workflow &mdash; so the
                hood system captures smoke effectively and supports a safe
                working environment.
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
      {/*  HOW WE WORK — Timeline                                      */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 relative overflow-hidden noise-overlay section-ice"
        aria-labelledby="howwework-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="howwework-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              A straightforward process from first call to final verification.
            </p>
          </div>

          <div className="max-w-2xl mx-auto relative">
            {/* Dotted connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-px border-l-2 border-dashed border-dark/15" />

            <div className="space-y-8">
              {howWeWorkSteps.map((s) => (
                <div
                  key={s.step}
                  className="relative flex items-start gap-6"
                >
                  {/* Numbered badge */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue/20">
                    <span className="text-white font-bold text-lg">
                      {s.step}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-border">
                    <h3 className="font-bold text-dark text-lg mb-1">
                      {s.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AREAS WE SERVE — Blue banner                                */}
      {/* ============================================================ */}
      <AreaWeServeBanner />

      {/* ============================================================ */}
      {/*  FAQ — 2-column grid                                         */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-cool"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              Frequently Asked <span className="highlight">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                className="bg-surface rounded-2xl p-7 border border-border"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-dark text-base">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Contact CTA within FAQ */}
          <div className="text-center">
            <p className="text-text-secondary text-base mb-6">
              Have a question not listed here?
            </p>
            <Link
              href="/#contact"
              className="btn-primary text-base px-8 py-4"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA — Dark rounded card                                     */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 section-slate" aria-label="Call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] overflow-hidden bg-dark p-10 sm:p-14 lg:p-20">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 max-w-2xl mx-auto">
                Ready to get your kitchen hood{" "}
                <span className="text-gradient">installed right?</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                From initial consultation to final verification &mdash;
                practical, code-conscious kitchen ventilation you can count on.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/#contact"
                  className="btn-primary text-base px-10 py-5"
                >
                  Request a Quote
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
