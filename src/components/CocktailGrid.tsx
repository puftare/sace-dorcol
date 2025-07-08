"use client";

import { useState } from "react";
import Image from "next/image";
import { cocktails } from "@/constants/constants";
import Modal from "./Modal";
import { useTranslations } from "next-intl";

export default function CocktailGrid() {
  const [selected, setSelected] = useState<null | string>(null);
  const t = useTranslations("cocktails");

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl text-center mb-8 font-bold">{t("title")}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cocktails.map(({ src, key }) => (
          <div
            key={key}
            onClick={() => setSelected(key)}
            className="cursor-pointer bg-surface rounded-lg overflow-hidden border-2 flex flex-col hover:scale-105 transition"
          >
            <div className="relative w-full h-48 bg-gray-800">
              <Image
                src={src}
                alt={t(`${key}.title`)}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-bold mb-2">{t(`${key}.title`)}</h3>
              <p className="text-sm text-offWhite flex-1">
                {t(`${key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <Modal
          item={{
            src: cocktails.find((c) => c.key === selected)!.src,
            title: t(`${selected}.title`),
            description: t(`${selected}.description`),
          }}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
