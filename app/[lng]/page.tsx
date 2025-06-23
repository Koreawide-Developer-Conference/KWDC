import { redirect } from 'next/navigation';

import { fallbackLng, languages } from '@/i18n/settings';
import { Metadata } from "next";
import { openGraphImage2025 } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "KWDC25",
  description: "Keep Weaving Discover Connectivity, 엮는 사이, 이어지는 우리.",
  openGraph: {
    title: "KWDC25",
    description: "Keep Weaving Discover Connectivity, 엮는 사이, 이어지는 우리.",
    ...openGraphImage2025,
  },
};


export default async function Page({ params: { lng } }: { params: { lng: string }}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  redirect(`/${lng}/2025`);
}
