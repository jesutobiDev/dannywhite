/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "20px",
        "5xl": "24px",
        "6xl": "28px",
        "7xl": "32px",
        "8xl": "36px",
        "9xl": "40px",
        "10xl": "44px",
        "11xl": "48px",
      },
      boxShadow : {
        "custom" : "0.25px 0.25px 5px 0.25px rgba(2, 2, 2, 0.2)"
      },
      colors : {
        "active" : "#2dc653",
        "hover" : "",
        "idle" : "",
        "primary" : "",
        "cta" : "#10451d"
      }
    },
  },
  plugins: [],
}