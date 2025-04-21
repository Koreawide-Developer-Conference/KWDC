import { Metadata } from "next";

import { openGraphImage2025 } from "@/app/shared-metadata";
import { TBD } from "@/components/2025/tbd";


export const metadata: Metadata = {
  title: "KWDC25",
  description: "It's a leap year, 다음 세상으로의 도약",
  openGraph: {
    title: "KWDC25",
    description: "It's a leap year, 다음 세상으로의 도약",
    ...openGraphImage2025,
  },
};

export default function KWDC2025({ params }: any) {
  return (
    <div className='flex flex-col w-full'>
      <TBD params={params}/>
    </div>
  );
}
