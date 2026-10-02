// src/components/mitra/DaftarMitra.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import type { KategoriMitra, Mitra } from "@/data/mitra";
import { imgSrc, isRemote } from "@/lib/img";

type Filter = "Semua" | KategoriMitra;

export function DaftarMitra({ items }: { items: Mitra[] }) {
  const [filter, setFilter] = useState<Filter>("Semua");

  const kategori = [...new Set(items.map((m) => m.kategori))];
  const tampil = filter === "Semua" ? items : items.filter((m) => m.kategori === filter);
  const hitung = (f: Filter) => (f === "Semua" ? items.length : items.filter((m) => m.kategori === f).length);

  return (
    <>
      <div role="tablist" aria-label="Filter kategori mitra" className="flex flex-wrap justify-center gap-2">
        {(["Semua", ...kategori] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition duration-300",
              filter === f
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                : "border border-ink/10 text-ink/70 hover:border-brand-blue/30 hover:text-brand-blue",
            )}
          >
            {f}
            <span className={cn("ml-2 text-xs", filter === f ? "text-white/70" : "text-ink/40")}>{hitung(f)}</span>
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {tampil.map((m, i) => {
          const inisial = m.nama.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();
          return (
            <article
              key={`${filter}-${m.slug}`}
              style={{ animationDelay: `${i * 60}ms` }}
              className="group relative animate-rise rounded-2xl border border-ink/10 bg-white p-5 text-center transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-[0_20px_40px_-22px_rgba(10,59,209,0.45)]"
            >
              {m.website && (
                <>
                  <a
                    href={m.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Kunjungi website ${m.nama}`}
                    className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  />
                  <span
                    aria-hidden
                    className="absolute right-3 top-3 grid size-7 scale-75 place-items-center rounded-full bg-brand-yellow text-ink opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"
                  >
                    <svg viewBox="0 0 20 20" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 13L13 7M8 7h5v5" />
                    </svg>
                  </span>
                </>
              )}

              <div className="relative mx-auto grid size-20 place-items-center overflow-hidden rounded-2xl bg-brand-blue/10 transition duration-300 group-hover:scale-105 group-hover:bg-brand-blue/15">
                {m.logo ? (
                  <Image src={imgSrc(m.logo)} alt={`Logo ${m.nama}`} fill unoptimized={isRemote(m.logo)} sizes="80px" className="object-contain p-2" />
                ) : (
                  <span className="font-display text-xl font-extrabold text-brand-blue">{inisial}</span>
                )}
              </div>
              <h3 className="mt-4 line-clamp-2 min-h-[2.5rem] text-sm font-bold text-ink">{m.nama}</h3>
              <div className="mt-3">
                <Badge>{m.kategori}</Badge>
              </div>
              {m.kota && <p className="mt-2 text-xs text-ink/50">{m.kota}</p>}
            </article>
          );
        })}
      </div>
    </>
  );
}