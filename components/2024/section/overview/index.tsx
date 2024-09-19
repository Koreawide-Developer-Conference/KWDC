import React from "react";

import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";
import Lang from "@/public/assets/2024/icons/lang.svg";
import Logo from "@/public/assets/2024/icons/logo_green.svg";
import Meet from "@/public/assets/2024/icons/meet.svg";
import Section from "@/public/assets/2024/icons/section.svg";

export const OverviewSection: React.FC<LangProps> = async ({ params }) => {
  const { t } = await useTranslation(params.lng, "overview");
  return (
    <section
      className='flex flex-col items-center justify-center w-screen max-3xl:py-14 relative text-black px-4 bg-white'
      id='overview'
    >
      <div className='max-w-[1440px] max-3xl:px-0 lg:px-20 min-h-screen w-full flex flex-col items-center justify-center text-center'>
        <Logo />
        <h2 className='my-5 text-4xl max-3xl:text-xl font-bold text-deepGreen-100'>{t("title")}</h2>
        <p className='text-center text-greenBlack-70 text-xl max-3xl:text-sm whitespace-pre-wrap'>{t("description")}</p>
        <br />
        <p className='text-center text-greenBlack-100 text-xl max-3xl:text-sm'>
          {t("subtitle")} <br />
        </p>
        <div className='mt-20 bg-brightGreen-50 rounded-[28px] py-12 lg:px-20 grid grid-cols-3 gap-10 max-lg:grid-cols-1 max-3xl:pl-5'>
          <div className='flex flex-col gap-x-8 items-center max-3xl:gap-x-4'>
            <div className='flex justify-center items-center h-[100px]'>
              <Section />
            </div>
            <div className='text-center mt-5'>
              <p className='font-semibold text-greenBlack-100 mb-5'>{t("keyword1")}</p>
              <p className='text-greenBlack-70 whitespace-pre-wrap'>{t("keyword1_description")}</p>
            </div>
          </div>

          <div className='flex flex-col gap-x-8 items-center max-3xl:gap-x-4'>
            <div className='flex justify-center items-center h-[100px]'>
              <Meet />
            </div>
            <div className='text-center mt-5'>
              <p className='font-semibold text-greenBlack-100 mb-5'>{t("keyword2")}</p>
              <p className='text-greenBlack-70 whitespace-pre-wrap'>{t("keyword2_description")}</p>
            </div>
          </div>

          <div className='flex flex-col gap-x-8 items-center max-3xl:gap-x-4'>
            <div className='flex justify-center items-center h-[100px]'>
              <Lang />
            </div>
            <div className='text-center mt-5'>
              <p className='font-semibold text-greenBlack-100 mb-5'>{t("keyword3")}</p>
              <p className='text-greenBlack-70 whitespace-pre-wrap'>{t("keyword3_description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
