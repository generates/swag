import React from 'react'
import { globalCss } from '../stitches.js'

const globalStyles = globalCss({
  body: {
    backgroundColor: '#F3F4F6',
    fontSize: '16px',
    fontFamily: 'sans-serif'
  }
})

export default function AppPage ({ Component, pageProps }) {
  globalStyles()

  return <Component {...pageProps} />
}
