import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)"],
      irish_grover: ["var(--irish-grover)"],
    },
    extend: {
      colors: {
        main: "#508BBB",
        "main-darker": "#356790",
        background: "#F4F7FF",
        input: "#D8DEE4",
        foreground: "var(--foreground)",
        mood: {
          happy: "#6DD1C9",
          excellent: "#47B426",
          neutral: "#B7BB50",
          angry: "#BB5052",
          sad: "#5062BB",
          "not-set": "#9F9F9F",
          default: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
