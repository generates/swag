import React from 'react'
import { StyledContainer, StyledEl } from '@generates/swag'
import Header from './Header.js'

export default function Page ({ children, ...props }) {
  return (
    <StyledContainer {...props}>

      <StyledEl css={{ marginBottom: '1em' }}>
        <Header />
      </StyledEl>

      {children}

    </StyledContainer>
  )
}
