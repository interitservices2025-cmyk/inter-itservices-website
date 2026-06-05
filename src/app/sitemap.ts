import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://inter-itservices.ca";
  const locales = ["en", "fr"];
  const paths = ["", "/about", "/services", "/ai-solutions", "/portfolio", "/training", "/contact", "/blog"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 1.0 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
