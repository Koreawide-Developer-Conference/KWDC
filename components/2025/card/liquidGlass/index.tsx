import React from "react";
import { cn } from "@/utils";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  rounded?: string;
  enableGlow?: boolean;
  enableHighlight?: boolean;
  enableAmbient?: boolean;
  enableFloat?: boolean;
}

export const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  children,
  className,
  rounded = "rounded-[60px]",
  enableGlow = true,
  enableHighlight = true,
  enableAmbient = true,
  enableFloat = true,
}) => {
  const cardClasses = cn(
    "liquid-glass-card relative",
    rounded,
    !enableFloat && "!animate-none",
    className
  );

  return (
    <div className={cardClasses}>
      <div className="flex flex-col items-center justify-center relative z-10">
        {children}
      </div>
      
      {/* Liquid Glass 반사 효과 */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_0_rgba(65,80,74,0.15)]",
        rounded,
        enableGlow && "liquid-glass-glow"
      )} />
      
      {/* 내부 그라데이션 하이라이트 */}
      {enableHighlight && (
        <div className={cn(
          "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/20 to-transparent opacity-40 liquid-glass-highlight",
          rounded === "rounded-[60px]" ? "rounded-t-[60px]" : "rounded-t-lg"
        )} />
      )}
      
      {/* 하단 반사 효과 */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent opacity-60",
        rounded === "rounded-[60px]" ? "rounded-b-[60px]" : "rounded-b-lg"
      )} />
      
      {/* 동적 글로우 효과 */}
      {enableAmbient && (
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 opacity-60 liquid-glass-ambient",
          rounded
        )} />
      )}
    </div>
  );
}; 