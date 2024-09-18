import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const detail: any = Array.from({ length: 24 }).map((_, idx) => ({
    url: `https://kwdc.dev/2024/speaker/${idx + 1}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
  return [
    {
      url: "https://kwdc.dev/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://kwdc.dev/2024",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://kwdc.dev/2024",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...detail,
  ];
}
