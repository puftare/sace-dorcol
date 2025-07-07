"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const switchLanguage = (newLocale: string) => {
    setOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  const languages = [
    { code: "en", label: "EN", fullName: "English" },
    { code: "sr", label: "СР", fullName: "Српски" },
    { code: "ru", label: "РУ", fullName: "Русский" },
    { code: "it", label: "IT", fullName: "Italiano" },
  ];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle language menu"
        className="p-2 hover:bg-surface rounded-md transition cursor-pointer"
      >
        <span className="text-lg">☰</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-bg border border-gray-700 rounded-md shadow-lg z-50">
          {languages.map((lang) => {
            const isActive = lang.code === locale;
            return (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                title={lang.fullName}
                className={`
                  block w-full text-left px-4 py-2 text-sm transition cursor-pointer
                  ${
                    isActive
                      ? "text-neon font-bold"
                      : "text-offWhite hover:text-neon"
                  }
                `}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
