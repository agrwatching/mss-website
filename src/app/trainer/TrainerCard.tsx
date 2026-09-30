// src/components/trainer/TrainerCard.tsx
import Image from "next/image";
import type { Trainer } from "@/data/trainer";

export function TrainerCard({ t }: { t: Trainer }) {
  const inisial = t.nama.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();

  return (
    <article className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_16px_32px_-18px_rgba(10,59,209,0.45)]">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-brand-blue/10">
        {t.foto ? (
          <Image src={t.foto} alt={`Foto ${t.nama}`} fill sizes="80px" className="object-cover transition duration-500 group-hover:scale-110" />
        ) : (
          <span className="grid size-full place-items-center font-display text-xl font-extrabold text-brand-blue">{inisial}</span>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="truncate font-bold text-ink">{t.nama}</h3>
        <p className="mt-0.5 line-clamp-2 text-sm text-ink/70">{t.keahlian}</p>
      </div>
    </article>
  );
}