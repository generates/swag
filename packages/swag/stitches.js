import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      // gray400: 'gainsboro',
      // gray500: 'lightgray'
    }
  },
  media: {
    // bp1: '(min-width: 480px)'
  },
  utils: {
    mx: value => ({ marginLeft: value, marginRight: value }),
    my: value => ({ marginTop: value, marginBottom: value }),
    px: value => ({ paddingLeft: value, paddingRight: value }),
    py: value => ({ paddingTop: value, paddingBottom: value })
  }
})
