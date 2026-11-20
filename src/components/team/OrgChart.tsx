"use client";

import Image from "next/image";
import { useState } from "react";
import type { Bagan } from "@/data/team";
import { imgSrc, isRemote } from "@/lib/img";

function useFoto(t: Bagan) {
  const [gagal, setGagal] = useState(false);
  const inisial = t.nama.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();
  return { foto: gagal ? undefined : t.foto, inisial, setGagal };
}

/* ---------- Desktop ---------- */

function NodeDesktop({ t, utama }: { t: Bagan; utama: boolean }) {
  const { foto, inisial, setGagal } = useFoto(t);

  return (
    <div className="group relative z-10 flex w-40 flex-col items-center text-center">
      <div
        className={`relative overflow-hidden rounded-full bg-brand-blue-deep ring-4 ring-white/25 transition duration-300 group-hover:scale-105 group-hover:ring-brand-yellow ${
          utama ? "size-32" : "size-24"
        }`}
      >
        {foto ? (
          <Image
            src={imgSrc(foto)}
            alt={`Foto ${t.nama}`}
            fill
            unoptimized={isRemote(foto)}
            sizes="128px"
            onError={() => setGagal(true)}
            className="object-cover object-top"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center font-display text-xl font-extrabold text-white">
            {inisial}
          </span>
        )}
      </div>
      <h4 className="mt-3 font-display text-base font-extrabold uppercase leading-tight tracking-wide text-white">
        {t.nama}
      </h4>
      {t.role && <p className="mt-0.5 text-xs leading-snug text-white/70">{t.role}</p>}
    </div>
  );
}

function CabangDesktop({ t, utama = false }: { t: Bagan; utama?: boolean }) {
  return (
    <li>
      <NodeDesktop t={t} utama={utama} />
      {t.anak?.length ? (
        <ul>
          {t.anak.map((a) => (
            <CabangDesktop key={a.nama} t={a} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

/* ---------- Mobile ---------- */

function ItemMobile({ t, utama = false }: { t: Bagan; utama?: boolean }) {
  const { foto, inisial, setGagal } = useFoto(t);

  return (
    <li className="relative">
      {/* garis pendek dari garis vertikal ke foto */}
      {!utama && <span aria-hidden className="absolute -left-4 top-6 h-px w-4 bg-white/40" />}

      <div className="flex items-center gap-3">
        <div
          className={`relative shrink-0 overflow-hidden rounded-full bg-brand-blue-deep ring-2 ring-white/25 ${
            utama ? "size-14" : "size-12"
          }`}
        >
          {foto ? (
            <Image
              src={imgSrc(foto)}
              alt={`Foto ${t.nama}`}
              fill
              unoptimized={isRemote(foto)}
              sizes="56px"
              onError={() => setGagal(true)}
              className="object-cover object-top"
            />
          ) : (
            <span className="absolute inset-0 grid place-items-center font-display text-sm font-extrabold text-white">
              {inisial}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h4 className="font-display text-sm font-extrabold uppercase leading-tight tracking-wide text-white">
            {t.nama}
          </h4>
          {t.role && <p className="mt-0.5 text-xs leading-snug text-white/70">{t.role}</p>}
        </div>
      </div>

      {t.anak?.length ? (
        <ul className="ml-6 mt-3 space-y-4 border-l border-white/40 pl-4">
          {t.anak.map((a) => (
            <ItemMobile key={a.nama} t={a} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

/* ---------- Gabungan ---------- */

export function OrgChart({ data }: { data: Bagan }) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden overflow-x-auto pb-4 md:block">
        <div className="org-tree mx-auto w-max">
          <ul>
            <CabangDesktop t={data} utama />
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <ul className="md:hidden">
        <ItemMobile t={data} utama />
      </ul>
    </>
  );
}