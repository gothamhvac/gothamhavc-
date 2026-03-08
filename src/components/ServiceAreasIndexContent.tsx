import Link from "next/link";
import { ArrowRight, MapPin, Building2, TreePine, Home, Phone } from "lucide-react";
import { serviceAreas } from "@/lib/service-areas";
import { COMPANY } from "@/lib/constants";

const regions = [
  {
    name: "New York City",
    key: "NYC" as const,
    icon: Building2,
    description: "All five boroughs — Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.",
  },
  {
    name: "Westchester County",
    key: "Westchester" as const,
    icon: TreePine,
    description: "Yonkers, New Rochelle, White Plains, Mount Vernon, and surrounding areas.",
  },
  {
    name: "Nassau County (Long Island)",
    key: "Nassau County" as const,
    icon: Home,
    description: "Hempstead, Garden City, Great Neck, Mineola, Valley Stream, and nearby communities.",
  },
];

export default function ServiceAreasIndexContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-dark-mesh noise-overlay pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="grid-pattern absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 mb-6">
              <MapPin className="w-4 h-4 text-blue" />
              <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                Service Areas
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Serving NYC,{" "}
              <span className="text-gradient">Westchester</span>
              {" "}&{" "}
              <span className="text-gradient">Long Island</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
              Engineering-led HVAC contracting for homes and businesses across
              the Tri-State area. Licensed, insured, and ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* ── Regions ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {regions.map((region, ri) => {
            const areas = serviceAreas.filter((a) => a.region === region.key);
            const RegionIcon = region.icon;

            return (
              <div
                key={region.key}
                className={ri > 0 ? "mt-16 sm:mt-20" : ""}
              >
                {/* Region header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center">
                    <RegionIcon className="w-5 h-5 text-blue" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-dark">
                    {region.name}
                  </h2>
                </div>
                <p className="text-text-secondary mt-2 mb-8 max-w-xl">
                  {region.description}
                </p>

                {/* Area cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {areas.map((area) => (
                    <div
                      key={area.slug}
                    >
                      <Link
                        href={`/service-areas/${area.slug}`}
                        className="group card-gradient-border block p-6 h-full"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue" />
                            <h3 className="text-lg font-bold text-dark group-hover:text-blue transition-colors">
                              {area.name}
                            </h3>
                          </div>
                          <ArrowRight className="w-4 h-4 text-text-tertiary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-3">
                          {area.intro[0].slice(0, 120)}...
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {area.neighborhoods.slice(0, 4).map((n) => (
                            <span
                              key={n}
                              className="px-2 py-0.5 rounded-md bg-surface text-[11px] text-text-tertiary font-medium"
                            >
                              {n}
                            </span>
                          ))}
                          {area.neighborhoods.length > 4 && (
                            <span className="px-2 py-0.5 rounded-md bg-surface text-[11px] text-text-tertiary font-medium">
                              +{area.neighborhoods.length - 4} more
                            </span>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-cool py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
              Don&apos;t see your area?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              We may still be able to help. Give us a call and we&apos;ll let you
              know if we can serve your location.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#contact" className="btn-primary">
                Request Service
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={COMPANY.phoneTel} className="btn-secondary">
                <Phone className="w-5 h-5" />
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
