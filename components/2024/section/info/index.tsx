import React from "react";

import Cert from "@/public/assets/2024/icons/cert.svg";
import Lang from "@/public/assets/2024/icons/lang.svg";
import Meet from "@/public/assets/2024/icons/meet.svg";
import Offline from "@/public/assets/2024/icons/offline.svg";
import Record from "@/public/assets/2024/icons/record.svg";
import Section from "@/public/assets/2024/icons/sesction.svg";
import Logo from "@/public/assets/2024/images/logo-dark.svg";

export const InfoSection: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-screen py-28 max-lg:py-14 relative text-black px-4 bg-white'>
      <div className='max-w-[1440px] max-lg:px-0 lg:px-20 h-full w-full'>
        <div className='flex justify-between items-center max-lg:flex-col max-lg:items-start'>
          <p className='text-5xl font-bold leading-tight text-deepGreen-100 max-lg:text-3xl'>
            대한민국 최대의
            <br />
            Apple 생태계
            <br />
            컨퍼런스
          </p>
          <div className='text-deepGreen-100 max-lg:mt-10'>
            <p className='font-semibold mb-6'>2024. 10. 25 09:30 ~ 18:00</p>

            <p className='font-light'>대한민국 서울,</p>
            <p className='font-semibold mb-6'>세종대학교 컨벤션 홀</p>

            <p className='font-light'>Seoul, Republic of Korea.</p>
            <p className='font-semibold mb-6'>Convention Hall, Sejong University.</p>

            <p className='mb-2 font-light'>주최 Organised by</p>
            <div className='w-20'>
              <Logo />
            </div>
          </div>
        </div>
        <div className='mt-20 bg-brightGreen-50 rounded-[28px] py-12 lg:px-20 grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:pl-5'>
          <div className='flex gap-x-8 items-center max-lg:gap-x-4'>
            <div className='w-[80px] flex justify-center items-center'>
              <Section />
            </div>
            <div>
              <p className='font-semibold'>3개 트랙, 세션 동시 진행</p>
              <p>Three Tracks, Simultaneous Sessions</p>
            </div>
          </div>
          <div className='flex gap-x-8 items-center max-lg:gap-x-4'>
            <div className='w-[80px] flex justify-center items-center'>
              <Lang />
            </div>
            <div>
              <p className='font-semibold'>언어 지원</p>
              <p>Live Translation</p>
            </div>
          </div>
          <div className='flex gap-x-8 items-center max-lg:gap-x-4'>
            <div className='w-[80px] flex justify-center items-center'>
              <Offline />
            </div>
            <div>
              <p className='font-semibold'>오프라인으로만 진행</p>
              <p>Online Streaming Unavailable</p>
            </div>
          </div>
          <div className='flex gap-x-8 items-center max-lg:gap-x-4'>
            <div className='w-[80px] flex justify-center items-center'>
              <Record />
            </div>
            <div>
              <p className='font-semibold'>녹화본 추후 공개</p>
              <p>Session Recording</p>
            </div>
          </div>
          <div className='flex gap-x-8 items-center max-lg:gap-x-4'>
            <div className='w-[80px] flex justify-center items-center'>
              <Meet />
            </div>
            <div>
              <p className='font-semibold'>스피커와의 질의응답</p>
              <p>Meet the Speakers</p>
            </div>
          </div>
          <div className='flex gap-x-8 items-center max-lg:gap-x-4'>
            <div className='w-[80px] flex justify-center items-center'>
              <Cert />
            </div>
            <div>
              <p className='font-semibold'>3개 트랙, 세션 동시 진행</p>
              <p>Certificates of Attendance Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
