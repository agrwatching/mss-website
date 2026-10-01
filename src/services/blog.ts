// src/services/blog.ts
import sanitizeHtml from "sanitize-html";
import { blogUrls } from "@/lib/env";
import type { Artikel, ArtikelDetail } from "@/types/berita";

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

type Mentah = Artikel & { html: string };

const decode = (s: string) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const strip = (html: string) =>
  decode(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();

const HOST_BLOGGER = /googleusercontent|blogspot|ggpht/;

// Blogger menyimpan ukuran di URL (/s72-c/, /s320/, /w400-h300-p/, =s72-c).
// Naikkan ukurannya dan buang crop supaya gambar tidak blur.
export const hires = (u: string, size = 800) => {
  if (!HOST_BLOGGER.test(u)) return u;
  const s = `s${size}`;
  return u
    .replace(/^http:\/\//, "https://")
    .replace(/\/s\d+(-[a-z0-9]+)*\//, `/${s}/`)
    .replace(/\/w\d+-h\d+(-[a-z0-9]+)*\//, `/${s}/`)
    .replace(/=s\d+(-[a-z0-9]+)*$/, `=${s}`)
    .replace(/=w\d+-h\d+(-[a-z0-9]+)*$/, `=${s}`);
};

function bersihkan(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      "p", "br", "hr", "h2", "h3", "h4", "strong", "b", "em", "i", "u",
      "ul", "ol", "li", "blockquote", "a", "img", "figure", "figcaption",
      "table", "thead", "tbody", "tr", "td", "th", "iframe", "div", "span",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "title", "loading", "decoding"],
      iframe: ["src", "title", "allowfullscreen"],
      td: ["colspan", "rowspan"],
      th: ["colspan", "rowspan"],
    },
    allowedIframeHostnames: ["www.youtube.com", "youtube.com", "www.youtube-nocookie.com", "player.vimeo.com"],
    transformTags: {
      h1: "h2", // satu h1 per halaman, dipakai untuk judul artikel
      a: sanitizeHtml.simpleTransform("a", { target: "_blank", rel: "noopener noreferrer" }),
      img: (_tag, attribs) => ({
        tagName: "img",
        attribs: {
          src: hires(attribs.src ?? "", 1200),
          alt: attribs.alt ?? "",
          loading: "lazy",
          decoding: "async",
        },
      }),
    },
  });
}

async function fetchBlog(base: string): Promise<Mentah[]> {
  const res = await fetch(`${base}/feeds/posts/default?alt=json&max-results=50`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Blog ${base}: ${res.status}`);

  const json: BloggerFeed = await res.json();
  const sumber = json.feed?.title?.$t ?? new URL(base).hostname;
  const kunci = new URL(base).hostname.split(".")[0];

  return (json.feed?.entry ?? []).map((e): Mentah => {
    const html = e.content?.$t ?? e.summary?.$t ?? "";
    const raw = e.media$thumbnail?.url ?? html.match(/<img[^>]+src="([^"]+)"/)?.[1];
    const url = e.link?.find((l) => l.rel === "alternate")?.href ?? base;
    const slugAsli = url.split("/").pop()?.replace(".html", "") ?? "";

    return {
      judul: e.title?.$t ?? "",
      slug: `${kunci}--${slugAsli}`,
      ringkasan: strip(html).slice(0, 140) + "…",
      gambar: raw ? hires(raw) : null,
      tanggal: e.published?.$t ?? "",
      url,
      sumber,
      html,
    };
  });
}

async function ambilSemua(): Promise<Mentah[]> {
  if (!blogUrls.length) return [];

  const results = await Promise.allSettled(blogUrls.map(fetchBlog));
  const all = results.flatMap((r) => (r.status === "fulfilled" ? r.value : []));

  return [...new Map(all.map((a) => [a.url, a])).values()].sort(
    (a, b) => +new Date(b.tanggal) - +new Date(a.tanggal),
  );
}

const ringkas = (a: Mentah): Artikel => ({
  judul: a.judul,
  slug: a.slug,
  ringkasan: a.ringkasan,
  gambar: a.gambar,
  tanggal: a.tanggal,
  url: a.url,
  sumber: a.sumber,
});

export async function getArtikel({ limit, page = 1 }: { limit: number; page?: number }) {
  const unik = await ambilSemua();
  const start = (page - 1) * limit;
  return { items: unik.slice(start, start + limit).map(ringkas), total: unik.length };
}

export async function getArtikelBySlug(slug: string): Promise<ArtikelDetail | null> {
  const a = (await ambilSemua()).find((x) => x.slug === slug);
  if (!a) return null;

  return {
    ...ringkas(a),
    konten: bersihkan(a.html),
    menit: Math.max(1, Math.round(strip(a.html).split(" ").length / 200)),
  };
}