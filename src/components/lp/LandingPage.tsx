import Image from "next/image";
import { ArrowRight, CheckCircle2, HelpCircle, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/constants";
import type { LandingPageConfig } from "@/lib/landing-pages";
import LeadForm from "@/components/lp/LeadForm";

const areas = ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island", "Westchester"];
const heroBadges = ["NYSERDA Qualified", "Con Edison Participating Contractor", "Phones Answered 24/7"];

/**
 * Google Ads landing page, built from the same pieces as the service pages
 * (hero, marquee, card sections, FAQ cards, dark CTA card) so it looks like
 * the rest of gothamac.com. Differences: the lead form sits in the hero,
 * "Get a Quote" points at that form, and there is a sticky call bar on mobile.
 */
export default function LandingPage({ page }: { page: LandingPageConfig }) {
  return (
    <>
      <Navbar showBanner={false} quoteHref="#quote" />
      <main id="main-content">
        {/* ============================================================ */}
        {/*  HERO — same treatment as the service pages, form on right    */}
        {/* ============================================================ */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden" aria-label="Hero">
          <div className="absolute inset-0">
            <Image
              src={page.heroImage}
              alt={page.heroAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-dark/40" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-32 lg:pt-40 pb-28 lg:pb-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                {/* Glass badge */}
                <div className="inline-flex items-center gap-3 glass-dark rounded-full px-5 py-2.5 mb-10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                    </span>
                    <span className="text-white/60 text-sm font-medium">Now Serving NYC &amp; Westchester</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-white/10" />
                  <span className="hidden sm:inline text-blue-light text-sm font-medium">Licensed &amp; Insured</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                  <span className="block text-white">{page.h1}</span>
                  <span className="block text-gradient mt-2">{page.h1Accent}</span>
                </h1>

                <p className="text-lg sm:text-xl text-white/50 max-w-xl mb-12 leading-relaxed">{page.sub}</p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a href={COMPANY.phoneTel} className="btn-primary text-base px-8 py-4">
                    <Phone className="w-5 h-5" />
                    Call {COMPANY.phone}
                  </a>
                  <a href="#quote" className="btn-outline-dark text-base px-8 py-4">
                    {page.formTitle}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  {heroBadges.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-white/40">
                      <div className="w-1 h-1 rounded-full bg-blue" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
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

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </section>

        <Marquee />

        {/* ============================================================ */}
        {/*  WHAT'S INCLUDED                                              */}
        {/* ============================================================ */}
        <section
          className="py-24 sm:py-32 section-cool noise-overlay grid-pattern-light relative overflow-hidden"
          aria-labelledby="included-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <div className="section-line mx-auto mb-6" />
              <h2 id="included-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4">
                What&apos;s <span className="text-gradient">Included</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">{page.includedTitle}.</p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.included.map((item, i) => {
                const Icon = item.icon ?? CheckCircle2;
                return (
                  <FadeIn key={item.title} delay={i * 0.05}>
                    <div className="group h-full bg-white rounded-2xl p-8 card-gradient-border">
                      <div className="w-14 h-14 rounded-2xl bg-blue-subtle flex items-center justify-center mb-5 group-hover:bg-blue/10 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-blue" />
                      </div>
                      <h3 className="font-bold text-dark text-lg mb-2 leading-snug">{item.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  HOW IT WORKS — dark                                          */}
        {/* ============================================================ */}
        <section className="py-24 sm:py-32 section-dark-mesh overflow-hidden relative" aria-labelledby="process-heading">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn className="text-center mb-16">
              <div className="section-line mx-auto mb-6" />
              <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                How It <span className="text-gradient">Works</span>
              </h2>
              <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
                From first call to final walkthrough.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {page.steps.map((step, i) => (
                <FadeIn key={step.title} delay={i * 0.08}>
                  <div className="h-full card-glass rounded-2xl p-6">
                    <span className="text-gradient text-3xl font-bold">0{i + 1}</span>
                    <h3 className="font-bold text-white text-base mt-4 mb-2 leading-snug">{step.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  AREAS — blue banner                                          */}
        {/* ============================================================ */}
        <section className="bg-blue py-12 sm:py-16" aria-label="Service areas">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white/80" />
                <span className="text-white font-bold text-lg sm:text-xl">Areas We Serve:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                {areas.map((area, i) => (
                  <span key={area} className="text-white/90 font-medium text-base sm:text-lg flex items-center gap-3">
                    {area}
                    {i < areas.length - 1 && <span className="w-1 h-1 rounded-full bg-white/40" />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FAQ — card grid, same as service pages                       */}
        {/* ============================================================ */}
        <section className="py-24 sm:py-32 section-slate" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <div className="section-line mx-auto mb-6" />
              <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-2xl p-7 card-interactive">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-subtle flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HelpCircle className="w-5 h-5 text-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-base mb-2">{faq.question}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA — dark rounded card                                      */}
        {/* ============================================================ */}
        <section className="py-24 sm:py-32 section-cool" aria-label="Call to action">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[32px] overflow-hidden bg-dark p-10 sm:p-14 lg:p-20">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 max-w-2xl mx-auto">
                  Ready to get <span className="text-gradient">started?</span>
                </h2>
                <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                  Call now, day or night, or send a request and we&apos;ll call you back with next steps.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href={COMPANY.phoneTel} className="btn-primary text-base px-10 py-5">
                    <Phone className="w-5 h-5" />
                    Call {COMPANY.phone}
                  </a>
                  <a href="#quote" className="btn-outline-dark text-base px-10 py-5">
                    {page.formTitle}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="pb-20 sm:pb-0 bg-dark">
        <Footer />
      </div>

      {/* Sticky mobile action bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 glass-dark border-t border-white/10 p-3 flex gap-2">
        <a href={COMPANY.phoneTel} className="btn-primary flex-1 py-3.5 px-4 text-base">
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a href="#quote" className="btn-outline-dark flex-1 py-3.5 px-4 text-base">
          Get a Quote
        </a>
      </div>
    </>
  );
}
