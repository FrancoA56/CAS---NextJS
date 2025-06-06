/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#C7D997", // Pantone 580 CP
        teal: "#8ECAC0", // Pantone 3242 CP
        blue: "#93D1E3", // Pantone 636 CP
        pink: "#D47FB1", // Pantone 2375 CP
        yellow: "#F3D56A", // Pantone 1215 CP
        peach: "#E8B7A3", // Pantone 488 CP
        gray: "#888A8B", // Pantone Cool Gray 8 CP
      },
      fontFamily: {
        gotham: ["Gotham"],
      },
      backgroundImage: {
        trabajando1: "url('media/trabajando1.jpeg)",
        trabajando2: "url('media/trabajando2.jpeg)",
        trabajando3: "url('media/trabajando3.jpeg)",
      },
    },
  },
  plugins: [],
};
