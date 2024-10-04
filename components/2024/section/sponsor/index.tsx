import Link from "next/link";
import React from "react";

import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";
import Diamond from "@/public/assets/2024/icons/diamond.svg";
import Sponsor from "@/public/assets/2024/icons/sponsor.svg";

const Card = () => {

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mb-5 w-[200px] h-[100px] bg-gray-200'/>
      <p className='text-greenBlack-100 text-xl font-bold'>name</p>
    </div>
  )
}
export const SponsorSection: React.FC<LangProps> = async ({ params }) => {
  const { t } = await useTranslation(params.lng, "sponsor");
  return (
    <section
      className='flex flex-col items-center justify-center w-screen min-h-screen relative text-black bg-white px-4'
      id='sponsors'
    >
      <div className='flex flex-col justify-center items-center w-full max-w-[1440px]'>
        <Sponsor />
        <p className='text-greenBlack-100 font-bold text-4xl max-3xl:text-2xl mt-5 mb-20'>{t("title")}</p>

        <div className='w-full bg-brightGreen-100 rounded-3xl flex flex-col justify-center items-center py-[50px]'>
          <Diamond className='mb-5'/>
          <Card />
        </div>
        <div className='w-full bg-brightGreen-60 rounded-3xl grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 py-[100px] my-20'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='w-full bg-brightGreen-30 rounded-3xl grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 py-[50px]'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};
