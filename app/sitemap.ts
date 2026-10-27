import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/about", "/reservations", "/contact", "/privacy"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/menu" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/menu" || route === "/reservations" ? 0.9 : 0.7,
  }));
}
