/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F86FB5',
          
          'primary-focus': '#E43292',

          secondary: '#FFA07A',

          accent: '#FFC757', 

          'accent-focus': '#FFB624',

          neutral: '#D9D9D9',

          'base-100': '#ffffff',

          'base-200': '#BBBBBB',

          'base-300': '#0a2b5c',
          
          'base-content': '#000000',

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