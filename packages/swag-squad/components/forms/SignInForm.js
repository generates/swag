import React from 'react'
import {
  EmailField,
  PasswordField,
  SwitchField,
  LoadingButton,
  StyledEl,
  StyledLink
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function SignInForm (props) {
  const {
    rememberMe = true,
    showRememberMe = true,
    forgotPasswordLinkProps = { href: '/forgot-password' },
    forgotPasswordLink = (
      <StyledLink {...forgotPasswordLinkProps}>
        Forgot password?
      </StyledLink>
    ),
    form
  } = props

  return (
    <StyledForm onSubmit={form.handleSubmit(props.onSubmit)}>

      {props.header}

      <EmailField
        feedback={props.feedback?.email}
        css={props.css?.emailField}
        register={form.register}
        required
      />

      <PasswordField
        feedback={props.feedback?.password}
        css={props.css?.passwordField}
        register={form.register}
        required
      />

      <StyledEl css={{ display: 'flex', alignItems: 'center' }}>

        {showRememberMe && (
          <div>
            <SwitchField
              id="rememberMe"
              value={rememberMe}
              setValue={form.setValue}
            >
              Remember me
            </SwitchField>
          </div>
        )}

        <StyledEl css={{ marginLeft: 'auto' }}>
          {forgotPasswordLink}
        </StyledEl>

      </StyledEl>

      <div>
        <LoadingButton
          isLoading={props.isLoading}
          primary
          type="submit"
          css={{ button: { marginTop: '.5em' } }}
          {...props.button}
        >
          Sign In
        </LoadingButton>
      </div>

      {props.footer}

    </StyledForm>
  )
}
