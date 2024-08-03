import Image from "next/image";
import Link from "next/link";
import React from "react";

import ChevronRight from "@/public/assets/2024/icons/chevron_right.svg";

export const Section2: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-screen h-screen relative text-deepGreen-100 px-4'>
      <Image
        src={"/assets/2024/images/section2_bg.svg"}
        alt={"background image"}
        fill
        priority
        className='absolute object-cover z-0'
      />
      <div className='z-10 flex flex-col gap-10 justify-center items-center'>
        <p className='font-bold text-5xl text-center max-lg:text-3xl'>티켓 Ticket</p>
        <p className='font-medium text-2xl text-center max-lg:text-base'>
          상상 속의 디바이스가 현실로 나타난 2024년, 비전이 확장될 KWDC24에 함께해요.
          <br />
          Join us at KWDC24, where the devices of 2024 come to life and visions grow.
        </p>
        <Link
          className='font-medium text-2xl text-center flex items-center gap-2.5 hover:underline max-lg:text-base'
          href='https://booking.naver.com/booking/5/bizes/987066/items/6024805'
          target={"_blank"}
        >
          티켓 구매하기 Buy Tickets <ChevronRight />
        </Link>
      </div>
    </section>
  );
};
