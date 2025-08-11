import React from "react";

import { useTranslation } from "@/i18n";

import { LiquidGlass } from "@/components/2025";
import { TimetableDownloadButton } from "@/components/2025/section/timetableDownloadButton";

type TimetableEvent = {
  start: string;
  durationMin: number;
  title: string;
  speaker?: string;
  speakerKeys?: string[];
  category?: string;
  description?: string;
  kind?: "talk" | "apple" | "break" | "prep" | "network" | "closing" | "other";
};

const EVENTS: TimetableEvent[] = [
  { start: "09:20", durationMin: 40, title: "Check-in", kind: "other" },
  { start: "10:00", durationMin: 20, title: "Opening", kind: "other" },
  {
    start: "10:20",
    durationMin: 10,
    title: "Session 10분",
    speakerKeys: ["2025.speaker1"],
    kind: "talk",
  },
  { start: "10:30", durationMin: 20, title: "Session 20분", speakerKeys: ["2025.speaker13"], kind: "talk" },
  { start: "10:50", durationMin: 10, title: "Break Time", kind: "break" },
  { start: "11:00", durationMin: 20, title: "Session 20분", speakerKeys: ["2025.speaker2"], kind: "talk" },
  { start: "11:20", durationMin: 20, title: "Session 20분", speakerKeys: ["2025.speaker8"], kind: "talk" },
  { start: "11:40", durationMin: 20, title: "Session 20분", speakerKeys: ["2025.speaker4"], kind: "talk" },
  { start: "12:00", durationMin: 60, title: "Lunch", description: "(1시간)", kind: "break" },
  { start: "13:10", durationMin: 20, title: "Session 20분", speakerKeys: ["2025.speaker6"], kind: "talk" },
  { start: "13:30", durationMin: 20, title: "Session 20분", speakerKeys: ["2025.speaker3"], kind: "talk" },
  { start: "13:50", durationMin: 10, title: "Break Time", kind: "break" },
  { start: "14:00", durationMin: 20, title: "TBA", speakerKeys: ["2025.speaker15"], kind: "talk" },
  { start: "14:20", durationMin: 20, title: "Session 20분", speakerKeys: ["2025.speaker5"], kind: "talk" },
  { start: "14:40", durationMin: 20, title: "Session 20분", speakerKeys: ["2025.speaker12"], kind: "talk" },
  { start: "15:00", durationMin: 50, title: "Networking", kind: "network" },
  { start: "16:00", durationMin: 20, title: "Apple 20분", speakerKeys: ["2025.speaker11"], kind: "apple" },
  { start: "16:20", durationMin: 20, title: "Session 20분", speakerKeys: ["2025.speaker7"], kind: "talk" },
  { start: "16:40", durationMin: 10, title: "Break Time", kind: "break" },
  { start: "16:50", durationMin: 20, title: "Session 20분", speakerKeys: ["2025.speaker14"], kind: "talk" },
  {
    start: "17:10",
    durationMin: 40,
    title: "Apple 40분",
    speakerKeys: ["2025.speaker9", "2025.speaker10"],
    kind: "apple",
  },
  { start: "17:50", durationMin: 10, title: "Closing", kind: "closing" },
];

const formatDuration = (min: number) => {
  if (min % 60 === 0) return `${min / 60}h`;
  if (min > 60) return `${Math.floor(min / 60)}h ${min % 60}m`;
  return `${min}m`;
};

const formatTime = (hhmm: string) => hhmm;

