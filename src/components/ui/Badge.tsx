// src/components/ui/Badge.tsx
import { cn } from "@/lib/cn";

export default function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary", className)}>
      {children}
    </span>
  );
}