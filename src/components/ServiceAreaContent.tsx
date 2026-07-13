import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Building,
  AlertTriangle,
  Wrench,
  Phone,
  ChevronRight,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import type { ServiceArea } from "@/lib/service-areas";
import { COMPANY } from "@/lib/constants";

interface ServiceAreaContentProps {
  area: ServiceArea;
}

export default function ServiceAreaContent({ area }: ServiceAreaContentProps) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative">
        <div className="relative h-72 sm:h-80 lg:h-[28rem] overflow-hidden">
          <Image
            src={area.heroImage}
            alt={`HVAC services in ${area.name}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
          <div className="grid-pattern absolute inset-0 pointer-events-none" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-4">
                <Link href="/service-areas" className="hover:text-white/70 transition-colors">
                  Service Areas
                </Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/60">{area.region}</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue/20 border border-blue/20 mb-4">
                <MapPin className="w-3.5 h-3.5 text-blue-light" />
                <span className="text-xs font-semibold text-blue-light">{area.region}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                HVAC Services in{" "}
                <span className="text-gradient">{area.name}</span>
              </h1>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/#contact" className="btn-primary text-sm px-6 py-3">
                  Request Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={COMPANY.phoneTel}
                  className="btn-outline-dark text-sm px-6 py-3"
                >
                  <Phone className="w-4 h-4" />
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div>
              {area.intro.map((p, i) => (
                <p
                  key={i}
                  className="text-text-secondary leading-relaxed mb-5 text-base sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Building Types ── */}
      <section className="section-cool py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center">
                <Building className="w-5 h-5 text-blue" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark">
                Buildings We Serve in {area.name}
              </h2>
            </div>
            <div className="section-line mt-4 mb-10" />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {area.buildingTypes.map((bt, i) => (
              <div
                key={i}
                className="card-gradient-border p-5"
              >
                <p className="text-sm font-medium text-dark">{bt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Challenges ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-red/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark">
                Common HVAC Challenges in {area.name}
              </h2>
            </div>
            <div className="section-line mt-4 mb-10" />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {area.commonChallenges.map((ch, i) => (
              <div
                key={i}
                className="card-accent-left p-6"
              >
                <h3 className="text-base font-bold text-dark mb-2">{ch.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {ch.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services We Offer ── */}
      <section className="section-dark-mesh noise-overlay py-14 sm:py-20">
        <div className="grid-pattern absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-blue" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Services in {area.name}
              </h2>
            </div>
            <p className="text-white/40 mt-3 mb-10 max-w-xl">
              We offer the full range of HVAC services to {area.name} homes and
              businesses.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {area.popularServices.map((svc, i) => (
              <div
                key={i}
              >
                <Link
                  href={svc.href}
                  className="group card-glass p-5 flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                    {svc.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-blue transition-colors" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Neighborhoods ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark">
                Neighborhoods We Cover
              </h2>
            </div>
            <div className="section-line mt-4 mb-10" />
          </div>

          <div
            className="flex flex-wrap gap-2"
          >
            {area.neighborhoods.map((n, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-surface border border-border text-sm text-text-secondary font-medium"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Area-specific FAQ ── */}
      {area.faqs && area.faqs.length > 0 && (
        <section className="section-cool py-14 sm:py-20" aria-label={`Frequently asked questions about HVAC in ${area.name}`}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-blue" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark">
                {area.name} HVAC — Frequently Asked Questions
              </h2>
            </div>
            <div className="section-line mt-4 mb-8" />

            <div className="space-y-4">
              {area.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group card-gradient-border p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <h3 className="text-base font-bold text-dark leading-snug">
                      {faq.question}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-blue flex-shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-90" />
                  </summary>
                  <p className="text-sm text-text-secondary leading-relaxed mt-4">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Helpful Guides (area → Learn cross-links) ── */}
      {area.guides && area.guides.length > 0 && (
        <section className="bg-white py-14 sm:py-20" aria-label={`HVAC guides relevant to ${area.name}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark">
                Helpful Guides for {area.name} Homeowners
              </h2>
            </div>
            <div className="section-line mt-4 mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {area.guides.map((g, i) => (
                <Link
                  key={i}
                  href={g.href}
                  className="group card-gradient-border p-5 flex items-center justify-between gap-4"
                >
                  <span className="text-sm font-semibold text-dark group-hover:text-blue transition-colors">
                    {g.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-text-tertiary group-hover:text-blue transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/*
        ── Recent Work in {area.name} ──
        TODO: owner to supply real testimonials/photos for this area.
        Intentionally NOT rendered until real, area-specific content exists —
        do not ship placeholder or fabricated reviews (violates Google guidelines
        and the no-fake-content rule). When photos/quotes are ready, add a
        `recentWork` field to the ServiceArea and render it here.
      */}

      {/* ── CTA ── */}
      <section className="section-cool py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
              Need HVAC service in {area.name}?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Licensed, insured, and ready to help. Get in touch for a free
              estimate or to schedule a service call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#contact" className="btn-primary">
                Get a Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={COMPANY.phoneTel}
                className="btn-secondary"
              >
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
