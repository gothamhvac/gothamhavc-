/**
 * Google Ads landing pages (/lp/[slug]).
 *
 * One entry per ad group. Each page is noindex and has a call button and a
 * short lead form above the fold. Leads email through /api/contact with the
 * `source` label below so the inbox shows which ad group sent them.
 *
 * Only claims already made elsewhere on the site or in Gotham's quotes are
 * used here (licensed & insured, NYSERDA qualified, Con Edison participating
 * contractor, 15+ years, upfront pricing, DOB filing). No prices or timelines.
 */

import type { LucideIcon } from "lucide-react";
import {
  AirVent,
  BadgeDollarSign,
  Building,
  Calculator,
  Calendar,
  ClipboardCheck,
  Clock,
  CookingPot,
  Droplets,
  Fan,
  FileText,
  Flame,
  Gauge,
  Hammer,
  Heater,
  Leaf,
  Refrigerator,
  Scale,
  Search,
  Snowflake,
  Store,
  Thermometer,
  Trash2,
  Warehouse,
  Wind,
  Wrench,
} from "lucide-react";

export interface LandingPageCard {
  icon?: LucideIcon;
  title: string;
  text: string;
}

export interface LandingPageFAQ {
  question: string;
  answer: string;
}

export interface LandingPageConfig {
  slug: string;
  /** Short label used in the lead email subject, e.g. "Heat Pumps & Rebates". */
  source: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** Headline: first line white, second line in the site's blue gradient. */
  h1: string;
  h1Accent: string;
  sub: string;
  heroImage: string;
  heroAlt: string;
  formTitle: string;
  /** Placeholder for the optional details box. */
  detailsPrompt: string;
  /** Show the file upload (drawings, summons photos, etc.). */
  upload?: { label: string };
  includedTitle: string;
  included: LandingPageCard[];
  steps: LandingPageCard[];
  faqs: LandingPageFAQ[];
}

const residentialSteps: LandingPageCard[] = [
  { title: "Site survey", text: "We look at the house, the equipment and the ductwork, and measure what the home actually needs." },
  { title: "Itemized quote", text: "You get a clear, line-by-line quote, usually with a standard and a high-efficiency option side by side." },
  { title: "Install", text: "Clean, careful installation by our own crew, with permits and inspections handled." },
  { title: "Start-up & walkthrough", text: "We start the system, check airflow and temperatures, and show you how everything works." },
];

const commercialSteps: LandingPageCard[] = [
  { title: "Intake", text: "Call or send the details: drawings, photos, equipment info or the problem you're seeing." },
  { title: "Site visit", text: "We survey the space and equipment and confirm what the job really requires." },
  { title: "Scope & quote", text: "A clear written scope and upfront price, ready for your GC, landlord or property manager." },
  { title: "Install & verify", text: "Work done to code, tested and documented, with the paperwork you need to close out." },
];

