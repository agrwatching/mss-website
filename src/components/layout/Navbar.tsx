// src/components/layout/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const bar = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const solid = scrolled || open || !isHome;

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 24);
        if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300",
        isHome && "-mb-16",
        solid
          ? "border-black/5 bg-white/75 shadow-[0_8px_30px_-12px_rgba(3,6,15,0.25)] backdrop-blur-xl"
          : "border-transparent bg-transparent backdrop-blur-none"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label={`Beranda ${site.name}`}
        >
          <Image
            src="/logo.jpg"
            alt={`Logo ${site.short}`}
            width={120}
            height={40}
            priority
            className="h-10 w-auto rounded-md transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-105"
          />

          <span className="hidden flex-col leading-tight min-[420px]:flex">
            <span
              className={cn(
                "font-display text-[0.95rem] font-extrabold tracking-tight transition-colors duration-300",
                solid ? "text-ink group-hover:text-brand-blue" : "text-white group-hover:text-brand-yellow"
              )}
            >
              {site.name}
            </span>
            <span className={cn("text-[0.7rem] font-semibold transition-colors duration-300", solid ? "text-brand-blue" : "text-brand-yellow")}>
              {site.label}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navigation.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={cn(
                    "relative py-1 transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100",
                    solid
                      ? "after:bg-brand-blue hover:text-brand-blue"
                      : "after:bg-brand-yellow hover:text-brand-yellow",
                    active
                      ? cn("after:scale-x-100", solid ? "text-brand-blue" : "text-brand-yellow")
                      : cn("after:scale-x-0", solid ? "text-ink/75" : "text-white/80")
                  )}
                >
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
           <Button href="/kontak" variant={solid ? "blue" : "primary"} className="!py-2">
             Hubungi Kami
           </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid size-10 place-items-center transition-colors duration-300 lg:hidden",
            solid ? "text-ink" : "text-white"
          )}
        >
          <span className={cn("h-0.5 w-6 bg-current transition duration-300 [grid-area:1/1]", open ? "rotate-45" : "-translate-y-2")} />
          <span className={cn("h-0.5 w-6 bg-current transition duration-300 [grid-area:1/1]", open && "scale-x-0 opacity-0")} />
          <span className={cn("h-0.5 w-6 bg-current transition duration-300 [grid-area:1/1]", open ? "-rotate-45" : "translate-y-2")} />
        </button>
      </nav>

      <div className={cn("grid transition-[grid-template-rows] duration-300 lg:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-5 pb-5 text-ink">
            {[...navigation, null].map((n, i) => (
              <li
                key={n ? n.href : "cta"}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                className={cn("transition duration-300", open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0", !n && "pt-2")}
              >
                {n ? (
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-medium transition hover:bg-brand-blue/10 hover:text-brand-blue"
                  >
                    {n.label}
                  </Link>
                ) : (
                   <div onClick={() => setOpen(false)}>
                    <Button href="/kontak" variant="blue" className="w-full">Contact</Button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        ref={bar}
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-brand-yellow will-change-transform"
      />
    </header>
  );
}