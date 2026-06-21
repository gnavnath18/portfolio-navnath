import { MetadataRoute } from "next";
import { site, blogPosts } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "#about", "#projects", "#services", "#blog", "#contact"].map((path) => ({
    url: `${site.url}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
