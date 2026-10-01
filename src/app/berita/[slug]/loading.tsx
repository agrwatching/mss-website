// src/app/berita/[slug]/loading.tsx
export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-64 bg-brand-blue/20" />
      <div className="mx-auto -mt-16 max-w-3xl space-y-4 rounded-3xl bg-white p-10 shadow-xl">
        <div className="aspect-video rounded-2xl bg-ink/10" />
        <div className="h-4 w-full rounded bg-ink/10" />
        <div className="h-4 w-5/6 rounded bg-ink/10" />
        <div className="h-4 w-2/3 rounded bg-ink/10" />
      </div>
    </div>
  );
}