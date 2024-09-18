import React from "react";

import { LangProps } from "@/i18n/settings";

import { HeroSection, OverviewSection, SpeakerSection, SponsorSection, TicketSection } from "@/components/2024";

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
