/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary":"hsl(150, 100%, 66%)",
        "dark-900":"hsl(218, 23%, 16%)",
        "dark-800":"hsl(217, 19%, 24%)",
        "dark-700":"hsl(217, 19%, 38%)",
        "light":"hsl(193, 38%, 86%)",
      },
      screens:{
        'xs': "375px",
      }
    },
  },
  plugins: [],
}

