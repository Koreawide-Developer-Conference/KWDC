"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Speaker } from "@/constants";
import Icon from "@/public/assets/2024/icons/speaker-icon.svg";
import { cn } from "@/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Speaker[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className='w-[280px] max-w-full relative rounded-2xl flex-shrink-0 py-6 md:w-[280px] flex flex-col'
            style={{
              background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <div
              aria-hidden='true'
              className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
            ></div>

            <Image
              width={280}
              height={210}
              src={item.img}
              alt={item.name}
              className='rounded-2xl w-[280px] h-[210px] object-cover mb-3'
            />
            <span className='relative z-20 text-deepGreen-100 text-xl font-bold'>{item.name}</span>
            <span className='text-lg text-deepGreen-100 font-normal'>{item.affiliation}</span>
            <div className='w-[21px] h-[14px] my-3'>
              <Icon />
            </div>
            <div className='relative z-20 flex flex-row items-center'>
              <span className='text-xl text-[#223B3A] font-normal'>{item.quote}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
