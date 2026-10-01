// src/app/not-found.tsx
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div className="animate-rise">
        <p className="font-display text-7xl font-extrabold text-brand-blue">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink">Halaman tidak ditemukan</h1>
        <p className="mt-2 text-ink/70">Halaman yang Anda cari tidak ada atau sudah dipindahkan.</p>
        <div className="mt-8">
          <Button href="/" variant="blue">Kembali ke Beranda</Button>
        </div>
      </div>
    </section>
  );
}