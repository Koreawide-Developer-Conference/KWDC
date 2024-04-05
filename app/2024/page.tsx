"use client";

import React from "react";

import { BrowserView, MobileView } from "react-device-detect";

export default function KWDC2024() {
  return (
    <>
      <BrowserView>
        <main className='w-screen h-screen relative flex flex-col justify-evenly'>
          <section className='flex flex-col h-full px-40'>
            <div className='font-semibold text-6xl leading-10 mb-6'>KWDC 2024</div>
            <div className='flex items-end w-full'>
              <div className='font-extrabold text-8xl leading-tight'>
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
              <div className='text-right text-white text-xl leading-loose'>행사 및 후원문의 hello.kwdc@gmail.com</div>
            </div>
            <div className='flex justify-end items-center'>
              <span className='text-white text-9xl font-semibold'>KWDC</span>
              <span className='text-white text-9xl font-thin'>2024</span>
            </div>
          </section>
          <div className='w-full h-0.5 bg-white' />
          <section className='flex justify-center gap-x-[85px]'>
            <div className='flex flex-col'>
              <span className='text-white text-5xl font-bold leading-10 mb-5'>It’s leap year</span>
              <span className='text-white text-xl font-bold leading-7'>우리가 만드는 새로운 세상</span>
            </div>
            <div className='text-white text-3xl leading-10'>
              상상 속의 디바이스가 2024년, 세상에 등장했습니다. <br />
              우리의 비전은 더 이상 공간에 국한되지 않고, 내 눈 앞에서 살아 숨쉬게 만들 수 있죠.
              <br />
              손바닥 위의 유리판 속 세상을 생태계로 확장시킨 우리의 세상은
              <br />
              앞으로 얼마나 더 넓어질까요? 이제 모두의 비전이 도약할 차례입니다.
            </div>
          </section>
        </main>
      </BrowserView>
      <MobileView>
        <main className='w-screen h-screen flex flex-col items-center justify-center'>
          <section className='flex flex-col items-center'>
            <div className='text-white text-4xl font-bold leading-9 mb-4'>KWDC 2024</div>
            <div className='mb-10 text-center'>
              <span className='text-white text-2xl font-extrabold'>It’s a leap year</span>
              <span className='text-green-600 text-2xl font-extrabold'>
                ,<br />
              </span>
              <span className='text-white text-2xl font-extrabold'>다음 세상으로의 도약</span>
            </div>
            <div className='text-center text-white text-base font-medium leading-snug '>
              상상 속의 디바이스가 2024년, 세상에
              <br /> 등장했습니다. 우리의 비전은 더 이상 공간에 <br />
              국한되지 않고, 내 눈 앞에서 살아 숨쉬게
              <br />
              만들 수 있죠. 손바닥 위의 유리판 속 세상을
              <br /> 생태계로 확장시킨 우리의 세상은 <br />
              앞으로 얼마나 더 넓어질까요? <br />
              이제 모두의 비전이 도약할 차례입니다.
            </div>
          </section>
          <div className='w-0.5 h-24 bg-neutral-500 my-10' />
          <section className='flex flex-col items-center'>
            <div className='gap-y-1 flex flex-col'>
              <div className="text-center text-white text-sm font-bold font-['Apple SD Gothic Neo'] leading-tight">
                2024. 10. 25
              </div>
              <div className="text-center text-white text-sm font-bold font-['Apple SD Gothic Neo'] leading-tight">
                세종대학교 컨벤션홀 ABC
              </div>
              <div className="text-center text-white text-sm font-bold font-['Apple SD Gothic Neo'] leading-tight">
                행사 및 후원문의 hello.kwdc@gmail.com
              </div>
            </div>
          </section>
        </main>
      </MobileView>
    </>
  );
}
