/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Activa el soporte para dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#222521', // Color de fondo para modo oscuro
        'light-bg': '#ffffff', // Color de fondo para modo claro
      },
      animation: {
        fade: 'fade 0.5s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
