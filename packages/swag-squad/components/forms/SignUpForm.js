import React from 'react'
import {
  EmailField,
  PasswordField,
  LoadingButton,
  TextField
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function SignUpForm (props) {
  const { showName = true, showUsername = false, form } = props

  return (
    <StyledForm onSubmit={form.handleSubmit(props.onSubmit)}>

      {props.header}

      {showName && (
        <>

          <TextField
            id="firstName"
            label="First name"
            feedback={props.feedback?.firstName}
            css={props.css?.firstNameField}
            register={form.register}
            required
          />

          <TextField
            id="lastName"
            label="Last name"
            feedback={props.feedback?.lastName}
            css={props.css?.lastNameField}
            register={form.register}
            required
          />

        </>
      )}

      {showUsername && (
        <TextField
          id="username"
          label="Username"
          feedback={props.feedback?.username}
          css={props.css?.usernameField}
          register={form.register}
          required
        />
      )}

      <EmailField
        feedback={props.feedback?.email}
        css={props.css?.emailField}
        register={form.register}
        required
      />

      <PasswordField
        feedback={props.feedback?.password}
        css={props.css?.passwordfield}
        register={form.register}
        required
      />

      <div>
        <LoadingButton isLoading={props.isLoading} primary type="submit">
          Sign Up
        </LoadingButton>
      </div>

      {props.footer}

    </StyledForm>
  )
}
