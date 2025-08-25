import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";
import RevenueCat from "@/public/assets/2024/logos/revenueCat.svg";

export const SponsorSection: React.FC<LangProps> = async ({ params }) => {
  const { t } = await useTranslation(params.lng, "sponsor");
  return (
    <section
      className='flex flex-col items-center justify-center w-screen min-h-screen relative text-black px-4'
      id='sponsors'
    >
      <div className='flex flex-col justify-center items-center w-full max-w-[1440px]'>
        <p className='text-greenBlack-100 font-bold text-4xl max-3xl:text-2xl mt-5 mb-10'>{t("2025.title")}</p>

        <div className='w-full rounded-3xl flex flex-col justify-center items-center mb-[100px]'>
          <Link href={"https://www.beyondtech.co.kr/"} target='_blank' className='max-md:scale-50'>
            <Image src={"/assets/2025/images/sponsor/bt_logo.png"} alt='BT Logo' width={1000 / 3} height={632 / 3} />
          </Link>
          <Link href={"https://www.revenuecat.com/"} target='_blank' className='scale-[70%]'>
            <RevenueCat />
          </Link>
        </div>

        <div className='w-full rounded-3xl flex flex-col justify-center items-center mb-[100px]'>
          <p className='text-greenBlack-100 font-semibold text-2xl mt-5 mb-20'>{t("2025.community_sponsor")}</p>
          <div className='flex gap-x-20 max-md:flex-col max-md:gap-y-10 max-md:gap-x-5 items-center'>
            <Link href={"https://www.flitto.com"} target='_blank' className='flex flex-col justify-center items-center'>
              <div className='h-[120px] gap-x-5 flex justify-center'>
                <Image
                  src={"/assets/2025/images/sponsor/flitto_vertical.png"}
                  alt='Flitto Logo'
                  width={110 * 2}
                  height={113 * 2}
                  className='object-contain max-lg:w-[80px]'
                />
                <Image
                  src={"/assets/2025/images/sponsor/flitto_lt.png"}
                  alt='Flitto Logo'
                  width={343}
                  height={113}
                  className='object-contain max-lg:w-[160px]'
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
