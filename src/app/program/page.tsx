// src/app/program/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { program } from "@/data/program";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/effects/Reveal";
import { AlurKerjaSama } from "@/components/sections/AlurKerjaSama";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Program Pelatihan",
  description: "Program pelatihan teknologi untuk guru, siswa, dan instansi dari PT. Media Solusi Sukses.",
};

export default function ProgramPage() {
  return (
    <>
      <PageHeader
        title="Program Pelatihan"
        desc="Pelatihan teknologi yang disusun sesuai kebutuhan sekolah dan instansi Anda."
      />

      <section className="py-14 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2">
          {program.map((p, i) => (
            <Reveal key={p.slug} variant={i % 2 ? "right" : "left"} delay={(i % 2) * 100} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-[0_24px_48px_-24px_rgba(10,59,209,0.45)] md:p-8">
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-blue/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="pointer-events-none absolute -right-2 -top-5 select-none font-display text-8xl font-extrabold text-brand-blue/5 transition-colors duration-300 group-hover:text-brand-blue/10">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative grid size-14 place-items-center rounded-2xl bg-brand-blue/10 text-3xl transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand-yellow">
                  {p.ikon}
                </div>
                <h2 className="relative mt-5 text-xl font-extrabold text-ink">{p.judul}</h2>
                <p className="relative mt-2 text-ink/70">{p.ringkasan}</p>
                <Link
                href={`/kontak?topik=${encodeURIComponent(p.judul)}`}
                className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-blue"
                >
                Tanya program ini
                <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                >
                    →
                </span>
                </Link>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-brand-yellow transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <AlurKerjaSama />
      <CTA />
    </>
  );
}