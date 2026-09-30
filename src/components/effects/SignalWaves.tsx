// Gelombang sinyal ala logo MSS. Hanya transform + opacity agar ringan.
export function SignalWaves({ showCore = true }: { showCore?: boolean }) {
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center" aria-hidden="true">
      <div className="absolute inset-[14%] rounded-full border border-white/10" />
      <div className="absolute inset-[4%] rounded-full border border-white/5" />
      {[0, 1.5, 3].map((d) => (
        <div
          key={d}
          style={{ animationDelay: `${d}s` }}
          className="absolute inset-0 animate-ring rounded-full border-2 border-brand-yellow/70 will-change-transform"
        />
      ))}
      {showCore && (
        <div className="relative z-10 grid size-36 animate-float place-items-center rounded-[2rem] bg-brand-blue shadow-[0_0_90px_rgba(10,59,209,0.75)]">
          <svg viewBox="0 0 100 100" className="size-20" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round">
            <circle cx="50" cy="36" r="14" />
            <path d="M50 52v38" />
          </svg>
        </div>
      )}
    </div>
  );
}
