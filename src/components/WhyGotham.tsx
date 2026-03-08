"use client";

import Image from "next/image";
import { Gauge, Building, MessageSquare, ShieldCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

const reasons = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Detail-driven and thorough",
    description:
      "We don't guess — we diagnose, measure, and verify. Every project is backed by careful planning and proper execution.",
  },
  {
    num: "02",
    icon: Gauge,
    title: "Better sizing = better comfort",
    description:
      "We focus on airflow, controls, and proper capacity. No oversized systems, no wasted energy, no hot and cold spots.",
  },
  {
    num: "03",
    icon: Building,
    title: "Residential + commercial",
    description:
      "From studio apartments to rooftops to restaurant kitchens — we handle the full range of HVAC work across NYC.",
  },
  {
    num: "04",
    icon: MessageSquare,
    title: "Clear communication",
    description:
      "Upfront scope, documented recommendations, and transparent pricing. You'll always know what's happening and why.",
  },
];

export default function WhyGotham() {
  return (
    <section
      id="why-gotham"
      className="py-24 sm:py-32 section-slate noise-overlay relative overflow-hidden"
      aria-labelledby="why-heading"
    >
      <div className="gradient-orb w-[350px] h-[350px] bg-blue/8 bottom-[-100px] left-[-100px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Content */}
          <div>
            <FadeIn x={-30} y={0}>
              <div className="section-line mb-6" />
              <h2
                id="why-heading"
                className="text-4xl sm:text-5xl font-bold text-dark tracking-tight mb-6"
              >
                Why <span className="text-gradient">Gotham</span> HVAC?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-14">
                We bring a detail-first approach to every job. That means better
                results, fewer callbacks, and systems that actually perform.
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-0" stagger={0.1}>
              {reasons.map((reason) => (
                <StaggerItem key={reason.title}>
                  <div className="group flex gap-6 py-7 border-b border-border last:border-0 cursor-default">
                    <span className="text-3xl font-bold text-blue/15 group-hover:text-blue transition-colors duration-400 mt-1 select-none">
                      {reason.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-dark text-lg mb-2 group-hover:text-blue transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right - Image */}
          <FadeIn delay={0.2} x={30} y={0} scale={0.95} className="relative lg:sticky lg:top-32">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <Image
                  src="/hvac-technician.webp"
                  alt="HVAC technician using a diagnostic tool on a rooftop condenser unit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-3xl bg-blue/5 -z-10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
