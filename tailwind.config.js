/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0f4ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3f689f",
          600: "#356089",
          700: "#2d5073",
          800: "#23366c",
          900: "#0b1f3a",
        },
        accent: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
      },
    },
  },
  plugins: [],
};
