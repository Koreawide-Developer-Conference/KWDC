import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/i18n";
import { LangProps } from "@/i18n/settings";

import { BackgroundGradientAnimation } from "../ui/bg-gradient/background-gradient-animation";

interface TBDProps extends LangProps {
  idx: number;
}

export const TBD: React.FC<LangProps> = async ({ params }) => {
  const { t } = await useTranslation(params.lng, "common");
  return (
    <BackgroundGradientAnimation>
      <div className='absolute z-50 inset-0 flex items-center justify-center text-white px-4 pointer-events-none text-center'>
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
          <Image
            src={`/assets/2025/icons/kwdc25.svg`}
            alt='logo'
            width={620}
            height={119}
            className='w-[620px] h-[119px] mb-[115px] max-lg:mb-[44px] max-lg:w-[297px] max-lg:h-[57px]'
          />
          <p className='text-[#63916C] font-Pretendard text-[36px] max-lg:text-[20px] leading-[28.7px] max-lg:leading-[10px] mb-4 max-lg:mb-3'>
            2025. 09. 05
          </p>
          <p className='text-[#63916C] font-Pretendard text-[32px] max-lg:text-[18px] leading-[28.7px] max-lg:leading-[10px]'>
            {t("2025.place")}
          </p>
          <div className='mt-10 flex items-center text-[#63916C] gap-x-5 max-lg:flex-col max-lg:gap-y-3 pointer-events-auto font-semibold'>
            <Link className='px-4 py-2 border rounded-lg border-[#e5e7eb] bg-white cta_shadow min-w-[200px]' href={"/2025/sponsor"}>{t("2025.sponsor_title")}</Link>
            <Link className='px-4 py-2 border rounded-lg border-[#e5e7eb] bg-white cta_shadow min-w-[200px]' href={"/2025/speaker"}>{t("2025.speaker_title")}</Link>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};
