"use client";

import Link from "next/link";
import {
  Wind,
  Building2,
  Flame,
  CookingPot,
  Droplets,
  Calculator,
  Wrench,
  Snowflake,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  accent: string;
  accentBg: string;
}

const services: Service[] = [
  {
    icon: Wind,
    title: "Mini-Splits & Heat Pumps",
    description:
      "Efficient ductless comfort solutions for NYC apartments, homes, and small commercial spaces.",
    href: "/services/heating-cooling",
    accent: "text-blue",
    accentBg: "bg-blue/[0.06] group-hover:bg-blue/[0.12]",
  },
  {
    icon: Building2,
    title: "Commercial HVAC",
    description:
      "Package units, rooftop units, and full commercial systems for restaurants, retail, and offices.",
    href: "/services/commercial-hvac",
    accent: "text-indigo-500",
    accentBg: "bg-indigo-500/[0.06] group-hover:bg-indigo-500/[0.12]",
  },
  {
    icon: CookingPot,
    title: "Restaurant Hood Installation",
    description:
      "Commercial kitchen hood and ventilation system installation for NYC restaurants.",
    href: "/services/restaurant-hoods",
    accent: "text-amber-500",
    accentBg: "bg-amber-500/[0.06] group-hover:bg-amber-500/[0.12]",
  },
  {
    icon: Flame,
    title: "Boiler & Furnace Repair",
    description:
      "Expert boiler and furnace diagnostics, repair, and maintenance throughout NYC.",
    href: "/services/boiler-furnace-repair",
    accent: "text-red",
    accentBg: "bg-red/[0.06] group-hover:bg-red/[0.12]",
  },
  {
    icon: Droplets,
    title: "Water Heaters",
    description:
      "Tankless and heat pump water heater installation, service, and upgrades — NYSERDA-eligible.",
    href: "/services/heat-pump-water-heaters",
    accent: "text-cyan-500",
    accentBg: "bg-cyan-500/[0.06] group-hover:bg-cyan-500/[0.12]",
  },
  {
    icon: Wrench,
    title: "Service & Repair",
    description:
      "Fast diagnostics and expert repair for all heating, cooling, and ventilation systems.",
    href: "/services/service-repair",
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500/[0.06] group-hover:bg-emerald-500/[0.12]",
  },
  {
    icon: Snowflake,
    title: "Commercial Refrigeration",
    description:
      "Walk-in coolers, freezers, display merchandisers, and ice machine service and repair.",
    href: "/services/commercial-refrigeration",
    accent: "text-sky-500",
    accentBg: "bg-sky-500/[0.06] group-hover:bg-sky-500/[0.12]",
  },
  {
    icon: Calculator,
    title: "Load Calculations",
    description:
      "Professional Manual J calculations for proper system sizing and code compliance.",
    href: "/services/load-calculations",
    accent: "text-violet-500",
    accentBg: "bg-violet-500/[0.06] group-hover:bg-violet-500/[0.12]",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="gradient-orb w-[400px] h-[400px] bg-blue/10 top-[-100px] right-[-150px]" />
      <div className="gradient-orb w-[300px] h-[300px] bg-indigo-500/5 bottom-[-80px] left-[-100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-20" blur>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="section-line mb-6" />
              <h2
                id="services-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight"
              >
                Our <span className="highlight">HVAC</span>
                <br />
                Services
              </h2>
            </div>
            <p className="text-text-secondary text-lg max-w-md leading-relaxed lg:pb-2">
              From mini-splits and heat pumps to rooftop units and commercial
              kitchens — engineered solutions for every space.
            </p>
          </div>
        </FadeIn>

        {/* Uniform grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <StaggerItem key={service.title} scale blur>
              <article className="group">
                <Link
                  href={service.href}
                  className="block bg-white rounded-2xl p-7 sm:p-8 h-full card-gradient-border"
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-12 h-12 rounded-xl ${service.accentBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-400`}>
                      <service.icon className={`w-6 h-6 ${service.accent}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-dark text-[15px] mb-1.5 group-hover:text-blue transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-5 ml-[68px] text-blue text-sm font-semibold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn className="text-center mt-14" delay={0.3}>
          <Link
            href="/services"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
