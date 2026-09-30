import { keunggulan } from "@/data/keunggulan";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LihatSelengkapnya } from "@/components/ui/LihatSelengkapnya";
import { Reveal } from "@/components/effects/Reveal";

export function Keunggulan({ limit, showMore = false }: { limit?: number; showMore?: boolean }) {
  const items = limit ? keunggulan.slice(0, limit) : keunggulan;

  return (
    <section id="keunggulan" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            title="Kenapa memilih MSS"
            desc="Pelatihan yang dirancang supaya benar-benar terpakai di kelas, bukan sekadar seminar."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <article className="h-full border-t-4 border-brand-blue bg-white p-6 shadow-[0_10px_40px_-15px_rgba(10,59,209,0.35)] transition duration-300 hover:-translate-y-1 hover:border-brand-yellow">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {showMore && keunggulan.length > items.length && (
          <div className="mt-10">
            <LihatSelengkapnya href="/keunggulan" />
          </div>
        )}
      </div>
    </section>
  );
}