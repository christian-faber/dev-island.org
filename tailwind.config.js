/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { sans: ["soleil", "sans-serif"] },
    extend: {
      "1/3": "33.33333%",
      "2/3": "66.6666%",
      colors: {
        seaside: "#005198",
        og: "#3fc4e0",
        misty: "#6c8ac6",
        coolgray: "#e4e5e6",
      },
    },
  },
  plugins: [],
};
