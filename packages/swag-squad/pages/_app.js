// import 'tailwindcss/tailwind.css'
import React from 'react'
import { globalCss } from '@generates/swag'

const globalStyles = globalCss({
  body: {
    fontFamily: 'Inter',
    backgroundColor: '#F5F5F5'
  }
})

export default function AppPage ({ Component, pageProps }) {
  globalStyles()

  return <Component {...pageProps} />
}
