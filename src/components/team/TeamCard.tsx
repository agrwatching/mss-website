"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaEnvelope, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import type { Trainer } from "@/data/team";
import { imgSrc, isRemote } from "@/lib/img";

export function TrainerCard({ t, i = 0 }: { t: Trainer; i?: number }) {
  const box = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);
  const spot = useRef<HTMLSpanElement>(null);
  const raf = useRef(0);
  const aktif = useRef(false);
  const [gagal, setGagal] = useState(false);

  const foto = gagal ? undefined : t.foto;
  const inisial = t.nama.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();

  const kontak = [
    t.email && { nama: "Email", href: `mailto:${t.email}`, icon: FaEnvelope },
    t.whatsapp && { nama: "WhatsApp", href: `https://wa.me/${t.whatsapp.replace(/\D/g, "")}`, icon: FaWhatsapp },
    t.instagram && { nama: "Instagram", href: `https://instagram.com/${t.instagram.replace(/^@/, "")}`, icon: FaInstagram },
    t.tiktok && { nama: "TikTok", href: `https://tiktok.com/@${t.tiktok.replace(/^@/, "")}`, icon: FaTiktok },
  ].filter((k): k is { nama: string; href: string; icon: typeof FaEnvelope } => Boolean(k));

  // Tilt 3D + cahaya sorot: hanya mouse, dilewati jika pengguna memilih reduced motion
  const masuk = (e: React.PointerEvent) => {
    aktif.current =
      e.pointerType === "mouse" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  const gerak = (e: React.PointerEvent) => {
    if (!aktif.current) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const el = box.current;
      if (!el || !tilt.current || !spot.current) return;
      const r = el.getBoundingClientRect();
      const x = clientX - r.left;
      const y = clientY - r.top;
      tilt.current.style.setProperty("--rx", `${(0.5 - y / r.height) * 9}deg`);
      tilt.current.style.setProperty("--ry", `${(x / r.width - 0.5) * 11}deg`);
      spot.current.style.transform = `translate3d(${x - 120}px, ${y - 120}px, 0)`;
    });
  };

  const lepas = () => {
    cancelAnimationFrame(raf.current);
    tilt.current?.style.setProperty("--rx", "0deg");
    tilt.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={box}
      onPointerEnter={masuk}
      onPointerMove={gerak}
      onPointerLeave={lepas}
      className="group relative h-full [perspective:900px]"
    >
      <div
        ref={tilt}
        className="relative h-full overflow-hidden rounded-3xl bg-ink/10 p-[1.5px] transition-[transform,translate,box-shadow] duration-200 ease-out [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_60px_-28px_rgba(10,59,209,0.65)]"
      >
        {/* Border gradient berputar (jeda saat tidak di-hover) */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[170%] -translate-x-1/2 -translate-y-1/2 animate-orbit bg-[conic-gradient(from_0deg,transparent_0_62%,var(--color-brand-yellow)_82%,var(--color-brand-blue)_100%)] opacity-0 transition-opacity duration-500 [animation-play-state:paused] group-hover:opacity-100 group-hover:[animation-play-state:running]"
        />

        <article className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem] bg-ink">
          {/* Foto, atau avatar inisial jika foto belum ada / gagal dimuat */}
          {foto ? (
            <Image
              src={imgSrc(foto)}
              alt={`Foto ${t.nama}`}
              fill
              unoptimized={isRemote(foto)}
              sizes="(min-width:1024px) 25vw, 50vw"
              onError={() => setGagal(true)}
              className="object-cover object-top transition duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-blue-deep via-brand-blue to-brand-blue-deep">
              <span aria-hidden className="absolute -right-10 -top-10 size-48 animate-drift rounded-full bg-[radial-gradient(circle,rgba(255,242,0,0.4),transparent_70%)]" />
              <span aria-hidden className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:18px_18px]" />
              <span className="relative grid size-24 place-items-center rounded-full bg-white/10 font-display text-4xl font-extrabold text-white ring-1 ring-white/25 transition duration-500 group-hover:scale-110">
                {inisial}
              </span>
            </div>
          )}

          {/* Gradasi gelap supaya teks terbaca */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Cahaya sorot mengikuti kursor */}
          <span
            ref={spot}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 size-60 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          {/* Kilau menyapu */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[420%]"
          />

          {/* Nomor urut + lencana */}
          <span className="absolute left-3 top-3 rounded-full bg-white/10 px-2.5 py-1 text-[0.65rem] font-bold tracking-widest text-white ring-1 ring-white/20">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            aria-hidden
            className="absolute right-3 top-3 grid size-7 place-items-center rounded-full bg-brand-yellow text-ink transition duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
          >
            <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 10.5 3.2 3.2L15 6.8" />
            </svg>
          </span>

          {/* Info: naik saat hover, selalu tampil di layar sentuh */}
          <div className="absolute inset-x-0 bottom-0 translate-y-12 p-4 transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0 md:p-5 [@media(hover:none)]:translate-y-0">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-yellow">{t.role ?? "Tim MSS"}</p>
            <h3 className="mt-1 font-display text-lg font-extrabold leading-tight text-white md:text-xl">{t.nama}</h3>
            <p className="mt-1 line-clamp-2 text-xs text-white/70">{t.role}</p>
            <span aria-hidden className="mt-3 block h-0.5 w-16 origin-left scale-x-50 rounded bg-brand-yellow transition-transform duration-500 group-hover:scale-x-100" />

            {kontak.length > 0 && (
              <ul className="mt-3 flex gap-2 opacity-0 transition duration-500 delay-100 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100">
                {kontak.map(({ nama, href, icon: Icon }, n) => (
                  <li key={nama}>
                    <a
                      href={href}
                      aria-label={`${nama} ${t.nama}`}
                      title={nama}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      style={{ transitionDelay: `${n * 50}ms` }}
                      className="grid size-8 translate-y-2 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20 transition duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0 hover:!-translate-y-1 hover:scale-110 hover:bg-brand-yellow hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [@media(hover:none)]:translate-y-0"
                    >
                      <Icon aria-hidden className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}