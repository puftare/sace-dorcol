"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="py-16 text-center max-w-2xl mx-auto">
      <h2 className="text-4xl sm:text-6xl font-bold">{t("title")}</h2>
    </section>
  );
}
