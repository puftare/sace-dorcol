"use client";

import Image from "next/image";
import { cocktails } from "@/constants/constants";
export default function CocktailGrid() {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl neon text-center mb-8">Our Cocktails</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cocktails.map(({ src, title, description }) => (
          <div
            key={title}
            className="bg-surface rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image src={src} alt={title} fill className="object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-offWhite flex-1">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
