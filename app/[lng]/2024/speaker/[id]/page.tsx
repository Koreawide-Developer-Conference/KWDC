import React from "react";

import { prefix } from "@/constants";
import { useTranslation } from "@/i18n";

export async function generateMetadata({ params }: any) {
  const translation = await import(`@/i18n/locales/${params.lng}/speaker.json`);
  const t = (key: string) => translation[key] || key;

  return {
    title: "KWDC24",
    description: `${t(`speaker${params.id}.title`)} - ${t(`speaker${params.id}.name`)}`,
    openGraph: {
      title: "KWDC24",
      description: `${t(`speaker${params.id}.title`)} - ${t(`speaker${params.id}.name`)}`,
      images: [`/api/og?id=${params.id}&lng=${params.lng}`],
    },
  };
}

export default async function SpeakerDetail({ params }: any) {
  const id = params?.id;
  const { t } = await useTranslation(params.lng, "speaker");

  return (
    <section className='flex flex-col pt-12 lg:h-screen min-h-screen w-screen bg-white items-center'>
      <div className='max-lg:px-4 lg:px-20 w-full flex flex-col max-md:justify-center hero_gradient items-center'>
        <div className='max-w-[1280px] w-full max-h-[600px] overflow-hidden flex flex-col'>
          <div className='border-b border-b-deepGreen-100 mb-8 flex justify-between'>
            <p className='font-semibold text-deepGreen-100 text-3xl mb-2.5 mt-10 max-md:text-xl'>
              {t(`speaker${id}.title`)}
            </p>
          </div>
          {id === "10" ? (
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-y-5'>
                <div>
                  <div className='text-2xl text-greenBlack-100 font-bold whitespace-pre-wrap max-md:text-sm flex items-center'>
                    <span>{t(`speaker${id}.name`)}</span>
                    {t(`speaker${id}.nickname`) && <span>&nbsp;({t(`speaker${id}.nickname`)})</span>}
                  </div>
                  <p className='text-2xl text-greenBlack-100 font-light whitespace-pre-wrap max-md:text-sm '>
                    {t(`speaker${id}.affiliation`)}
                  </p>
                  <p className='text-xl text-greenBlack-100 font-extralight whitespace-pre-wrap max-md:text-sm max-w-[700px]'>
                    {t(`speaker${id}.introduction`)}
                  </p>
                </div>
                <div>
                  <div className='text-2xl text-greenBlack-100 font-bold whitespace-pre-wrap max-md:text-sm flex items-center'>
                    <span>{t(`speaker${id}.nest.name`)}</span>
                    {t(`speaker${id}.nest.nickname`) && <span>&nbsp;({t(`speaker${id}.nest.nickname`)})</span>}
                  </div>
                  <p className='text-2xl text-greenBlack-100 font-light whitespace-pre-wrap max-md:text-sm '>
                    {t(`speaker${id}.nest.affiliation`)}
                  </p>
                  <p className='text-xl text-greenBlack-100 font-extralight whitespace-pre-wrap max-md:text-sm max-w-[700px]'>
                    {t(`speaker${id}.nest.introduction`)}
                  </p>
                </div>
              </div>
              <div className='w-full flex justify-end'>
                <img
                  src={`${prefix}/assets/2024/images/speaker/profile/${t(`speaker${id}.img`).replace(".webp", ".png")}`}
                  alt={t(`speaker${id}.name`)}
                  className='w-1/3 max-h-[600px] object-contain object-bottom'
                />
                <img
                  src={`${prefix}/assets/2024/images/speaker/profile/${t(`speaker${id}.nest.img`).replace(".webp", ".png")}`}
                  alt={t(`speaker${id}.next.name`)}
                  className='w-1/3 max-h-[600px] object-contain'
                />
              </div>
            </div>
          ) : (
            <div className='flex items-center justify-between'>
              <div>
                <div className='text-2xl text-greenBlack-100 font-bold whitespace-pre-wrap max-md:text-sm flex items-center'>
                  <span>{t(`speaker${id}.name`)}</span>
                  {t(`speaker${id}.nickname`) && <span>&nbsp;({t(`speaker${id}.nickname`)})</span>}
                </div>
                <p className='text-2xl text-greenBlack-100 font-light whitespace-pre-wrap max-md:text-sm '>
                  {t(`speaker${id}.affiliation`)}
                </p>
                <p className='text-xl text-greenBlack-100 font-extralight whitespace-pre-wrap max-md:text-sm max-w-[700px]'>
                  {t(`speaker${id}.introduction`)}
                </p>
              </div>
              <img
                src={`${prefix}/assets/2024/images/speaker/profile/${t(`speaker${id}.img`).replace(".webp", ".png")}`}
                alt={t(`speaker${id}.name`)}
                className='w-1/3 max-h-[600px] object-contain'
              />
            </div>
          )}
        </div>
      </div>
      <div className='max-w-[1440px] max-lg:px-4 lg:px-20 lg:py-20 max-lg:py-10 h-screen w-full flex flex-col max-md:justify-center bg-white'>
        <p className='font-semibold text-deepGreen-100 text-3xl my-10 max-md:text-xl'>{t(`speaker${id}.time`)}</p>
        <p className='text-xl text-greenBlack-100 font-light mb-10 max-md:text-sm whitespace-pre-wrap'>
          {t(`speaker${id}.description`)
            .replaceAll("\n", "")
            .replaceAll(". ", ".\n")
            .replaceAll("? ", "?\n")
            .replaceAll("! ", "!\n")}
        </p>
        {t(`speaker${id}.sns`) && (
          <div className='text-greenBlack-100 flex items-center relative'>
            <a target='_blank' href={t(`speaker${id}.sns`)} className='absolute -left-1'>
              {t(`speaker${id}.sns`).includes("linkedin") && (
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
              )}
              {(t(`speaker${id}.sns`).includes("x.com") || t(`speaker${id}.sns`).includes("twitter.com")) && (
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
              )}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
