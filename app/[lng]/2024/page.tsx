import React from "react";

import { LangProps } from "@/i18n/settings";

import { HeroSection, InfoSection, SpeakerSection, SponsorSection, TicketSection } from "@/components/2024";

export default function KWDC2024({ params }: Readonly<LangProps>) {
  return (
    <div className='flex flex-col w-full items-center'>
      <HeroSection params={params} />
      <InfoSection params={params} />
      <SpeakerSection />
      <TicketSection />
      <SponsorSection />
    </div>
  );
}
