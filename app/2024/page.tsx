"use client";

import React from "react";

import Typed from "typed.js";

const options = {};

export default function KWDC2024() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["It’s a Leap Year"],
      typeSpeed: 50,
      cursorChar: ".",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen' {...options}>
      <div>
        <div className='font-semibold text-5xl leading-10 mb-2 text-center'>
          <span ref={el} className='' />
        </div>
        <div className='font-semibold text-2xl text-center'>
          <span>다음 세상으로의 도약.</span>
        </div>
        <div className='absolute bottom-20 text-center left-0 right-0 mx-auto text-xl'>
          <p className='mb-3'>2024년 10월 25일 금요일</p>
          <p>
            대한민국 서울, <strong>세종대학교 컨벤션홀</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
