/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#1F4D3A',
          deep: '#163828',
          mid: '#235e44',
        },
        orange: {
          DEFAULT: '#E67E22',
          deep: '#C9690F',
          light: '#F2B66B',
        },
        cream: {
          DEFAULT: '#F8F6F2',
          deep: '#EFEAE1',
        },
        charcoal: {
          DEFAULT: '#2B2B2B',
          soft: '#5B5B5B',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        lg2: '22px',
        md2: '14px',
      },
      boxShadow: {
        premium: '0 10px 30px -10px rgba(31,77,58,0.18)',
      },
    },
  },
  plugins: [],
};
