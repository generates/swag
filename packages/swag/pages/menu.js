import React from 'react'
import { css } from '@stitches/react'
import {
  HiOutlineUserCircle
} from 'react-icons/hi'
import Menu from '../components/Menu.js'
import StyledContainer from '../components/styled/StyledContainer.js'
import StyledMenuItem from '../components/styled/StyledMenuItem.js'

const navIcon = css({ marginRight: '.5em', fontSize: '1.25em' })()

export default function MenuPage () {
  return (
    <StyledContainer>

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
          <Menu
            trigger={<strong>Actions</strong>}
            button={{ primary: true }}
          >

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

    </StyledContainer>
  )
}