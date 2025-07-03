import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Saće · Dorćol",
  description:
    "Sace Dorćol is a modern, minimalistic caffe showcasing local art, culture and drinks in the heart of Dorćol, Belgrade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
