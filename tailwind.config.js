/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-primary': '#1e1e1e',
        'dark-secondary': '#252526',
        'dark-accent': '#569cd6',
        'dark-text': '#d4d4d4',
        'dark-text-secondary': '#9cdcfe',
        'dark-border': '#3c3c3c',
        'light-primary': '#ffffff',
        'light-secondary': '#f3f3f3',
        'light-accent': '#0078d4',
        'light-text': '#1e1e1e',
        'light-text-secondary': '#0078d4',
        'light-border': '#e1e1e1',
      },
      fontFamily: {
        'mono': ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
} 