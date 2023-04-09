/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ffbcd8",

          "secondary": "#ddd6fe",

          "accent": "#1e3a8a",

          "neutral": "#272730",

          "base-100": "#FFFFFF",

          "info": "#94CCF4",

          "success": "#73DEC9",

          "warning": "#D57C15",

          "error": "#E93F53",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

