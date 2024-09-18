import Link from "next/link";
import React from "react";

import { TICKET_LINK } from "@/constants";
import { LangProps, languages } from "@/i18n/settings";
import Chevron from "@/public/assets/2024/icons/chevron_down_white.svg";
import Logo from "@/public/assets/2024/images/logo.svg";

export const Navigation: React.FC<LangProps> = ({ params }) => {
  return (
    <nav className='p-0 fixed top-0 z-30 w-full flex justify-center items-center h-12 bg-gray-50 bg-opacity-50 backdrop-blur-md'>
      <div className='navbar-start flex justify-between items-center max-w-[1440px] w-full text-xs max-md:px-4 md:px-20'>
        <a href='/2024'>
          <Logo />
        </a>
        <div className='flex text-white items-center md:gap-x-5 '>
          <Link href={"#overview"} className='p-3 max-md:hidden'>
            Overview
          </Link>
          <Link href={"#speakers"} className='p-3 max-md:hidden'>
            Speakers
          </Link>
          {languages
            .filter((lang) => lang !== params?.lng)
            .map((lang) => (
              <Link href={`/${lang}/2024`} className='p-3 max-md:hidden'>
                {lang === "ko" ? "한국어" : lang === "en" ? "English" : "日本語"}
              </Link>
            ))}
          <div className='dropdown text-deepGreen-100 md:hidden'>
            <div tabIndex={0} role='button' className='btn btn-ghost'>
              <Chevron />
            </div>
            <ul tabIndex={0} className='menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-36 p-2 shadow'>
              <li>
                <Link href={"#overview"} className='p-3'>
                  Overview
                </Link>
              </li>
              <li>
                <Link href={"#speakers"} className='p-3'>
                  Speakers
                </Link>
              </li>
              <li>
                {languages
                  .filter((lang) => lang !== params?.lng)
                  .map((lang) => (
                    <Link href={`/${lang}/2024`} className='p-3'>
                      {lang === "ko" ? "한국어" : lang === "en" ? "English" : "日本語"}
                    </Link>
                  ))}
              </li>
            </ul>
          </div>
          <div className='rounded-[30px] bg-brightGreen-100 py-2 px-7 cursor-pointer border border-solid border-white transition duration-200 hover:bg-transparent text-deepGreen-100 hover:text-white'>
            <Link href={TICKET_LINK} target={"_blank"}>
              Buy Tickets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
