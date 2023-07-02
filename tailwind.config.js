/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        mono:"'Montserrat', serif",
        ubu:"'Ubuntu',serif",
        dance:"'Dancing Script',serif",
        poppins:"'Poppins', serif"
      },
    },
  },
  plugins: [],
});
