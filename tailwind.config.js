/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#00B5E5",
          dark: "#003459",
          darkLight: "#242B33"
        },
      },
      maxWidth: {
        "8xl" : "90rem",
        "9xl" : "100rem",
        "10xl" : "110rem"
      }
    },
  },
  plugins: [],
};
