import Link from "next/link";
import React from "react";

import Hamburger from "@/public/assets/2024/icons/hamburger.svg";
import Logo from "@/public/assets/2024/images/logo.svg";

export const Navigation: React.FC = () => {
  return (
    <nav className='p-0 fixed top-0 z-10 w-full flex justify-center items-center h-12 bg-white bg-opacity-50 backdrop-blur-md'>
      <div className='navbar-start flex justify-between items-center max-w-2xl w-full text-xs px-4'>
        <Link href='/2024'>
          <Logo />
        </Link>
        <Link className='max-md:hidden' href=''>
          Overview
        </Link>
        <Link className='max-md:hidden' href=''>
          Speaker
        </Link>
        <Link className='max-md:hidden' href=''>
          Sponsorship
        </Link>
        <Link className='max-md:hidden' href=''>
          Contact
        </Link>
        <div className='dropdown md:hidden'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <Hamburger className='w-4 h-4' />
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content rounded-box z-10 mt-2 bg-white bg-opacity-50 backdrop-blur-md right-0'
          >
            <li>
              <Link href=''>Overview</Link>
            </li>
            <li>
              <Link href=''>Speaker</Link>
            </li>
            <li>
              <Link href=''>Sponsorship</Link>
            </li>
            <li>
              <Link href=''>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
