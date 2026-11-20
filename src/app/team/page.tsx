import type { Metadata } from "next";
import { bagan, inti } from "@/data/team";
import { PageHeader } from "@/components/layout/PageHeader";
import { CeoSection } from "@/components/team/CeoSection";
import { CoreCard } from "@/components/team/CoreCard";
import { OrgChart } from "@/components/team/OrgChart";
import { Reveal } from "@/components/effects/Reveal";

export const metadata: Metadata = {
  title: "Tim Kami",
  description: "Tim profesional PT. Media Solusi Sukses yang siap mendampingi sekolah, instansi, dan perusahaan.",
};

export default function TrainerPage() {
  return (
    <>
      <PageHeader
        title="Tim Kami"
        desc="Tim profesional PT. Media Solusi Sukses yang siap mendampingi sekolah, instansi, dan perusahaan."
      />

      {/* CEO */}
      <section className="bg-white pt-14 md:pt-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal variant="up">
            <CeoSection />
          </Reveal>
        </div>
      </section>

      {/* Tim inti */}
      <section className="bg-gradient-to-b from-white to-brand-blue/5 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal variant="up">
            <h2 className="font-display text-2xl font-extrabold text-ink md:text-3xl">
              <span className="border-l-4 border-brand-yellow pl-3">Tim Inti</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {inti.map((t, i) => (
              <Reveal key={t.nama} variant="up" delay={(i % 4) * 90} className="h-full">
                <CoreCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bagan trainer */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-deep via-brand-blue to-brand-blue-deep py-14 md:py-16">
        <span
          aria-hidden
          className="absolute -right-16 -top-16 size-64 rounded-full bg-[radial-gradient(circle,rgba(255,242,0,0.25),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal variant="up">
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
              <span className="border-l-4 border-brand-yellow pl-3">Tim Trainer</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <div className="mt-10">
              <OrgChart data={bagan} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}