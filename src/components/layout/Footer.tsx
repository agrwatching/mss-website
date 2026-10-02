// src/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { navigation } from "@/data/navigation";
import { layanan } from "@/data/layanan";
import { site } from "@/data/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Reveal } from "@/components/effects/Reveal";

const tautan =
  "relative w-fit text-white/70 transition-colors duration-300 hover:text-brand-yellow after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand-yellow after:transition-transform after:duration-300 hover:after:scale-x-100";

export function Footer() {
  return (
    <footer className="relative text-white">
      {/* Gelombang */}
      <div aria-hidden className="overflow-hidden leading-none">
        <svg viewBox="0 0 2880 80" preserveAspectRatio="none" className="block h-10 w-[200%] animate-wave text-ink md:h-14">
          <path
            fill="currentColor"
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 C1680,80 1920,0 2160,40 C2400,80 2640,0 2880,40 L2880,80 L0,80 Z"
          />
        </svg>
      </div>

      <div className="relative isolate -mt-px overflow-hidden bg-ink">
        <div aria-hidden className="pointer-events-none absolute -left-24 top-10 -z-10 size-96 animate-drift rounded-full bg-[radial-gradient(circle,rgba(10,59,209,0.45),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-16 -z-10 size-96 animate-drift rounded-full bg-[radial-gradient(circle,rgba(255,242,0,0.12),transparent_70%)] [animation-delay:-7s]" />

        <div className="mx-auto max-w-6xl px-5 pb-8 pt-10">
          {/* Kolom */}
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
            <Reveal variant="up" className="lg:col-span-4">
              <Link href="/" className="group flex w-fit items-center gap-3" aria-label={`Beranda ${site.name}`}>
                <Image
                  src="/logo.jpg"
                  alt={`Logo ${site.short}`}
                  width={120}
                  height={40}
                  className="h-10 w-auto rounded-md transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-105"
                />
                <span className="font-display text-lg font-extrabold leading-tight transition-colors duration-300 group-hover:text-brand-yellow">
                  {site.name}
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">{site.tagline}</p>
              <SocialLinks className="mt-6" />
            </Reveal>

            <Reveal variant="up" delay={80} className="lg:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">Menu</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navigation.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className={tautan}>{n.label}</Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="up" delay={160} className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">Layanan</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {layanan.map((l) => (
                  <li key={l.slug}>
                    <Link href="/kontak" className={tautan}>{l.judul}</Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="up" delay={240} className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">Kontak</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <FaEnvelope aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-yellow" />
                  <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-brand-yellow">{site.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <FaLocationDot aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-yellow" />
                  <span>{site.address}</span>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Bawah */}
          <div className="relative mt-12 pt-6">
            <div aria-hidden className="absolute inset-x-0 top-0 h-px overflow-hidden bg-white/10">
              <span className="block h-full w-1/4 animate-streak bg-gradient-to-r from-transparent via-brand-yellow to-transparent" />
            </div>
            <p className="text-center text-xs text-white/50 sm:text-center">
              © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}