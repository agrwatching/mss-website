import { alur } from "@/data/alur";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/effects/Reveal";

export function AlurKerjaSama() {
  return (
    <section id="alur" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Alur Kerja Sama" desc="Empat langkah mudah bekerja sama dengan kami." />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {alur.map((a, i) => (
            <Reveal key={a.judul} variant="up" delay={i * 120}>
              <article className="h-full rounded-2xl border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(10,59,209,0.35)]">
                <div className="relative grid size-12 place-items-center">
                  <span aria-hidden className="absolute -inset-2 animate-ring rounded-full border-2 border-brand-blue/60" style={{ animationDelay: `${i * 0.6}s` }} />
                  <span className="relative grid size-12 place-items-center rounded-full bg-brand-blue font-display font-bold text-white">{i + 1}</span>
                </div>
                <h3 className="mt-5 font-bold text-ink">{a.judul}</h3>
                <p className="mt-2 text-sm text-ink/70">{a.deskripsi}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}