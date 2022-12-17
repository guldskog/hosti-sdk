module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,json}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff00a0",
        secondary: "#9600ff",
        "dark-primary": "#171a21",
        "dark-secondary": "#222632",
      },
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1024px",
      },
    },
  },
  plugins: [],
};
