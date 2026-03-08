"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { articles } from "@/lib/articles";

const categories = ["All", "Maintenance", "Troubleshooting", "Systems"] as const;

export default function LearnIndexContent() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? articles
      : articles.filter((a) => a.category === active);

  return (
    <>
      {/* ── Hero ── */}
      <section className="section-dark-mesh noise-overlay pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="grid-pattern absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 mb-6">
              <BookOpen className="w-4 h-4 text-blue" />
              <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                Learn
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              HVAC Knowledge,{" "}
              <span className="text-gradient">Simplified</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
              Practical guides on maintenance, troubleshooting, and system
              choices — written by NYC HVAC professionals, not marketers.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category pills */}
          <div
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-dark text-white"
                    : "bg-surface text-text-secondary hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <div
                key={article.slug}
              >
                <Link
                  href={`/learn/${article.slug}`}
                  className="group card-gradient-border block overflow-hidden h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.heroImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-dark uppercase tracking-wide">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-text-tertiary mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-dark leading-snug mb-2 group-hover:text-blue transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-blue opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section-cool py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
              Have a question we didn&apos;t cover?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Our team is happy to answer HVAC questions — no sales pitch
              required. Reach out anytime.
            </p>
            <Link href="/#contact" className="btn-primary">
              Ask Us Anything
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
