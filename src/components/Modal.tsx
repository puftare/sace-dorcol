"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ModalItem } from "@/types/types";

interface Props {
  item: ModalItem;
  onClose: () => void;
}

export default function Modal({ item, onClose }: Props) {
  // Escape closes
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay-strong px-4">
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="relative rounded-xl overflow-hidden max-w-lg w-full border-2 bg-surface"
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
