/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#f7f7f7",
        paper: "#ffffff",
        primary: "#1ea69a",
        "primary-light": "#77e6dd",
        "primary-dark": "#0b8278",
        secondary: "#ea723d",
        "secondary-light": "#f9d6c7",
        "secondary-dark": "#ea5819",
      },
    },
  },
  plugins: [],
};
