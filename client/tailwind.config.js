/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',  // This ensures Tailwind scans all JS/TS/React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}