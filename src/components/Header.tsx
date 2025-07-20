"use client";

import type { NavItem } from "@/types/types";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useTranslations } from "next-intl";

interface HeaderProps {
  items: NavItem[];
}

export default function Header({ items }: HeaderProps) {
  const pathname = usePathname();
  const t = useTranslations("header");

  return (
    <header className="py-4 shadow-md bg-bg">
      <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center space-x-16">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-4 py-2 rounded-md
                  text-lg font-semibold transition
                  ${isActive && "border-b-2 border-neon"}
                `}
              >
                {t(item.translationKey)}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
