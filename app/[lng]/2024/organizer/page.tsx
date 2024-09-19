import Link from "next/link";
import React from "react";

import { openGraphImage2024 } from "@/app/shared-metadata";
import { translation, useTranslation } from "@/i18n";

export async function generateMetadata({ params }: any) {
  const { t } = await translation(params.lng, "organizer");

  return {
    title: "TEAM KWDC24",
    description: `${t("subtitle")}`,
    openGraph: {
      title: "TEAM KWDC24",
      description: `${t("subtitle")}`,
      ...openGraphImage2024,
    },
  };
}

const TEAM = [
  "team_planning",
  "team_sponsor",
  "team_speaker",
  "team_design",
  "team_agency_execution",
  "team_public_relation",
  "team_finance",
];

export default async function Organizer({ params }: any) {
  const { t } = await useTranslation(params.lng, "organizer");
  return (
    <section className='flex flex-col pt-12 min-h-screen w-screen bg-white items-center text-deepGreen-100 font-SFProDisplay'>
      <div className='max-3xl:px-4 lg:px-20 w-full flex flex-col max-3xl:justify-center hero_gradient items-center'>
        <div className='max-w-[1280px] w-full overflow-hidden flex flex-col pb-20'>
          <div className='border-b border-b-deepGreen-100 flex flex-col justify-between'>
            <h1 className='font-bold text-deepGreen-100 text-4xl mt-10 max-3xl:text-3xl'>{t("title")}</h1>
            <h2 className='text-deepGreen-70 text-xl mb-2.5 mt-2 max-3xl:text-lg'>{t("subtitle")}</h2>
          </div>

          {TEAM.map((name) => (
            <div key={name} className='w-full'>
              <p className='font-bold text-2xl mt-20 mb-5'>{t(`${name}.title`)}</p>
              <div className='grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 gap-x-5 gap-y-10 w-full'>
                {Array.from({
                  length: parseInt(t(`${name}.team_count`)),
                }).map((_, idx) => (
                  <Link href={`/${params.lng}/2024/organizer/${name}/${idx + 1}`} key={idx}>
                    <div className='rounded-xl overflow-hidden'>
                      <img
                        src={`/assets/2024/images/organizer/${t(`${name}.member${idx + 1}.img`)}`}
                        alt={t(`${name}.member${idx + 1}.name`)}
                        className='h-auto w-auto object-cover aspect-[3/4] transition-all hover:scale-105 bg-brightGreen-10'
                      />
                    </div>
                    <p className='font-semibold text-deepGreen-100 text-xl mt-2.5 max-lg:text-lg'>
                      {t(`${name}.member${idx + 1}.name`)}
                    </p>
                    <p className='text-deepGreen-70 text-lg max-lg:text-md'>{t(`${name}.member${idx + 1}.nickname`)}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
