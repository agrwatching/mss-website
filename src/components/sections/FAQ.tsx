// src/components/sections/FAQ.tsx
import { faq } from "@/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LihatSelengkapnya } from "@/components/ui/LihatSelengkapnya";
import Accordion from "@/components/ui/Accordion";

export function FAQ() {
  return (
    <section id="faq" className="bg-brand-blue/5 py-20">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading title="Pertanyaan Umum" />
        <div className="mt-10">
          <Accordion items={faq.slice(0, 3)} />
        </div>
        <div className="mt-10 text-center">
          <LihatSelengkapnya href="/faq" label="Lihat semua FAQ" />
        </div>
      </div>
    </section>
  );
}