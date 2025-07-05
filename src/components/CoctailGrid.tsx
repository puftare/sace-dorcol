// src/components/CocktailGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { cocktails } from "@/constants/constants";
import CocktailModal from "./CoctailModal";

export default function CocktailGrid() {
  const [selected, setSelected] = useState<(typeof cocktails)[0] | null>(null);

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl text-center mb-8 font-bold">Our Cocktails</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cocktails.map((c) => (
          <div
            key={c.title}
            onClick={() => setSelected(c)}
            className="cursor-pointer bg-surface rounded-lg overflow-hidden border-2 flex flex-col hover:scale-105 transition"
          >
            <div className="relative w-full h-48 bg-gray-800">
              <Image src={c.src} alt={c.title} fill className="object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-bold mb-2">{c.title}</h3>
              <p className="text-sm text-offWhite flex-1">{c.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <CocktailModal cocktail={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
