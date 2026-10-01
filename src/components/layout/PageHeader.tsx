// src/components/layout/PageHeader.tsx
import Link from "next/link";
import { GridBackground } from "@/components/effects/GridBackground";
import { Particles } from "@/components/effects/Particles";

export function PageHeader({ title, desc }: { title: string; desc?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-10 text-white md:py-14">
      <GridBackground />
      <Particles />
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 size-[28rem] animate-drift rounded-full bg-brand-blue/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <nav aria-label="Breadcrumb" className="animate-rise text-sm text-white/70">
          <Link href="/" className="transition hover:text-brand-yellow">Beranda</Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </nav>
        <h1 className="mt-2 animate-rise text-3xl font-extrabold tracking-tight md:text-4xl [animation-delay:80ms]">
          {title}
        </h1>
        {desc && (
          <p className="mt-2 max-w-2xl animate-rise text-white/75 [animation-delay:160ms]">{desc}</p>
        )}
      </div>
    </section>
  );
}