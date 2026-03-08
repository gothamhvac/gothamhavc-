"use client";

import Link from "next/link";
import { ArrowRight, DollarSign, Leaf } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export default function Rebates() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden clip-angle-bottom" aria-label="NYSERDA Rebates and Incentives">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn scale={0.96} blur>
        <div className="relative rounded-[32px] overflow-hidden bg-dark p-10 sm:p-14 lg:p-20">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5">
                    <Leaf className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">Save Money</span>
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
                  NYSERDA Rebates &amp;<br />
                  <span className="text-gradient">NYC Incentives</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed">
                  Thinking about heat pumps or high-efficiency water heating?
                  Incentives may be available through NYSERDA and NYC Clean Heat
                  programs. We help you understand your options and plan the right system.
                </p>
              </div>

              <div className="flex flex-col gap-4 flex-shrink-0">
                <Link href="/nyserda-rebates" className="btn-primary text-base px-8 py-5 justify-center">
                  Learn About Incentives
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-3 justify-center text-white/40">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm">Up to $10,000+ in savings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
