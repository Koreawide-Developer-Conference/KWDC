"use client";

import React, { useCallback, useState } from "react";

import { toPng } from "html-to-image";

import { LiquidButton } from "../liquidGlass";

export function TimetableDownloadButton({
  targetId = "timetable-capture",
  label = "Download Timetable",
}: {
  targetId?: string;
  label?: string;
}) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = useCallback(async () => {
    const node = document.getElementById(targetId);
    if (!node) return;

    try {
      setDownloading(true);
      const rect = node.getBoundingClientRect();
      const targetWidth = 1000; // fixed output width
      const scale = targetWidth / rect.width;
      const targetHeight = Math.round(rect.height * scale);

      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 1,
        backgroundColor: "#ffffff",
        width: targetWidth,
        height: targetHeight,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        },
      });
      const link = document.createElement("a");
      link.download = `kwdc-2025-timetable.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setDownloading(false);
    }
  }, [targetId]);

  return (
    <div className='w-full flex items-center justify-center mt-6 md:mt-8'>
      <LiquidButton onClick={handleDownload} loading={downloading} variant='primary' size='lg'>
        <span className='!text-gray-900'>{label}</span>
      </LiquidButton>
    </div>
  );
}
