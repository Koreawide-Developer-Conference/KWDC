"use client";

import Image from "next/image";
import React from "react";

import { prefix } from "@/constants";
import ReactFullpage from "@fullpage/react-fullpage";

export default function KWDC2024() {
  return (
    <ReactFullpage.Wrapper>
      <main className='w-screen min-h-screen relative flex flex-col items-center'>
        <div
          id='section'
          className='flex flex-col min-h-screen max-h-screen max-w-[1440px] w-full justify-center relative max-3xl:px-20'
        >
          <div className='font-semibold text-5xl leading-10 mb-6'>KWDC 2024</div>
          <div className='flex items-end w-full'>
            <div className='font-extrabold text-7xl leading-tight'>
              <span>It&rsquo;s a leap year</span>
              <span className='text-[#249947]'>,</span>
              <br />
              다음 세상으로의 도약
            </div>
            <div className='flex-1 h-0.5 bg-neutral-500 mb-2.5 mx-7' />
            <div className='text-right text-white text-xl font-semibold leading-loose -mb-2'>2024. 10. 25</div>
          </div>
          <div className='mt-2.5 mb-[70px]'>
            <div className='text-right text-white text-xl leading-loose'>세종대학교 컨벤션홀 ABC</div>
            <div className='text-right text-white text-xl leading-loose'>
              행사 및 후원문의{" "}
              <a href='mailto:hello.kwdc@gmail.com' className='hover:underline'>
                hello.kwdc@gmail.com
              </a>
            </div>
          </div>
          <div className='flex justify-end items-center opacity-30 tracking-[-4px]'>
            <span className='text-white text-9xl font-semibold'>KWDC</span>
            <span className='text-white text-9xl font-thin'>2024</span>
          </div>
          <div className='flex gap-x-3 items-center justify-center absolute bottom-20 left-0 right-0 m-auto'>
            <span className='font-bold text-[#249947]'>더 알아보기</span>
            <Image
              className=''
              src={`${prefix}/assets/2024/icons/chevron_down_circle_green.svg`}
              alt={"screen-action-buttons"}
              width={22}
              height={22}
            />
          </div>
        </div>
      </main>
    </ReactFullpage.Wrapper>
  );
}
