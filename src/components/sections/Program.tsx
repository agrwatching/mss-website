// src/components/sections/Program.tsx
import { program } from "@/data/program";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LihatSelengkapnya } from "@/components/ui/LihatSelengkapnya";
import { Reveal } from "@/components/effects/Reveal";

const arah = ["left", "up", "right"] as const;

export function Program() {
  return (
    <section id="program" className="overflow-x-clip py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Program Pelatihan" desc="TODO deskripsi singkat." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {program.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} variant={arah[i % 3]} delay={i * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-[0_20px_40px_-20px_rgba(10,59,209,0.4)]">
                <span className="pointer-events-none absolute -right-1 -top-3 select-none font-display text-7xl font-extrabold text-brand-blue/5 transition-colors duration-300 group-hover:text-brand-blue/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative grid size-12 place-items-center rounded-xl bg-brand-blue/10 text-2xl transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand-yellow">
                  {p.ikon}
                </div>
                <h3 className="relative mt-4 text-lg font-bold text-ink">{p.judul}</h3>
                <p className="relative mt-2 text-ink/70">{p.ringkasan}</p>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-brand-yellow transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <LihatSelengkapnya href="/program" label="Lihat semua program" />
        </div>
      </div>
    </section>
  );
}