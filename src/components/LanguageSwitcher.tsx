"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const languages = [
    { code: "en", label: "EN", fullName: "English" },
    { code: "sr", label: "СР", fullName: "Српски" },
    { code: "ru", label: "РУ", fullName: "Русский" },
  ];

  return (
    <div className="flex space-x-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          className={`text-sm min-w-[40px] cursor-pointer ${
            locale === lang.code && "text-black hover:bg-neon/80"
          }`}
          title={lang.fullName}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
