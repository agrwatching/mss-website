// src/components/berita/Pagination.tsx
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = { page: number; total: number; basePath: string };

export function Pagination({ page, total, basePath }: Props) {
  if (total <= 1) return null;

  const href = (n: number) => (n === 1 ? basePath : `${basePath}?page=${n}`);
  const start = Math.max(1, Math.min(page - 2, total - 4));
  const end = Math.min(total, start + 4);
  const nomor = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const base = "grid h-10 min-w-10 place-items-center rounded-full px-4 text-sm font-semibold transition";
  const biasa = "border border-ink/10 hover:bg-brand-blue/10 hover:text-brand-blue";

  return (
    <nav aria-label="Navigasi halaman" className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {page > 1 && (
        <Link href={href(page - 1)} rel="prev" className={cn(base, biasa)}>← Sebelumnya</Link>
      )}
      {nomor.map((n) => (
        <Link
          key={n}
          href={href(n)}
          aria-current={n === page ? "page" : undefined}
          className={cn(base, n === page ? "bg-brand-blue text-white" : biasa)}
        >
          {n}
        </Link>
      ))}
      {page < total && (
        <Link href={href(page + 1)} rel="next" className={cn(base, biasa)}>Berikutnya →</Link>
      )}
    </nav>
  );
}