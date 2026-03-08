"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

const projects = [
  {
    title: "Commercial Rooftop Unit Replacement",
    category: "Commercial",
    location: "Midtown Manhattan",
    image: "/project-1.jpg",
    alt: "Commercial HVAC cooling towers on a building rooftop",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[16/10] lg:aspect-auto lg:h-full",
    metric: "20+ Units Replaced",
  },
  {
    title: "Electrical & Controls Wiring",
    category: "Commercial",
    location: "Brooklyn",
    image: "/project-2.jpg",
    alt: "Industrial valve controls in a mechanical room",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Rooftop Package Unit Service",
    category: "Restaurant",
    location: "Queens",
    image: "/project-3.jpg",
    alt: "Commercial rooftop HVAC ductwork system",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Refrigerant Line Installation",
    category: "Residential",
    location: "Upper West Side",
    image: "/project-4.jpg",
    alt: "Close-up of HVAC piping and fittings installation",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Site Assessment & Planning",
    category: "Multifamily",
    location: "Westchester",
    image: "/project-5.jpg",
    alt: "Industrial pressure gauge on HVAC equipment",
    span: "",
    aspect: "aspect-[4/3]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 section-dark-mesh relative overflow-hidden" aria-labelledby="projects-heading">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeIn className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16" blur>
          <div>
            <div className="section-line mb-6" />
            <h2 id="projects-heading" className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Recent<br />
              <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-white/50 text-lg max-w-md lg:pb-2">
            Commercial rooftops, restaurant ventilation, and residential
            comfort upgrades across NYC and Tri-State.
          </p>
        </FadeIn>

        {/* Grid with scale-up and slide-in effects */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
          {projects.map((project, i) => (
            <StaggerItem
              key={project.title}
              className={`${project.span} group`}
              scale
            >
              <div className={`img-overlay ${project.aspect} min-h-[240px] w-full h-full cursor-pointer ${!project.span ? "card-depth-stack rounded-2xl" : ""}`}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  sizes={project.span ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
                />
                {/* Floating metric badge on large image */}
                {project.metric && (
                  <div className="absolute top-4 left-4 z-20 glass-dark rounded-full px-4 py-1.5 text-white text-xs font-semibold tracking-wide">
                    {project.metric}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">
                        {project.category} &middot; {project.location}
                      </div>
                      <h3 className="text-white font-semibold text-sm sm:text-base leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
          </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn className="text-center mt-14" delay={0.3}>
          <Link href="#projects" className="btn-secondary inline-flex items-center gap-2">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
