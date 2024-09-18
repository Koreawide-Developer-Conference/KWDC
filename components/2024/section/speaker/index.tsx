import Link from "next/link";
import React from "react";

import { prefix } from "@/constants";
import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";
import Icon from "@/public/assets/2024/icons/spaker.svg";

import { Avatar } from "@/components/2024";

export const SpeakerSection: React.FC<LangProps> = async ({ params }) => {
  const { t } = await useTranslation(params.lng, "speaker");

  return (
    <section
      className='flex flex-col items-center justify-center w-screen py-28 relative text-black px-4 bg-white'
      id='speakers'
    >
      <div className='max-w-[1440px] max-lg:px-0 lg:px-20 min-h-screen w-full flex flex-col items-center justify-center'>
        <Icon />
        <h2 className='my-2.5 text-4xl max-md:text-xl font-bold text-deepGreen-100'>{t("title")}</h2>
        <p className='text-center text-greenBlack-70 text-xl max-md:text-sm whitespace-pre-wrap'>{t("description")}</p>
        <br />
        <p className='text-center text-greenBlack-100 text-xl max-md:text-sm'>
          {t("subtitle")} <br />
        </p>
        <div className='grid grid-cols-3 max-md:grid-cols-1 gap-12 py-[75px] w-full'>
          {Array.from({ length: 24 }).map((_, index) => {
            if (index === 9) {
              return (
                <Link
                  href={`/${params.lng}/2024/speaker/24`}
                  key={index}
                  className='bg-brightGreen-100 rounded-xl w-full h-[230px] py-4 px-3.5 flex flex-col justify-around hover:scale-105 transition-transform duration-300'
                >
                  <div className='flex flex-col'>
                    <p className='text-deepGreen-70 font-SFProDisplay mb-2'>{t(`speaker10.category`)}</p>
                    <p className='text-deepGreen-100 font-bold font-SFProDisplay mb-2'>{t(`speaker10.title`)}</p>
                    <p className='text-deepGreen-70 font-SFProDisplay'>{t(`speaker10.time`)}</p>
                  </div>
                  <div className='py-2 flex items-center gap-x-2'>
                    <div className='avatar-group -space-x-2 rtl:space-x-reverse'>
                      <Avatar
                        name={t(`speaker10.name`)}
                        src={`${prefix}/assets/2024/images/speaker/${t(`speaker10.img`)}`}
                        alt={t(`speaker10.name`)}
                      />
                      <Avatar
                        name={t(`speaker10.nest.name`)}
                        src={`${prefix}/assets/2024/images/speaker/${t(`speaker10.nest.img`)}`}
                        alt={t(`speaker10.nest.name`)}
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="text-deepGreen-100 font-bold font-SFProDisplay mr-0.5 flex flex-col">
                        <div className="flex gap-x-2">
                          <span>{t(`speaker10.name`)}</span>
                          <span
                            className="text-[#FFA412] font-bold font-SFProDisplay">{t(`speaker10.nickname`)}</span>
                        </div>
                        {t(`speaker10.affiliation`) && (
                          <span className="text-xs text-deepGreen-70">{`${t(`speaker10.affiliation`)}`}</span>
                        )}
                      </div>
                      <div className="text-deepGreen-100 font-bold font-SFProDisplay mr-0.5 flex flex-col">
                        <div className="flex gap-x-2">
                          <span>{t(`speaker10.nest.name`)}</span>
                          <span
                            className="text-[#FFA412] font-bold font-SFProDisplay">{t(`speaker10.nest.nickname`)}</span>
                        </div>
                        {t(`speaker10.nest.affiliation`) && (
                          <span className="text-xs text-deepGreen-70">{`${t(`speaker10.nest.affiliation`)}`}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
            return (
              <Link
                href={`/${params.lng}/2024/speaker/${index + 1}`}
                key={index}
                className='bg-brightGreen-100 rounded-xl w-full h-[230px] py-4 px-3.5 flex flex-col justify-around hover:scale-105 transition-transform duration-300'
              >
                <div className='flex flex-col'>
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
                      <span className='text-[#FFA412] font-bold font-SFProDisplay'>{t(`speaker${index + 1}.nickname`)}</span>
                    </div>
                    {t(`speaker${index + 1}.affiliation`) && (
                      <span className='text-xs text-deepGreen-70'>{`${t(`speaker${index + 1}.affiliation`)}`}</span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
