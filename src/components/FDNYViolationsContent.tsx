import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Shield,
  MapPin,
  Clock,
  Award,
  FileText,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ClipboardList,
  Scale,
  Building,
  Gavel,
  FileCheck,
  Search,
  Wrench,
  Camera,
  Send,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const vc19Details = [
  {
    title: "Missing Equipment Use Permit (EUP)",
    description:
      "The most common trigger. If HVAC equipment was installed without a DOB work permit and signed-off inspection, no EUP exists on record. FDNY inspectors flag this during routine building inspections.",
  },
  {
    title: "No Certificate of Compliance",
    description:
      "Required for gas-fired equipment. If the original installer never filed or the DOB record was lost, there is no proof of compliant installation — even if the equipment is perfectly safe.",
  },
  {
    title: "Mismatched or incomplete documentation",
    description:
      "Equipment serial numbers, BTU ratings, or locations on file don't match what's physically installed. This can happen after equipment replacements, relocations, or building renovations.",
  },
  {
    title: "Expired or lapsed permits",
    description:
      "Work permits that were opened but never signed off, or permits that expired before final inspection. The equipment may have been installed correctly, but without DOB closure the paperwork trail is broken.",
  },
  {
    title: "Prior owner or tenant installations",
    description:
      "Equipment installed by a previous owner, tenant, or unlicensed contractor with no documentation left behind. Current building owners inherit the violation even though they didn't cause it.",
  },
];

const vc26Details = [
  {
    title: "Ductwork or equipment blocking egress",
    description:
      "HVAC equipment, ductwork, or refrigerant lines installed in a path of egress — hallways, stairwells, fire escapes, or exit corridors. FDNY requires clear egress at all times.",
  },
  {
    title: "Installation in a restricted location",
    description:
      "Equipment placed in areas prohibited by NYC Mechanical Code — such as above a means of egress, within required clearances of gas meters, or in spaces without adequate ventilation.",
  },
  {
    title: "Missing fire protection components",
    description:
      "Required firestopping, fire dampers, or smoke detectors absent or improperly installed around HVAC penetrations through fire-rated walls, floors, or ceilings.",
  },
  {
    title: "Improper venting or exhaust",
    description:
      "Gas appliance venting that terminates too close to windows, air intakes, or adjacent buildings. Also covers exhaust systems that don't meet NFPA or NYC Fuel Gas Code clearances.",
  },
  {
    title: "Electrical or gas code violations",
    description:
      "Exposed wiring, improper disconnects, missing gas shut-off valves, or flexible gas connectors used where rigid pipe is required. These are physical safety hazards that require immediate correction.",
  },
  {
    title: "Unauthorized modifications",
    description:
      "Changes to existing HVAC systems — adding tonnage, rerouting ductwork, converting fuel types — without DOB permits and FDNY notification. Common in restaurant and commercial buildouts.",
  },
];

const resolutionSteps = [
  {
    step: "01",
    title: "Intake & cure-date assessment",
    description:
      "We review your summons, identify the violation type (VC19, VC26, or both), and map out a resolution timeline against your cure date. If a hearing is already scheduled, we plan accordingly.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "DOB document recovery (VC19)",
    description:
      "We research DOB BIS records, pull original permits, applications, and sign-offs. If records are missing or incomplete, we prepare new applications and coordinate DOB inspections to establish compliance.",
    icon: Search,
  },
  {
    step: "03",
    title: "Physical correction (VC26)",
    description:
      "Our licensed technicians relocate equipment, reroute ductwork, install required fire protection, and correct any physical code violations. All work is performed to current NYC Mechanical Code standards.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Photo documentation & evidence",
    description:
      "We photograph all corrected conditions, compile equipment data plates, and assemble a comprehensive evidence package. This documentation is critical for the FB-09 filing and any OATH hearing.",
    icon: Camera,
  },
  {
    step: "05",
    title: "FB-09 Certificate of Correction",
    description:
      "We prepare and file the FDNY Certificate of Correction (FB-09) with all supporting documentation — proof of DOB compliance, photos of corrected conditions, and equipment specifications.",
    icon: FileCheck,
  },
  {
    step: "06",
    title: "OATH hearing representation",
    description:
      "If your case goes to hearing, we attend OATH on your behalf to present proof of compliance and pursue full dismissal or penalty reduction. Our documentation packages are built for hearings.",
    icon: Gavel,
  },
];

