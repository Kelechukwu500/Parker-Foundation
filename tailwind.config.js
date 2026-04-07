
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        90: "22.5rem", // custom height for h-90
      },
    },
  },
  plugins: [],
};
