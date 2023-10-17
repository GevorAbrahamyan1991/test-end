/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        drumbg: "url('../src/assets/img/background.jpg')",
      },
    },
  },
  plugins: [],
};
