/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ,
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      mallard: {
        50: "#f4f9ec",
        100: "#e6f1d6",
        200: "#d0e4b2",
        300: "#b1d284",
        400: "#93be5d",
        500: "#75a33f",
        600: "#5a812f",
        700: "#476328",
        800: "#3a5024",
        900: "#2b3a1d",
        950: "#19250e",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
