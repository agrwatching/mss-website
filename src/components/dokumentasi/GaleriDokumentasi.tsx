// src/components/dokumentasi/GaleriDokumentasi.tsx
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/effects/Reveal";
import { cn } from "@/lib/cn";

export function GaleriDokumentasi({ items }: { items: string[] }) {
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

  if (items.length === 0) {
    return <p className="text-center text-ink/60">Belum ada foto.</p>;
  }

  const d = aktif !== null ? items[aktif] : null;

  return (
    <>
      <div className="grid auto-rows-[170px] grid-flow-dense grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-3 md:gap-4">
        {items.map((src, i) => (
          <Reveal
            key={src}
            variant="zoom"
            delay={(i % 3) * 80}
            className={cn("h-full", i % 5 === 0 && "col-span-2")}
          >
            <button
              type="button"
              onClick={() => setAktif(i)}
              aria-label={`Perbesar foto ${i + 1}`}
              className="group relative size-full overflow-hidden rounded-2xl bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              {gagal.has(src) ? (
                <span className="absolute inset-0 bg-gradient-to-br from-brand-blue-deep to-brand-blue" />
              ) : (
                <Image
                  src={src}
                  alt={`Dokumentasi ${i + 1}`}
                  fill
                  sizes="(min-width:768px) 33vw, 50vw"
                  onError={() => tandaiGagal(src)}
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />
              )}
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </Reveal>
        ))}
      </div>

      {d && aktif !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${aktif + 1}`}
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

          <div onClick={(e) => e.stopPropagation()} className="relative h-[80svh] w-full max-w-4xl overflow-hidden rounded-2xl">
            {gagal.has(d) ? (
              <span className="absolute inset-0 bg-ink" />
            ) : (
              <Image
                src={d}
                alt={`Dokumentasi ${aktif + 1}`}
                fill
                sizes="(min-width:1024px) 896px, 100vw"
                onError={() => tandaiGagal(d)}
                className="object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}