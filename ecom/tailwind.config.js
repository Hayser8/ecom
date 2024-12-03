/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0a1128", // Color predominante (Our Brands)
        cream: "#f3efe8",
        beige: "#bba591",
        softYellow: "#faecc3",
        forestGreen: "#336659",
      },
    },
  },
  plugins: [],
};