const penaltyInfo = [
  {
    violation: "VC19",
    defaultPenalty: "$1,000 – $5,000",
    mitigated: "$0 – $1,000",
    note: "Dismissal possible if corrected before hearing with complete FB-09 package",
  },
  {
    violation: "VC26",
    defaultPenalty: "$2,500 – $10,000",
    mitigated: "$0 – $2,500",
    note: "Physical correction + documentation required; penalties higher for egress violations",
  },
  {
    violation: "VC19 + VC26 (combined)",
    defaultPenalty: "$5,000 – $15,000+",
    mitigated: "$0 – $3,500",
    note: "Both conditions must be resolved independently; single FB-09 can cover both",
  },
];

const whatToSend = [
  {
    icon: FileText,
    title: "Summons document",
    description: "Summons number, violation code(s), cure date, and hearing date (if scheduled).",
  },
  {
    icon: Building,
    title: "Building information",
    description: "Building address, BIN number (if known), floor/unit of violation, and access instructions.",
  },
  {
    icon: Camera,
    title: "Photos (if available)",
    description: "Equipment labels/data plates, installation area, any DOB paperwork you have on hand.",
  },
  {
    icon: Send,
    title: "Prior correspondence",
    description: "Any previous DOB or FDNY correspondence, prior correction attempts, or attorney communications.",
  },
];

const faqItems = [
  {
    q: "What is an FDNY VC19 HVAC violation?",
    a: "VC19 is issued when required DOB compliance documentation is missing or cannot be produced for HVAC equipment. This includes Equipment Use Permits, Certificates of Compliance, and sign-off records. The violation targets the paperwork, not necessarily the physical installation — meaning your equipment could be perfectly safe but still trigger a VC19 if the documentation trail is incomplete.",
  },
  {
    q: "What is an FDNY VC26 HVAC violation?",
    a: "VC26 is issued for physical safety violations related to HVAC equipment. Common triggers include equipment or ductwork blocking egress paths, installations in restricted locations, missing fire protection components (fire dampers, firestopping), improper venting clearances, and unauthorized system modifications. VC26 requires physical correction in addition to documentation.",
  },
  {
    q: "How much time do I have to cure a violation?",
    a: "Cure periods vary but are typically 30 to 60 days from the date of the summons. Some violations have shorter windows, especially if they involve immediate safety hazards. If the cure date passes without correction, penalties increase significantly and the case proceeds to an OATH hearing. Contact us as soon as you receive the summons — earlier intervention gives us more options.",
  },
  {
    q: "What happens if I miss the cure date?",
    a: "If the cure date passes, FDNY will schedule an OATH (Office of Administrative Trials and Hearings) hearing. At the hearing, an administrative law judge will assess whether the violation has been corrected. Without proof of correction, default penalties apply — typically $1,000–$10,000+ depending on the violation type. Even after the cure date, filing an FB-09 before the hearing can significantly reduce or eliminate penalties.",
  },
  {
    q: "Do you file the FDNY Certificate of Correction (FB-09)?",
    a: "Yes. Once the condition is corrected and all documentation is assembled, we prepare and file the FDNY Certificate of Correction (FB-09) with supporting proof. The FB-09 package includes photos of corrected conditions, DOB compliance records, equipment specifications, and a written description of the correction. A strong FB-09 is the key to dismissal at hearing.",
  },
  {
    q: "Can you attend the OATH hearing on my behalf?",
    a: "Yes. We attend OATH hearings to present proof of compliance and argue for full dismissal or penalty reduction. Our documentation packages are specifically structured for OATH proceedings — including timestamped photo evidence, DOB record printouts, and a clear narrative of the correction process.",
  },
  {
    q: "What if I don't know whether it's VC19 or VC26?",
    a: "That's fine — many building owners aren't sure which code applies. Send us the summons document and we'll triage it. In some cases, a single summons may reference both VC19 and VC26 conditions. We handle both types and will explain exactly what's required for your specific situation.",
  },
  {
    q: "Can a violation affect my building's Certificate of Occupancy?",
    a: "Unresolved FDNY violations can complicate DOB processes including C of O renewals, permit applications, and building sales. While a single HVAC violation typically won't revoke a C of O, accumulating open violations creates inspection triggers and can delay real estate transactions. Resolving violations promptly protects your building's compliance record.",
  },
  {
    q: "How much does violation resolution cost?",
    a: "Cost depends on the violation type and what's required. VC19 (documentation only) is typically less expensive than VC26 (which may require physical work). We provide a clear scope and cost estimate after reviewing your summons — before any work begins. In many cases, the cost of resolution is a fraction of the default penalty.",
  },
  {
    q: "Do you handle violations for commercial and residential buildings?",
    a: "Yes. We resolve FDNY HVAC violations for all building types — residential, commercial, mixed-use, multifamily, restaurants, and retail. The violation codes are the same regardless of building type, though the required documentation and correction scope can differ.",
  },
];

