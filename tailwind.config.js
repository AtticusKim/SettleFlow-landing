/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'dashboard': '1600px'
      },
      colors: {
        'brand-primary': {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        },
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          400: '#a3a3a3',
          600: '#404040',
          800: '#262626',
          900: '#0a0a0a'
        },
        'semantic-success': {
          50: '#f0fdf4',
          500: '#22c55e'
        },
        'semantic-info': {
          500: '#3b82f6'
        }
      },
      borderRadius: {
        'button': '0.375rem',
        'card': '0.5rem'
      },
      fontSize: {
        'metric': '1.125rem'
      },
      fontWeight: {
        '700': '700'
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
}