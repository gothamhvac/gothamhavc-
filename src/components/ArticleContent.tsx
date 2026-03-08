"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  ChevronRight,
  Info,
} from "lucide-react";
import type { Article, ContentBlock } from "@/lib/articles";
import { getRelatedArticles } from "@/lib/articles";
import ArticleCTA from "@/components/ArticleCTA";

interface ArticleContentProps {
  article: Omit<Article, "icon">;
}

/* ── Extract headings for TOC ── */
function getHeadings(content: ContentBlock[]): string[] {
  return content
    .filter((b): b is ContentBlock & { type: "heading" } => b.type === "heading")
    .map((b) => b.text);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ArticleContent({ article }: ArticleContentProps) {
  const headings = getHeadings(article.content);
  const related = getRelatedArticles(article.slug, 3);
  const [activeHeading, setActiveHeading] = useState<string>("");

  /* ── Scrollspy ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(slugify(h));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative">
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-4">
                <Link
                  href="/learn"
                  className="hover:text-white/70 transition-colors"
                >
                  Learn
                </Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/60">{article.category}</span>
              </nav>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue/20 text-xs font-semibold text-blue-light uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-white/40">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content + Sidebar ── */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* TOC sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28">
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-text-tertiary mb-4">
                  In this article
                </h4>
                <nav className="space-y-1">
                  {headings.map((h) => {
                    const id = slugify(h);
                    return (
                      <a
                        key={id}
                        href={`#${id}`}
                        className={`block text-[13px] leading-snug py-1.5 pl-3 border-l-2 transition-all duration-200 ${
                          activeHeading === id
                            ? "border-blue text-blue font-semibold"
                            : "border-transparent text-text-tertiary hover:text-text-secondary hover:border-gray-200"
                        }`}
                      >
                        {h}
                      </a>
                    );
                  })}
                </nav>

                {/* Back link */}
                <Link
                  href="/learn"
                  className="mt-8 flex items-center gap-2 text-xs font-medium text-text-tertiary hover:text-blue transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  All Articles
                </Link>
              </div>
            </aside>

            {/* Article body */}
            <article className="lg:col-span-9 max-w-none">
              <div
                className="prose-custom"
              >
                {article.content.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Related Articles ── */}
      <section className="section-cool py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-8">
              More Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((a) => (
              <div
                key={a.slug}
              >
                <Link
                  href={`/learn/${a.slug}`}
                  className="group card-gradient-border block overflow-hidden h-full"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={a.heroImage}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-dark uppercase tracking-wide">
                        {a.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1 text-xs text-text-tertiary mb-2">
                      <Clock className="w-3 h-3" />
                      {a.readTime}
                    </div>
                    <h3 className="text-base font-bold text-dark leading-snug group-hover:text-blue transition-colors">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
              Need professional help?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Our NYC-based technicians are ready to diagnose, repair, or
              install — with honest pricing and no unnecessary upsells.
            </p>
            <Link href="/#contact" className="btn-primary">
              Request Service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Block renderer ── */
function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          id={slugify(block.text)}
          className="text-xl sm:text-2xl font-bold text-dark mt-10 mb-4 scroll-mt-28"
        >
          {block.text}
        </h2>
      );

    case "paragraph":
      return (
        <p className="text-text-secondary leading-relaxed mb-5">
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul className="space-y-3 mb-6 pl-0">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-text-secondary leading-relaxed"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div className="my-6 p-5 rounded-xl bg-blue-subtle border border-blue/10 flex gap-3">
          <Info className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
          <p className="text-sm text-text-secondary leading-relaxed">
            {block.text}
          </p>
        </div>
      );

    case "image":
      return (
        <figure className="my-8 rounded-xl overflow-hidden">
          <div className="relative h-64 sm:h-80">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {block.caption && (
            <figcaption className="text-xs text-text-tertiary mt-2 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "cta":
      return (
        <ArticleCTA
          variant={block.variant}
          text={block.text}
          href={block.href}
          buttonText={block.buttonText}
        />
      );

    default:
      return null;
  }
}
