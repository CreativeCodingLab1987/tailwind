/** @type {import('tailwindcss').Config} */

import customGradients from './assets/js/customGradients.js'
module.exports = {
  content: ["./*.html", "./*.js", "assets/css/**/*.css"],
  theme: {
    extend: {
      colors: {
        textColor: "#A1B8C2",
        btnColor: "#47AC51",
        hoverColor: "#FFCD29",
      },
      borderRadius: {
        "4xl": "8rem",
      },
     screens: {
      customBreakpoints : "1050px"
     }
    },
  },
  plugins: [customGradients],
};
