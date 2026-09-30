// src/components/ui/Accordion.tsx
"use client";
import { useState } from "react";
import { cn } from "@/lib/cn";

type Item = { q: string; a: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900 focus-visible:outline-2 focus-visible:outline-primary"
            >
              {item.q}
              <span className={cn("transition-transform", isOpen && "rotate-45")} aria-hidden>+</span>
            </button>
            <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <p className="overflow-hidden px-5 text-slate-600">
                <span className="block pb-4">{item.a}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}