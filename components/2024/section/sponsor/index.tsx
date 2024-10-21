import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";
import Sponsor from "@/public/assets/2024/icons/sponsor.svg";
import Academy from "@/public/assets/2024/logos/apple_developer_academy.svg";
import Datadog from "@/public/assets/2024/logos/datadog.svg";
import Inflearn from "@/public/assets/2024/logos/inflearn.svg";
import LottieFiles from "@/public/assets/2024/logos/lottieFiles.svg";
import RevenueCat from "@/public/assets/2024/logos/revenueCat.svg";
import Slid from "@/public/assets/2024/logos/slid.png";

export const SponsorSection: React.FC<LangProps> = async ({ params }) => {
  const { t } = await useTranslation(params.lng, "sponsor");
  return (
    <section
      className='flex flex-col items-center justify-center w-screen min-h-screen relative text-black bg-white px-4'
      id='sponsors'
    >
      <div className='flex flex-col justify-center items-center w-full max-w-[1440px]'>
        <Sponsor />
        <p className='text-greenBlack-100 font-bold text-4xl max-3xl:text-2xl mt-5 mb-[100px]'>{t("title")}</p>

        <div className='w-full rounded-3xl flex flex-col justify-center items-center mb-[100px]'>
          <p className='text-greenBlack-100 font-semibold text-2xl mt-5 mb-20'>{t("diamond")}</p>
          <Link href={"https://datadoghq.com"} target='_blank' className='max-md:scale-50'>
            <Datadog />
          </Link>
        </div>
        <div className='w-full rounded-3xl flex flex-col justify-center items-center px-10'>
          <p className='text-greenBlack-100 font-semibold text-2xl mt-5'>{t("platinum")}</p>
          <Link href={"https://www.revenuecat.com/"} target='_blank' className='max-md:scale-50'>
            <RevenueCat />
          </Link>
        </div>
        <div className='w-full rounded-3xl flex flex-col justify-center items-center mb-[100px]'>
          <p className='text-greenBlack-100 font-semibold text-2xl mt-5 mb-20'>{t("gold")}</p>
          <Link href={"https://lottiefiles.com/"} target='_blank' className='max-md:scale-50'>
            <LottieFiles />
          </Link>
        </div>
        <div className='w-full rounded-3xl flex flex-col justify-center items-center mb-[100px]'>
          <p className='text-greenBlack-100 font-semibold text-2xl mt-5 mb-20'>{t("in-kind")}</p>
          <div className='flex flex-col gap-y-20 max-md:gap-x-5 items-center'>
            <Link href={"https://www.inflearn.com/"} target='_blank' className='max-md:scale-50'>
              <Inflearn />
            </Link>
            <Link href={"https://home.slid.cc/"} target='_blank' className='max-md:scale-50'>
              <Image src={Slid} width={170} height={39} alt='slid' />
            </Link>
            <Link href={"https://developeracademy.postech.ac.kr/"} target='_blank' className='scale-50 max-md:scale-[30%]'>
              <Academy />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
