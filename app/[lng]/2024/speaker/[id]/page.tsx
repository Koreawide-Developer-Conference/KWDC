import Link from "next/link";
import React from "react";

import { prefix } from "@/constants";
import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";

export default async function SpeakerDetail({ params }: Readonly<LangProps>) {
  const id = params?.id;
  const { t } = await useTranslation(params.lng, "speaker");

  return (
    <section className='flex flex-col pt-12 lg:h-screen min-h-screen w-screen bg-white items-center'>
      <div className='max-lg:px-4 lg:px-20 h-screen w-full flex flex-col max-md:justify-center hero_gradient items-center'>
        <div className='max-w-[1280px] w-full max-h-[600px] flex flex-col'>
          <div className='border-b border-b-deepGreen-100 mb-8 flex justify-between'>
            <p className='font-semibold text-deepGreen-100 text-3xl mb-2.5 mt-10 max-md:text-xl'>
              {t(`speaker${id}.title`)}
            </p>
            <p className='font-semibold text-deepGreen-100 text-3xl mb-2.5 mt-10 max-md:text-xl'>
              {t(`speaker${id}.time`)}
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <div className='text-2xl text-greenBlack-100 font-bold whitespace-pre-wrap max-md:text-sm flex items-center'>
                <span>{t(`speaker${id}.name`)}</span>
                {t(`speaker${id}.nickname`) && <span>&nbsp;({t(`speaker${id}.nickname`)})</span>}
              </div>
              <p className='text-2xl text-greenBlack-100 font-light whitespace-pre-wrap max-md:text-sm '>
                {t(`speaker${id}.affiliation`)}
              </p>
              <p className='text-xl text-greenBlack-100 font-extralight whitespace-pre-wrap max-md:text-sm max-w-[600px]'>
                {t(`speaker${id}.introduction`)}
              </p>
            </div>
            <img
              src={`${prefix}/assets/2024/images/speaker/profile/${t(`speaker${id}.img`).replace(".webp", ".png")}`}
              alt={t(`speaker${id}.name`)}
              className='w-1/3'
            />
          </div>
        </div>
      </div>
      <div className='max-w-[1440px] max-lg:px-4 lg:px-20 lg:py-20 max-lg:py-10 h-screen w-full flex flex-col max-md:justify-center bg-white'>
        <p className='text-xl text-greenBlack-100 font-light mb-10 max-md:text-sm whitespace-pre-wrap'>
          {t(`speaker${id}.description`)
            .replaceAll("\n", "")
            .replaceAll(". ", ".\n")
            .replaceAll("? ", "?\n")
            .replaceAll("! ", "!\n")}
        </p>
        {t(`speaker${id}.sns`) && (
          <div className='text-greenBlack-100 flex items-center gap-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-home'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 12l-2 0l9 -9l9 9l-2 0' />
              <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
              <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
            </svg>
            <Link target='_blank' href={t(`speaker${id}.sns`)} className='text-greenBlack-100 hover:underline'>
              {t(`speaker${id}.sns`)}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
