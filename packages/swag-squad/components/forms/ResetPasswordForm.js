import React from 'react'
import {
  EmailField,
  PasswordField,
  StyledLabel,
  LoadingButton,
  StyledEl,
  TextField
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function ResetPasswordForm (props) {
  const { includeToken = true, form } = props

  return (
    <StyledForm onSubmit={form.handleSubmit(props.onSubmit)}>

      {props.header}

      <EmailField
        feedback={props.feedback?.email}
        css={props.css?.emailField}
        register={form.register}
        required
      />

      {includeToken && (
        <TextField
          id="token"
          label="Token"
          feedback={props.feedback?.token}
          css={props.css?.tokenField}
          register={form.register}
          required
        />
      )}

      <PasswordField
        feedback={props.feedback?.password}
        css={props.css?.passwordfield}
        register={form.register}
        required
      />

      <PasswordField
        id="passwordConfirm"
        label={
          <StyledLabel htmlFor="passwordConfirm">

            Password

            <StyledEl as="span" css={{ marginLeft: '.5em', color: '#6B7280' }}>
              (confirm)
            </StyledEl>

          </StyledLabel>
        }
        feedback={props.feedback?.passwordConfirm}
        css={props.css?.passwordConfirmField}
        register={form.register}
        required
      />

      <div>
        <LoadingButton isLoading={props.isLoading} primary type="submit">
          Reset Password
        </LoadingButton>
      </div>

      {props.footer}

    </StyledForm>
  )
}
