"use client";

import { PhoneCall, ClipboardCheck, Hammer, ThumbsUp } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

const steps = [
  {
    icon: PhoneCall,
    title: "Request Service",
    description: "Call or submit a request online. We respond within one business day with next steps.",
  },
  {
    icon: ClipboardCheck,
    title: "On-Site Assessment",
    description: "A technician evaluates your space, runs diagnostics, and provides a clear scope and quote.",
  },
  {
    icon: Hammer,
    title: "Expert Installation",
    description: "Our licensed team completes the work — sized correctly, installed to code, and tested thoroughly.",
  },
  {
    icon: ThumbsUp,
    title: "Final Walkthrough",
    description: "We walk you through the system, answer questions, and make sure everything runs perfectly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16 sm:mb-20" blur>
          <div className="section-line mx-auto mb-6" />
          <h2
            id="how-it-works-heading"
            className="text-4xl sm:text-5xl font-bold text-dark tracking-tight mb-4"
          >
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">
            From first call to final walkthrough — a clear, four-step process.
          </p>
        </FadeIn>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative" stagger={0.1}>
          {steps.map((step, i) => (
            <StaggerItem key={step.title} scale>
              <div className="relative text-center">
                {/* Step number + icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-[104px] h-[104px] rounded-2xl bg-blue/[0.06] flex items-center justify-center relative z-10 mx-auto">
                    <step.icon className="w-8 h-8 text-blue" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue text-white text-sm font-bold flex items-center justify-center z-20 shadow-lg shadow-blue/25">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-bold text-dark text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
