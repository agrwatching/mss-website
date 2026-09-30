//src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Keunggulan } from "@/components/sections/Keunggulan";
import { Program } from "@/components/sections/Program";
import { AlurKerjaSama } from "@/components/sections/AlurKerjaSama";
import { Dokumentasi } from "@/components/sections/Dokumentasi";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { BeritaTerbaru } from "@/components/sections/BeritaTerbaru";

export default function Home() {
  return (
    <main>
      <Hero />
      <Keunggulan limit={3} showMore />
      <Program />
      <AlurKerjaSama />
      <Dokumentasi />
      <FAQ />
      <CTA />
      <BeritaTerbaru />
    </main>
  );
}