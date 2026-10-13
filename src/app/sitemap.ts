import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { equipmentFleet } from "@/data/equipment";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/equipment`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/service-areas/visakhapatnam`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Category & High-Intent Search Query Aliases for Vizag & Pan-India Industrial Areas
  const categoryAliases = [
    // 1. Mobile Cranes Search Aliases
    "best-crane-services-in-vizag",
    "best-crane-services-in-india",
    "crane-services-in-vizag",
    "crane-services-near-me",
    "crane-rental",
    "heavy-crane-rental",

    // 2. Boom Lifts Search Aliases
    "best-boomlift-services-in-vizag",
    "services-of-boomlift-in-india",
    "boom-lift-services-in-india",
    "boom-lift-rental-near-me",
    "boom-lift-rental",
    "articulated-telescopic-boom-lift-rental",

    // 3. Truck-Mounted Boom Lifts & Sky Lifts Aliases
    "truck-mounted-boom-lift-rental-india",
    "services-of-truck-mounted-boom-lift-in-india",
    "best-sky-lift-services-in-vizag",
    "sky-lift-rental-vizag",
    "truck-mounted-sky-lift-rental-vizag",
    "sky-lift-hire-near-me",

    // 4. Pick & Carry Hydra & Farana Cranes Aliases
    "pick-and-carry-crane-rental-india",
    "hydra-crane-services-in-india",
    "best-hydra-crane-services-in-vizag",
    "farana-crane-rental-vizag",
    "hydra-crane-rental-vizag",
    "hydra-crane-near-me",
    "mobile-crane-hydra-rental",

    // 5. Scissor Lifts Aliases
    "best-scissor-lift-services-in-vizag",
    "scissor-lift-rental-services-india",
    "services-of-scissor-lift-in-india",
    "electric-scissor-lift-rental",
    "scissor-lift-rental-vizag",
    "scissor-lift-near-me",

    // 6. Heavy Trailers & Machinery Transport Aliases
    "low-bed-trailer-rental-india",
    "heavy-trailer-rental-vizag",
    "multi-axle-modular-trailer-rental-india",
    "heavy-machinery-transport-near-me",
    "road-machinery-rental",

    // 7. Industrial Forklifts Aliases
    "best-forklift-services-in-vizag",
    "forklift-rental-services-india",
    "diesel-forklift-rental-vizag",
    "forklift-rental-near-me",

    // 8. Crawler Cranes Aliases
    "crawler-crane-rental-services-india",
    "crawler-crane-rental-india",
    "crawler-crane-hire-vizag",
    "heavy-crawler-crane-rental",
  ];

  const aliasRoutes: MetadataRoute.Sitemap = categoryAliases.map((slug) => ({
    url: `${baseUrl}/equipment/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic equipment routes
  const equipmentRoutes: MetadataRoute.Sitemap = equipmentFleet.map((item) => ({
    url: `${baseUrl}/equipment/${item.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.88,
  }));

  return [...staticRoutes, ...aliasRoutes, ...equipmentRoutes];
}
