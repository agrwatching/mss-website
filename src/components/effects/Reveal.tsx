"use client";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

const hidden = {
  up: "translate-y-8 opacity-0",
  left: "-translate-x-8 opacity-0",
  right: "translate-x-8 opacity-0",
  zoom: "scale-90 opacity-0",
};

export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: keyof typeof hidden;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition duration-700 ease-out motion-reduce:transition-none",
        inView ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hidden[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
