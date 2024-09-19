import Link from "next/link";
import React from "react";

import { DISCORD_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, MEDIUM_LINK, X_LINK, YOUTUBE_LINK } from "@/constants";
import { LangProps } from "@/i18n/settings";
import { useTranslation } from "@/i18n";

interface FooterProps extends LangProps{
  cocHide?: boolean;
}

export const Footer: React.FC<FooterProps> = async ({ cocHide = false, params }) => {
  const {t} = await useTranslation(params.lng, 'footer')
  return (
    <footer className='flex flex-col justify-center items-center w-screen pt-12 pb-9 bg-[#F5F5F7] max-3xl:pt-5 max-3xl:pb-16'>
      {!cocHide && (
        <div className="flex flex-col lg:w-[1000px] px-5">
          <div className="text-[#000000E0] mb-5">
            <p className="mb-5 text-sm font-semibold">{t('title')}</p>
            <ul className="text-xs space-y-1">
              {Array.from({ length: 7 }).map((_, index) => (
                <li key={index}>
                  {t(`coc${index + 1}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="pt-10 lg:w-[1000px] px-5 max-3xl:w-full">
        <p className="text-sm font-semibold text-[#000000E0] mb-2.5">{t('channel')}</p>
        <div className="flex gap-x-5 text-[#000000B8] font-normal text-xs mb-5">
          <Link href={DISCORD_LINK} target={"_blank"} className="hover:underline">
            Discord
          </Link>
          <Link href={YOUTUBE_LINK} target={"_blank"} className="hover:underline">
            YouTube
          </Link>
          <Link href={INSTAGRAM_LINK} target={"_blank"} className="hover:underline">
            Instagram
          </Link>
          <Link href={X_LINK} target={"_blank"} className="hover:underline">
            X
          </Link>
          <Link href={LINKEDIN_LINK} target={"_blank"} className="hover:underline">
            LinkedIn
          </Link>
          <Link href={MEDIUM_LINK} target={"_blank"} className="hover:underline">
            Medium
          </Link>
        </div>
        <div className="text-deepGreen-60 text-xs mb-2.5">
          {t('contact')}&nbsp;
          <br className="lg:hidden" />
          <a href="mailto:hello.kwdc@gmail.com" className='hover:underline'>
            hello.kwdc@gmail.com
          </a>
        </div>
        <div className='h-px w-full bg-[#00000029]' />
        <p className='mt-5 text-xs text-deepGreen-60'>Copyright © KWDC24. All rights reserved.</p>
      </div>
    </footer>
  );
};
