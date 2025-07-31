import Image from "next/image";
import React from "react";

import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";
import Logo from "@/public/assets/2025/images/kwdc25_black.png";

import { LiquidGlass } from "../../liquidGlass";

export const OverviewSection: React.FC<LangProps> = async ({ params }) => {
  const { t } = await useTranslation(params.lng, "overview");

  return (
    <section className='flex flex-col pt-[180px] max-lg:pt-[0px] max-lg:px-[35px] h-[70vh] w-full items-center font-Pretendard max-lg:pb-[120px]'>
      <LiquidGlass
        variant='panel'
        intensity='medium'
        rippleEffect={false}
        flowOnHover={false}
        stretchOnDrag={false}
        contentClassName='relative z-20 max-w-[900px] max-lg:max-w-[480px] px-20 max-lg:px-[35px] py-16 max-lg:py-10 text-[#41504A] !flex !flex-col !items-center !justify-center'
        style={{ padding: "24px", borderRadius: "64px" }}
      >
        <Image src={Logo.src} alt={"logo"} width={245} height={45} className='w-[76px] h-[14px] object-contain' />
        <p className='text-[rgb(65,80,74)] whitespace-pre-line font-[400] text-center mt-9 font-Pretendard text-[20px] max-lg:text-[12px] leading-7 tracking-normal'>
          {t("2025.content")}
        </p>
      </LiquidGlass>
    </section>
  );
};
