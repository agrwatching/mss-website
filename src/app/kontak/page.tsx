// src/app/kontak/page.tsx
import type { Metadata } from "next";
import type { IconType } from "react-icons";
import { FaEnvelope, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/effects/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { FormKontak } from "@/components/kontak/FormKontak";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi PT. Media Solusi Sukses untuk layanan internet, solusi instansi, dan pelatihan.",
};

function Info({ icon: Icon, label, value, href }: { icon: IconType; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-3.5 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_16px_32px_-18px_rgba(10,59,209,0.45)] sm:gap-4 sm:p-4"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand-yellow group-hover:text-ink sm:size-12">
        <Icon aria-hidden className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold uppercase tracking-wider text-ink/50">{label}</span>
        <span className="block text-sm font-bold text-ink [overflow-wrap:anywhere] sm:text-base">{value}</span>
      </span>
      <span aria-hidden className="shrink-0 text-brand-blue transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

type Props = { searchParams: Promise<{ topik?: string }> };

export default async function KontakPage({ searchParams }: Props) {
  const { topik } = await searchParams;
  const peta = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;
  const petaLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

  return (
    <>
      <PageHeader title="Hubungi Kami" desc="Konsultasikan kebutuhan internet, jaringan, dan pelatihan Anda bersama tim kami." />

      <section className="overflow-x-clip bg-gradient-to-b from-white to-brand-blue/5 py-10 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-5 lg:grid-cols-5">
          <Reveal variant="left" className="min-w-0 space-y-4 lg:col-span-2">
            <Info icon={FaEnvelope} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <Info icon={FaWhatsapp} label="WhatsApp" value={`+${site.whatsapp}`} href={waLink()} />
            <Info icon={FaLocationDot} label="Alamat" value={site.address} href={petaLink} />

            <div className="rounded-2xl border border-ink/10 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">Ikuti kami</p>
              <SocialLinks tone="light" className="mt-3 flex-wrap" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
              <iframe
                src={peta}
                title={`Lokasi ${site.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0 sm:h-64"
              />
            </div>
          </Reveal>

          <Reveal variant="right" className="min-w-0 lg:col-span-3">
            <div className="rounded-3xl border border-ink/10 bg-white p-5 shadow-[0_24px_60px_-30px_rgba(10,59,209,0.35)] sm:p-6 md:p-8">
              <h2 className="text-xl font-extrabold text-ink">Kirim Pesan</h2>
              <p className="mt-1 text-sm text-ink/60">Isi formulir berikut, tim kami akan menghubungi Anda lewat email.</p>
              <FormKontak topik={topik} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}