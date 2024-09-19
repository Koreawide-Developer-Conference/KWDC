import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        greenBlack: {
          100: "#060909",
          90: "#1a1d1d",
          80: "#2e3131",
          70: "#434545",
          60: "#575959",
          50: "#6b6d6d",
          40: "#808181",
          30: "#949595",
          20: "#a8a9a9",
          10: "#bcbdbd",
          5: "#d0d1d1",
        },
        gray: {
          100: "#161617",
          90: "#2d2d2e",
          80: "#444445",
          70: "#5b5b5c",
          60: "#727273",
          50: "#898989",
          40: "#a0a0a1",
          30: "#b7b7b8",
          20: "#cececf",
          10: "#e5e5e6",
          5: "#f2f2f2",
        },
        deepGreen: {
          100: "#22383A",
          90: "#384c4e",
          80: "#4e6062",
          70: "#647476",
          60: "#7a888a",
          50: "#909c9e",
          40: "#a6b0b2",
          30: "#bcc4c6",
          20: "#d2d8da",
          10: "#e8ecee",
          5: "#f3f6f6",
        },
        brightGreen: {
          100: "#E8EEF0",
          90: "#eaf0f2",
          80: "#ecf1f3",
          70: "#eef3f4",
          60: "#f0f4f6",
          50: "#f2f6f7",
          40: "#f4f7f8",
          30: "#f6f9fa",
          20: "#f8fafb",
          10: "#fafcfc",
          5: "#fcfdfd",
        },
      },
      fontFamily: {
        SFProDisplay: ["SF Pro Display", "sans-serif"],
        AppleSDGothicNeo: ["AppleSDGothicNeo", "sans-serif"],
        Pretendard: ["Pretendard", "sans-serif"],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
};

export default config;
