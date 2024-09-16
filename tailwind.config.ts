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
        primary: "#f43f5e",
        gold:"#EAB308",
        background: "#18181B",
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
