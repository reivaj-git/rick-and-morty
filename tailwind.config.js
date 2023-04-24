/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenBold: "#8EFF8B",
        secondary: "rgba(var(--color-secondary))",
      },
    },
  },
  plugins: [],
};
