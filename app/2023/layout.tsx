import type { Metadata } from "next";
import React from "react";

import "@/styles/fonts/SFProDisplay.css";

export const metadata: Metadata = {
  title: "KWDC23",
  description: "Together, we can make great things happen",
  openGraph: {
    title: "KWDC23",
    description: "Together, we can make great things happen",
    images: ["https://kwdc.dev/resources/logo/kwdc_main_logo.png"],
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
