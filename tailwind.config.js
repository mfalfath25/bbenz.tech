const heropatterns = require("tailwindcss-hero-patterns/src/patterns")

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
      },
      heroPatterns: {
        fourpointstars: heropatterns.fourpointstars,
        topography: heropatterns.topography,
        texture: heropatterns.texture,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-heropattern': 'heropattern(topography, var(--tw-gradient-stops))',
        'gradient-glow': 'linear-gradient(45deg, rgba(255, 255, 255, 0.4), transparent 40%, transparent 60%, rgba(255, 255, 255, 0.4))'
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-gradients'),
    require('tailwindcss-hero-patterns'),
  ],
  mode: process.env.NODE_ENV ? 'jit' : undefined,
}
