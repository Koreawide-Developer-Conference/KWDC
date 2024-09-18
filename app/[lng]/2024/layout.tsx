import type { Metadata } from "next";
import React from "react";

import { openGraphImage2024 } from "@/app/shared-metadata";
import { LangProps } from "@/i18n/settings";

import { Footer, Navigation } from "@/components/2024";
import "@/styles/fonts/AppleSDGothicNeo.css";

export const metadata: Metadata = {
  title: "KWDC24",
  description: "It's a leap year, 다음 세상으로의 도약",
  openGraph: {
    title: "KWDC24",
    description: "It's a leap year, 다음 세상으로의 도약",
    ...openGraphImage2024,
  },
};

export default function RootLayout({ children, params }: Readonly<LangProps>) {
  return (
    <main className='bg-deepGreen-100 text-white overflow-x-hidden flex flex-col items-center'>
      <Navigation params={params} />
      {children}
      <Footer />
    </main>
  );
}
