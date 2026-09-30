import { waLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="group fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-brand-yellow text-ink shadow-lg transition duration-300 hover:scale-110 active:scale-95"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-brand-yellow/60 [animation-duration:2.5s]" aria-hidden="true" />
      <svg viewBox="0 0 24 24" className="relative size-6 transition-transform duration-300 group-hover:-rotate-12" fill="currentColor" aria-hidden="true">
        <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      </svg>
    </a>
  );
}
