"use client";

import { NavItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  items: NavItem[];
}

export default function Header({ items }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="py-4 shadow-md bg-bg">
      <nav className="max-w-7xl mx-auto px-8 flex items-center justify-center space-x-16">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                px-4 py-2 rounded-md
                text-lg font-semibold transition
                ${
                  isActive
                    ? "text-neon border-b-2 border-neon"
                    : "text-offWhite hover:text-neon hover:border-b-2 hover:border-neon"
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
