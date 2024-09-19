import { Metadata } from "next";
import React from "react";

import { openGraphImage2024 } from "@/app/shared-metadata";

import { HeroSection, OverviewSection, SpeakerSection, SponsorSection, TicketSection } from "@/components/2024";

export const metadata: Metadata = {
  title: "KWDC24",
  description: "It's a leap year, 다음 세상으로의 도약",
  openGraph: {
    title: "KWDC24",
    description: "It's a leap year, 다음 세상으로의 도약",
    ...openGraphImage2024,
  },
};

export default function KWDC2024({ params }: any) {
  return (
    <div className='flex flex-col w-full items-center'>
      <HeroSection params={params} />
      <OverviewSection params={params} />
      <SpeakerSection params={params} />
      <SponsorSection params={params}/>
      <TicketSection params={params} />
    </div>
  );
}
