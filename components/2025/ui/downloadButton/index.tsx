"use client";

import React from "react";


export const DownloadTimeTable = ({ lng, label }: { lng: string; label: string;  }) => {
  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={() => {
          const file = `/assets/2024/timetable/timetable_${lng}.pdf`;
          const link = document.createElement("a");
          link.href = file;
          link.target = '_blank';
          link.download = file.split("/").pop() as string;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className='btn btn-wide mt-10 bg-brightGreen-100'
      >
        {label}
      </button>
    </div>
  );
};
