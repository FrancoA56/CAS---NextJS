/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-once": "rotate360 0.8s ease-in-out",
      },
      colors: {
        green: "#A5E6A8", // Pantone 580 CP
        teal: "#B791DD", // Pantone 3242 CP
        blue: "#78C8D2", // Pantone 636 CP
        pink: "#EE8EC3", // Pantone 2375 CP
        yellow: "#FFDF7D", // Pantone 1215 CP
        peach: "#FFC4AC", // Pantone 488 CP
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
