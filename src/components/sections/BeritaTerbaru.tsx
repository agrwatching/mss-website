// src/components/sections/BeritaTerbaru.tsx
import { getArtikel } from "@/services/blog";
import { ArtikelCard } from "@/components/berita/ArtikelCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LihatSelengkapnya } from "@/components/ui/LihatSelengkapnya";

export async function BeritaTerbaru() {
  const { items } = await getArtikel({ limit: 6 }).catch(() => ({ items: [] }));
  if (!items.length) return null;

  return (
    <section id="berita" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Berita Terbaru" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => <ArtikelCard key={a.url} a={a} />)}
        </div>
        <div className="mt-10 text-center">
          <LihatSelengkapnya href="/berita" label="Lihat semua berita" />
        </div>
      </div>
    </section>
  );
}