import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/lp/LandingPage";
import { landingPages, getLandingPage } from "@/lib/landing-pages";
import { COMPANY } from "@/lib/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    // Ad landing pages stay out of organic search so they don't compete with
    // the service pages. AdsBot still crawls them for ad review.
    robots: { index: false, follow: false },
    alternates: { canonical: `${COMPANY.url}/lp/${slug}` },
  };
}

export default async function LandingPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  return <LandingPage page={page} />;
}
