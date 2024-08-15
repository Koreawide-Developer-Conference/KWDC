"use client";

import React from "react";

import Typed from "typed.js";

interface TypoAnimationProps {
  text: string;
}

export const TypoAnimation: React.FC<TypoAnimationProps> = ({ text }) => {
  const el = React.useRef(null);

  React.useEffect(() => {
    if (!text) return;
    const typed = new Typed(el.current, {
      strings: [text],
      typeSpeed: 100,
      cursorChar: ".",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, [text]);

  return (
    <div className='font-semibold text-6xl leading-10 mb-5 text-center max-lg:text-5xl'>
      <span ref={el} className='' />
    </div>
  );
};
