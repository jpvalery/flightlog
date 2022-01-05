const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./elements/**/*.js"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      parklyCondensed: ["parklyCondensed", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        map: colors.rose,
      },
    },
  },
};
