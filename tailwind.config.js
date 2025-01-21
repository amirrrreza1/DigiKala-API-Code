/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#14C5DC",
      },
      backgroundImage: {
        seperMarketPattern: "url('./public/Images/SVG/superMarketPattern.svg')",
      },
    },
  },
  plugins: [],
};
