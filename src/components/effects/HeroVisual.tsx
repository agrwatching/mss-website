"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

// ── Pengaturan waktu (milidetik) ─────────────────────────────
const TAMPIL_MS = 6_000; // lama satu adegan tampil penuh
const KELUAR_MS = 1_000; // adegan lama terhisap ke tengah
const MASUK_TUNDA_MS = 1_100; // adegan baru baru mulai SETELAH yang lama hilang
const MASUK_MS = 1_000; // adegan baru memantul keluar dari tengah
const CHIP_TUNDA_MS = MASUK_TUNDA_MS + 600; // chips muncul setelah logo hampir selesai
const CHIP_JARAK_MS = 120; // jeda antar chip
const CHIP_MS = 500;
const TRANSISI_MS = CHIP_TUNDA_MS + 4 * CHIP_JARAK_MS + CHIP_MS;
const SIKLUS_MS = TAMPIL_MS + TRANSISI_MS;

type Chip = { label: string; pos: string; delay: string };

// Adegan 1: Perusahaan / ISP
// TODO: sesuaikan label dengan layanan yang benar-benar ditawarkan
const chipIsp: Chip[] = [
  { label: "Internet Fiber Optik", pos: "left-0 top-[10%]", delay: "0s" },
  { label: "Solusi Instansi", pos: "right-0 top-[22%]", delay: "1.2s" },
  { label: "Jaringan Perusahaan", pos: "left-[2%] bottom-[16%]", delay: "2.4s" },
  { label: "Dukungan Teknis", pos: "right-[2%] bottom-[6%]", delay: "3.6s" },
];

// Adegan 2: Trainer / Edukasi
const chipTrainer: Chip[] = [
  { label: "Pemrograman Web", pos: "left-0 top-[10%]", delay: "0s" },
  { label: "Cyber Security", pos: "right-0 top-[22%]", delay: "1.2s" },
  { label: "Jaringan Komputer", pos: "left-[2%] bottom-[16%]", delay: "2.4s" },
  { label: "Desain Digital", pos: "right-[2%] bottom-[6%]", delay: "3.6s" },
];

function Gif({ src, alt }: { src: string; alt: string }) {
  return (
    <Image src={src} alt={alt} width={500} height={500} unoptimized priority className="h-auto w-full" />
  );
}

const adegan = [
  {
    id: "isp",
    chips: chipIsp,
    isi: <Gif src="https://cdn-icons-gif.flaticon.com/19007/19007454.gif" alt="Ilustrasi jaringan internet" />,
  },
  {
    id: "trainer",
    chips: chipTrainer,
    isi: <Gif src="https://cdn-icons-gif.flaticon.com/16675/16675750.gif" alt="Ilustrasi pelatihan teknologi" />,
  },
];

export function HeroVisual() {
  const [aktif, setAktif] = useState(0);

  useEffect(() => {
    // Pengguna dengan reduced motion: tampilkan adegan pertama saja
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ganti = () => {
      if (!document.hidden) setAktif((a) => (a + 1) % adegan.length);
    };

    let interval: ReturnType<typeof setInterval> | undefined;
    const awal = setTimeout(() => {
      ganti();
      interval = setInterval(ganti, SIKLUS_MS);
    }, TAMPIL_MS);

    return () => {
      clearTimeout(awal);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-10">
      {adegan.map((s, i) => {
        const on = i === aktif;
        return (
          <div
            key={s.id}
            aria-hidden={!on}
            style={{
              transitionDuration: `${on ? MASUK_MS : KELUAR_MS}ms`,
              transitionDelay: `${on ? MASUK_TUNDA_MS : 0}ms`,
              // Keluar: "menghirup" lalu terhisap. Masuk: memantul halus dari titik tengah.
              transitionTimingFunction: on ? "cubic-bezier(0.34,1.56,0.64,1)" : "cubic-bezier(0.6,-0.28,0.735,0.045)",
            }}
            className={cn(
              "absolute inset-0 grid place-items-center will-change-transform transition-[scale,rotate,opacity]",
              on
                ? "scale-100 rotate-0 opacity-100"
                : "pointer-events-none scale-0 -rotate-[180deg] opacity-0 [&_*]:[animation-play-state:paused]",
            )}
          >
            <div className="relative z-10 w-3/5 animate-float rounded-full bg-white p-5 shadow-[0_0_90px_rgba(10,59,209,0.7)] ring-1 ring-white/20">
              {s.isi}
            </div>

            {/* Chips ikut terhisap bersama adegan, lalu muncul satu per satu saat adegan baru keluar */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
              {s.chips.map((c, n) => (
                <span
                  key={c.label}
                  style={{
                    transitionDuration: on ? `${CHIP_MS}ms` : "0ms",
                    // Saat keluar: tetap terlihat selama terhisap, baru di-reset setelah hilang
                    transitionDelay: on ? `${CHIP_TUNDA_MS + n * CHIP_JARAK_MS}ms` : `${KELUAR_MS}ms`,
                  }}
                  className={cn(
                    "absolute transition",
                    c.pos,
                    on ? "scale-100 opacity-100" : "scale-0 opacity-0",
                  )}
                >
                  <span
                    style={{ animationDelay: c.delay }}
                    className="block animate-float rounded-full border border-white/20 bg-ink/60 px-3 py-1.5 text-[0.7rem] font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs"
                  >
                    <span className="mr-2 inline-block size-2 rounded-full bg-brand-yellow" />
                    {c.label}
                  </span>
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}