"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const fade = (delay: number, extras?: Record<string, unknown>) => ({
    initial: {
      opacity: 0,
      y: shouldReduce ? 0 : 20,
      filter: shouldReduce ? "none" : "blur(6px)",
      ...(!shouldReduce && extras),
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      ...(extras && Object.fromEntries(Object.keys(extras).map((k) => [k, k === "scale" ? 1 : 0]))),
    },
    transition: {
      duration: shouldReduce ? 0 : 0.7,
      delay: shouldReduce ? 0 : delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  });

  return (
    <section className="relative min-h-screen" aria-label="Hero">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="Commercial HVAC rooftop units on a New York City building"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/80 to-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-dark/40" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-0 right-0 glow-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-36 lg:pt-44 pb-32 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="max-w-3xl">
            {/* Status badge */}
            <motion.div {...fade(0.1)} className="inline-flex items-center gap-3 glass-dark rounded-full px-5 py-2.5 mb-10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-white/70 text-sm font-medium">
                  Now serving NYC &amp; Tri-State
                </span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-blue-light text-sm font-medium">Licensed &amp; Insured</span>
            </motion.div>

            {/* Headline — NO animation, renders instantly for LCP */}
            <div className="mb-8">
              <h1 className="hero-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.15]">
                <span className="block text-white">
                  Engineering-Led
                </span>
                <span className="block text-gradient mt-2">
                  Heating &amp; Cooling
                </span>
                <span className="block text-white/60 mt-2">
                  for NYC + Tri-State
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p {...fade(0.3)} className="text-lg sm:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
              Residential and commercial HVAC service, repairs, and upgrades — diagnosed, sized, and installed right the first time.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.45)} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#contact" className="btn-primary text-base px-8 py-4">
                Request Service
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={COMPANY.phoneTel} className="btn-outline-dark text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                Call {COMPANY.phone}
              </a>
            </motion.div>

            {/* Trust text row */}
            <motion.div {...fade(0.6)} className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {["Con Edison Contractor", "NYSERDA Qualified", "All 5 NYC Boroughs"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-white/50">
                  <div className="w-1 h-1 rounded-full bg-blue" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Con Edison / NYSERDA badge */}
          <motion.div {...fade(0.5, { scale: 0.9 })} className="hidden lg:flex flex-col items-center gap-5">
            <Image
              src="/con-edison-badge.jpg"
              alt="Con Edison Participating Contractor"
              width={220}
              height={220}
              className="rounded-full"
              priority={false}
            />
            <div className="text-center">
              <p className="text-white/70 text-sm font-semibold">Con Edison</p>
              <p className="text-white/40 text-xs">Participating Contractor</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into dark Marquee */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B1120] to-transparent z-[5]" />
    </section>
  );
}
