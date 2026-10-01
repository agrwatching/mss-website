// src/components/dokumentasi/GaleriDokumentasi.tsx
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/effects/Reveal";
import { cn } from "@/lib/cn";
import type { Dokumentasi } from "@/data/dokumentasi";
import { imgSrc, isRemote } from "@/lib/img";

export function GaleriDokumentasi({ items }: { items: Dokumentasi[] }) {
  const [aktif, setAktif] = useState<number | null>(null);
  const [gagal, setGagal] = useState<Set<string>>(new Set());

  const tandaiGagal = (src: string) => setGagal((s) => new Set(s).add(src));
  const tutup = useCallback(() => setAktif(null), []);
  const geser = useCallback(
    (d: number) => setAktif((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (aktif === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") tutup();
      if (e.key === "ArrowRight") geser(1);
      if (e.key === "ArrowLeft") geser(-1);
    };
    const lama = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = lama;
      document.removeEventListener("keydown", onKey);
    };
  }, [aktif, tutup, geser]);

  const d = aktif !== null ? items[aktif] : null;

  return (
    <>
      <div className="grid auto-rows-[170px] grid-flow-dense grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-3 md:gap-4">
        {items.map((it, i) => (
          <Reveal
            key={it.src}
            variant="zoom"
            delay={(i % 3) * 80}
            className={cn("h-full", i % 5 === 0 && "col-span-2")}
          >
            <button
              type="button"
              onClick={() => setAktif(i)}
              aria-label={`Perbesar foto: ${it.judul ?? it.alt}`}
              className="group relative size-full overflow-hidden rounded-2xl bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              {gagal.has(it.src) ? (
                <span className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-blue-deep to-brand-blue p-4 text-center text-sm font-semibold text-white/80">
                  {it.alt}
                </span>
              ) : (
                <Image
                  src={imgSrc(it.src)}
                  alt={it.alt}
                  fill
                  unoptimized={isRemote(it.src)}
                  sizes="(min-width:768px) 33vw, 50vw"
                  onError={() => tandaiGagal(it.src)}
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />
              )}

              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[420%]"
              />

              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left text-sm font-bold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {it.judul ?? it.alt}
              </span>
              <span
                aria-hidden
                className="absolute right-3 top-3 grid size-9 scale-75 place-items-center rounded-full bg-brand-yellow text-ink opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"
              >
                <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M12 3h5v5M8 17H3v-5M17 3l-6 6M3 17l6-6" />
                </svg>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {d && aktif !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={d.judul ?? d.alt}
          onClick={tutup}
          className="fixed inset-0 z-[60] grid animate-rise place-items-center bg-ink/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={tutup}
            aria-label="Tutup"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:rotate-90 hover:bg-white/20"
          >
            ×
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); geser(-1); }}
                aria-label="Foto sebelumnya"
                className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-xl text-white transition hover:-translate-x-0.5 hover:bg-white/20 md:left-6"
              >
                ←
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); geser(1); }}
                aria-label="Foto berikutnya"
                className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-xl text-white transition hover:translate-x-0.5 hover:bg-white/20 md:right-6"
              >
                →
              </button>
            </>
          )}

          <figure onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl">
            <div className="relative h-[68svh] w-full overflow-hidden rounded-2xl bg-ink">
              {gagal.has(d.src) ? (
                <span className="absolute inset-0 grid place-items-center text-white/70">{d.alt}</span>
              ) : (
                <Image src={imgSrc(d.src)} alt={d.alt} fill unoptimized={isRemote(d.src)} sizes="(min-width:1024px) 896px, 100vw" onError={() => tandaiGagal(d.src)} className="object-contain" />
              )}
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-white">
              <span className="font-bold">{d.judul ?? d.alt}</span>
              <span className="text-sm text-white/60">{aktif + 1} / {items.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}