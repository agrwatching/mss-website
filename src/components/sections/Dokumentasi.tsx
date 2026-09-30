// src/components/sections/Dokumentasi.tsx
import Image from "next/image";
import { dokumentasi } from "@/data/dokumentasi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LihatSelengkapnya } from "@/components/ui/LihatSelengkapnya";
import { Reveal } from "@/components/effects/Reveal";

export function Dokumentasi({ limit = 6, showMore = true }: { limit?: number; showMore?: boolean }) {
  return (
    <section id="dokumentasi" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Dokumentasi Kegiatan" desc="Momen pelatihan bersama sekolah mitra." />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {dokumentasi.slice(0, limit).map((d, i) => (
            <Reveal key={d.src} variant="zoom" delay={(i % 3) * 100}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5">
                <Image
                  src={d.src}
                  alt={d.alt}
                  fill
                  sizes="(min-width:768px) 33vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {d.judul && (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:opacity-100">
                    {d.judul}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
        {showMore && (
          <div className="mt-10 text-center">
            <LihatSelengkapnya href="/dokumentasi" label="Lihat semua dokumentasi" />
          </div>
        )}
      </div>
    </section>
  );
}