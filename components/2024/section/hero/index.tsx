import React from "react";

import { useTranslation } from "@/i18n";

import Object from "@/public/assets/2024/images/section1.png";
import Image from "next/image";
import { LangProps } from "@/i18n/settings";

export const HeroSection: React.FC<LangProps> = async ({ params }) => {
  const { t } = await useTranslation(params.lng, "hero");
  return (
    <section className='flex flex-col pt-12 lg:h-screen min-h-screen w-full items-center hero_gradient'>
      <div className='max-w-[1440px] max-3xl:px-4 lg:px-20 h-screen w-full items-center flex flex-col max-3xl:justify-center'>
        <Image src={Object.src} alt={'object'} width={392} height={490} className='lg:mt-20 max-3xl:w-[300px] max-3xl:h-[375px]' />
        <h1 className='font-bold text-deepGreen-100 text-6xl mb-8 mt-10 max-3xl:text-3xl'>
          {t("title")}
        </h1>
        <p className='text-xl text-greenBlack-70 font-bold whitespace-pre-wrap text-center mb-10 max-3xl:text-sm'>
          {t("description")}
        </p>
        <p className='text-xl text-greenBlack-60 font-light whitespace-pre-wrap text-center mb-10 max-3xl:text-sm'>
          {t("date")}
        </p>
      </div>
    </section>
  );
};
