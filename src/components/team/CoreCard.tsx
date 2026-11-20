"use client";

import Image from "next/image";
import { useState } from "react";
import type { Inti } from "@/data/team";
import { imgSrc, isRemote } from "@/lib/img";

export function CoreCard({ t }: { t: Inti }) {
  const [gagal, setGagal] = useState(false);
  const foto = gagal ? undefined : t.foto;
  const inisial = t.nama.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-ink/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-28px_rgba(10,59,209,0.65)]">
      {/* Foto */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-blue-deep">
        {foto ? (
          <Image
            src={imgSrc(foto)}
            alt={`Foto ${t.nama}`}
            fill
            unoptimized={isRemote(foto)}
            sizes="(min-width:1024px) 25vw, 50vw"
            onError={() => setGagal(true)}
            className="object-cover object-top transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-blue-deep to-brand-blue">
            <span className="font-display text-5xl font-extrabold text-white/90">{inisial}</span>
          </div>
        )}
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-yellow" />
      </div>

      {/* Panel biru */}
      <div className="flex flex-1 flex-col bg-brand-blue p-4 text-white md:p-5">
        <h3 className="font-display text-base font-extrabold leading-tight md:text-lg">{t.nama}</h3>
        <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-brand-yellow">{t.jabatan}</p>
        {t.deskripsi && (
          <p className="mt-3 line-clamp-5 text-xs leading-relaxed text-white/80">{t.deskripsi}</p>
        )}
      </div>
    </article>
  );
}