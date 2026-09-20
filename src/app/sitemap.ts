import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";
import { courses } from "@/data/training";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://inter-itservices.ca";
  const locales = ["en", "fr"];
  const staticPaths = [
    "",
    "/solutions/odoo",
    "/about",
    "/services",
    "/ai-solutions",
    "/training",
    "/contact",
    "/blog",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static routes
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

  // Dynamic services
  for (const service of services) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // Dynamic training courses
  for (const course of courses) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/training/${course.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
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
