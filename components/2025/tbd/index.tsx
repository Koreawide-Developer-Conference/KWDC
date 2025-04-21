import { useTranslation } from "@/i18n"
import { LangProps } from "@/i18n/settings"
import KWDC25 from '@/public/assets/2025/icons/kwdc25.svg';

export const TBD: React.FC<LangProps> = async ({params}) => {
    const {t} = await useTranslation(params.lng, 'common')
    return (
        <div className='w-screen h-screen bg-white flex flex-col justify-center items-center'>
            <KWDC25 className='w-[620px] h-[119px] mb-[115px]' />
            <p className='text-[#63916C] font-Pretendard text-[36px] leading-[28.7px] mb-4'>2025. 09. 05</p>
            <p className='text-[#63916C] font-medium font-Pretendard text-[32px] leading-[28.7px]'>{t("2025.place")}</p>
        </div>
    )
}