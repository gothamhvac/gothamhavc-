"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { FadeIn } from "@/components/motion/FadeIn";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-white clip-angle-top" aria-label="Call to action">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center" scale={0.96} blur>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight mb-6 max-w-3xl mx-auto">
            Ready to get your{" "}
            <span className="text-gradient">HVAC</span>{" "}
            done right?
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
            From first call to final walkthrough — engineering-led service you can trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#contact" className="btn-primary text-base px-10 py-5">
              Request Service
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={COMPANY.phoneTel} className="btn-secondary text-base px-10 py-5">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
