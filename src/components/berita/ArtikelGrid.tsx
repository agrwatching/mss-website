// src/components/berita/ArtikelGrid.tsx
import { ArtikelCard } from "./ArtikelCard";
import { Reveal } from "@/components/effects/Reveal";
import type { Artikel } from "@/types/berita";

export function ArtikelGrid({ items }: { items: Artikel[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((a, i) => (
        <Reveal key={a.slug} delay={(i % 3) * 100}>
          <ArtikelCard a={a} />
        </Reveal>
      ))}
    </div>
  );
}