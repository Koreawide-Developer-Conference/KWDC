"use client";

import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: string;
    name: string;
    affiliation?: string;
    image?: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className='flex gap-10 flex-wrap justify-center items-center'>
      {items.map((item, idx) => (
        <div
          className='-mr-4 relative group'
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode='popLayout'>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className='absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2'
              >
                <div className='absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px ' />
                <div className='absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px ' />
                <div className='font-bold text-white relative z-30 text-base'>{item.name}</div>
                {/*{item.affiliation && <div className='text-white text-xs'>{item.affiliation}</div>}*/}
              </motion.div>
            )}
          </AnimatePresence>
          {item.image ? (
            <Image
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={`/assets/2024/images/individual_sponsor/${item.image}`}
              alt={item.name}
              className='object-cover !m-0 !p-0 object-top rounded-full w-[100px] h-[100px] border-2 group-hover:scale-105 group-hover:z-30 border-deepGreen-40 relative transition duration-500'
            />
          ) : (
            <div className='avatar placeholder'>
              <div className='bg-neutral text-neutral-content text-center whitespace-pre-wrap w-[100px] h-[100px] rounded-full border-2 border-deepGreen-40'>
                <span>{item.name}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
