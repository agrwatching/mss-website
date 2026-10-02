// src/components/sections/Dokumentasi.tsx
import { getGaleri } from "@/lib/galeri";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LihatSelengkapnya } from "@/components/ui/LihatSelengkapnya";
import { GaleriDokumentasi } from "@/components/dokumentasi/GaleriDokumentasi";

export function Dokumentasi({ limit = 6, showMore = true }: { limit?: number; showMore?: boolean }) {
  const semua = getGaleri();
  if (semua.length === 0) return null; // folder kosong: section disembunyikan

  return (
    <section id="dokumentasi" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Dokumentasi Kegiatan" desc="Momen kegiatan bersama sekolah dan instansi mitra." />
        <div className="mt-10">
          <GaleriDokumentasi items={semua.slice(0, limit)} />
        </div>
        {showMore && semua.length > limit && (
          <div className="mt-10 text-center">
            <LihatSelengkapnya href="/dokumentasi" label="Lihat semua dokumentasi" />
          </div>
        )}
      </div>
    </section>
  );
}