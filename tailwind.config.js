/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-light': '#5834E8',
        'accent-dark': '#A7CB17',
        'base-light': '#FFFFFF',
        'base-dark': '#121212',
      },
      fontFamily: {
        'respira': ['Respira', 'sans-serif'],
      },
      backgroundImage: {
        'graphy': "url('/assets/graphy.png')"
      },
      screens: {
        'xs': '480px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-fast': 'pulse 1s ease-in-out infinite',
      },
      boxShadow: {
        'glow-sm': '0px 0px 24px 0px #59B7D6',
        'glow-accent-light': '0px 0px 24px 0px #5834E8',
        'glow-accent-dark': '0px 0px 24px 0px #A7CB17'
      },
      dropShadow: {
        'glow-accent-light': '0 1.5px 1.5px rgba(88,52,232,1)',
        'glow-accent-dark': '0 1.5px 1.5px rgba(167,203,23,1)',
        'glow-dark': '0 1.5px 1.5px #121212',
        'glow-light': '0 1.5px 1.5px #FFFFFF'
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-gradients'),
  ],
  mode: process.env.NODE_ENV ? 'jit' : undefined,
}
