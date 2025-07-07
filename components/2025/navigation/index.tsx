"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";



import { GLOBAL_TICKET_LINK, TICKET_LINK } from "@/constants";
import { LangProps, languages } from "@/i18n/settings";
import Logo from "@/public/assets/2025/icons/kwdc25_white.svg";
import Chevron from "@/public/assets/2024/icons/chevron_down_white.svg";




export const Navigation: React.FC<LangProps> = ({ params }) => {
  const [ticketLink, setTicketLink] = React.useState(TICKET_LINK);
  const pathname = usePathname();
  const scrollToSection = (id: string) => () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const href = window.location.href;
    const hash = href.split('#')[1];
    if (hash) {
      scrollToSection(hash)();
    }
  },[])

  React.useEffect(() => {
    fetch('/api/geo').then(async (res) => {
      const { country } = await res.json();
      if (country === 'KR') {
        setTicketLink(TICKET_LINK);
      } else {
        setTicketLink(GLOBAL_TICKET_LINK);
      }
    })
  },[]) 


  return (
    <nav className='p-0 fixed top-0 z-30 w-full flex justify-center items-center h-12 nav_2025_gradient'>
      <div className='navbar-start flex justify-between items-center max-w-[1440px] w-full text-xs max-3xl:px-4 md:px-20'>
        <a href={`/${params.lng}/2024`} onClick={scrollToTop}>
          <Logo />
        </a>
        <div className='flex text-white items-center md:gap-x-5'>
          {/* <Link href={`/${params.lng}/2024/#overview`} onClick={scrollToSection("overview")} className='p-3 max-sm:hidden'>
            Overview
          </Link>
          <Link href={`/${params.lng}/2024/#speakers`} onClick={scrollToSection("speakers")} className='p-3 max-sm:hidden'>
            Speakers
          </Link>
          <Link href={`/${params.lng}/2024/#sponsors`} onClick={scrollToSection("sponsors")} className='p-3 max-sm:hidden'>
            Sponsors
          </Link>
          <Link href={`/${params.lng}/2024/organizer`} onClick={scrollToSection("speakers")} className='p-3 max-sm:hidden'>
            Organizers
          </Link> */}
          {languages
            .filter((lang) => lang !== params?.lng)
            .map((lang) => (
              <Link key={lang} href={pathname.includes('/ko/') ? pathname.replace('/ko/', '/en/') : pathname.replace('/en/', '/ko/')} className='p-3 max-sm:hidden'>
                {lang === "ko" ? "한국어" : lang === "en" ? "English" : "日本語"}
              </Link>
            ))}
          <div className='dropdown text-deepGreen-100 md:hidden'>
            <div tabIndex={0} role='button' className='btn btn-ghost'>
              <Chevron />
            </div>
            <ul tabIndex={0} className="menu dropdown-content bg-brightGreen-10 rounded-box z-[1] mt-4 w-36 p-2 shadow">
              {/* <li>
                <Link href={`/${params.lng}/2024#overview`} className="p-3">
                  Overview
                </Link>
              </li>
              <li>
                <Link href={`/${params.lng}/2024#speakers`} className="p-3">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href={`/${params.lng}/2024#sponsors`} className="p-3">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href={`/${params.lng}/2024/organizer`} className="p-3">
                  Organizers
                </Link>
              </li> */}
              <li>
                {languages
                  .filter((lang) => lang !== params?.lng)
                  .map((lang) => (
                    <Link key={lang}
                          href={pathname.includes("/ko/") ? pathname.replace("/ko/", "/en/") : pathname.replace("/en/", "/ko/")}
                          className="p-3">
                      {lang === "ko" ? "한국어" : "English"}
                    </Link>
                  ))}
              </li>
            </ul>
          </div>
          <div className="relative py-2 px-7 cursor-pointer transition duration-200 hover:scale-105 rounded-[30px] bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20">
            <Link href={ticketLink} target={"_blank"} className="text-white hover:text-green-200 transition-colors relative z-10">
              Buy Tickets
            </Link>
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-white/20 to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </nav>
  );
};
