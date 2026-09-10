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
        darkCard: "rgba(255, 255, 255, 0.04)",
        neonBlue: "#45f3ff",
        neonPurple: "#b026ff",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 14s ease-in-out infinite alternate',
        'float-reverse': 'floatReverse 16s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 9s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(69, 243, 255, 0.4), 0 0 30px rgba(69, 243, 255, 0.15)' },
          '100%': { boxShadow: '0 0 20px rgba(176, 38, 255, 0.45), 0 0 35px rgba(176, 38, 255, 0.2)' },
        },
        floatSlow: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(35px, -25px) scale(1.06)' },
          '100%': { transform: 'translate(-15px, 20px) scale(0.96)' },
        },
        floatReverse: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-30px, 30px) scale(1.04)' },
          '100%': { transform: 'translate(25px, -15px) scale(0.94)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.12' },
          '50%': { opacity: '0.24' },
        }
      }
    },
  },
  plugins: [],
}
