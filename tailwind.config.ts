/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter, sans-serif"],
        irish_grover: ["Irish Grover, serif"],
      },
      colors: {
        main: "#3A8D9C",
        "main-darker": "#307986",
        "main-active": "#245862",
        background: "#F4F7FF",
        "text-light": "#F4F7FF",
        input: "#D8DEE4",
        foreground: "var(--foreground)",
        mood: {
          happy: "#A2D74E",
          calm: "#FFFACD",
          neutral: "#9E9E9E",
          sad: "#5F87B2",
          stressed: "#E98742",
          angry: "#D84A4A",
          default: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
