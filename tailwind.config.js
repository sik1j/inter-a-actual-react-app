module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        u: {
          green: {
            primary: "#61892F",
            accent: "#90D136",
          },
          dark: "#3A3B3D",
          off: {
            white: "rgb(240, 240, 240)",
            black: "rgb(29, 29, 29)",
          },
        },
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
