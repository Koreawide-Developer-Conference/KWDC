import React from "react";

import { LangProps } from "@/i18n/settings";

import { Footer, Navigation } from "@/components/2024";
import "@/styles/fonts/AppleSDGothicNeo.css";



export default function RootLayout({ children, params }: Readonly<LangProps>) {
  return (
    <main className='bg-deepGreen-100 text-white overflow-x-hidden flex flex-col items-center'>
      <Navigation params={params} />
      {children}
      <Footer params={params} />
    </main>
  );
}
