import type React from "react";
import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { navItems } from "@/constants/constants";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: "Saće · Dorćol",
    sr: "Саће · Дорћол",
    ru: "Саће · Дорчол",
    it: "Saće · Dorćol",
  };

  const descriptions = {
    en: "Sace Dorćol is a modern, minimalistic caffe showcasing local art, culture and drinks in the heart of Dorćol, Belgrade.",
    sr: "Саће Дорћол је модеран, минималистички кафе који приказује локалну уметност, културу и пића у срцу Дорћола, Београд.",
    ru: "Саће Дорчол - это современное, минималистичное кафе, демонстрирующее местное искусство, культуру и напитки в сердце Дорчола, Белград.",
    it: "Saće Dorćol è un locale moderno e minimalista nel cuore di Dorćol, Belgrado, che unisce arte locale, cultura e cocktail selezionati per un’esperienza unica.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Header items={navItems} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
