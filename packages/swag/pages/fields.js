import React from 'react'
import { css } from '../stitches.js'
import Page from '../components/app/Page.js'
import TextField from '../components/fields/TextField.js'
import PasswordField from '../components/fields/PasswordField.js'
import EmailField from '../components/fields/EmailField.js'
import SwitchField from '../components/fields/SwitchField.js'
import StyledSelect from '../components/styled/StyledSelect.js'

export default function FieldsPage () {
  return (
    <Page>

      <h1>
        Fields
      </h1>

      <div className={css({ display: 'flex', alignItems: 'center' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <TextField id="firstName" label="First name" />
        </div>

        <div>
          This is a TextField
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <EmailField feedback="Please enter a valid email" />
        </div>

        <div>
          This is a EmailField
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <PasswordField />
        </div>

        <div>
          This is a PasswordField
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <PasswordField
            id="currentPassword"
            feedback={[
              'This is similar to a commonly used password',
              'Add another word or two. Uncommon words are better.'
            ]}
          />
        </div>

        <div>
          This is a PasswordField
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <TextField id="name" small />
        </div>

        <div>
          This is a small TextField
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em', maxWidth: '10em' })()}>
          <SwitchField id="editMode" css={{ wrapper: { fontSize: '18px' } }}>
            Edit mode
          </SwitchField>
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <StyledSelect>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="250">250</option>
          </StyledSelect>
        </div>

        <div>
          This is a select.
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <StyledSelect small>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="250">250</option>
          </StyledSelect>
        </div>

        <div>
          This is a small select.
        </div>

      </div>

    </Page>
  )
}
