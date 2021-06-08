import React from 'react'
import { styled } from '@stitches/react'
import Page from '../components/app/Page.js'
import ResetPasswordForm from '../components/forms/ResetPasswordForm.js'

const HeadingTwo = styled('h2')

export default function ResetPasswordPage () {
  function resetPassword () {

  }

  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Reset password
      </HeadingTwo>

      <br />

      <ResetPasswordForm
        onSubmit={resetPassword}
      />

    </Page>
  )
}
