// src/components/berita/ArtikelSkeleton.tsx
export function ArtikelSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-ink/10 bg-white">
      <div className="aspect-video bg-ink/10" />
      <div className="space-y-3 p-5">
        <div className="h-5 w-24 rounded-full bg-ink/10" />
        <div className="h-4 w-full rounded bg-ink/10" />
        <div className="h-4 w-2/3 rounded bg-ink/10" />
        <div className="h-3 w-1/3 rounded bg-ink/10" />
      </div>
    </div>
  );
}