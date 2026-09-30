// src/app/trainer/page.tsx
import type { Metadata } from "next";
import { trainer } from "@/data/trainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { TrainerCard } from "@/app/trainer/TrainerCard";
import { Reveal } from "@/components/effects/Reveal";

export const metadata: Metadata = { title: "Trainer Expert" };

export default function TrainerPage() {
  return (
    <>
      <PageHeader title="Trainer Expert" desc="Tim pengajar berpengalaman yang siap mendampingi sekolah Anda." />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {trainer.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 3) * 80}>
              <TrainerCard t={t} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}