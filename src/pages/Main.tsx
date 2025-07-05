"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/constants/constants";

export default function Main() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  const { key, content: Content } = slides[idx];

  return (
    <div className="flex justify-between items-center">
      <button onClick={prev} className="cursor-pointer p-4 font-bold text-2xl">
        {"<"}
      </button>
      <motion.section
        className="h-screen flex items-center justify-center flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inset-0 bg-[#E6DDCE]/60" />

        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center cursor-pointer"
            onClick={next}
          >
            <Content />
          </motion.div>
        </AnimatePresence>
      </motion.section>
      <button onClick={next} className="cursor-pointer p-4 font-bold text-2xl">
        {">"}
      </button>
    </div>
  );
}
