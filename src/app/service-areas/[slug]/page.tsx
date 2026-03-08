import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceAreaContent from "@/components/ServiceAreaContent";
import { serviceAreas, getServiceAreaBySlug } from "@/lib/service-areas";
import { COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return {};

  return {
    title: area.title,
    description: area.description,
    alternates: {
      canonical: `${COMPANY.url}/service-areas/${slug}`,
    },
    openGraph: {
      title: area.title,
      description: area.description,
      type: "website",
      images: [{ url: area.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: COMPANY.name,
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    areaServed: [
      {
        "@type": "Place",
        name: area.name,
      },
      ...area.neighborhoods.map((n) => ({
        "@type": "Place",
        name: `${n}, ${area.region === "NYC" ? "New York" : area.region}`,
      })),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: COMPANY.address.country,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `HVAC Services in ${area.name}`,
      itemListElement: area.popularServices.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.label,
          url: `${COMPANY.url}${s.href}`,
        },
      })),
    },
  };

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Service Areas", href: "/service-areas" },
    { name: area.name, href: `/service-areas/${slug}` },
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
        <ServiceAreaContent area={area} />
      </main>
      <Footer />
    </>
  );
}
