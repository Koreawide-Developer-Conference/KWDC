import React from "react";

import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";
import Sponsor from "@/public/assets/2024/icons/sponsor.svg";
import Flitto from "@/public/assets/2024/logos/flitto.svg";

export const SponsorSection: React.FC<LangProps> = async ({ params }) => {
  const { t } = await useTranslation(params.lng, "sponsor");
  return (
    <section
      className='flex flex-col items-center justify-center w-screen h-screen relative text-black bg-white px-4'
      id='sponsors'
    >
      <div className='flex flex-col justify-center items-center'>
        <Sponsor />
        <p className='text-greenBlack-100 font-bold text-4xl max-3xl:text-2xl mt-5'>{t("title")}</p>
        <Flitto className='my-[150px]' />
        <p className='text-greenBlack-70 font-medium text-xl max-3xl:text-lg text-center whitespace-pre-wrap'>
          {t("description")}
        </p>
      </div>
    </section>
  );
};
