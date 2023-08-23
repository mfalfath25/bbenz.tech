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
