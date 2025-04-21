"use client";

import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, name }) => {
  const [imgError, setImgError] = React.useState(false);

  React.useEffect(() => {
    fetch(src)
      .then((res) => {
        if (res.status != 200) {
          setImgError(true)
        } else {
          setImgError(false)
        }
      })
  }, [src]);

  return imgError ? (
    <div className='avatar placeholder'>
      <div className='bg-brightGreen-50 text-neutral-content w-[60px] h-[60px] rounded-full'>
        <span className='text-xl'>{name.slice(0, 1).toUpperCase()}</span>
      </div>
    </div>
  ) : (
    <Image
      width={60}
      height={60}
      src={src}
      alt={alt}
      className='w-[60px] h-[60px] object-cover rounded-full'
    />
  );
};
