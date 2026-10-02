import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SignalWaves } from "@/components/effects/SignalWaves";
import { GridBackground } from "@/components/effects/GridBackground";
import { Particles } from "@/components/effects/Particles";
import { Marquee } from "@/components/effects/Marquee";
import { HeroVisual } from "@/components/effects/HeroVisual";
import { TombolCompro } from "@/components/ui/TombolCompro";

const headline = "Solusi internet untuk masyarakat, instansi dan perusahaan".split(" ");

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <GridBackground />
      <Particles />
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 size-[28rem] animate-drift rounded-full bg-brand-blue/40 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-6xl items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex animate-rise items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1.5 text-xs font-semibold text-brand-yellow">
            <span className="size-2 rounded-full bg-brand-yellow" />
            {site.label}
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            {headline.map((w, i) => (
              <span key={i} style={{ animationDelay: `${i * 90}ms` }} className="mr-[0.25em] inline-block animate-rise">
                {w}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-lg animate-rise text-lg leading-relaxed text-white/75 [animation-delay:600ms]">
            {site.description}
          </p>
          <div className="mt-8 flex animate-rise flex-wrap gap-3 [animation-delay:750ms]">
            <Button href="/program" arrow>Lihat program</Button>
            <TombolCompro variant="outline" />
          </div>
        </div>

        <div className="relative mx-auto grid aspect-square w-full max-w-md animate-rise place-items-center [animation-delay:300ms]">
          <div className="absolute inset-0">
            <SignalWaves showCore={false} />
          </div>
          <HeroVisual />
        </div>
      </div>
      <Marquee />
    </section>
  );
}