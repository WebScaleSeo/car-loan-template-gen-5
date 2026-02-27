/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': '320px',
      'small': '640px',
      'mid': '768px',
      'large': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: { DEFAULT: 'var(--primary-color)', light: 'var(--primary-color-light, var(--primary-color))' },
        secondary: { DEFAULT: 'var(--secondary-color)' },
        accent: { DEFAULT: 'var(--accent-color)' },
        surface: 'var(--bg-surface)',
        background: 'var(--bg-page)',
        border: 'var(--border-color)',
        text: { primary: 'var(--text-primary)', secondary: 'var(--text-secondary)', inverse: 'var(--text-inverse)' },
      },
      fontFamily: {
        sans: ['var(--car-loan-body-font-family)', 'Inter', 'sans-serif'],
        heading: ['var(--car-loan-h1-font-family)', 'Poppins', 'sans-serif'],
        h1: ['var(--car-loan-h1-font-family)', 'Poppins', 'sans-serif'],
        h2: ['var(--car-loan-h2-font-family)', 'Poppins', 'sans-serif'],
        h3: ['var(--car-loan-h3-font-family)', 'Poppins', 'sans-serif'],
        h4: ['var(--car-loan-h4-font-family)', 'Inter', 'sans-serif'],
        body: ['var(--car-loan-body-font-family)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
