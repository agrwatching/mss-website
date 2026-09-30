import Link from "next/link";
import { cn } from "@/lib/cn";

const styles = {
  primary: "bg-brand-yellow text-ink hover:shadow-[0_10px_30px_-8px_rgba(255,242,0,0.7)]",
  outline: "border border-white/40 text-white hover:border-white hover:bg-white/10",
  blue: "bg-brand-blue text-white hover:bg-brand-blue-deep hover:shadow-[0_10px_30px_-8px_rgba(10,59,209,0.7)]",
  outlineBlue: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
};

type Props = {
  href: string;
  variant?: keyof typeof styles;
  external?: boolean;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({ href, variant = "primary", external, arrow, className, children }: Props) {
  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow",
    styles[variant],
    className
  );
  const content = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/40 transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
      />
      <span className="relative">{children}</span>
      {arrow && (
        <svg viewBox="0 0 24 24" className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
