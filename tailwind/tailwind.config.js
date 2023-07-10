/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      xs: '450px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize:{
        '10xl':['10rem', { lineHeight: '1' }],
      }
    },
  },
  plugins: [],
}

// add path to all your source files in content array

// there is no font class of 10xl so defining it on own 
// to modify the breakpoints or add new breakpoints define them in theme not in theme.extend eg. > i defined a xs breakpoint in screens