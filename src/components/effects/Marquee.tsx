const items = ["Trainer berpengalaman", "Hadir langsung ke sekolah", "Praktik langsung", "Untuk guru dan siswa", "Materi sesuai kebutuhan"];

export function Marquee() {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={key === "b"}>
      {items.map((t) => (
        <span key={t} className="flex items-center gap-8 whitespace-nowrap font-display text-sm font-semibold text-white/70">
          {t}
          <span className="size-2 rotate-45 bg-brand-yellow" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-t border-white/10 py-4">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}