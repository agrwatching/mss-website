// src/app/berita/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtikel, getArtikelBySlug, hires } from "@/services/blog";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArtikelGrid } from "@/components/berita/ArtikelGrid";

export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = await getArtikelBySlug(slug);
  if (!a) return { title: "Berita tidak ditemukan" };

  return {
    title: a.judul,
    description: a.ringkasan,
    openGraph: {
      type: "article",
      title: a.judul,
      description: a.ringkasan,
      publishedTime: a.tanggal,
      images: a.gambar ? [hires(a.gambar, 1200)] : undefined,
    },
  };
}

export default async function ArtikelPage({ params }: Props) {
  const { slug } = await params;
  const a = await getArtikelBySlug(slug);
  if (!a) notFound();

  const { items } = await getArtikel({ limit: 4 });
  const terkait = items.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <article>
      <header className="relative overflow-hidden bg-gradient-to-br from-brand-blue-deep to-brand-blue pb-28 pt-14 text-white md:pt-16">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-80 animate-drift rounded-full bg-[radial-gradient(circle,rgba(255,242,0,0.35),transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl px-5">
          <nav aria-label="Breadcrumb" className="animate-rise text-sm text-white/70">
            <Link href="/" className="transition hover:text-brand-yellow">Beranda</Link>
            <span className="mx-2">/</span>
            <Link href="/berita" className="transition hover:text-brand-yellow">Berita</Link>
          </nav>
          <Badge className="mt-5 animate-rise bg-white/15 text-white [animation-delay:60ms]">{a.sumber}</Badge>
          <h1 className="mt-3 animate-rise text-2xl font-extrabold leading-tight md:text-4xl [animation-delay:120ms]">
            {a.judul}
          </h1>
          <p className="mt-4 animate-rise text-sm text-white/70 [animation-delay:180ms]">
            <time dateTime={a.tanggal}>
              {new Date(a.tanggal).toLocaleDateString("id-ID", { dateStyle: "long" })}
            </time>
            <span className="mx-2">•</span>
            {a.menit} menit baca
          </p>
        </div>
      </header>

      <div className="relative mx-auto -mt-16 max-w-3xl px-5">
        <div className="animate-rise rounded-3xl bg-white p-5 shadow-[0_20px_60px_-25px_rgba(3,6,15,0.35)] [animation-delay:240ms] md:p-10">
          {a.gambar && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={hires(a.gambar, 1200)}
              alt={a.judul}
              className="mb-8 aspect-video w-full rounded-2xl object-cover"
            />
          )}

          <div className="artikel" dangerouslySetInnerHTML={{ __html: a.konten }} />

          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-6">
            <Button href={a.url} external variant="blue">Lihat di Blogger</Button>
            <Link
              href="/berita"
              className="rounded-full border border-ink/10 px-5 py-2.5 text-sm font-semibold transition hover:bg-brand-blue/10 hover:text-brand-blue"
            >
              ← Semua berita
            </Link>
          </div>
        </div>
      </div>

      {terkait.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading title="Berita Lainnya" />
            <div className="mt-10">
              <ArtikelGrid items={terkait} />
            </div>
          </div>
        </section>
      )}
    </article>
  );
}