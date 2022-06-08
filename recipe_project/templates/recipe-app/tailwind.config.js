module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        25: "25%",
      },
      width: {
        25: "25%",
      },
      fontFamily: {
        cursive: ["Pacifico", "cursive"],
      },
      backgroundImage: {
        veggies:
          "url('https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      colors: {
        transparent: "rgba(7, 5, 5, 0.3)",
      },
    },
  },
  plugins: [],
};
