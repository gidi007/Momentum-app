module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          900: '#4c1d95',
        },
        'indigo': {
          500: '#6366f1',
          600: '#4f46e5',
          900: '#312e81',
        },
        'pink': {
          500: '#ec4899',
          600: '#db2777',
        },
      },
    },
  },
  plugins: [],
}