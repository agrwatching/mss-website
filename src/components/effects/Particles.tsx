// Titik melayang. Posisi tetap (bukan random) supaya tidak ada hydration mismatch.
const dots = [
  { l: "6%", t: "22%", s: 6, d: "0s" },
  { l: "18%", t: "78%", s: 4, d: "2s" },
  { l: "34%", t: "12%", s: 5, d: "4s" },
  { l: "52%", t: "88%", s: 6, d: "1s" },
  { l: "66%", t: "18%", s: 4, d: "3s" },
  { l: "82%", t: "70%", s: 6, d: "5s" },
  { l: "93%", t: "30%", s: 5, d: "2.5s" },
];

export function Particles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {dots.map((p, i) => (
        <span
          key={i}
          style={{ left: p.l, top: p.t, width: p.s, height: p.s, animationDelay: p.d }}
          className="absolute animate-drift rounded-full bg-brand-yellow/70 will-change-transform"
        />
      ))}
    </div>
  );
}
