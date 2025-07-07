import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  return (
    <section className="py-16 text-center max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-6xl font-bold">{t("copy")}</h2>
    </section>
  );
}
