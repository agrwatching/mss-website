// src/components/berita/ArtikelCard.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Artikel } from "@/types/berita";

export function ArtikelCard({ a }: { a: Artikel }) {
  return (
    <Link
      href={`/berita/${a.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-ink/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(10,59,209,0.35)]"
    >
      <div className="aspect-video overflow-hidden bg-ink/5">
        {a.gambar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={a.gambar}
            alt={a.judul}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-5">
        <Badge>{a.sumber}</Badge>
        <h3 className="mt-3 line-clamp-2 font-bold text-ink transition-colors group-hover:text-brand-blue">{a.judul}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-ink/70">{a.ringkasan}</p>
        <time className="mt-3 block text-xs text-ink/50">
          {new Date(a.tanggal).toLocaleDateString("id-ID", { dateStyle: "long" })}
        </time>
      </div>
    </Link>
  );
}