import Link from "next/link";
import React from "react";

import Logo from "@/public/assets/2024/images/logo.svg";

export const Navigation: React.FC = () => {
  return (
    <nav className='p-0 fixed top-0 z-10 w-full flex justify-center items-center h-12 bg-gray-50 bg-opacity-50 backdrop-blur-md'>
      <div className='navbar-start flex justify-between items-center max-w-[1440px] w-full text-xs max-md:px-4 md:px-20'>
        <a href='/2024'>
          <Logo />
        </a>
        <div className='rounded-[30px] bg-brightGreen-100 py-2 px-7 cursor-pointer hover:bg-gray-200 transition duration-200'>
          <Link
            href={"https://booking.naver.com/booking/5/bizes/987066"}
            target={"_blank"}
            className='text-deepGreen-100'
          >
            Buy Tickets
          </Link>
        </div>
      </div>
    </nav>
  );
};
