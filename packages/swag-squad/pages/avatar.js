import React from 'react'
import { styled, StyledEl } from '@generates/swag'
import Page from '../components/app/Page.js'
import Avatar from '../components/Avatar.js'

const HeadingTwo = styled('h2')

export default function AvatarPage () {
  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Avatar
      </HeadingTwo>

      <br />

      <StyledEl css={{ marginTop: '1em' }}>
        <Avatar name="Rick Flick" />
      </StyledEl>

      <StyledEl css={{ marginTop: '1em' }}>
        <Avatar image="/img/avatar.jpeg" name="Dirk Lurk" />
      </StyledEl>

    </Page>
  )
}
