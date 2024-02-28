/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js", "assets/css/**/*.css"],
  theme: {
    extend: {
      colors: {
        customGray: "#F9F9F9",
        primaryColor: "#A0199A",
        secondaryColor: "#4E4E4E",
      },
    },
  },
  plugins: [],
};
