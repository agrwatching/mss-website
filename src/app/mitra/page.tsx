// src/app/mitra/page.tsx
import type { Metadata } from "next";
import { mitra } from "@/data/mitra";
import { PageHeader } from "@/components/layout/PageHeader";
import { DaftarMitra } from "@/components/mitra/DaftarMitra";
import { MitraJaringan } from "@/components/mitra/MitraJaringan";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Mitra",
  description: "Sekolah, instansi, dan perusahaan yang bekerja sama dengan PT. Media Solusi Sukses.",
};

export default function MitraPage() {
  return (
    <>
      <PageHeader title="Mitra Kami" desc="Sekolah, instansi, dan perusahaan yang telah bekerja sama dengan kami." />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <DaftarMitra items={mitra} />
        </div>
        <MitraJaringan />
      </section>
      <CTA />
    </>
  );
}