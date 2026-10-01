// src/components/ui/SocialLinks.tsx
import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { sosial } from "@/data/sosial";
import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export function SocialLinks({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const daftar = [
    { nama: "Email", href: `mailto:${site.email}`, icon: FaEnvelope },
    { nama: "WhatsApp", href: waLink(), icon: FaWhatsapp },
    ...sosial,
  ];

  return (
    <ul className={cn("flex flex-wrap gap-2.5", className)}>
      {daftar.map(({ nama, href, icon: Icon }) => (
        <li key={nama}>
          <a
            href={href}
            aria-label={nama}
            title={nama}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn(
              "grid size-10 place-items-center rounded-full transition duration-300 hover:-translate-y-1 hover:rotate-6 hover:scale-110 hover:bg-brand-yellow hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow",
              tone === "dark" ? "bg-white/10 text-white ring-1 ring-white/10" : "bg-brand-blue/10 text-brand-blue",
            )}
          >
            <Icon className="size-[1.1rem]" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}