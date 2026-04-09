/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0B0C10",
        darkCard: "rgba(255, 255, 255, 0.05)",
        neonBlue: "#45f3ff",
        neonPurple: "#b026ff",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px #45f3ff, 0 0 20px #45f3ff' },
          '100%': { boxShadow: '0 0 20px #b026ff, 0 0 30px #b026ff' },
        }
      }
    },
  },
  plugins: [],
}
