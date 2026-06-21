import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0E12",
          soft: "#11161C",
          line: "#1D242C",
        },
        paper: {
          DEFAULT: "#F2F4F3",
          soft: "#E7EBE9",
          line: "#D6DBD8",
        },
        amber: {
          DEFAULT: "#FFB72B",
          dim: "#C98E1C",
        },
        teal: {
          DEFAULT: "#00C2A8",
          dim: "#03907C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, #1D242C 1px, transparent 1px), linear-gradient(to bottom, #1D242C 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, #D6DBD8 1px, transparent 1px), linear-gradient(to bottom, #D6DBD8 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: (name: string, definition: string) => void }) {
      addVariant("light", ".light &");
    },
  ],
};
export default config;
