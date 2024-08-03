import React from "react";

import { TypoAnimation } from "@/components/2024";

export const Section1: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-screen h-screen relative px-4' id='section1'>
      <div className='z-10'>
        <TypoAnimation text='It’s a Leap Year' />
        <div className='font-semibold text-3xl text-center max-lg:text-xl'>
          <span>다음 세상으로의 도약.</span>
        </div>
        <div className='absolute bottom-20 text-center left-0 right-0 mx-auto text-xl max-lg:text-base'>
          <p className='mb-1'>2024.10.25</p>
          <p>세종대학교 컨벤션홀</p>
          <p>Sejong University Convention Hall</p>
        </div>
      </div>
    </section>
  );
};
