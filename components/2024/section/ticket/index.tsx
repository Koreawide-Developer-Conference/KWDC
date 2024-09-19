import Link from "next/link";
import React from "react";

import { TICKET_LINK } from "@/constants";
import { LangProps } from "@/i18n/settings";
import Icon from "@/public/assets/2024/icons/ticket.svg";

export const TicketSection: React.FC<LangProps> = async ({ params }) => {
  return (
    <section
      className='flex flex-col items-center justify-center min-h-screen w-screen relative text-black px-4 bg-white'
      id='ticket'
    >
      <Icon />
      <div className='z-10 flex flex-col justify-center items-center mt-5'>
        <p className='font-bold text-4xl text-center max-lg:text-2xl mb-5'>Ticket</p>
        <p className='font-medium text-xl text-center max-lg:text-sm text-greenBlack-70 mb-16'>Step into the KWDC24.</p>
        <Link
          className='font-medium text-xl text-center flex items-center bg-brightGreen-70 max-smhover:bg-brightGreen-100 max-lg:text-sm text-deepGreen-100 py-4 px-[54px] rounded-full'
          href={TICKET_LINK}
          target={"_blank"}
        >
          Grab your seat
        </Link>
      </div>
    </section>
  );
};
