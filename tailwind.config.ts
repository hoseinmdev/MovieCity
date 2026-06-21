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
        primary: "var(--color-primary)",
        primaryHover: "var(--color-primary-hover)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        surface2: "var(--color-surface2)",
        surface3: "var(--color-surface3)",
        gold: "var(--color-gold)",
      },
      screens: {
        betterhover: { raw: "(hover: hover)" },
      },
      fontFamily: {
        BlackListed: ["BlackListed"],
        VazirFont: ["VazirFont"],
        EstedadFont: ["EstedadFont"],
      },
    },
  },
  plugins: [],
};
export default config;
