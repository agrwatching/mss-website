// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { getArtikel } from "@/services/blog";

const BASE = "https://www.mediasolusisukses.it.com";

const halamanTetap = [
  "",
  "/keunggulan",
  "/program",
  "/team",
  "/mitra",
  "/dokumentasi",
  "/berita",
];

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tetap: MetadataRoute.Sitemap = halamanTetap.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/berita" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  let berita: MetadataRoute.Sitemap = [];
  try {
    const { items } = await getArtikel({ limit: 100 });
    berita = items.map((a) => ({
      url: `${BASE}/berita/${a.slug}`,
      lastModified: a.tanggal ? new Date(a.tanggal) : new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    }));
  } catch {
  }

  return [...tetap, ...berita];
}