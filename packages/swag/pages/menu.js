import React from 'react'
import { css } from '../stitches.js'
import {
  HiOutlineUserCircle
} from 'react-icons/hi'
import Page from '../components/app/Page.js'
import Menu from '../components/Menu.js'
import StyledMenuItem from '../components/styled/StyledMenuItem.js'
import Button from '../components/buttons/Button.js'

const navIcon = css({
  marginRight: '.5em',
  fontSize: '1.25em',
  flexShrink: 0
})()

export default function MenuPage () {
  return (
    <Page>

      <h1>
        Menu
      </h1>

      <div className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1em'
      })()}>

        <div className={css({ marginRight: '1em' })()}>
          <Menu trigger="Menu">
            <StyledMenuItem>

              <HiOutlineUserCircle className={navIcon} />

              My Profile

            </StyledMenuItem>
          </Menu>
        </div>

        <div>
          This is a menu.
        </div>

      </div>

      <div className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1em'
      })()}>

        <div className={css({ marginRight: '1em' })()}>
          <Menu trigger={<Button primary>Actions</Button>}>
            <StyledMenuItem>

              <HiOutlineUserCircle className={navIcon} />

              My Profile

            </StyledMenuItem>
          </Menu>
        </div>

        <div>
          This is a menu.
        </div>

      </div>

    </Page>
  )
}
