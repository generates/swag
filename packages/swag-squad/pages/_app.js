// import 'tailwindcss/tailwind.css'
import React from 'react'
import { global } from '@stitches/react'

const globalStyles = global({
  body: {
    fontFamily: 'Inter',
    backgroundColor: '##FAFAFA'
  }
})

export default function AppPage ({ Component, pageProps }) {
  globalStyles()

  return <Component {...pageProps} />
}
