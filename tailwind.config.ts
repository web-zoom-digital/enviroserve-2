import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        enviro: {
          green: "#176B3A",
          accent: "#35B85A",
          light: "#EAF8EF",
          navy: "#102A43",
          bg: "#F6F8F7",
          gray: "#52616B",
          dark: "#0C1F31",
          hover: "#12542D",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Outfit", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(16, 42, 67, 0.08)",
        "card-hover": "0 20px 40px -10px rgba(23, 107, 58, 0.15)",
        glass: "0 8px 32px 0 rgba(16, 42, 67, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
