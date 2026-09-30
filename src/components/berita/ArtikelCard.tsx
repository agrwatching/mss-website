import Badge from "@/components/ui/Badge";
import type { Artikel } from "@/types/berita";

export function ArtikelCard({ a }: { a: Artikel }) {
  return (
    <a
      href={a.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:shadow-lg"
    >
      <div className="aspect-video overflow-hidden bg-ink/5">
        {a.gambar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={a.gambar}
            alt={a.judul}
            loading="lazy"
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-5">
        <Badge>{a.sumber}</Badge>
        <h3 className="mt-3 line-clamp-2 font-bold text-ink">{a.judul}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-ink/70">{a.ringkasan}</p>
        <time className="mt-3 block text-xs text-ink/50">
          {new Date(a.tanggal).toLocaleDateString("id-ID", { dateStyle: "long" })}
        </time>
      </div>
    </a>
  );
}