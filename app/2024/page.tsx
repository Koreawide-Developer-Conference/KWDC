"use client";

import Image from "next/image";
import React from "react";

import { prefix } from "@/constants";
import ReactFullpage from "@fullpage/react-fullpage";
import Typed from "typed.js";

export default function KWDC2024() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["It’s a Leap Year.", "다음 세상으로의 도약."],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <ReactFullpage.Wrapper>
      <main className='w-screen min-h-screen relative flex flex-col items-center'>
        <div className='section flex flex-col min-h-screen max-h-screen max-w-[1440px] w-full justify-center relative max-3xl:px-20'>
          <div className='font-semibold text-5xl leading-10 mb-6'>KWDC 2024</div>
          <div>
            <span ref={el} />
          </div>
        </div>
      </main>
    </ReactFullpage.Wrapper>
  );
}
