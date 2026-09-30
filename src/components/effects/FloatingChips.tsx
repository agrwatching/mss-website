// TODO: sesuaikan label dengan topik pelatihan yang benar-benar ditawarkan
const chips = [
  { label: "Pemrograman Web", pos: "left-0 top-[10%]", delay: "0s" },
  { label: "Cyber Security", pos: "right-0 top-[22%]", delay: "1.2s" },
  { label: "Jaringan Komputer", pos: "left-[2%] bottom-[16%]", delay: "2.4s" },
  { label: "Desain Digital", pos: "right-[2%] bottom-[6%]", delay: "3.6s" },
];

export function FloatingChips() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20"
    >
      {chips.map((c) => (
        <span
          key={c.label}
          style={{ animationDelay: c.delay }}
          className={`absolute ${c.pos} animate-float rounded-full border border-white/20 bg-ink/60 px-3 py-1.5 text-[0.7rem] font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs`}
        >
          <span className="mr-2 inline-block size-2 rounded-full bg-brand-yellow" />
          {c.label}
        </span>
      ))}
    </div>
  );
}