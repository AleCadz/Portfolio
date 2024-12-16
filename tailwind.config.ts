import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dark-radial": "rgba(4, 19, 22)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "rgba(220, 224, 232)",
        global: {},
      },
      textColor: {
        GrayLetters: "rgb(186, 187, 188)",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
export default config;
