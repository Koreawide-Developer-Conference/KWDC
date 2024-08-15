import Link from "next/link";
import React from "react";

import { TICKET_LINK } from "@/constants";
import ChevronRight from "@/public/assets/2024/icons/chevron_right.svg";

export const TicketSection: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-screen py-28 relative text-black px-4 bg-white'>
      <div className='z-10 flex flex-col gap-10 justify-center items-center'>
        <p className='font-bold text-4xl text-center max-lg:text-2xl'>티켓 Ticket</p>
        <p className='font-medium text-xl text-center max-lg:text-sm'>
          상상 속의 디바이스가 현실로 나타난 2024년, 비전이 확장될 KWDC24에 함께해요.
          <br />
          Join us at KWDC24, where the devices of 2024 come to life and visions grow.
        </p>
        <Link
          className='font-medium text-xl text-center flex items-center gap-2.5 hover:underline max-lg:text-sm'
          href={TICKET_LINK}
          target={"_blank"}
        >
          티켓 구매하기 Buy Tickets <ChevronRight />
        </Link>
      </div>
    </section>
  );
};
