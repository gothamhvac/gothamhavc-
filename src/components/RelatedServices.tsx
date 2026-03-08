import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface RelatedService {
  label: string;
  href: string;
  description: string;
}

const allServices: Record<string, RelatedService> = {
  "heating-cooling": {
    label: "Heating & Cooling",
    href: "/services/heating-cooling",
    description: "Residential and commercial heating and cooling service, repair, and upgrades.",
  },
  "commercial-hvac": {
    label: "Commercial HVAC",
    href: "/services/commercial-hvac",
    description: "Rooftop units, package systems, and ventilation for businesses.",
  },
  "boiler-furnace-repair": {
    label: "Boiler & Furnace Repair",
    href: "/services/boiler-furnace-repair",
    description: "Steam and hot water boiler diagnostics, furnace repair, and maintenance.",
  },
  "restaurant-hoods": {
    label: "Restaurant Hoods",
    href: "/services/restaurant-hoods",
    description: "Commercial kitchen hood installation and exhaust ventilation systems.",
  },
  "heat-pump-water-heaters": {
    label: "Water Heaters",
    href: "/services/heat-pump-water-heaters",
    description: "Tankless and heat pump water heater installation and service.",
  },
  "load-calculations": {
    label: "Load Calculations",
    href: "/services/load-calculations",
    description: "Manual J load calculations for proper HVAC system sizing.",
  },
  "service-repair": {
    label: "Service & Repair",
    href: "/services/service-repair",
    description: "Fast HVAC diagnostics and expert repair for all system types.",
  },
  "commercial-refrigeration": {
    label: "Commercial Refrigeration",
    href: "/services/commercial-refrigeration",
    description: "Walk-in coolers, freezers, and display merchandiser service.",
  },
  "cooling-assistance": {
    label: "Cooling Assistance",
    href: "/services/cooling-assistance",
    description: "Free AC installation through HEAP and Essential Plan programs.",
  },
  "fdny-violations": {
    label: "FDNY Violation Resolution",
    href: "/services/fdny-violations",
    description: "VC19 & VC26 resolution — DOB recovery, physical correction, FB-09 filing, and OATH representation.",
  },
  "maintenance-plans": {
    label: "Maintenance Plans",
    href: "/maintenance-plans",
    description: "Scheduled HVAC maintenance with priority service and discounted repairs.",
  },
};

export default function RelatedServices({
  current,
  services,
}: {
  current: string;
  services: string[];
}) {
  const items = services
    .filter((s) => s !== current && allServices[s])
    .map((s) => allServices[s])
    .slice(0, 3);

  if (items.length === 0) return null;

  const currentService = allServices[current];

  return (
    <section className="py-20 bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-1.5 text-sm">
            <li>
              <Link href="/" className="text-text-tertiary hover:text-blue transition-colors">Home</Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-text-tertiary" /></li>
            <li>
              <Link href="/services" className="text-text-tertiary hover:text-blue transition-colors">Services</Link>
            </li>
            {currentService && (
              <>
                <li><ChevronRight className="w-3.5 h-3.5 text-text-tertiary" /></li>
                <li>
                  <span className="text-text-muted font-medium" aria-current="page">{currentService.label}</span>
                </li>
              </>
            )}
          </ol>
        </nav>

        <h2 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight mb-10">
          Related Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-2xl p-6 border border-border hover:border-blue/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-dark group-hover:text-blue transition-colors mb-2">
                {item.label}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-blue text-sm font-medium group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
