/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(1, 126, 183)",
      },
      backgroundImage: {
        Bg1: "url('/public/img/bg-1.jpg')",
      },
    },
  },
  plugins: [],
};
