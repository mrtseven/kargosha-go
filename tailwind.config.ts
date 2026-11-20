import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#080D1B",
        surface: "#111B2E",
        ink: "#F5F8FF",
        muted: "#A8B4CC",
        accent: "#39E6C0",
        accent2: "#648BFF",
        warn: "#FBBF24",
      },
      fontFamily: {
        sans: ["var(--font-peyda)", "Peyda", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 12px 40px -10px rgba(57, 230, 192, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
