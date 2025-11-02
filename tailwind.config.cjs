/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c111a',
        accent: '#5eead4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
