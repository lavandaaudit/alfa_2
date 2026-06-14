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
        background: "var(--background)",
        foreground: "var(--foreground)",
        alfa: {
          gold: "#FFD700",
          yellow: "#FFF200",
          black: "#000000",
          white: "#FFFFFF",
          gray: {
            50: "#F9F9F9",
            100: "#F5F5F7",
            200: "#E5E5E7",
            800: "#1D1D1F",
            900: "#000000",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        display: ["var(--font-geist-mono)", "Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
