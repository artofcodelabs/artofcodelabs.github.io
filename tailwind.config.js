/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html", "./_includes/**/*.html", "./_src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
