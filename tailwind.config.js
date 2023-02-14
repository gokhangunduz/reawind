/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins, sans-serif"],
      },
      colors: {
        layer: {
          light: {
            50: "#ffffff",
            100: "#ebebeb",
            200: "#d6d6d6",
            300: "#c2c2c2",
            400: "#adadad",
            500: "#999999",
            600: "#858585",
            700: "#707070",
            800: "#5c5c5c",
            900: "#474747",
          },
          dark: {
            50: "#b8b8b8",
            100: "#a3a3a3",
            200: "#8f8f8f",
            300: "#7a7a7a",
            400: "#666666",
            500: "#525252",
            600: "#3d3d3d",
            700: "#292929",
            800: "#141414",
            900: "#000000",
          },
        },
      },
      // screens: {
      //   "2xl": { max: "1535px" },
      //   // => @media (max-width: 1535px) { ... }

      //   xl: { max: "1279px" },
      //   // => @media (max-width: 1279px) { ... }

      //   lg: { max: "1023px" },
      //   // => @media (max-width: 1023px) { ... }

      //   md: { max: "767px" },
      //   // => @media (max-width: 767px) { ... }

      //   sm: { max: "639px" },
      //   // => @media (max-width: 639px) { ... }
      // },
    },
  },
  plugins: [],
};
