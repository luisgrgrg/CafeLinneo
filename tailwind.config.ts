import type { Config } from "tailwindcss";

export default {
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
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #52403A, #4D3B36, #473632, #41312D, #3D2C29, #372825, #301F20, #2D1F1F, #291B1C, #26191B, #251819)'
      },
    },
  },
  plugins: [],
} satisfies Config;
