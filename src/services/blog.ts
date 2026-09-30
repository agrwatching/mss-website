// src/services/blog.ts
import { blogUrls } from "@/lib/env";
import type { Artikel } from "@/types/berita";

type BloggerEntry = {
  title?: { $t?: string };
  content?: { $t?: string };
  summary?: { $t?: string };
  published?: { $t?: string };
  media$thumbnail?: { url?: string };
  link?: { rel: string; href: string }[];
};

type BloggerFeed = {
  feed?: { title?: { $t?: string }; entry?: BloggerEntry[] };
};

const strip = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

// Blogger menyimpan ukuran di URL (/s72-c/, /s320/, /w400-h300-p/, =s72-c).
// Naikkan ke 800px dan buang crop supaya gambar tidak blur.
const hires = (u: string) =>
  u
    .replace(/^http:\/\//, "https://")
    .replace(/\/s\d+(-[a-z0-9]+)*\//, "/s800/")
    .replace(/\/w\d+-h\d+(-[a-z0-9]+)*\//, "/s800/")
    .replace(/=s\d+(-[a-z0-9]+)*$/, "=s800")
    .replace(/=w\d+-h\d+(-[a-z0-9]+)*$/, "=s800");

async function fetchBlog(base: string): Promise<Artikel[]> {
  const res = await fetch(`${base}/feeds/posts/default?alt=json&max-results=50`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Blog ${base}: ${res.status}`);

  const json: BloggerFeed = await res.json();
  const sumber = json.feed?.title?.$t ?? new URL(base).hostname;

  return (json.feed?.entry ?? []).map((e): Artikel => {
    const html = e.content?.$t ?? e.summary?.$t ?? "";
    const raw = e.media$thumbnail?.url ?? html.match(/<img[^>]+src="([^"]+)"/)?.[1];
    const url = e.link?.find((l) => l.rel === "alternate")?.href ?? base;

    return {
      judul: e.title?.$t ?? "",
      slug: url.split("/").pop()?.replace(".html", "") ?? "",
      ringkasan: strip(html).slice(0, 140) + "…",
      gambar: raw ? hires(raw) : null,
      tanggal: e.published?.$t ?? "",
      url,
      sumber,
    };
  });
}

export async function getArtikel({ limit, page = 1 }: { limit: number; page?: number }) {
  if (!blogUrls.length) return { items: [] as Artikel[], total: 0 };

  const results = await Promise.allSettled(blogUrls.map(fetchBlog));
  const all = results.flatMap((r) => (r.status === "fulfilled" ? r.value : []));

  const unik = [...new Map(all.map((a) => [a.url, a])).values()].sort(
    (a, b) => +new Date(b.tanggal) - +new Date(a.tanggal),
  );

  const start = (page - 1) * limit;
  return { items: unik.slice(start, start + limit), total: unik.length };
}