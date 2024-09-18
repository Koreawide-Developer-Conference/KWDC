import Link from "next/link";
import React from "react";

import ChevronRight from "@/public/assets/2024/icons/chevron_right.svg";
import { LangProps } from "@/i18n/settings";

export const SponsorSection: React.FC<LangProps> = ({params}) => {
  return (
    <section
      className='flex flex-col items-center justify-center w-screen py-28 relative text-black bg-white px-4'
      id='section3'
    >
      <div className='z-10 flex flex-col gap-10 justify-center items-center'>
        <p className='font-bold text-4xl text-center max-lg:text-2xl'>후원 Sponsorship</p>
        <p className='font-medium text-xl text-center max-lg:text-sm'>
          기업의 후원은 애플 생태계와 구성원들의 성장과 발전에 소중한 양분이 됩니다.
          <br />
          Corporate sponsorship fuels the growth of the community and its members.
        </p>
        <Link
          className='font-medium text-xl text-center flex items-center gap-2.5 hover:underline max-lg:text-sm'
          href='mailto:hello.kwdc@gmail.com'
          target={"_blank"}
        >
          후원 메일 문의 Sponsorship Inquiries <ChevronRight />
        </Link>
      </div>
    </section>
  );
};
