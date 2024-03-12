import { defineConfig, defineGlobalStyles  } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  'html, body': {
    fontFamily: 'Source Sans Pro',
    width: '969px',
    margin: '10px auto'
  },
  'h1': {
    fontSize: '30px',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  'h2': {
    fontSize: '22px',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  'p': {
    fontSize: '16px',
    fontWeight: '400'
  },
  'button' : {
    fontWeight: '700',
    padding: '8px 30px',
    borderRadius: '30px',
    cursor: 'pointer'
  }
})

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '2561px'
      },
      tokens: {
        colors: {
          primary: { value: '#B00005'},
          secondary: { value: '#FAEC70'},
          grey_light: { value: '#F4F4F4'}
        },
        fontSizes: {
          default: { value: '16px'},
          medium: { value: '28px'},
          default_button: { value: '14px'},
          medium_button: { value: '24px'},
          medium_h1: { value: '40px'},
          medium_h2: { value: '35px'}
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",

  globalCss
});