const serviceAreas = [
  "Bronx",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Staten Island",
  "Lower Westchester",
  "Long Island",
];

/* ------------------------------------------------------------------ */
/*  Marquee Bar                                                        */
/* ------------------------------------------------------------------ */

const marqueeItems = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: MapPin, text: "5 NYC Boroughs" },
  { icon: FileCheck, text: "FB-09 Filing" },
  { icon: Award, text: "DOB Document Recovery" },
  { icon: Clock, text: "Cure-Date Driven" },
  { icon: Gavel, text: "OATH Representation" },
  { icon: MapPin, text: "Tri-State Coverage" },
  { icon: Shield, text: "Code Compliant" },
];

function MarqueeBar() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <section
      className="py-6 bg-dark overflow-hidden"
      aria-label="Service highlights"
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

export default function FDNYViolationsContent() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-blue/10" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-32 lg:pt-40 pb-52 lg:pb-56">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 glass-dark rounded-full px-5 py-2.5 mb-10">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <span className="text-white/60 text-sm font-medium">
                  FDNY Violation Resolution
                </span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-blue-light text-sm font-medium">
                VC19 &amp; VC26
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="block text-white">
                Resolve FDNY HVAC
              </span>
              <span className="block text-gradient mt-2">
                Violations VC19 &amp; VC26
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-xl mb-12 leading-relaxed">
              A summons is a race against the cure date. We handle DOB
              document recovery, physical correction, FB-09 filing, and
              OATH hearing representation &mdash; end to end, across all
              five NYC boroughs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/#contact"
                className="btn-primary text-base px-8 py-4"
              >
                Start Violation Resolution
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

            <div className="flex flex-wrap gap-3">
              {[
                "DOB Document Retrieval",
                "Physical Correction",
                "FB-09 Filing",
                "OATH Representation",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-sm font-medium"
                >
                  {item}
                </span>
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
      {/*  WHY VIOLATIONS HAPPEN                                       */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 bg-white noise-overlay relative overflow-hidden"
        aria-labelledby="why-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="why-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              Why FDNY Issues <span className="highlight">HVAC Violations</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              FDNY conducts routine building inspections and issues summonses when HVAC
              equipment lacks proper DOB documentation or presents physical safety
              concerns. Most violations fall into two categories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* VC19 explanation */}
            <div className="bg-surface rounded-2xl p-8 border border-border">
              <p className="text-xs font-bold uppercase tracking-widest text-blue mb-4">
                Understanding the violation
              </p>
              <p className="text-text-secondary leading-relaxed">
                During an inspection, FDNY officers check whether every piece of HVAC
                equipment in a building has corresponding DOB records — permits, sign-offs,
                and compliance certificates. When these records are missing, incomplete, or
                don&apos;t match what&apos;s physically installed, they issue a summons. This
                can happen even if the equipment was professionally installed and is
                functioning safely — the violation is about the paper trail, not
                necessarily the equipment itself.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                For building owners, this is frustrating because the violation often stems
                from work done by a previous owner, a prior tenant&apos;s contractor, or
                simply lost DOB records. Regardless of the cause, the current building owner
                is responsible for resolving it before the cure date.
              </p>
            </div>

            {/* Penalty overview */}
            <div className="bg-surface rounded-2xl p-8 border border-border">
              <p className="text-xs font-bold uppercase tracking-widest text-blue mb-4">
                What&apos;s at stake
              </p>
              <div className="space-y-4">
                {penaltyInfo.map((p) => (
                  <div key={p.violation} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-dark">{p.violation}</span>
                      <span className="text-sm font-medium text-red-600">{p.defaultPenalty}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-text-tertiary">With correction + FB-09</span>
                      <span className="text-sm font-medium text-green-600">{p.mitigated}</span>
                    </div>
                    <p className="text-xs text-text-tertiary">{p.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  VC19 — MISSING DOB COMPLIANCE                               */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-dark-mesh relative overflow-hidden"
        aria-labelledby="vc19-heading"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="section-line mb-6" />
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue" />
                <span className="text-blue text-sm font-bold uppercase tracking-widest">
                  Documentation Violation
                </span>
              </div>
              <h2
                id="vc19-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
              >
                VC19 &mdash; Missing <span className="highlight">DOB Compliance</span>
              </h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-10">
                Issued when required Department of Buildings documentation cannot be
                produced for HVAC equipment. This is the more common of the two
                violation types and is often resolvable without physical work.
              </p>

              <ul className="space-y-6">
                {vc19Details.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 text-base leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">
                        {item.title}
                      </span>
                      <p className="text-white/40 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-white font-bold text-lg mb-4">
                How we resolve VC19
              </h3>
              <ol className="space-y-4">
                {[
                  "Search DOB BIS for existing permits, applications, and sign-offs associated with the building's BIN",
                  "Cross-reference equipment data plates with DOB records to identify gaps",
                  "If records exist but are incomplete, coordinate with DOB to obtain certified copies",
                  "If no records exist, prepare new DOB applications and schedule required inspections",
                  "Compile all documentation into an FB-09 package with photo evidence",
                  "File the Certificate of Correction with FDNY before the cure date",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue/20 text-blue text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-white/60 text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  VC26 — UNLAWFUL INSTALLATION                                */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden"
        aria-labelledby="vc26-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-dark font-bold text-lg mb-4">
                  How we resolve VC26
                </h3>
                <ol className="space-y-4">
                  {[
                    "Conduct on-site inspection to document every physical violation cited in the summons",
                    "Develop a correction plan addressing each condition — relocation, modification, or removal",
                    "Perform all physical corrections with licensed technicians to current NYC Mechanical Code",
                    "Install required fire protection components (fire dampers, firestopping, smoke detectors)",
                    "Photograph all corrected conditions with timestamps for evidence",
                    "Prepare FB-09 package with before/after documentation and file with FDNY",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue/10 text-blue text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-text-secondary text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="section-line mb-6" />
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-blue" />
                <span className="text-blue text-sm font-bold uppercase tracking-widest">
                  Physical Safety Violation
                </span>
              </div>
              <h2
                id="vc26-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
              >
                VC26 &mdash; Unlawful <span className="highlight">Installation</span>
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-10">
                Issued for physical safety violations or code non-compliance.
                VC26 requires hands-on correction in addition to documentation —
                making it more complex and time-sensitive than VC19.
              </p>

              <ul className="space-y-6">
                {vc26Details.map((item) => (
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
      {/*  RESOLUTION WORKFLOW                                         */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 bg-white noise-overlay relative overflow-hidden"
        aria-labelledby="workflow-heading"
      >
        <div className="gradient-orb w-[400px] h-[400px] bg-blue/10 top-[-100px] right-[-100px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2
              id="workflow-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4"
            >
              Our Resolution <span className="highlight">Workflow</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              From intake to hearing — a structured process designed to resolve
              your violation before the cure date and minimize or eliminate
              penalties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resolutionSteps.map((item) => (
              <div
                key={item.step}
                className="group bg-surface rounded-2xl p-8 card-gradient-border"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-subtle flex items-center justify-center group-hover:bg-blue/10 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-blue" />
                  </div>
                  <span className="text-3xl font-bold text-blue/20">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold text-dark text-base mb-2">
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
      {/*  WHAT TO SEND US                                             */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 section-dark-mesh relative overflow-hidden"
        aria-labelledby="triage-heading"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-line mb-6" />
              <h2
                id="triage-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
              >
                What to <span className="highlight">Send Us</span>
              </h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-4">
                Not sure whether it&apos;s VC19 or VC26? That&apos;s fine — submit
                what you have and we&apos;ll triage it. The faster we receive your
                summons, the more time we have to work within your cure window.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                You can email documents to{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-blue hover:text-blue-light transition-colors underline">
                  {COMPANY.email}
                </a>
                {" "}or call us directly at{" "}
                <a href={COMPANY.phoneTel} className="text-blue hover:text-blue-light transition-colors underline">
                  {COMPANY.phone}
                </a>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatToSend.map((item) => (
                <div
                  key={item.title}
                  className="card-glass p-6"
                >
                  <item.icon className="w-6 h-6 text-blue mb-3" />
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
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
              Common questions about FDNY HVAC violations and the resolution
              process.
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
              Have a different question? Get in touch
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
                Got an FDNY summons?{" "}
                <span className="text-gradient">Don&apos;t wait.</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Every day counts against your cure date. Send us the summons
                and we&apos;ll have a resolution plan back to you within 24
                hours.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/#contact"
                  className="btn-primary text-base px-10 py-5"
                >
                  Start Violation Resolution
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
