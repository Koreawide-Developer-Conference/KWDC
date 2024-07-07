import Link from "next/link";
import React from "react";

import Hamburger from "@/public/assets/2024/icons/hamburger.svg";
import Logo from "@/public/assets/2024/images/logo.svg";

export const Navigation: React.FC = () => {
  return (
    <nav className='p-0 fixed top-0 z-10 w-full flex justify-center items-center h-12 bg-white bg-opacity-50 backdrop-blur-md'>
      <div className='navbar-start flex justify-between items-center max-w-[1440px] w-full text-xs px-4'>
        <a href='/2024'>
          <Logo />
        </a>
        <a className='max-md:hidden' href='#overview'>
          Overview
        </a>
        <a className='max-md:hidden' href='#speaker'>
          Speaker
        </a>
        <a className='max-md:hidden' href='#sponsorship'>
          Sponsorship
        </a>
        <a className='max-md:hidden' href='#contact'>
          Contact
        </a>
        <div className='dropdown md:hidden'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <Hamburger className='w-4 h-4' />
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content rounded-box z-10 mt-2 bg-white bg-opacity-50 backdrop-blur-md right-0'
          >
            <li>
              <a href='#overview'>Overview</a>
            </li>
            <li>
              <a href='#speaker'>Speaker</a>
            </li>
            <li>
              <a href='#sponsorship'>Sponsorship</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
