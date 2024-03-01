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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        slide: 'slide 2s infinite',
        slideRight: 'slideRight 10s infinite alternate',
        slideLeft: 'slideLeft 10s infinite alternate',

      },
      keyframes: {
        slide: {
          '0%': {transform: 'translateX(0)'},
          '50%': {transform: 'translateX(20px)'},
          '100%': {transform: 'translateX(0)'},
        },
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(3%)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(3%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
