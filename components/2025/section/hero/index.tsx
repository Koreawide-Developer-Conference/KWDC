import React from "react";

import { useTranslation } from "@/i18n";

import Object from "@/public/assets/2025/images/main_asset.png";
import Logo from "@/public/assets/2025/images/kwdc25_black.png";
import Image from "next/image";
import { LangProps } from "@/i18n/settings";  
import Link from "next/link";

export const HeroSection: React.FC<LangProps> = async ({ params }) => {
  const { t } = await useTranslation(params.lng, "common");
  return (
    <section className='flex flex-col pt-12 lg:h-screen min-h-screen w-full items-center font-Pretendard'>
      <div className='w-full relative max-lg:h-[146px]'>
        <Image src={Object.src} alt={'object'} width={1920} height={582} className='w-full max-h-[582px] object-fill max-lg:h-[146px]' />
        <div className='absolute max-lg:w-[245px] max-lg:h-[45px] top-0 bottom-0 left-0 right-0 m-auto flex justify-center'>
          <Image src={Logo.src} alt={'logo'} width={86} height={16} className='max-lg:w-[86px] max-lg:h-[16px] w-[245px] h-[45px] object-contain' />
        </div>
      </div>
      <div className='max-w-[1440px] max-3xl:px-4 lg:px-20 w-full items-center flex flex-col max-3xl:justify-center mt-8 max-lg:mt-4'>
        <h1 className='text-black text-5xl font-medium leading-[56px] whitespace-pre text-center max-lg:text-lg'>
          {t("2025.title")}
        </h1>
        <p className='text-[#9E9E9E] text-5xl leading-[56px] whitespace-pre text-center max-lg:text-lg'>
          {t("2025.description")}
        </p>
        <div className='flex flex-col items-center mt-[52px] text-[#41504A] text-3xl font-bold leading-loose max-lg:text-xs max-lg:mt-4'>
          <p className='text-center h-8 max-lg:h-3'>
            {t("2025.date")}
          </p>
          <p className='mt-3 h-8 max-lg:mt-1 max-lg:h-3'>
            {t("2025.place")}
          </p>
        </div>
      <Link href='https://www.koreawebdesignconference.org/2025/ticket' target='_blank' className='cta_2025_gradient mt-[52px] bg-white rounded-full max-lg:mt-[28px]'>
        <div className='py-4 w-[250px] text-[#41504A] text-2xl font-bold leading-relaxed text-center max-lg:w-[70px] max-lg:py-1 max-lg:text-[7px]'>
          {t("2025.ticket_purchase")}
        </div>
      </Link>
      </div>
    </section>
  );
};
