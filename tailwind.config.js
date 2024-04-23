/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{html,js, jsx, tsx}"],
  theme: {
    extend: {
      gradientColorStops: (synth) => ({
        primary: "#FF8C00",
        secondary: "#FFA500",
      }),
    },
  },
  plugins: [],
};
