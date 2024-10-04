'use client'

import Link from "next/link";
import React from "react";

import { GLOBAL_TICKET_LINK, TICKET_LINK } from "@/constants";
import { LangProps } from "@/i18n/settings";
import Icon from "@/public/assets/2024/icons/ticket.svg";

export const TicketSection: React.FC<LangProps> = ({ params }) => {
  const [ticketLink, setTicketLink] = React.useState(TICKET_LINK);

  React.useEffect(() => {
    fetch('/api/geo').then(async (res) => {
      const { country } = await res.json();
      if (country === 'KR') {
        setTicketLink(TICKET_LINK);
      } else {
        setTicketLink(GLOBAL_TICKET_LINK);
      }
    })
  },[])

  return (
    <section
      className='flex flex-col items-center justify-center min-h-screen w-screen relative text-black px-4 bg-white'
      id='ticket'
    >
      <Icon />
      <div className='z-10 flex flex-col justify-center items-center mt-5'>
        <p className='font-bold text-4xl text-center max-3xl:text-2xl mb-5'>Ticket</p>
        <p className='font-medium text-xl text-center max-3xl:text-sm text-greenBlack-70 mb-16'>Step into the KWDC24.</p>
        <Link
          className='font-medium text-xl text-center flex items-center bg-brightGreen-70 max-3xl:hover:bg-brightGreen-100 max-3xl:text-sm text-deepGreen-100 py-4 px-[54px] rounded-full'
          href={ticketLink}
          target={"_blank"}
        >
          Grab your seat
        </Link>
      </div>
    </section>
  );
};
