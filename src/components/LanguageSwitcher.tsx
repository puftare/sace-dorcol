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

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => switchLanguage("en")}
        className="px-4 py-2 rounded-md text-lg font-semibold transition cursor-pointer"
        lang={locale}
      >
        EN
      </button>

      <button
        onClick={() => switchLanguage("sr")}
        className="px-4 py-2 rounded-md text-lg font-semibold transition cursor-pointer"
        lang={locale}
      >
        СР
      </button>
    </div>
  );
}
