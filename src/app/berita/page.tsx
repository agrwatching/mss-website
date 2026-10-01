// src/app/berita/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtikel } from "@/services/blog";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArtikelGrid } from "@/components/berita/ArtikelGrid";
import { Pagination } from "@/components/berita/Pagination";

export const metadata: Metadata = {
  title: "Berita",
  description: "Kabar dan kegiatan terbaru dari PT. Media Solusi Sukses.",
};

const PER_HALAMAN = 9;

type Props = { searchParams: Promise<{ page?: string }> };

export default async function BeritaPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const hal = Math.max(1, Number.parseInt(page ?? "1", 10) || 1);

  const { items, total } = await getArtikel({ limit: PER_HALAMAN, page: hal });
  const totalHal = Math.max(1, Math.ceil(total / PER_HALAMAN));
  if (hal > totalHal) notFound();

  return (
    <>
      <PageHeader title="Berita" desc="Kabar dan kegiatan terbaru dari kami." />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          {items.length ? (
            <>
              <ArtikelGrid items={items} />
              <Pagination page={hal} total={totalHal} basePath="/berita" />
            </>
          ) : (
            <p className="py-20 text-center text-ink/60">Belum ada berita saat ini.</p>
          )}
        </div>
      </section>
    </>
  );
}