"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChartLine, FaGlobe, FaLightbulb, FaUsers } from "react-icons/fa6";
import { ceo } from "@/data/team";
import { imgSrc, isRemote } from "@/lib/img";

const IKON = {
  globe: FaGlobe,
  bulb: FaLightbulb,
  users: FaUsers,
  chart: FaChartLine,
} as const;

export function CeoSection() {
  const [gagal, setGagal] = useState(false);
  const foto = gagal ? undefined : ceo.foto;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-ink/10">
      <div className="grid md:grid-cols-[1.25fr_1fr]">
        {/* Teks */}
        <div className="order-2 p-6 md:order-1 md:p-10">
          <h2 className="font-display text-4xl font-extrabold uppercase leading-none md:text-6xl">
            <span className="text-brand-blue">Our</span> <span className="text-ink">CEO</span>
          </h2>
          <p className="mt-2 border-b-2 border-brand-blue/30 pb-2 text-xs font-bold uppercase tracking-[0.25em] text-ink md:text-sm">
            PT. Media Solusi Sukses
          </p>

          <p className="mt-4 text-sm leading-relaxed text-ink/80 md:text-base">{ceo.sambutan}</p>

          <blockquote className="mt-6 flex gap-3 rounded-2xl bg-brand-blue p-4 text-white md:p-5">
            <span aria-hidden className="font-display text-4xl font-extrabold leading-none text-brand-yellow">
              “
            </span>
            <p className="text-sm font-semibold italic leading-relaxed md:text-base">{ceo.kutipan}</p>
          </blockquote>

          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {ceo.nilai.map((n) => {
              const Icon = IKON[n.ikon as keyof typeof IKON];
              return (
                <li key={n.judul} className="flex flex-col items-center text-center">
                  <span className="grid size-11 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <span className="mt-2 text-xs font-bold leading-tight text-ink">{n.judul}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Foto */}
        <div className="relative order-1 min-h-72 bg-brand-blue-deep md:order-2 md:min-h-full">
          {foto ? (
            <Image
              src={imgSrc(foto)}
              alt={ceo.nama ? `Foto ${ceo.nama}` : "Foto CEO PT. Media Solusi Sukses"}
              fill
              unoptimized={isRemote(foto)}
              sizes="(min-width:768px) 40vw, 100vw"
              onError={() => setGagal(true)}
              className="object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-5xl font-extrabold text-white/80">CEO</div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 pt-12 text-white">
            {ceo.nama && <p className="font-display text-lg font-extrabold">{ceo.nama}</p>}
            <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow">{ceo.jabatan}</p>
          </div>
          <span aria-hidden className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-yellow" />
        </div>
      </div>
    </div>
  );
}