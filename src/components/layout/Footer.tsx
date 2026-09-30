import Link from "next/link";
import { site } from "@/data/site";
import { navigation } from "@/data/navigation";
import { waLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/effects/Reveal";
import { FiberStreaks } from "@/components/effects/FiberStreaks";
import { Button } from "@/components/ui/Button";
import { BackToTop } from "./BackToTop";

export function Footer() {
  return (
    <footer className="relative isolate mt-8 bg-ink text-white/70">
      {/* Gelombang bergerak di tepi atas footer */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-8 h-8 overflow-hidden">
        <svg viewBox="0 0 2400 32" preserveAspectRatio="none" className="h-full w-[200%] animate-wave will-change-transform">
          <path d="M0 16Q150 0 300 16T600 16T900 16T1200 16T1500 16T1800 16T2100 16T2400 16V32H0Z" fill="#03060f" />
        </svg>
      </div>
      <FiberStreaks />

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <Reveal>
          <p className="font-display text-3xl font-extrabold">
            <span className="text-brand-yellow">M</span>SS
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{site.tagline}</p>
          <div className="mt-6">
            <Button href={waLink()} external arrow>Daftar sekarang</Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-semibold text-white">Menu</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navigation.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-block transition duration-200 hover:translate-x-1.5 hover:text-brand-yellow">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <p className="font-semibold text-white">Hubungi kami</p>
          <p className="mt-3 text-sm">{site.address}</p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-brand-yellow transition duration-200 hover:translate-x-1.5">
            Chat WhatsApp
          </a>
          <div className="mt-6">
            <BackToTop />
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} {site.name}. Hak cipta dilindungi.
      </div>
    </footer>
  );
}
