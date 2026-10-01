// src/app/keunggulan/page.tsx
import type { Metadata } from "next";
import { keunggulan } from "@/data/keunggulan";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/effects/Reveal";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Keunggulan",
  description: "Alasan sekolah, instansi, dan perusahaan memilih PT. Media Solusi Sukses.",
};

export default function KeunggulanPage() {
  return (
    <>
      <PageHeader
        title="Keunggulan Kami"
        desc="Alasan sekolah, instansi, dan perusahaan mempercayakan kebutuhannya kepada kami."
      />

      <section className="py-14 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
          {keunggulan.map((k, i) => (
            <Reveal key={k.title} variant="up" delay={(i % 3) * 100} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-[0_24px_48px_-24px_rgba(10,59,209,0.4)]">
                <span className="pointer-events-none absolute -right-1 -top-4 select-none font-display text-8xl font-extrabold text-brand-blue/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-brand-blue/10">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative grid size-12 place-items-center rounded-full bg-brand-yellow text-ink transition duration-500 group-hover:rotate-[360deg] group-hover:bg-brand-blue group-hover:text-white">
                  <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="m5 10.5 3.2 3.2L15 6.8" />
                  </svg>
                </span>

                <h2 className="relative mt-5 text-lg font-extrabold text-ink">{k.title}</h2>
                <p className="relative mt-2 leading-relaxed text-ink/70">{k.desc}</p>

                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-brand-yellow transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}