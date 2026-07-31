import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FAF6EF",
          50: "#FFFFFF",
          100: "#F5EFE3",
          200: "#EDE3D0",
        },
        ink: {
          DEFAULT: "#1C1B19",
          700: "#3A362F",
          500: "#6E675C",
          300: "#A79F8E",
          200: "#D8D1C2",
        },
        rust: {
          600: "#A63D14",
          500: "#B8481E",
          400: "#D97B4F",
          100: "#F4E1D3",
        },
        moss: {
          600: "#2F6F52",
          500: "#3B8563",
          100: "#DCEBE1",
        },
        amber: {
          500: "#B8860B",
          400: "#C99A2E",
          100: "#F3E7C9",
        },
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
