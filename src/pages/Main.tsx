"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "@/components/About";
import Menu from "@/components/Menu";
// import Contact from "@/components/Contact";

export default function Main() {
  const slides = [
    {
      key: "hero",
      content: () => <h1 className="text-6xl font-bold neon">Saće · Dorćol</h1>,
    },
    { key: "about", content: About },
    { key: "menu", content: Menu },

    // { key: "contact", content: Contact },
  ];

  const [idx, setIdx] = useState(0);
  const next = () => setIdx((prev) => (prev + 1) % slides.length);

  const { key, content: Content } = slides[idx];

  return (
    <motion.section
      onClick={next}
      className="relative h-screen flex items-center justify-center cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[#E6DDCE]/60" />

      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-center"
        >
          <Content />
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
