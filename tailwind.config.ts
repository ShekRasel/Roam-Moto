import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#141414",
        surface2: "#1A1A1A",
        surface3: "#222222",
        text: "#FFFFFF",
        muted: "#B0B0B0",
        accent: "#E8682C",
        accent2: "#C0A060",
        highlight: "#FF6B00",
        metallic: "#8A8A8A",
        redAccent: "#CC0000",
        success: "#00C853",
      },
      boxShadow: {
        glow: "0 0 40px rgba(232, 104, 44, 0.15)",
        premium: "0 20px 60px rgba(0,0,0,0.8)",
      },
      backdropBlur: {
        xs: "4px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
        accent: ["Syncopate", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
