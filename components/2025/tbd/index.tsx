import { useTranslation } from "@/i18n"
import { LangProps } from "@/i18n/settings"
import Image from "next/image"
import { BackgroundGradientAnimation } from "../ui/bg-gradient/background-gradient-animation"

interface TBDProps extends LangProps {
    idx: number
}

export const TBD: React.FC<TBDProps> = async ({params, idx}) => {
    const {t} = await useTranslation(params.lng, 'common')
    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white px-4 pointer-events-none text-center">
                <div className='w-screen h-screen flex flex-col justify-center items-center'>
                    <Image src={`/assets/2025/icons/${idx}.svg`} alt='logo' width={620} height={119} className='w-[620px] h-[119px] mb-[115px] max-lg:mb-[44px] max-lg:w-[297px] max-lg:h-[57px]' />
                    <p className='text-[#63916C] font-Pretendard text-[36px] max-lg:text-[20px] leading-[28.7px] max-lg:leading-[10px] mb-4 max-lg:mb-3'>2025. 09. 05</p>
                    <p className='text-[#63916C] font-Pretendard text-[32px] max-lg:text-[18px] leading-[28.7px] max-lg:leading-[10px]'>{t("2025.place")}</p>
                </div>
            </div>
        </BackgroundGradientAnimation>
    )
}