export function SectionHeading({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-brand-yellow" />
      {desc && <p className="mt-4 text-lg leading-relaxed text-ink/70">{desc}</p>}
    </div>
  );
}