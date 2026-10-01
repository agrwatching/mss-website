// src/components/kontak/FormKontak.tsx
"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { layanan } from "@/data/layanan";

const field =
  "mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition duration-200 placeholder:text-ink/35 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15";

type Data = { nama: string; email: string; instansi: string; layanan: string; pesan: string };

// TODO: hubungkan ke pengiriman email sungguhan (API route / layanan email) nanti.
// Untuk sekarang hanya simulasi supaya alur tampilannya bisa dicek.
async function kirimPesan(data: Data) {
  console.log("Pesan kontak (dummy):", data);
  await new Promise((r) => setTimeout(r, 1000));
}

export function FormKontak({ topik }: { topik?: string }) {
  const pilihan = [...layanan.map((l) => l.judul), "Lainnya"];
  const awal: Data = {
    nama: "",
    email: "",
    instansi: "",
    layanan: topik ? (layanan.find((l) => l.slug === "edukasi")?.judul ?? pilihan[0]) : pilihan[0],
    pesan: topik ? `Saya ingin bertanya tentang program ${topik}.` : "",
  };

  const [f, setF] = useState<Data>(awal);
  const [status, setStatus] = useState<"diam" | "kirim" | "ok">("diam");

  const ubah =
    (k: keyof Data) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setF((s) => ({ ...s, [k]: e.target.value }));

  const kirim = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("kirim");
    await kirimPesan(f);
    setStatus("ok");
  };

  if (status === "ok") {
    return (
      <div className="mt-6 animate-rise rounded-2xl bg-brand-blue/5 p-8 text-center">
        <span className="mx-auto grid size-16 animate-float place-items-center rounded-full bg-brand-yellow text-ink">
          <FaCheck aria-hidden className="size-6" />
        </span>
        <h3 className="mt-5 text-xl font-extrabold text-ink">Pesan terkirim</h3>
        <p className="mx-auto mt-2 max-w-sm text-ink/70">
          Terima kasih. Tim kami akan menghubungi Anda di <b className="break-all">{f.email}</b> secepatnya.
        </p>
        <button
          type="button"
          onClick={() => { setF(awal); setStatus("diam"); }}
          className="mt-6 rounded-full border border-ink/15 px-6 py-2.5 text-sm font-semibold transition hover:bg-brand-blue/10 hover:text-brand-blue"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  const mengirim = status === "kirim";

  return (
    <form onSubmit={kirim} className="mt-6 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Nama
          <input required minLength={2} value={f.nama} onChange={ubah("nama")} placeholder="Nama lengkap" className={field} />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Email
          <input required type="email" value={f.email} onChange={ubah("email")} placeholder="nama@email.com" className={field} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Sekolah / Instansi
          <input value={f.instansi} onChange={ubah("instansi")} placeholder="Opsional" className={field} />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Layanan yang diminati
          <select value={f.layanan} onChange={ubah("layanan")} className={field}>
            {pilihan.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-semibold text-ink">
        Pesan
        <textarea
          required
          minLength={10}
          rows={5}
          value={f.pesan}
          onChange={ubah("pesan")}
          placeholder="Ceritakan kebutuhan Anda"
          className={`${field} resize-none`}
        />
      </label>

      <button
        type="submit"
        disabled={mengirim}
        className="group inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3 font-bold text-white shadow-lg shadow-brand-blue/30 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-deep hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {mengirim ? (
          <>
            <span aria-hidden className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Mengirim…
          </>
        ) : (
          <>
            Kirim Pesan
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </>
        )}
      </button>
    </form>
  );
}