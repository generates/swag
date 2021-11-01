import React from 'react'
import StyledContainer from '../styled/StyledContainer.js'
import StyledEl from '../styled/StyledEl.js'
import Header from './Header.js'

export default function Page ({ children }) {
  return (
    <StyledContainer>

      <StyledEl css={{ marginBottom: '1em' }}>
        <Header />
      </StyledEl>

      {children}

    </StyledContainer>
  )
}
