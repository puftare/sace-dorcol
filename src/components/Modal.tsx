"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Cocktail, Drink } from "@/types/types";

export type ModalItem = Cocktail | Drink;

interface Props {
  item: ModalItem;
  onClose: () => void;
}

export default function Modal({ item, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
            src={item.src}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl neon font-bold mb-2">{item.title}</h3>
          <p className="text-base leading-relaxed">{item.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
