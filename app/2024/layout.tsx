import type { Metadata } from "next";
import React from "react";

import { defaultMetadata } from "@/app/shared-metadata";

import "@/styles/fonts/AppleSDGothicNeo.css";

export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko-KR'>
      <body className='font-AppleSDGothicNeo'>{children}</body>
    </html>
  );
}
