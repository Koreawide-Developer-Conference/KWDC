import { Metadata } from "next";

import { openGraphImage2025 } from "@/app/shared-metadata";
import { TBD } from "@/components/2025/tbd";


export const metadata: Metadata = {
  title: "KWDC25",
  description: "Keep Weaving Discover Connection, 엮는 사이, 이어지는 우리.",
  openGraph: {
    title: "KWDC25",
    description: "Keep Weaving Discover Connection, 엮는 사이, 이어지는 우리.",
    ...openGraphImage2025,
  },
};

export default function KWDC2025({ params }: any) {
  return (
    <div className='flex flex-col w-full'>
      <TBD params={params} />
    </div>
  );
}
