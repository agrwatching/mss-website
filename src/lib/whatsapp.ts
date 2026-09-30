import { site } from "@/data/site";

export function waLink(message = "Halo MSS, kami dari pihak sekolah ingin menanyakan program pelatihan trainer.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}