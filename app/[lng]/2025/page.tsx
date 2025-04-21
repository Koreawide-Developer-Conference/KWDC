import { Metadata } from "next";

import { openGraphImage2024 } from "@/app/shared-metadata";


export const metadata: Metadata = {
  title: "KWDC25",
  description: "It's a leap year, 다음 세상으로의 도약",
  openGraph: {
    title: "KWDC25",
    description: "It's a leap year, 다음 세상으로의 도약",
    ...openGraphImage2024,
  },
};

export default function KWDC2025({ params }: any) {
  return (
    <div className='flex flex-col w-full items-center'>
    </div>
  );
}