export const landingPages: LandingPageConfig[] = [
  {
    slug: "new-hvac-system",
    source: "New HVAC System",
    metaTitle: "New HVAC System Installation | NYC & Westchester",
    metaDescription:
      "New central air and heat pump systems for NYC and Westchester homes. Site survey, itemized quote, permits and start-up handled.",
    eyebrow: "New HVAC Systems · NYC & Westchester",
    h1: "New Heating & Cooling Systems",
    h1Accent: "Sized for Your Home",
    sub: "Central air, heat pumps and full system replacements. We survey the house, fix the duct problems and give you an itemized quote with standard and high-efficiency options.",
    heroImage: "/outdoor-ac-condensers.webp",
    heroAlt: "New outdoor air conditioning condensers beside a home",
    formTitle: "Request a Site Survey",
    detailsPrompt: "What do you have now, and what are you looking for? (optional)",
    includedTitle: "What a new system from Gotham includes",
    included: [
      { icon: Snowflake, title: "Central air systems", text: "New condenser, matched coil and air handler or furnace, on today's refrigerants." },
      { icon: Thermometer, title: "Heat pumps", text: "Cold-climate heat pumps that heat and cool, with NYSERDA and Con Edison rebates checked for you." },
      { icon: Wind, title: "Ductwork fixes", text: "Undersized returns, leaky joints and poor registers found on the survey and fixed in the quote." },
      { icon: Calculator, title: "Proper sizing", text: "Equipment sized from load calculations, not copied from the label on the old unit." },
      { icon: ClipboardCheck, title: "Permits & start-up", text: "We handle permits and inspections, then start up and test the system." },
      { icon: Gauge, title: "Smart controls", text: "A Wi-Fi thermostat set up and tested with the new system." },
    ],
    steps: residentialSteps,
    faqs: [
      {
        question: "How much does a new HVAC system cost?",
        answer:
          "It depends on the house, the equipment and the ductwork. After a site survey we give you an itemized quote, usually with a standard and a high-efficiency option side by side, so you can see exactly what you're paying for.",
      },
      {
        question: "Should I get a heat pump instead of central air?",
        answer:
          "Often, yes. A cold-climate heat pump cools in summer and heats in winter, and NYSERDA and Con Edison Clean Heat incentives can cover part of the cost. We can price both so you can compare.",
      },
      {
        question: "Do you handle permits and inspections?",
        answer: "Yes. We pull the permits and schedule the inspections wherever your town or the city requires them.",
      },
      {
        question: "What areas do you serve?",
        answer: "All five NYC boroughs and Westchester County.",
      },
    ],
  },
  {
    slug: "heating-replacement",
    source: "Boiler / Furnace Replacement",
    metaTitle: "Boiler & Furnace Replacement | NYC & Westchester",
    metaDescription:
      "Replace your old boiler or furnace with properly sized new equipment, or compare a cold-climate heat pump with rebates applied.",
    eyebrow: "Boiler & Furnace Replacement",
    h1: "Boiler & Furnace",
    h1Accent: "Replacement",
    sub: "Old heating system on its last legs? We replace boilers and furnaces with properly sized new equipment, and can price a cold-climate heat pump next to it, with rebates applied, so you can compare.",
    heroImage: "/furnace-unit.webp",
    heroAlt: "Newly installed gas furnace in a basement",
    formTitle: "Get a Replacement Quote",
    detailsPrompt: "What heating system do you have now, and how old is it? (optional)",
    includedTitle: "What's included in a replacement",
    included: [
      { icon: Flame, title: "New boilers", text: "Gas and steam boiler replacements sized to the building's real heat load." },
      { icon: Heater, title: "New furnaces", text: "High-efficiency gas furnaces matched to your ductwork and AC coil." },
      { icon: Leaf, title: "Heat pump option", text: "Switch to a cold-climate heat pump, with your old system kept as backup if you want." },
      { icon: Trash2, title: "Old equipment removed", text: "We disconnect, remove and dispose of the old boiler or furnace." },
      { icon: Wind, title: "Venting, gas & condensate", text: "Flue, gas and condensate connections done to code." },
      { icon: ClipboardCheck, title: "Permits, start-up & testing", text: "Permits and inspections handled, then a full start-up and safety check." },
    ],
    steps: residentialSteps,
    faqs: [
      {
        question: "Should I repair or replace my boiler or furnace?",
        answer:
          "If it's old, needs expensive parts or keeps breaking down, replacing it usually makes more sense. We'll tell you honestly once we've seen it, and give you a replacement quote you can weigh against the repair.",
      },
      {
        question: "Can I switch from a boiler or furnace to a heat pump?",
        answer:
          "In many homes, yes. A cold-climate heat pump can carry most or all of the heating load, and you can keep the boiler or furnace as backup. NYS Clean Heat incentives can apply, and we confirm eligibility before ordering equipment.",
      },
      {
        question: "Will I be without heat for long?",
        answer:
          "We give you the schedule with the quote and plan the changeover to keep the time without heat as short as possible.",
      },
      {
        question: "What areas do you serve?",
        answer: "All five NYC boroughs and Westchester County.",
      },
    ],
  },
  {
    slug: "heat-pump-installation",
    source: "Heat Pumps & Rebates",
    metaTitle: "Heat Pump Installation & NYSERDA Rebates | NYC",
    metaDescription:
      "Ducted and ductless heat pump installation in NYC and Westchester. NYSERDA-qualified contractor: we check your rebates and file the paperwork.",
    eyebrow: "Heat Pumps · NYSERDA & Con Edison Clean Heat",
    h1: "Heat Pump Installation",
    h1Accent: "With Rebates Handled",
    sub: "Ducted and ductless heat pumps that heat in winter and cool in summer. As a NYSERDA-qualified, Con Edison participating contractor, we check what you qualify for and file the paperwork.",
    heroImage: "/heating-cooling-hero.webp",
    heroAlt: "Row of heat pump condensers mounted on a building wall",
    formTitle: "Get a Free Rebate Assessment",
    detailsPrompt: "Home or building type, and what you heat and cool with now (optional)",
    includedTitle: "Heat pump systems we install",
    included: [
      { icon: Wind, title: "Ducted heat pumps", text: "Whole-home systems through new or existing ductwork." },
      { icon: AirVent, title: "Ductless mini-splits", text: "Single and multi-zone systems for homes, apartments and additions without ducts." },
      { icon: FileText, title: "Rebate paperwork", text: "NYSERDA and Con Edison Clean Heat applications prepared and filed for you." },
      { icon: BadgeDollarSign, title: "Free rebate assessment", text: "We tell you which incentives you qualify for before you commit." },
      { icon: Calculator, title: "Sized from load calcs", text: "Systems sized to your home's full heating load, so they keep up in winter." },
      { icon: Building, title: "Multifamily buildings", text: "Con Edison Multifamily Clean Heat incentives for building owners." },
    ],
    steps: residentialSteps,
    faqs: [
      {
        question: "How much can I get back in rebates?",
        answer:
          "It depends on your home, your utility and the equipment. NYSERDA and Con Edison Clean Heat incentives can cover a significant part of a heat pump install. We'll tell you what you qualify for in a free rebate assessment.",
      },
      {
        question: "Do heat pumps work in NYC winters?",
        answer:
          "Cold-climate heat pumps are built to keep heating in freezing weather. We size the system to your home's full heating load, and can keep your existing boiler or furnace as backup.",
      },
      {
        question: "Ducted or ductless?",
        answer:
          "If you have good ductwork, a ducted heat pump is usually the cleanest option. If you don't, ductless mini-splits heat and cool room by room. We'll recommend what fits after the survey.",
      },
      {
        question: "Do you handle the rebate paperwork?",
        answer: "Yes. We're a NYSERDA-qualified contractor, so we submit everything for you.",
      },
    ],
  },
  {
    slug: "townhouse-hvac",
    source: "Townhouse / Brownstone",
    metaTitle: "Townhouse & Brownstone HVAC | NYC Renovations",
    metaDescription:
      "Full mechanical packages for NYC townhouse and brownstone renovations: heat pumps, ductwork, ventilation, controls, balancing and DOB filing.",
    eyebrow: "Townhouse & Brownstone HVAC",
    h1: "Townhouse & Brownstone",
    h1Accent: "HVAC",
    sub: "Full mechanical packages for NYC townhouses: heat pumps, ductwork, ventilation, controls and balancing. Engineered, installed clean and filed with the DOB.",
    heroImage: "/ductwork-install.webp",
    heroAlt: "Ductwork and linear diffusers installed during a renovation",
    formTitle: "Request a Proposal",
    detailsPrompt: "Address or neighborhood, scope and timing. Architect or GC on board? (optional)",
    upload: { label: "Have mechanical drawings? Attach them (PDF)" },
    includedTitle: "A complete mechanical package",
    included: [
      { icon: Thermometer, title: "Heat pump systems", text: "Water-source, ducted and ductless systems sized from load calculations." },
      { icon: Wind, title: "Ductwork & air distribution", text: "Galvanized ductwork to SMACNA standards, with clean linear diffusers and registers." },
      { icon: Fan, title: "Ventilation & exhaust", text: "Outside air, bathroom and kitchen exhaust connections, designed and installed to code." },
      { icon: Gauge, title: "Controls & thermostats", text: "Programmable Wi-Fi controls, wiring and written sequences of operation." },
      { icon: ClipboardCheck, title: "Testing & balancing", text: "Certified air and water balancing with a report for the owner." },
      { icon: FileText, title: "DOB filing & closeout", text: "Mechanical permit filing, submittals, O&M manuals and owner training." },
    ],
    steps: [
      { title: "Drawings or site visit", text: "Send the engineer's drawings, or we survey the house and recommend a system." },
      { title: "Lump-sum proposal", text: "A clear scope, scope split with your GC and a lump-sum price." },
      { title: "Submittals & install", text: "Equipment submittals, then installation coordinated with the other trades." },
      { title: "Balance & close out", text: "Testing, balancing, commissioning support and closeout documents." },
    ],
    faqs: [
      {
        question: "Do you work from architect or engineer drawings?",
        answer:
          "Yes. We bid from your engineer's mechanical drawings, or survey the house and recommend a system if drawings aren't done yet.",
      },
      {
        question: "Do you file the DOB permit?",
        answer:
          "Yes. We file the DOB mechanical work permit as mechanical contractor of record and handle submittals and closeout.",
      },
      {
        question: "Can you work alongside my GC and architect?",
        answer:
          "Yes. We coordinate scope, schedule and drawings with your general contractor and architect from submittals through commissioning.",
      },
      {
        question: "What areas do you serve?",
        answer: "Manhattan, Brooklyn and the rest of the five boroughs, plus Westchester County.",
      },
    ],
  },
  {
    slug: "commercial-hvac-installation",
    source: "Commercial HVAC Install",
    metaTitle: "Commercial HVAC Installation | NYC Mechanical Contractor",
    metaDescription:
      "Rooftop units, split systems, heat pumps and ventilation for NYC commercial spaces. Engineered sizing, DOB filing and balancing.",
    eyebrow: "Commercial HVAC Installation",
    h1: "Commercial HVAC",
    h1Accent: "Installation",
    sub: "Rooftop units, split systems, heat pumps and ventilation for NYC offices, stores, restaurants and multifamily buildings. Sized from load calculations, filed with the DOB and balanced before handover.",
    heroImage: "/hvac-ductwork.webp",
    heroAlt: "Commercial ductwork installed in a ceiling",
    formTitle: "Request a Quote",
    detailsPrompt: "Building type, equipment and timeline. Have drawings or specs? (optional)",
    upload: { label: "Attach drawings, specs or photos (optional)" },
    includedTitle: "Commercial installs we handle",
    included: [
      { icon: Warehouse, title: "Rooftop & package units", text: "Replacements and new installs, rigged, set and started up." },
      { icon: AirVent, title: "Split systems & heat pumps", text: "Ducted and ductless systems for offices, retail and restaurants." },
      { icon: Fan, title: "Ventilation & exhaust", text: "Outside air, exhaust and ventilation improvements done to code." },
      { icon: Building, title: "Multifamily heat pumps", text: "Building-wide heat pump projects with Con Edison Clean Heat incentives." },
      { icon: FileText, title: "DOB filing & closeout", text: "Mechanical permit filing, submittals and closeout documents." },
      { icon: ClipboardCheck, title: "Testing & balancing", text: "Systems balanced and verified before handover." },
    ],
    steps: commercialSteps,
    faqs: [
      {
        question: "Do you handle DOB permits?",
        answer: "Yes. We file mechanical permits and provide submittals and closeout documentation.",
      },
      {
        question: "Can you bid from drawings?",
        answer: "Yes. Attach the drawings or specs above, or send them after you call, and we'll return a written scope and price.",
      },
      {
        question: "Do you work with GCs and property managers?",
        answer:
          "Yes. We provide clear scopes and coordination-ready communication for general contractors, landlords and property managers.",
      },
      {
        question: "Are incentives available?",
        answer:
          "Often. Con Edison's commercial and multifamily Clean Heat programs can apply to heat pump projects, and we're a NYSERDA-qualified, Con Edison participating contractor.",
      },
    ],
  },
  {
    slug: "commercial-hvac-service",
    source: "Commercial HVAC Service",
    metaTitle: "Commercial HVAC Service & Maintenance | NYC",
    metaDescription:
      "Repair and maintenance for rooftop units, split systems and boilers in NYC buildings. Phones answered 24/7, maintenance contracts available.",
    eyebrow: "Commercial HVAC Service",
    h1: "Commercial HVAC",
    h1Accent: "Service & Maintenance",
    sub: "Repair and maintenance for rooftop units, split systems and boilers in NYC buildings. Phones answered 24/7, same-week service and maintenance contracts with priority response.",
    heroImage: "/hvac-tools-closeup.webp",
    heroAlt: "HVAC service gauges and tools",
    formTitle: "Request Service",
    detailsPrompt: "Building address, equipment and what's happening (optional)",
    includedTitle: "Service for commercial buildings",
    included: [
      { icon: Wrench, title: "Rooftop unit repair", text: "Diagnostics and repair for package and rooftop units." },
      { icon: AirVent, title: "Split systems & heat pumps", text: "Repair for ducted and ductless systems in offices, stores and restaurants." },
      { icon: Flame, title: "Commercial boilers", text: "Boiler service and repair for commercial and multifamily buildings." },
      { icon: Calendar, title: "Maintenance contracts", text: "Quarterly or semi-annual visits with documented service records." },
      { icon: Clock, title: "Priority response", text: "Contract clients get priority for emergency and after-hours calls." },
      { icon: FileText, title: "Compliance documentation", text: "Records you can hand to landlords, insurers and inspectors." },
    ],
    steps: commercialSteps,
    faqs: [
      {
        question: "Do you answer after hours?",
        answer: "Yes. Our phones are answered 24 hours a day, 7 days a week.",
      },
      {
        question: "Do you offer maintenance contracts?",
        answer:
          "Yes. Quarterly or semi-annual visits, documented service, discounted repairs and priority response for contract clients.",
      },
      {
        question: "What equipment do you service?",
        answer: "Rooftop and package units, split systems, heat pumps, ventilation and commercial boilers.",
      },
      {
        question: "What areas do you serve?",
        answer: "All five NYC boroughs and Westchester County.",
      },
    ],
  },
  {
    slug: "restaurant-hoods",
    source: "Restaurant Hoods",
    metaTitle: "Restaurant Hood Installation | NYC Commercial Kitchens",
    metaDescription:
      "Commercial kitchen hood, exhaust and ventilation installation for NYC restaurants. Site visit, clear scope and upfront quote.",
    eyebrow: "Restaurant Hoods · Commercial Kitchens",
    h1: "Restaurant Hood",
    h1Accent: "Installation",
    sub: "Commercial kitchen hoods, exhaust and ventilation for new restaurants and renovations. We measure on site, give you a clear scope and upfront quote, and work around your buildout schedule.",
    heroImage: "/restaurant-hood-hero.webp",
    heroAlt: "Stainless steel commercial kitchen exhaust hood",
    formTitle: "Request a Site Visit",
    detailsPrompt: "Restaurant address, kitchen size and opening date (optional)",
    upload: { label: "Attach plans or photos (optional)" },
    includedTitle: "Kitchen hood & ventilation work",
    included: [
      { icon: CookingPot, title: "Hood installation", text: "Commercial kitchen hood installation for new and existing kitchens." },
      { icon: Fan, title: "Exhaust & ventilation", text: "Exhaust and ventilation support so the hood captures what it should." },
      { icon: Hammer, title: "Buildouts & renovations", text: "New restaurant buildouts and kitchen renovations." },
      { icon: Wrench, title: "Undersized hoods replaced", text: "Outdated or undersized hood systems replaced." },
      { icon: Wind, title: "Smoke & odor problems", text: "Poor capture, smoke and odor issues diagnosed and fixed." },
      { icon: Calendar, title: "Timeline coordination", text: "Work scheduled around your GC and opening date." },
    ],
    steps: [
      { title: "Quick intake", text: "Tell us about the kitchen, the equipment line and your timeline." },
      { title: "Site visit & measurements", text: "We measure the space and the cooking line on site." },
      { title: "Scope & quote", text: "Upfront pricing with a clear scope of work." },
      { title: "Install & verify", text: "Installation, then a check that the system captures and exhausts properly." },
    ],
    faqs: [
      {
        question: "Do you clean hoods?",
        answer:
          "Our focus is installing and replacing hood and exhaust systems. For routine hood cleaning you'll want a dedicated cleaning service.",
      },
      {
        question: "Can you work with my GC and architect?",
        answer: "Yes. We coordinate with your general contractor and buildout schedule.",
      },
      {
        question: "What areas do you serve?",
        answer: "All five NYC boroughs and Westchester County.",
      },
    ],
  },
  {
    slug: "commercial-refrigeration",
    source: "Commercial Refrigeration",
    metaTitle: "Walk-In Cooler & Commercial Refrigeration Service | NYC",
    metaDescription:
      "Walk-in, reach-in and display cooler repair and installation for NYC restaurants, delis and supermarkets. Phones answered 24/7.",
    eyebrow: "Commercial Refrigeration",
    h1: "Walk-In & Commercial",
    h1Accent: "Refrigeration",
    sub: "Walk-in, reach-in and display cooler repair and installation for restaurants, delis, bodegas and supermarkets across NYC. Phones answered 24/7.",
    heroImage: "/hvac-technician.webp",
    heroAlt: "Technician testing refrigeration equipment with a meter",
    formTitle: "Request Service",
    detailsPrompt: "Business address, equipment type and the problem (optional)",
    includedTitle: "Refrigeration we service",
    included: [
      { icon: Snowflake, title: "Walk-in coolers & freezers", text: "Service, repair and installation of walk-in boxes." },
      { icon: Refrigerator, title: "Reach-in units", text: "Glass-door, solid-door and under-counter refrigeration." },
      { icon: Store, title: "Open display cases", text: "Multi-deck, produce and dairy cases for delis and supermarkets." },
      { icon: Wrench, title: "Compressor replacement", text: "Failed compressors diagnosed and replaced." },
      { icon: Droplets, title: "Refrigerant leaks", text: "Leak detection, repair and recharge." },
      { icon: Thermometer, title: "Temperature controls", text: "Thermostats and controls repaired so product stays at temperature." },
    ],
    steps: commercialSteps,
    faqs: [
      {
        question: "Do you answer after hours?",
        answer: "Yes. Our phones are answered 24 hours a day, 7 days a week.",
      },
      {
        question: "Do you install new walk-ins?",
        answer: "Yes. We service, repair and install walk-in coolers and freezers.",
      },
      {
        question: "What areas do you serve?",
        answer: "All five NYC boroughs and Westchester County.",
      },
    ],
  },
  {
    slug: "fdny-violations",
    source: "FDNY Violations",
    metaTitle: "FDNY HVAC Violations VC19 & VC26 | NYC Resolution",
    metaDescription:
      "FDNY VC19 and VC26 HVAC violation resolution: DOB document recovery, physical correction, FB-09 filing and OATH hearing representation.",
    eyebrow: "FDNY Violation Resolution",
    h1: "FDNY HVAC Violations",
    h1Accent: "VC19 & VC26 Resolved",
    sub: "We recover the DOB documents, correct the equipment, file the FDNY Certificate of Correction (FB-09) and can represent you at the OATH hearing.",
    heroImage: "/hvac-blueprint.webp",
    heroAlt: "HVAC mechanical drawing",
    formTitle: "Send Us Your Summons",
    detailsPrompt: "Building address, violation code and hearing date if you have it (optional)",
    upload: { label: "Attach a photo or PDF of the summons (optional)" },
    includedTitle: "End-to-end violation resolution",
    included: [
      { icon: FileText, title: "VC19 documentation", text: "Missing Equipment Use Permits, Certificates of Compliance and sign-off records recovered." },
      { icon: Wrench, title: "VC26 physical corrections", text: "Equipment, ductwork and venting corrected to clear safety violations." },
      { icon: Search, title: "DOB document recovery", text: "We track down the records the FDNY is asking for." },
      { icon: ClipboardCheck, title: "FB-09 filing", text: "Certificate of Correction prepared and filed with supporting proof." },
      { icon: Scale, title: "OATH hearing representation", text: "We attend the hearing with a full proof-of-compliance package." },
      { icon: BadgeDollarSign, title: "Upfront scope & pricing", text: "You know the plan and the price before work starts." },
    ],
    steps: [
      { title: "Send the summons", text: "A photo or PDF of the summons is all we need to start." },
      { title: "Review & plan", text: "We identify what's missing or non-compliant and map the fix." },
      { title: "Correct & document", text: "Physical corrections and document recovery, all photographed and recorded." },
      { title: "File & attend", text: "We file the FB-09 and attend the OATH hearing if needed." },
    ],
    faqs: [
      {
        question: "What is an FDNY VC19 violation?",
        answer:
          "VC19 is issued when required DOB compliance documentation is missing or can't be produced for HVAC equipment, including Equipment Use Permits, Certificates of Compliance and sign-off records.",
      },
      {
        question: "What is an FDNY VC26 violation?",
        answer:
          "VC26 is issued for physical safety violations related to HVAC equipment, such as ductwork blocking egress, installations in restricted locations, missing fire protection components or improper venting clearances.",
      },
      {
        question: "How much time do I have?",
        answer:
          "Cure periods are typically 30 to 60 days from the date of the summons. Contact us as soon as you receive it; earlier intervention gives us more options.",
      },
      {
        question: "Can you attend the OATH hearing for me?",
        answer:
          "Yes. We attend OATH hearings to present proof of compliance and pursue dismissal or penalty reduction.",
      },
    ],
  },
];

export function getLandingPage(slug: string): LandingPageConfig | undefined {
  return landingPages.find((p) => p.slug === slug);
}
