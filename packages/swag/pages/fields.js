import React from 'react'
import { css } from '@stitches/react'
import TextField from '../components/fields/TextField.js'
import StyledContainer from '../components/styled/StyledContainer.js'
import PasswordField from '../components/fields/Passwordfield.js'

export default function FieldsPage () {
  return (
    <StyledContainer>

      <h1>
        Fields
      </h1>

      <div className={css({ display: 'flex', alignItems: 'center' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <TextField id="firstName" label="First name" />
        </div>

        <div>
          This is
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <PasswordField />
        </div>

        <div>
          This is
        </div>

      </div>

    </StyledContainer>
  )
}