export default async function TimetablePage({ params }: any) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, "speaker");
  return (
    <section className='w-full bg-gradient-to-b from-brightGreen-90 to-white py-10 md:py-16'>
      <div className='mx-auto w-full max-w-6xl px-4 md:px-6 text-gray-900 py-10'>
        <header className='mb-8 md:mb-12'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl md:text-4xl font-bold tracking-tight'>KWDC25 Timetable</h1>
          </div>
        </header>

        <div className='relative px-4 md:px-8 xl:px-16 text-gray-900' id='timetable-capture'>
          {/* center guideline for large screens */}
          <div className='hidden md:block absolute left-28 top-0 bottom-0 w-px bg-gray-200/70' />

          <ul className='space-y-4 md:space-y-6'>
            {EVENTS.map((e) => {
              const speakerNames = e.speakerKeys
                ? e.speakerKeys
                    .map((k) => {
                      const name = t(`${k}.name`);
                      const affiliation = t(`${k}.affiliation`);
                      const affText =
                        typeof affiliation === "string" && affiliation.trim().length > 0 ? ` @ ${affiliation}` : "";
                      return `${name}${affText}`;
                    })
                    .join(" / ")
                : e.speaker;
              const talkTitle = e.speakerKeys && e.speakerKeys.length > 0 ? t(`${e.speakerKeys[0]}.title`) : undefined;
              const isCheckInEvent = typeof e.title === "string" && e.title.toLowerCase().includes("check");
              const isLunchEvent =
                typeof e.title === "string" &&
                (e.title.toLowerCase().includes("launch") || e.title.toLowerCase().includes("lunch"));
              const talkIntro =
                e.speakerKeys && e.speakerKeys.length > 0
                  ? t(`${e.speakerKeys[0]}.introduction`)
                  : isCheckInEvent
                    ? t("2025.check-in")
                    : isLunchEvent
                      ? t("2025.lunch")
                      : undefined;
              const categories = e.speakerKeys
                ? Array.from(
                    new Set(
                      e.speakerKeys
                        .map((k) => t(`${k}.category`))
                        .filter((v) => typeof v === "string" && v.trim().length > 0),
                    ),
                  )
                : e.category
                  ? [e.category]
                  : [];
              return (
                <li
                  key={`${e.start}-${e.title}`}
                  className='grid grid-cols-[72px,1fr] md:grid-cols-[112px,1fr] gap-3 md:gap-6 items-stretch'
                >
                  {/* time */}
                  <div className='flex flex-col items-start md:items-end pt-1'>
                    <div className='text-xs md:text-sm font-semibold text-gray-700 tabular-nums'>
                      {formatTime(e.start)}
                    </div>
                    <div className='text-[10px] md:text-xs text-gray-500'>{formatDuration(e.durationMin)}</div>
                  </div>

                  {/* card */}
                  <LiquidGlass
                    variant='card'
                    intensity='subtle'
                    className='cta_2025_gradient bg-white/40 border-white/30 animate-none'
                    contentClassName=''
                    rippleEffect={false}
                    flowOnHover={false}
                    stretchOnDrag={false}
                    style={{ animation: "none", transition: "none" }}
                  >
                    <div className='card w-full bg-transparent shadow-none'>
                      <div className='card-body p-4 md:p-6'>
                        <div className='flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600'>
                          {categories.slice(0, 2).map((c) => (
                            <span key={c} className='opacity-80'>
                              {c}
                            </span>
                          ))}
                          <span className='opacity-60'>{formatDuration(e.durationMin)}</span>
                        </div>
                        <h3 className='mt-2 md:mt-3 text-base md:text-xl font-semibold leading-snug'>
                          {talkTitle ?? e.title}
                        </h3>
                        {speakerNames && <p className='mt-1 text-sm md:text-base text-gray-700'>{speakerNames}</p>}
                        {talkIntro && typeof talkIntro === "string" && talkIntro.trim().length > 0 && (
                          <p className='mt-2 text-xs md:text-sm text-gray-600 whitespace-pre-line leading-relaxed'>
                            {talkIntro}
                          </p>
                        )}
                      </div>
                    </div>
                  </LiquidGlass>
                </li>
              );
            })}
          </ul>
        </div>
        <TimetableDownloadButton targetId='timetable-capture' />
      </div>
    </section>
  );
}
