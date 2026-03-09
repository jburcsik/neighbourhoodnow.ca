import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep corporate teal — the grown-up palette with flair
        brand: {
          50:  "#f0fafa",
          100: "#ccefee",
          200: "#99dfdd",
          300: "#5fc8c5",
          400: "#2aada9",
          500: "#0d9090",
          600: "#0a7272",
          700: "#095858",
          800: "#083f3f",
          900: "#062c2c",
          950: "#031a1a",
        },
        gold: {
          300: "#f0d080",
          400: "#e8bc4a",
          500: "#c9a43c",
          600: "#a8872e",
          700: "#866a20",
        },
        slate: {
          850: "#172030",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #062c2c 0%, #095858 50%, #0a7272 100%)",
        "section-gradient":
          "linear-gradient(180deg, #f0fafa 0%, #ffffff 100%)",
        "gold-gradient":
          "linear-gradient(90deg, #c9a43c 0%, #e8bc4a 50%, #c9a43c 100%)",
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(6,44,44,0.08)",
        "card-hover": "0 8px 32px 0 rgba(6,44,44,0.14)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
