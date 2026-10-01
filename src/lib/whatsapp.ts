//src/lib/whatsapp.ts
import { site } from "@/data/site";

export function waLink(message = "Halo MSS, saya ingin menanyakan layanan internet, solusi instansi, atau program pelatihan.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}