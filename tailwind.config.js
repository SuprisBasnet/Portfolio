/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['DM Serif Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        canvas: {
          DEFAULT: '#F5F1EB',
          50: '#FFFCF8',
          100: '#FBF8F3',
          200: '#F8F4EE',
          300: '#F5F1EB',
          400: '#F0EBE3',
          500: '#F5F1EB',
        },
        bone: {
          50: '#171513',
          100: '#1D1A17',
          200: '#2A2622',
          300: '#4E4943',
          400: '#6C665F',
          500: '#8B847B',
          600: '#A8A096',
          700: '#C7BFB4',
          800: '#DED7CD',
          900: '#ECE6DD',
        },
        cobalt: {
          50: '#FFF0EA',
          100: '#F9D7CA',
          200: '#F0AD98',
          300: '#E38568',
          400: '#D46B4B',
          500: '#C95F3D',
          600: '#A94B31',
          700: '#833A27',
          800: '#592719',
          900: '#32150E',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.22,1,0.36,1) forwards',
        'marquee': 'marquee 30s linear infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-5%)' },
          '20%': { transform: 'translate(-10%,5%)' },
          '30%': { transform: 'translate(5%,-10%)' },
          '40%': { transform: 'translate(-5%,10%)' },
          '50%': { transform: 'translate(-10%,5%)' },
          '60%': { transform: 'translate(10%,0%)' },
          '70%': { transform: 'translate(0%,5%)' },
          '80%': { transform: 'translate(-15%,0%)' },
          '90%': { transform: 'translate(5%,5%)' },
        },
      },
    },
  },
  plugins: [],
};
