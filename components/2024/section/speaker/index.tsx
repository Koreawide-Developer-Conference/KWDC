import React from "react";

import { SPEAKERS } from "@/constants";

import { InfiniteMovingCards } from "@/components/2024";

export const SpeakerSection: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-screen py-28 relative text-black px-4 bg-white'>
      <div className='max-w-[1440px] max-md:px-4 md:px-20 h-full w-full'>
        <div className='flex justify-between items-center'>
          <p className='text-5xl font-bold leading-tight text-deepGreen-100'>
            상상 속의 도약으로
            <br />
            이끄는 연사
          </p>
          <div className='text-deepGreen-100'>
            <p className='font-medium text-xl pr-20'>Stay tuned for more!</p>
          </div>
        </div>
        <div className='mt-28 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
          <InfiniteMovingCards items={SPEAKERS} direction='right' speed='slow' />
        </div>
      </div>
    </section>
  );
};
