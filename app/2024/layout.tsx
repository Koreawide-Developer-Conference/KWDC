import type { Metadata } from "next";
import React from "react";

import { openGraphImage2024 } from "@/app/shared-metadata";

import "@/styles/fonts/AppleSDGothicNeo.css";

export const metadata: Metadata = {
  title: "KWDC 2024",
  description: "It's a leap year, 다음 세상으로의 도약",
  openGraph: {
    title: "KWDC 2024",
    description: "It's a leap year, 다음 세상으로의 도약",
    ...openGraphImage2024,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko-KR'>
      <body className='font-AppleSDGothicNeo bg-black text-white'>{children}</body>
    </html>
  );
}
