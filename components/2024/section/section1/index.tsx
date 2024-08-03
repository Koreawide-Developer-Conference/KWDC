import Image from "next/image";
import React from "react";

import Typed from "typed.js";

export const Section1: React.FC = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["It’s a Leap Year"],
      typeSpeed: 100,
      cursorChar: ".",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className='flex flex-col items-center justify-center w-screen h-screen relative px-4'>
      <Image
        src={"/assets/2024/images/section1_bg.svg"}
        alt={"background image"}
        fill
        priority
        className='absolute object-cover z-0'
      />
      <div className='z-10'>
        <div className='font-semibold text-6xl leading-10 mb-5 text-center max-lg:text-5xl'>
          <span ref={el} className='' />
        </div>
        <div className='font-semibold text-3xl text-center max-lg:text-xl'>
          <span>다음 세상으로의 도약.</span>
        </div>
        <div className='absolute bottom-20 text-center left-0 right-0 mx-auto text-xl max-lg:text-base'>
          <p className='mb-1'>2024.10.25</p>
          <p>세종대학교 컨벤션홀</p>
          <p>Sejong University Convention Hall</p>
        </div>
      </div>
    </section>
  );
};
