// src/components/sections/Dokumentasi.tsx
import { dokumentasi } from "@/data/dokumentasi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LihatSelengkapnya } from "@/components/ui/LihatSelengkapnya";
import { GaleriDokumentasi } from "@/components/dokumentasi/GaleriDokumentasi";

export function Dokumentasi({ limit = 6, showMore = true }: { limit?: number; showMore?: boolean }) {
  return (
    <section id="dokumentasi" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Dokumentasi Kegiatan" desc="Momen kegiatan bersama sekolah dan instansi mitra." />
        <div className="mt-10">
          <GaleriDokumentasi items={dokumentasi.slice(0, limit)} />
        </div>
        {showMore && (
          <div className="mt-10 text-center">
            <LihatSelengkapnya href="/dokumentasi" label="Lihat semua dokumentasi" />
          </div>
        )}
      </div>
    </section>
  );
}