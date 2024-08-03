import Image from "next/image";
import Link from "next/link";
import React from "react";

import ChevronRight from "@/public/assets/2024/icons/chevron_right_white.svg";

export const Section3: React.FC = () => {
  return (
    <section
      className='flex flex-col items-center justify-center w-screen h-screen relative text-white px-4'
      id='section3'
    >
      <div className='z-10 flex flex-col gap-10 justify-center items-center'>
        <p className='font-bold text-5xl text-center max-lg:text-3xl'>후원 Sponsorship</p>
        <p className='font-medium text-2xl text-center max-lg:text-base'>
          기업의 후원은 애플 생태계와 구성원들의 성장과 발전에 소중한 양분이 됩니다.
          <br />
          Corporate sponsorship fuels the growth of the community and its members.
        </p>
        <Link
          className='font-medium text-2xl text-center flex items-center gap-2.5 hover:underline max-lg:text-base'
          href='mailto:hello.kwdc@gmail.com'
          target={"_blank"}
        >
          후원 메일 문의 Sponsorship Inquiries <ChevronRight />
        </Link>
      </div>
    </section>
  );
};
