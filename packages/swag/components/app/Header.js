import React from 'react'
import Link from 'next/link'
import { styled } from '../../stitches.js'
import textGradient from '../../styles/textGradient.js'

const Header = styled('header')
const Heading = styled('h1')

export default function AppHeader () {
  return (
    <Header css={{ textAlign: 'center' }}>

      <Link href="/">
        <Heading
          css={{
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: '3rem',
            marginBottom: 0,
            ...textGradient
          }}
        >
          SWAG
        </Heading>
      </Link>

    </Header>
  )
}
