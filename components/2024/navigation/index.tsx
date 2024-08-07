import Link from "next/link";
import React from "react";

import { TICKET_LINK } from "@/constants";
import Logo from "@/public/assets/2024/images/logo.svg";

export const Navigation: React.FC = () => {
  return (
    <nav className='p-0 fixed top-0 z-20 w-full flex justify-center items-center h-12 bg-gray-50 bg-opacity-50 backdrop-blur-md'>
      <div className='navbar-start flex justify-between items-center max-w-[1440px] w-full text-xs max-md:px-4 md:px-20'>
        <a href='/2024'>
          <Logo />
        </a>
        <div className='rounded-[30px] bg-brightGreen-100 py-2 px-7 cursor-pointer border border-solid border-white transition duration-200 hover:bg-transparent text-deepGreen-100 hover:text-white'>
          <Link href={TICKET_LINK} target={"_blank"}>
            Buy Tickets
          </Link>
        </div>
      </div>
    </nav>
  );
};
