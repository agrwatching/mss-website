// src/components/mitra/MitraJaringan.tsx
import Image from "next/image";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLogoPartner } from "@/lib/partner";

export function MitraJaringan() {
  const logo = getLogoPartner();
  if (logo.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          title="Mitra Jaringan"
          desc={`${logo.length} penyedia layanan internet yang tumbuh bersama.`}
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
          {logo.map((l, i) => (
            <li key={l.src}>
              <Reveal variant="zoom" delay={(i % 5) * 60} className="h-full">
                <div className="group relative aspect-[3/2] overflow-hidden rounded-2xl border border-ink/10 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_18px_36px_-22px_rgba(10,59,209,0.45)]">
                  <Image
                    src={l.src}
                    alt={`Logo ${l.nama}`}
                    fill
                    sizes="(min-width:1024px) 20vw, (min-width:768px) 25vw, 50vw"
                    className="object-contain p-3 transition duration-500 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}