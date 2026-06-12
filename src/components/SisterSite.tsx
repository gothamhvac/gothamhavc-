"use client";

import Image from "next/image";
import { ArrowRight, Wind } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export default function SisterSite() {
  return (
    <section className="py-24 sm:py-32 bg-white" aria-label="Gotham Appliances — Window, Through-the-Wall, and Portable ACs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn scale={0.96} blur>
          <div className="relative rounded-[32px] overflow-hidden bg-white border border-dark/10 shadow-sm p-10 sm:p-14 lg:p-16">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 bg-blue/5 border border-blue/15 rounded-full px-4 py-1.5 w-fit mb-6">
                  <Wind className="w-4 h-4 text-blue" />
                  <span className="text-blue text-sm font-medium">Window, Wall &amp; Portable ACs</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-5">
                  Need a Window, Through-the-Wall, or Portable AC?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Visit our sister company <strong className="text-dark">Gotham Appliances</strong> for
                  window, through-the-wall, and portable air conditioners — delivered and installed
                  across NYC &amp; Long Island, with haul-away of your old unit.
                </p>
              </div>

              <div className="flex flex-col items-center gap-6 flex-shrink-0">
                <Image
                  src="/gotham-appliances-logo.png"
                  alt="Gotham Appliances"
                  width={280}
                  height={74}
                  className="h-auto w-[240px] sm:w-[280px]"
                />
                <a
                  href="https://gothamappliances.com"
                  target="_blank"
                  rel="noopener"
                  className="btn-primary text-base px-8 py-5 justify-center"
                >
                  Shop Gotham Appliances
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
