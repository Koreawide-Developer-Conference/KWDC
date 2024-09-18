import React from "react";

import { SPEAKERS } from "@/constants";
import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";
import Icon from "@/public/assets/2024/icons/spaker.svg";

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
          {SPEAKERS.map((speaker, index) => (
            <div key={speaker.name} className='bg-brightGreen-100 rounded-xl w-full h-[225px]'>
              <p>{speaker.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
