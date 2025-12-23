/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000', // True Black (OLED)
        surface: '#0f0f0f',    // Very dark grey for cards
        surfaceHover: '#1a1a1a',
        primary: '#ffffff',
        secondary: '#aaaaaa',
        accent: '#3b82f6', // Minimal blue
      },
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
