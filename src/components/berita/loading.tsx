// src/app/berita/loading.tsx
import { PageHeader } from "@/components/layout/PageHeader";
import { ArtikelSkeleton } from "@/components/berita/ArtikelSkeleton";

export default function Loading() {
  return (
    <>
      <PageHeader title="Berita" />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => <ArtikelSkeleton key={i} />)}
        </div>
      </section>
    </>
  );
}