import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";
import { articles } from "@/lib/articles";
import { serviceAreas } from "@/lib/service-areas";

/* Use a fixed date for pages that were last meaningfully updated.
   Update these dates when actual content changes are made. */
const SITE_UPDATED = "2026-03-05";
const SERVICES_UPDATED = "2026-03-05";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: COMPANY.url,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${COMPANY.url}/services`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${COMPANY.url}/services/heating-cooling`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${COMPANY.url}/services/commercial-hvac`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${COMPANY.url}/nyserda-rebates`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${COMPANY.url}/services/boiler-furnace-repair`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${COMPANY.url}/services/restaurant-hoods`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${COMPANY.url}/services/heat-pump-water-heaters`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${COMPANY.url}/services/load-calculations`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${COMPANY.url}/services/service-repair`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${COMPANY.url}/services/commercial-refrigeration`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${COMPANY.url}/services/cooling-assistance`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${COMPANY.url}/services/fdny-violations`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${COMPANY.url}/maintenance-plans`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${COMPANY.url}/learn`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...articles.map((a) => ({
      url: `${COMPANY.url}/learn/${a.slug}`,
      lastModified: a.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${COMPANY.url}/service-areas`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...serviceAreas.map((a) => ({
      url: `${COMPANY.url}/service-areas/${a.slug}`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${COMPANY.url}/privacy`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${COMPANY.url}/terms`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
