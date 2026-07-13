import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleContent from "@/components/ArticleContent";
import { articles, getArticleBySlug } from "@/lib/articles";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/structured-data";

/* ── Static params for pre-rendering ── */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

/* ── Dynamic metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `${COMPANY.url}/learn/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      images: [{ url: article.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  /* Strip the icon (React component) — can't serialize across server/client boundary */
  const { icon: _icon, ...serializableArticle } = article;

  /* Article JSON-LD structured data */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${COMPANY.url}${article.heroImage}`,
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    author: {
      "@type": "Organization",
      name: article.author ?? COMPANY.name,
      url: COMPANY.url,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.url}/gotham-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.url}/learn/${slug}`,
    },
  };

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Learn", href: "/learn" },
    { name: article.title, href: `/learn/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Navbar />
      <main id="main-content">
        <ArticleContent article={serializableArticle} />
      </main>
      <Footer />
    </>
  );
}
