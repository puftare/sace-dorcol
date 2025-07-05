"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Cocktail {
  src: string;
  title: string;
  description: string;
}

interface Props {
  cocktail: Cocktail;
  onClose: () => void;
}

export default function CocktailModal({ cocktail, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#e6ddce]/90 px-4">
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="relative rounded-xl overflow-hidden max-w-lg w-full border-2 bg-[#e6ddce]"
      >
        <div className="relative w-full h-64">
          <Image
            src={cocktail.src}
            alt={cocktail.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl neon font-bold mb-2">{cocktail.title}</h3>
          <p className="text-base leading-relaxed">{cocktail.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
