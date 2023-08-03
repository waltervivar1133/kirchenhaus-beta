/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#00B5E5",
          dark: "#003459",
        },
      },
    },
  },
  plugins: [],
};
