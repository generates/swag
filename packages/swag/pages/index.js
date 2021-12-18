import React from 'react'
import Link from 'next/link'
import { styled } from '../stitches.js'
import Page from '../components/app/Page.js'
import StyledEl from '../components/styled/StyledEl.js'
import textGradient from '../styles/textGradient.js'

const UnorderedList = styled('ul')

export default function Home () {
  return (
    <Page>

      <StyledEl
        css={{
          textAlign: 'center',
          fontSize: '1.5rem',
          ...textGradient
        }}
      >
        A set of easily extensible React components
      </StyledEl>

      <UnorderedList css={{
        '& li': {
          marginTop: '.5em',
          marginBottom: '.5em'
        }
      }}>
        <li>
          <Link href="/loading-bar">
            <a>
              LoadingBar
            </a>
          </Link>
        </li>
        <li>
          <Link href="/button">
            <a>
              Button
            </a>
          </Link>
        </li>
        <li>
          <Link href="/loading-button">
            <a>
              LoadingButton
            </a>
          </Link>
        </li>
        <li>
          <Link href="/fields">
            <a>
              Fields
            </a>
          </Link>
        </li>
        <li>
          <Link href="/alert">
            <a>
              Alert
            </a>
          </Link>
        </li>
        <li>
          <Link href="/menu">
            <a>
              Menu
            </a>
          </Link>
        </li>
        <li>
          <Link href="/modal">
            <a>
              Modal
            </a>
          </Link>
        </li>
      </UnorderedList>

    </Page>
  )
}
