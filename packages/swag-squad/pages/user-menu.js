import React from 'react'
import { css, styled, StyledEl, StyledMenuItem } from '@generates/swag'
import {
  HiOutlineUserCircle,
  HiOutlineAdjustments,
  HiOutlineSupport,
  HiOutlineLogout
} from 'react-icons/hi'
import Page from '../components/app/Page.js'
import UserMenu from '../components/UserMenu.js'

const HeadingTwo = styled('h2')
const navIcon = css({ marginRight: '.5em', fontSize: '1.25em' })()

function Nav () {
  return (
    <StyledEl css={{ display: 'grid' }}>

      <StyledMenuItem>

        <HiOutlineUserCircle className={navIcon} />

        My Profile

      </StyledMenuItem>

      <StyledMenuItem>

        <HiOutlineAdjustments className={navIcon} />

        Account Settings

      </StyledMenuItem>

      <StyledMenuItem>

        <HiOutlineSupport className={navIcon} />

        Support

      </StyledMenuItem>

      <StyledMenuItem>

        <HiOutlineLogout className={navIcon} />

        Sign Out

      </StyledMenuItem>

    </StyledEl>
  )
}

export default function UserMenuPage () {
  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        User Menu
      </HeadingTwo>

      <br />

      <StyledEl
        css={{
          display: 'flex',
          backgroundColor: '#171717',
          borderRadius: '.375em',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '256px',
          padding: '2em 5em 5em 5em',
          height: '10em'
        }}
      >
        <UserMenu
          avatar="/img/avatar.jpeg"
          css={{ popover: { marginLeft: 'auto', marginRight: 'auto' } }}
        >
          <Nav />
        </UserMenu>
      </StyledEl>

      <StyledEl
        css={{
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '256px',
          padding: '2em 5em 5em 5em',
          height: '10em'
        }}
      >
        <UserMenu
          css={{ popover: { marginLeft: 'auto', marginRight: 'auto' } }}
        >
          <Nav />
        </UserMenu>
      </StyledEl>

      <StyledEl
        css={{
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '256px',
          padding: '2em 5em 5em 5em',
          height: '10em'
        }}
      >
        <UserMenu
          avatar="/img/avatar.jpeg"
          css={{ popover: { marginLeft: 'auto', marginRight: 'auto' } }}
        >
          <Nav />
        </UserMenu>
      </StyledEl>

    </Page>
  )
}
