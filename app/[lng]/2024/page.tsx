import { Metadata } from "next";
import React from "react";

import { openGraphImage2024 } from "@/app/shared-metadata";
import { LangProps } from "@/i18n/settings";

import { HeroSection, OverviewSection, SpeakerSection, TicketSection } from "@/components/2024";

export const metadata: Metadata = {
  title: "KWDC24",
  description: "It's a leap year, 다음 세상으로의 도약",
  openGraph: {
    title: "KWDC24",
    description: "It's a leap year, 다음 세상으로의 도약",
    ...openGraphImage2024,
  },
};

export default function KWDC2024({ params }: Readonly<LangProps>) {
  return (
    <div className='flex flex-col w-full items-center'>
      <HeroSection params={params} />
      <OverviewSection params={params} />
      <SpeakerSection params={params} />
      {/*TODO Sponsor 확정 후 게시*/}
      {/*<SponsorSection params={params}/>*/}
      <TicketSection params={params} />
    </div>
  );
}
