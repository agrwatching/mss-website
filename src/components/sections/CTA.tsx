import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/effects/Reveal";
import { waLink } from "@/lib/whatsapp";

export function CTA() {
  return (
    <section className="px-5 py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue-deep via-brand-blue to-brand-blue px-6 py-16 text-center text-white">
        <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 size-72 animate-drift rounded-full bg-[radial-gradient(circle,rgba(255,242,0,0.35),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-10 size-80 animate-drift rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22),transparent_70%)] [animation-delay:-7s]" />
        <Reveal variant="zoom">
          <div className="relative">
            <h2 className="text-3xl font-extrabold md:text-4xl">Siap Tingkatkan Kompetensi Sekolah Anda?</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">Hubungi kami untuk konsultasi program pelatihan.</p>
            <div className="mt-8">
              <Button href={waLink()} external variant="primary">Hubungi via WhatsApp</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}