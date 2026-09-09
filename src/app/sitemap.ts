import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://solvere.sg/", changeFrequency: "monthly", priority: 1 },
    { url: "https://solvere.sg/brandbook", changeFrequency: "yearly", priority: 0.3 },
  ];
}
