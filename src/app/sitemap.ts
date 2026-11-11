import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://inter-itservices.ca";
  const locales = ["en", "fr"];
  const staticPaths = [
    "",
    "/solutions/odoo",
    "/about",
    "/contact",
    "/blog",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Active static routes only (no discontinued offerings)
  for (const path of staticPaths) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 1.0 : path === "/solutions/odoo" ? 0.95 : 0.8,
      });
    }
  }

  // Dynamic blog posts
  for (const post of blogPosts) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
