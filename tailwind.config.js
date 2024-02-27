/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-rectan": "url('/src/pic/Rectangle44.png')",
      },
    },
    screens: {
      "sm": "640px",
      "12p": "391px",
      "s20" : "413px"
    },
  },
  plugins: [],
};
