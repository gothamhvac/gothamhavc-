import Image from "next/image";
import Link from "next/link";
import { Award, BadgeCheck, CheckCircle2, Clock, Phone, Shield, Zap } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { LandingPageConfig } from "@/lib/landing-pages";
import LeadForm from "@/components/lp/LeadForm";

const trust = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Award, text: "NYSERDA Qualified" },
  { icon: Zap, text: "Con Edison Participating Contractor" },
  { icon: BadgeCheck, text: "15+ Years Experience" },
  { icon: Clock, text: "Phones Answered 24/7" },
];

/**
 * Google Ads landing page. Deliberately stripped down: no site navigation, no
 * promo popup, one job (call or send the form). Noindex is set in the route.
 */
export default function LandingPage({ page }: { page: LandingPageConfig }) {
  return (
    <>
      {/* Header: logo + phone only */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Image
            src="/gotham-logo.png"
            alt="Gotham HVAC"
            width={200}
            height={60}
            priority
            className="h-12 w-auto brightness-0 invert"
          />
          <a
            href={COMPANY.phoneTel}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-5 py-2.5 text-white font-semibold hover:bg-white/20 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
        </div>
      </header>

      <main id="main-content" className="pb-20 sm:pb-0">
        {/* Hero: headline + call on the left, form on the right */}
        <section className="relative bg-dark overflow-hidden">
          <Image
            src={page.heroImage}
            alt={page.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/60" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-14 lg:pt-36 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7">
                <p className="text-blue-light text-sm font-semibold uppercase tracking-wider mb-4">{page.eyebrow}</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-6">
                  {page.h1}
                </h1>
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">{page.sub}</p>

                <a href={COMPANY.phoneTel} className="btn-primary text-lg px-8 py-4">
                  <Phone className="w-5 h-5" />
                  Call {COMPANY.phone}
                </a>
                <p className="text-white/50 text-sm mt-3">Answered 24 hours a day, 7 days a week.</p>

                <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
                  {trust.map((t) => (
                    <li key={t.text} className="flex items-center gap-2.5 text-white/80 text-sm">
                      <t.icon className="w-4 h-4 text-blue-light flex-shrink-0" />
                      {t.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <LeadForm
                  source={page.source}
                  title={page.formTitle}
                  detailsPrompt={page.detailsPrompt}
                  uploadLabel={page.upload?.label}
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-10">{page.includedTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.included.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                  <CheckCircle2 className="w-6 h-6 text-blue mb-3" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-10">How it works</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {page.steps.map((step, i) => (
                <li key={step.title} className="rounded-2xl bg-white border border-slate-200 p-6">
                  <span className="text-blue font-bold text-sm">0{i + 1}</span>
                  <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-1.5">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-8">Common questions</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-900">
                    {faq.question}
                    <span className="text-blue text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 sm:py-20 bg-dark">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Ready to get started?</h2>
            <p className="text-white/60 text-lg mb-8">Call now or send a request. We&apos;ll call you back with next steps.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={COMPANY.phoneTel} className="btn-primary text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Call {COMPANY.phone}
              </a>
              <a href="#quote" className="btn-secondary text-lg px-8 py-4">
                {page.formTitle}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="bg-dark border-t border-white/10 py-8 pb-28 sm:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3 justify-between text-sm text-white/40">
          <p>
            {COMPANY.legalName} · {COMPANY.address.full} · Licensed &amp; Insured
          </p>
          <p className="flex gap-4">
            <Link href="/" className="hover:text-white/70">gothamac.com</Link>
            <Link href="/privacy" className="hover:text-white/70">Privacy</Link>
            <Link href="/terms" className="hover:text-white/70">Terms</Link>
          </p>
        </div>
      </footer>

      {/* Sticky mobile action bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-dark/95 backdrop-blur border-t border-white/10 p-3 flex gap-2">
        <a href={COMPANY.phoneTel} className="btn-primary flex-1 justify-center py-3.5">
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a href="#quote" className="flex-1 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold py-3.5">
          Get a Quote
        </a>
      </div>
    </>
  );
}
