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
        primary: "#0c7c69",
        secondary: "#FFA000",
        main: "#494949",
        black: "#151721",
        body: "#e2f1e7",
        green: {
          dark: "#08594a",
          DEFAULT: "#e2f1e7",
          light: "#E3FBF5",
        },
        gray: {
          900: "#8D929C",
          800: "#CACED8",
          700: "#D4D4D4",
          600: "#E6E6E6",
          500: "#E8EAEE",
          400: "#F9F9F9",
        },
        red: {
          DEFAULT: "#E34A30",
          light: "#FCEBE8",
        },
      },
      boxShadow: {
        s: "1px 1px 6px #CACED8",
      },
      fontFamily: {
        regular: ["Karla-Regular", "Arial"],
        regularBold: ["Karla-Bold", "Arial"],
      },
      borderRadius: {
        "10": "10px",
        "20": "20px",
      },
      fontSize: {
        "2xs": "10px",
      },
    },
  },
  plugins: [],
};
export default config;
