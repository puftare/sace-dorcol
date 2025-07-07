import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-bg py-8 text-center text-gray-500 text-sm">
      <p>{t("copy")}</p>
    </footer>
  );
}
