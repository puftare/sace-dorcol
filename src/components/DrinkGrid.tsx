"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { drinks } from "@/constants/constants";
import { useTranslations } from "next-intl";

export default function CocktailGrid() {
  const [selected, setSelected] = useState<(typeof drinks)[0] | null>(null);
  const t = useTranslations("drinks");

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl text-center mb-8 font-bold">{t("title")}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {drinks.map((d) => (
          <div
            key={d.title}
            onClick={() => setSelected(d)}
            className="cursor-pointer bg-surface rounded-lg overflow-hidden border-2 flex flex-col hover:scale-105 transition"
          >
            <div className="relative w-full h-48 bg-gray-800">
              <Image src={d.src} alt={d.title} fill className="object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-bold mb-2">{d.title}</h3>
              <p className="text-sm text-offWhite flex-1">{d.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
