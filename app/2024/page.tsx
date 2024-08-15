import React from "react";

import { HeroSection, InfoSection, SpeakerSection, SponsorSection, TicketSection } from "@/components/2024";

export default function KWDC2024() {
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
