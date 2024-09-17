import React from "react";

import { useTranslation } from "@/i18n/client";

import { HeroSection, InfoSection, SpeakerSection, SponsorSection, TicketSection } from "@/components/2024";

export default function KWDC2024({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  return (
    <div className='flex flex-col w-full items-center'>
      <HeroSection />
      <InfoSection />
      <SpeakerSection />
      <TicketSection />
      <SponsorSection />
    </div>
  );
}
