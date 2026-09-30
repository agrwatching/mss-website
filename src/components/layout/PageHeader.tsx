// src/components/layout/PageHeader.tsx
import Link from "next/link";

export function PageHeader({ title, desc }: { title: string; desc?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-deep to-brand-blue py-16 text-white md:py-20">
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-80 animate-drift rounded-full bg-[radial-gradient(circle,rgba(255,242,0,0.35),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-10 size-72 animate-drift rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2),transparent_70%)] [animation-delay:-7s]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <nav aria-label="Breadcrumb" className="animate-rise text-sm text-white/70">
          <Link href="/" className="transition hover:text-brand-yellow">Beranda</Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </nav>
        <h1 className="mt-3 animate-rise text-3xl font-extrabold md:text-5xl [animation-delay:80ms]">{title}</h1>
        {desc && <p className="mt-3 max-w-2xl animate-rise text-white/80 [animation-delay:160ms]">{desc}</p>}
      </div>
    </section>
  );
}