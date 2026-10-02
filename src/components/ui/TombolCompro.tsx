// src/components/ui/TombolCompro.tsx
import { cn } from "@/lib/cn";

const FILE_COMPRO = "/company-profile-mss.pdf";

export function TombolCompro({
  label = "Unduh Company Profile",
  variant = "outline",
  className,
}: {
  label?: string;
  variant?: "outline" | "solid" | "link";
  className?: string;
}) {
  return (
    <a
      href={FILE_COMPRO}
      download="Company-Profile-PT-Media-Solusi-Sukses.pdf"
      className={cn(
        "group inline-flex items-center justify-center gap-2 font-semibold transition",
        variant === "outline" &&
          "rounded-full border-2 border-white/70 px-6 py-3 text-white hover:bg-white hover:text-ink",
        variant === "solid" &&
          "rounded-full bg-brand-yellow px-6 py-3 text-ink hover:brightness-105",
        variant === "link" && "text-sm text-white/80 hover:text-brand-yellow",
        className,
      )}
    >
      <svg
        viewBox="0 0 20 20"
        className="size-4 transition group-hover:translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M10 3v10m0 0l-4-4m4 4l4-4M3 17h14" />
      </svg>
      {label}
    </a>
  );
}