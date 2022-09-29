/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'soft-red': 'hsl(10, 79%, 65%)',
      cyan: '"hsl(186, 34%, 60%)"',
      'dark-brown': 'hsl(25, 47%, 15%)',
      'medium-brown': 'hsl(28, 10%, 53%)',
      cream: 'hsl(27, 66%, 92%)',
      'very-pale-orange': 'hsl(33, 100%, 98%)',
    },
    screens: {
      sm: '520px',
      md: '768px',
      lg: '1280px',
    },
    extend: {
      fontFamily: {
        body: "'DM Sans', sans-serif",
      },
    },
  },
  plugins: [],
}
