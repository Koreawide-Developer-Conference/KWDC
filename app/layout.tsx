import type { Metadata } from "next";
import React from "react";

import { prefix } from "@/constants";

import { Analytics } from "../components/analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "KWDC",
  description: "Koreawide Developer Conference",
  openGraph: {
    title: "KWDC",
    description: "Koreawide Developer Conference",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko-KR'>
      <head>
        <link rel='apple-touch-icon' sizes='57x57' href={`${prefix}/icons/apple-icon-57x57.png`} />
        <link rel='apple-touch-icon' sizes='60x60' href={`${prefix}/icons/apple-icon-60x60.png`} />
        <link rel='apple-touch-icon' sizes='72x72' href={`${prefix}/icons/apple-icon-72x72.png`} />
        <link rel='apple-touch-icon' sizes='76x76' href={`${prefix}/icons/apple-icon-76x76.png`} />
        <link rel='apple-touch-icon' sizes='114x114' href={`${prefix}/icons/apple-icon-114x114.png`} />
        <link rel='apple-touch-icon' sizes='120x120' href={`${prefix}/icons/apple-icon-120x120.png`} />
        <link rel='apple-touch-icon' sizes='144x144' href={`${prefix}/icons/apple-icon-144x144.png`} />
        <link rel='apple-touch-icon' sizes='152x152' href={`${prefix}/icons/apple-icon-152x152.png`} />
        <link rel='apple-touch-icon' sizes='180x180' href={`${prefix}/icons/apple-icon-180x180.png`} />
        <link rel='icon' type='image/png' sizes='192x192' href={`${prefix}/icons/android-icon-192x192.png`} />
        <link rel='icon' type='image/png' sizes='32x32' href={`${prefix}/icons/favicon-32x32.png`} />
        <link rel='icon' type='image/png' sizes='96x96' href={`${prefix}/icons/favicon-96x96.png`} />
        <link rel='icon' type='image/png' sizes='16x16' href={`${prefix}/icons/favicon-16x16.png`} />
        <link rel='manifest' href={`${prefix}/manifest.json`} />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content={`${prefix}/icons/ms-icon-144x144.png`} />
        <meta name='theme-color' content='#ffffff' />
        <meta name='naver-site-verification' content='51146d1a6f7fbf9e74244ab147b5238d360d29f6' />
      </head>
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
