/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins','sans']
      },
      backgroundImage: {
        'MainBG' :"url('../src/massms/main-background.svg')",
        'arrow' : "url('../src/massms/arrow-right.svg')",
      },
      colors: {
        'ffe367' : '#ffe367',
        '2a1844' : '#2a1844',
        'd1e8f9' : '#d1e8f9',
        '49aae7' : '#49aae7',
        '333333' : '#333333',
        '758085' : '#758085'
      },
      height: {
        halfScreen: '50vh'
      }
    },
  },
  plugins: [],
}

