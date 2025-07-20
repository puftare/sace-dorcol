"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MAIN_PAGE_ANIMATION_CHANGE_DELAY,
  slides,
} from "@/constants/constants";

export default function Main() {
  const [idx, setIdx] = useState(0);
  const slideCount = slides.length;

  const prev = useCallback(() => {
    setIdx((prevIdx) => (prevIdx - 1 + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => {
    setIdx((prevIdx) => (prevIdx + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % slideCount);
    }, MAIN_PAGE_ANIMATION_CHANGE_DELAY);
    return () => clearInterval(id);
  }, [slideCount]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const { key, content: Content } = slides[idx];

  return (
    <div className="flex justify-between items-center h-screen">
      <motion.section
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-overlay pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative text-center px-4"
          >
            <Content />
          </motion.div>
        </AnimatePresence>
      </motion.section>
    </div>
  );
}
