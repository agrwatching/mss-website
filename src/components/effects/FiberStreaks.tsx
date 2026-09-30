// Garis cahaya fiber optik yang melintas. CSS murni, hanya transform.
const lines = [
  { top: "18%", delay: "0s" },
  { top: "42%", delay: "1.8s" },
  { top: "67%", delay: "3.2s" },
  { top: "86%", delay: "0.9s" },
];

export function FiberStreaks() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {lines.map((l) => (
        <span
          key={l.top}
          style={{ top: l.top, animationDelay: l.delay }}
          className="absolute left-0 h-px w-1/3 animate-streak bg-gradient-to-r from-transparent via-brand-yellow to-transparent will-change-transform"
        />
      ))}
    </div>
  );
}
