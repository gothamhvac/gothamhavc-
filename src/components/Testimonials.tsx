"use client";

import { Star, Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

const testimonials = [
  {
    text: "Gotham HVAC installed a multi-zone mini-split system in our brownstone. The team was meticulous about the load calculations and placement — our energy bills dropped 40% the first month.",
    author: "Sarah M.",
    role: "Homeowner",
    location: "Park Slope, Brooklyn",
    rating: 5,
  },
  {
    text: "We needed a full kitchen ventilation overhaul for our restaurant on a tight timeline. Gotham delivered — on schedule, on budget, and the system passed inspection on the first try.",
    author: "Marco T.",
    role: "Restaurant Owner",
    location: "Hell's Kitchen, Manhattan",
    rating: 5,
  },
  {
    text: "Finally found an HVAC company that actually explains what they're doing and why. The upfront documentation and clear pricing made this the smoothest mechanical project we've managed.",
    author: "David K.",
    role: "Property Manager",
    location: "Astoria, Queens",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 section-cool noise-overlay relative overflow-hidden" aria-label="Client testimonials">
      {/* Gradient orb */}
      <div className="gradient-orb w-[400px] h-[400px] bg-blue/10 top-[-120px] right-[-100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16" blur>
          <div className="section-line mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-dark tracking-tight mb-4">
            Trusted by NYC<br />
            <span className="text-gradient">Homeowners &amp; Businesses</span>
          </h2>
        </FadeIn>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.author} scale blur>
            <div
              className="bg-white rounded-3xl p-8 sm:p-10 card-depth-stack relative"
            >
              <Quote className="w-10 h-10 text-blue/10 mb-6 group-hover:text-blue/30 transition-colors duration-300" />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <div key={i}>
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                ))}
              </div>

              <blockquote className="text-text-muted leading-relaxed mb-8 text-[15px]">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="border-t border-border pt-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-dark text-sm">
                      {t.author}
                    </div>
                    <div className="text-text-tertiary text-xs">
                      {t.role} &middot; {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
