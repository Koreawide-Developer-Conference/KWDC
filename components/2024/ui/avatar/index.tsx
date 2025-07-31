"use client";

import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  name: string;
  size?: number;
  mobileSize?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, name, size = 60, mobileSize = 40 }) => {
  const [imgError, setImgError] = React.useState(false);

  React.useEffect(() => {
    fetch(src).then((res) => {
      if (res.status != 200) {
        setImgError(true);
      } else {
        setImgError(false);
      }
    });
  }, [src]);

  const containerStyle = {
    "--size-desktop": `${size}px`,
    "--size-mobile": `${mobileSize}px`,
  } as React.CSSProperties;

  return imgError ? (
    <div className='avatar placeholder'>
      <div
        className='bg-brightGreen-50 text-neutral-content rounded-full flex items-center justify-center w-[var(--size-mobile)] h-[var(--size-mobile)] lg:w-[var(--size-desktop)] lg:h-[var(--size-desktop)]'
        style={containerStyle}
      >
        <span className='text-xl'>{name.slice(0, 1).toUpperCase()}</span>
      </div>
    </div>
  ) : (
    <Image
      width={size}
      height={size}
      src={src}
      alt={alt}
      className='object-cover rounded-full w-[var(--size-mobile)] h-[var(--size-mobile)] lg:w-[var(--size-desktop)] lg:h-[var(--size-desktop)]'
      style={containerStyle}
    />
  );
};
