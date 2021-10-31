import React from 'react'
import Link from 'next/link'
import { styled, StyledLink } from '@generates/swag'

const Header = styled('header')
const Heading = styled('h1')

export default function AppHeader () {
  return (
    <Header css={{ textAlign: 'center' }}>

      <Link href="/">
        <StyledLink>
          <Heading css={{ fontSize: '1.5em', margin: '0' }}>
            swag-sheet
          </Heading>
        </StyledLink>
      </Link>

    </Header>
  )
}
