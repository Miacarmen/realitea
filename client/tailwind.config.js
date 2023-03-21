/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FFA07A',

          // 'primary-focus': '#FF7F50',

          secondary: '#FF7F50',

          accent: '#FFB6C1', 

          'accent-focus': '#FF8698',

          neutral: '#D9D9D9',

          'base-100': '#ffffff',

          'base-200': '#BBBBBB',

          'base-300': '#2A303C',
          
          'base-content': '#191D24',

          info: '#3ABFF8',

          success: '#78dcca',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {

    },
  },
  plugins: [require('daisyui')],
}