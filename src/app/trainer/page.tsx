// src/app/trainer/page.tsx
import type { Metadata } from "next";
import { trainer } from "@/data/trainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { TrainerCard } from "@/components/trainer/TrainerCard";
import { Reveal } from "@/components/effects/Reveal";

export const metadata: Metadata = { title: "Trainer Expert" };

export default function TrainerPage() {
  return (
    <>
      <PageHeader
        title="Trainer Expert"
        desc="Tim pengajar dan praktisi berpengalaman yang siap mendampingi sekolah dan instansi Anda."
      />
      <section className="bg-gradient-to-b from-white to-brand-blue/5 py-14 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 md:gap-6 lg:grid-cols-4">
          {trainer.map((t, i) => (
            <Reveal key={t.slug} variant="up" delay={(i % 4) * 90} className="h-full">
              <TrainerCard t={t} i={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}