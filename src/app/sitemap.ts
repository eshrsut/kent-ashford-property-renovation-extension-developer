import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { towns } from "@/data/towns";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/areas", "/projects", "/about", "/contact"];

  const routes = [
    ...staticRoutes,
    ...services.map((s) => `/services/${s.slug}`),
    ...towns.map((t) => `/areas/${t.slug}`),
  ];

  // A fixed build-time date — `new Date()` isn't allowed in a statically
  // exported route.
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
