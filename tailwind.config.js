/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slider: { //무한슬라이더
          '0%': {
            transform: 'translateX(0px)',
          },
          '100%': {
            transform: 'translateX(200px)',
          },
        },
        },
      animation: {
        slider: 'slider 5s linear infinite',
      },
      
    }, //여기까지
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
  plugins: [],
};
