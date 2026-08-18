import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { restaurant } from "@/data/restaurant";
import { menu } from "@/data/menu";

const BASE_URL = restaurant.siteUrl.replace(/\/$/, "");

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0]!;

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/menu", changefreq: "weekly", priority: "0.9", lastmod: today },
          { path: "/reservations", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/dining-experience", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/gallery", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/catering-events", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/feedback", changefreq: "monthly", priority: "0.6", lastmod: today },
          { path: "/contact", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3", lastmod: today },
        ];

        // Add all dish pages to sitemap
        for (const dish of menu) {
          entries.push({
            path: `/menu/${dish.id}`,
            changefreq: "monthly",
            priority: dish.bestseller ? "0.7" : "0.6",
            lastmod: today,
          });
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
