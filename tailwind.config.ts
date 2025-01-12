import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      zIndex: { '9999': '9999'}, 
      rotate: {
        '320': '320deg',
        '300': '300deg',
        '30': '30deg'
      },
      spacing: {
        '770': '770px',
        '550': '550px',
        '790': '790px',
        '60': '60px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #52403A, #4D3B36, #473632, #41312D, #3D2C29, #372825, #301F20, #2D1F1F, #291B1C, #26191B, #251819)'
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
} satisfies Config;
