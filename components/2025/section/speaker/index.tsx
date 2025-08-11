import Link from "next/link";
import React from "react";

import { prefix } from "@/constants";
import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";

import { Avatar } from "@/components/2024";

import { LiquidButton, LiquidGlass } from "../../liquidGlass";

export const SpeakerSection: React.FC<LangProps> = async ({ params }) => {
  const { t } = await useTranslation(params.lng, "speaker");

  return (
    <section
      className='flex flex-col items-center justify-center w-screen py-28 relative text-black px-4'
      id='speakers'
    >
      <div className='max-w-[1440px] max-3xl:px-0 lg:px-20 min-h-screen w-full flex flex-col items-center justify-center'>
        <LiquidButton
          className='rounded-full transition-all duration-300 shadow-2xl'
          style={{ padding: "16px 50px" }}
          rippleEffect={false}
          size='sm'
        >
          <h2 className='text-4xl max-3xl:text-xl font-bold text-deepGreen-100'>{t("2025.title")}</h2>
        </LiquidButton>
        <p className='text-center text-greenBlack-70 text-xl max-3xl:text-sm whitespace-pre-wrap mt-5'>
          {t("2025.description")}
        </p>
        <br />
        <Link href={`/${params.lng}/2025/timetable`}>
          <LiquidButton
            className='rounded-full transition-all duration-300 shadow-2xl'
            rippleEffect={true}
            variant='primary'
          >
            <h2 className='text-2xl max-3xl:text-lg font-bold text-deepGreen-100'>{t("2025.timetable")}</h2>
          </LiquidButton>
        </Link>
        <div className='grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-12 py-[75px] w-full max-lg:px-5'>
          {Array.from({ length: 15 }).map((_, index) => {
            return (
              <div key={index} className='flex flex-col items-center justify-center'>
                <LiquidButton
                  variant='primary'
                  size='xl'
                  rippleEffect={false}
                  className='shadow-2xl w-full h-[70px] !p-2 !rounded-full flex items-center justify-center m-2 transition-all duration-300 !bg-[#41504A73]'
                >
                  <p className='text-white font-bold font-SFProDisplay text-center'>
                    {t(`2025.speaker${index + 1}.category`)}
                  </p>
                </LiquidButton>
                <Link
                  href={`/${params.lng}/2025/speaker/${index + 1}`}
                  key={index}
                  className='rounded-xl w-full py-4 px-3.5 flex flex-col justify-around max-3xl:hover:scale-105 transition-transform duration-300'
                >
                  <LiquidGlass
                    variant='panel'
                    intensity='medium'
                    rippleEffect={false}
                    flowOnHover={false}
                    stretchOnDrag={false}
                    className='w-full aspect-square rounded-[67px] relative !bg-[#41504A73]'
                    contentClassName='flex flex-col items-start justify-end max-3xl:hover:scale-105 transition-transform duration-300 aspect-square'
                  >
                    <div className='absolute -top-10 -left-14 max-lg:-top-10 max-lg:-left-10'>
                      <Avatar
                        size={200}
                        mobileSize={150}
                        name={t(`2025.speaker${index + 1}.name`)}
                        src={`${prefix}/assets/2025/images/speaker/${t(`2025.speaker${index + 1}.img`)}`}
                        alt={t(`2025.speaker${index + 1}.name`)}
                      />
                    </div>
                    <div className='flex flex-col text-2xl'>
                      <span className='text-white font-bold'>{t(`2025.speaker${index + 1}.name`)}</span>
                      {t(`2025.speaker${index + 1}.affiliation`) && (
                        <span className='text-lg text-white/70 font-SFProDisplay'>
                          {`${t(`2025.speaker${index + 1}.affiliation`)}`}
                        </span>
                      )}
                    </div>
                  </LiquidGlass>
                  {/* <div className='flex flex-col'>
                  <p className='text-deepGreen-70 font-SFProDisplay mb-2'>{t(`speaker${index + 1}.category`)}</p>
                  <p className='text-deepGreen-100 font-bold font-SFProDisplay mb-2'>
                    {t(`speaker${index + 1}.title`)}
                  </p>
                  <p className='text-deepGreen-70 font-SFProDisplay'>{t(`speaker${index + 1}.time`)}</p>
                </div>
                <div className='py-2 flex items-center gap-x-2'>
                  <Avatar
                    name={t(`speaker${index + 1}.name`)}
                    src={`${prefix}/assets/2024/images/speaker/${t(`speaker${index + 1}.img`)}`}
                    alt={t(`speaker${index + 1}.name`)}
                  />
                  <div className='text-deepGreen-100 font-bold font-SFProDisplay mr-0.5 flex flex-col'>
                    <div className='flex gap-x-2'>
                      <span>{t(`speaker${index + 1}.name`)}</span>
                      <span className='text-[#FFA412] font-bold font-SFProDisplay'>
                        {t(`speaker${index + 1}.nickname`)}
                      </span>
                    </div>
                    {t(`speaker${index + 1}.affiliation`) && (
                      <span className='text-xs text-deepGreen-70'>{`${t(`speaker${index + 1}.affiliation`)}`}</span>
                    )}
                  </div>
                </div> */}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
