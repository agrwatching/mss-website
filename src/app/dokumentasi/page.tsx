// src/app/dokumentasi/page.tsx
import type { Metadata } from "next";
import { getGaleri } from "@/lib/galeri";
import { PageHeader } from "@/components/layout/PageHeader";
import { GaleriDokumentasi } from "@/components/dokumentasi/GaleriDokumentasi";

export const metadata: Metadata = {
  title: "Dokumentasi",
  description: "Dokumentasi kegiatan pelatihan dan kerja sama PT. Media Solusi Sukses bersama mitra.",
};

export default function DokumentasiPage() {
  const foto = getGaleri();

  return (
    <>
      <PageHeader title="Dokumentasi" desc="Momen kegiatan kami bersama sekolah dan instansi mitra." />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <GaleriDokumentasi items={foto} />
        </div>
      </section>
    </>
  );
}