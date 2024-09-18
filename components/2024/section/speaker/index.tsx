import React from "react";

import { SPEAKERS, prefix } from "@/constants";
import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";
import Icon from "@/public/assets/2024/icons/spaker.svg";
import Link from "next/link";

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
          {Array.from({ length: 1 }).map((_, index) => (
            <Link href={`/${params.lng}/2024/speaker/${index + 1}`} key={index} className='bg-brightGreen-100 rounded-xl w-full h-[230px] py-4 px-3.5 flex flex-col justify-around'>
              <div className='flex flex-col'>
                <p className='text-deepGreen-70 font-SFProDisplay mb-2'>{t(`speaker${index + 1}.category`)}</p>
                <p className='text-deepGreen-100 font-bold font-SFProDisplay mb-2'>{t(`speaker${index + 1}.title`)}</p>
                <p className='text-deepGreen-70 font-SFProDisplay'>{t(`speaker${index + 1}.time`)}</p>
              </div>
              <div className='py-2 flex items-center gap-x-2'>
                <img
                  src={`${prefix}${t(`speaker${index + 1}.img`)}`}
                  alt={t(`speaker${index + 1}.name`)}
                  className='w-[60px] h-[60px] object-cover rounded-full'
                />
                <p className='text-deepGreen-100 font-bold font-SFProDisplay mb-2'>{t(`speaker${index + 1}.name`)}</p>
                <p className='text-[#FFA412] font-bold font-SFProDisplay mb-2'>{t(`speaker${index + 1}.nickname`)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
