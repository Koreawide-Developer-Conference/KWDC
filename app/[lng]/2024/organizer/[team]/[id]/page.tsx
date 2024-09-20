import React from "react";

import { prefix } from "@/constants";
import { translation, useTranslation } from "@/i18n";
import Image from "next/image";

export async function generateMetadata({ params }: any) {
  const id = params?.id;
  const team = params?.team;
  const lng = params?.lng;
  const { t } = await translation(lng, "organizer");

  return {
    title: `TEAM KWDC24 - ${t(`${team}.member${id}.name`)}`,
    description: `${t(`speaker${params.id}.title`)} - ${t(`speaker${id}.name`)}`,
    openGraph: {
      title: `TEAM KWDC24 - ${t(`${team}.member${id}.name`)}`,
      description: t(`${team}.member${id}.extra_team`)
        ? `${t(`${team}.title`)}, ${t(`${team}.member${id}.extra_team`)}`
        : `${t(`${team}.title`)}`,
      images: [`/api/organizer?id=${id}&lng=${lng}&team=${team}`],
    },
  };
}

export default async function SpeakerDetail({ params }: any) {
  const id = params?.id;
  const team = params?.team;

  const { t } = await useTranslation(params.lng, "organizer");

  const socialMediaIcons: { [key in 'linkedin' | 'x.com' | 'twitter.com' | 'github' | 'notion' | 'instagram']: JSX.Element } = {
    linkedin: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
        <path d='M8 11l0 5' />
        <path d='M8 8l0 .01' />
        <path d='M12 16l0 -5' />
        <path d='M16 16v-3a2 2 0 0 0 -4 0' />
      </svg>
    ),
    "x.com": (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon icon-tabler icons-tabler-outline icon-tabler-brand-x'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M4 4l11.733 16h4.267l-11.733 -16z' />
        <path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772' />
      </svg>
    ),
    "twitter.com": (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon icon-tabler icons-tabler-outline icon-tabler-brand-x'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M4 4l11.733 16h4.267l-11.733 -16z' />
        <path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772' />
      </svg>
    ),
    github: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon icon-tabler icons-tabler-outline icon-tabler-brand-github'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
      </svg>
    ),
    notion: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon icon-tabler icons-tabler-outline icon-tabler-brand-notion'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M11 17.5v-6.5h.5l4 6h.5v-6.5' />
        <path d='M19.077 20.071l-11.53 .887a1 1 0 0 1 -.876 -.397l-2.471 -3.294a1 1 0 0 1 -.2 -.6v-10.741a1 1 0 0 1 .923 -.997l11.389 -.876a2 2 0 0 1 1.262 .33l1.535 1.023a2 2 0 0 1 .891 1.664v12.004a1 1 0 0 1 -.923 .997z' />
        <path d='M4.5 5.5l2.5 2.5' />
        <path d='M20 7l-13 1v12.5' />
      </svg>
    ),
    instagram: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
        <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
        <path d='M16.5 7.5l0 .01' />
      </svg>
    ),
  };

  const sns = t(`${team}.member${id}.sns`);
  const matchedIcon = Object.keys(socialMediaIcons).find((key) => sns.includes(key)) as keyof typeof socialMediaIcons;

  return (
    <section className='flex flex-col pt-12 max-3xl:h-screen min-h-screen w-screen bg-white items-center'>
      <div className='max-3xl:px-4 lg:px-20 w-full flex flex-col max-3xl:justify-center hero_gradient items-center'>
        <div className='max-w-[1280px] w-full max-h-[600px] overflow-hidden flex flex-col'>
          <div className='border-b border-b-deepGreen-100 mb-8 flex justify-between'>
            <p className='font-semibold text-deepGreen-100 text-4xl mb-2.5 mt-10 max-3xl:text-xl'>TEAM KWDC24</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-y-2.5'>
              <div className='text-3xl max-sm:text-xl text-greenBlack-100 font-bold whitespace-pre-wrap flex items-center'>
                <span>{t(`${team}.member${id}.name`)}</span>
                {t(`${team}.member${id}.nickname`) && <span>&nbsp;({t(`${team}.member${id}.nickname`)})</span>}
              </div>
              <div className='text-xl text-greenBlack-100 whitespace-pre-wrap flex items-center gap-x-2.5'>
                <span className='badge badge-greenBlack-70 badge-outline'>{t(`${team}.title`)}</span>
                {t(`${team}.member${id}.extra_team`) && <span className='badge badge-greenBlack-70 badge-outline'>{t(`${team}.member${id}.extra_team`)}</span>}
              </div>
            </div>
            <Image
              src={`/assets/2024/images/organizer/profile/${t(`${team}.member${id}.img`).replace(".webp", ".png")}`}
              alt={t(`speaker${id}.name`)}
              width={300}
              height={600}
              priority
              className='min-w-1/3 w-1/3 max-w-1/3 max-sm:min-w-1/2 max-sm:w-1/2 max-sm:max-w-1/2 max-h-[600px] max-sm:max-h-[300px] object-contain object-bottom'
            />
          </div>
        </div>
      </div>
      <div className='max-w-[1440px] max-3xl:px-4 lg:px-20 py-20 w-full flex flex-col max-3xl:justify-center bg-white'>
        <p className='text-lg text-greenBlack-100 font-light mb-10 whitespace-pre-wrap'>
          {t(`${team}.member${id}.short_introduction`)}
        </p>
        {t(`${team}.member${id}.sns`) && (
          <div className='text-greenBlack-100 flex items-center relative'>
            <a target='_blank' href={t(`${team}.member${id}.sns`)} className='absolute -left-1'>
              {matchedIcon ? (
                socialMediaIcons[matchedIcon]
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='icon icon-tabler icons-tabler-outline icon-tabler-home'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M5 12l-2 0l9 -9l9 9l-2 0' />
                  <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
                  <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
                </svg>
              )}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
