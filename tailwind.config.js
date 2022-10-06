/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
        primary: 'var(--primary: rgb)',
        ['primary/10']: 'var(--primary-10)',
        ['primary/20']: 'var(--primary-20)',
        ['primary/30']: 'var(--primary-30)',
        ['primary/40']: 'var(--primary-40)',
        ['primary/50']: 'var(--primary-50)',
        ['primary/60']: 'var(--primary-60)',
        ['primary/70']: 'var(--primary-70)',
        ['primary/80']: 'var(--primary-80)',
        ['primary/90']: 'var(--primary-90)'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded']
  }
};
