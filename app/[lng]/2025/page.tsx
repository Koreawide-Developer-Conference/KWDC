import { openGraphImage2025 } from "@/app/shared-metadata";
import { HeroSection, OverviewSection } from "@/components/2025/section";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "KWDC25",
  description: "Keep Weaving Discover Connectivity, 엮는 사이, 이어지는 우리.",
  openGraph: {
    title: "KWDC25",
    description: "Keep Weaving Discover Connectivity, 엮는 사이, 이어지는 우리.",
    ...openGraphImage2025,
  },
};

export default async function KWDC2025({ params }: any) {
  const awaitedParams = await params;
  return (
    <div className='flex flex-col w-full min-h-screen items-center justify-center relative overflow-hidden'>

      {/* <div className="absolute inset-0 bg-black/10" /> */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <HeroSection params={awaitedParams} />
      <OverviewSection params={awaitedParams} />
      {/* <SpeakerSection params={awaitedParams} /> */}
      {/* <SponsorSection params={awaitedParams} /> */}
    </div>
  );
}
