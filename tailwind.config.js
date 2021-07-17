const colors = require('tailwindcss/colors')
module.exports = {
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
  purge: {
    options: {
      safelist: [
        '-rotate-3', 'rotate-2', '-rotate-3', 'rotate-3', 'from-violet', 'to-primary-500', 'bg-gradient-to-r', 'from-blue-700', 'to-blue-400', 'from-purple-700', 'to-pink-900', 'from-yellow-600', 'to-red-600',
        'bg-primary-400', 'bg-purple-600', 'text-teal-400', 'bg-blue-400', 'bg-purple-400', 'bg-green-400', 'bg-indigo-400', 'bg-pink-400', 'bg-red-400', 'w-10', 'w-6', 'stroke-current',
        'text-primary-400', 'text-blue-400', 'text-purple-400', 'text-green-400', 'text-indigo-400', 'text-pink-400', 'text-red-400'
        , 'text-pink-400', 'text-indigo-400', 'text-blue-400', 'text-teal-400', 'text-primary-400', 'text-purple-400', 'text-green-400'
      ]
    }
  },
  theme: {
    extend: {
      screens: {
        'xxs': { 'max': '350px' },
      },
      colors: {
        trueGray: colors.trueGray,
        custBlue: {
          100: '#996EDD',
          200: '#5500FF'
        },
        teal: {
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        primary: {
          100: '#b89ae7',
          200: '#ad8be4',
          300: '#a37de0',
          400: '#996edd',
          500: '#8a63c7',
          600: '#7a58b1',
          700: '#6b4d9b',
          800: '#5c4285',
          900: '#7332ed',
        },
        gradient1: '#fc4a1a',
        gradient2: '#f7b733',
        gradient3: '#F27121',
        background: '#0c112b',
        background2: '#1e214a',
        violet: '#801354',
        violet2: '#9B0ABF',
        card_background: '#303653',
        card_background_accent: '#454a64',
        card_background_dark: '#070a1a',
        card_background2: '#3E3F64'
      },
      fontFamily: {
        'sans': ['Inter'],
        'head': ['Manrope']
      }
    }
  }
}
