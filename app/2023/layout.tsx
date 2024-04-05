import type { Metadata } from "next";
import React from "react";

import { openGraphImage } from "@/app/shared-metadata";

import "@/styles/fonts/SFProDisplay.css";

export const metadata: Metadata = {
  title: "KWDC 2023",
  description: "Together, we can make great things happen",
  openGraph: {
    title: "KWDC 2023",
    description: "Together, we can make great things happen",
    ...openGraphImage,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko-KR'>
      <body className='font-SFProDisplay'>{children}</body>
    </html>
  );
}
