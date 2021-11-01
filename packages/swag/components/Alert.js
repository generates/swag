import React from 'react'
import { HiX } from 'react-icons/hi'
import StyledEl from './styled/StyledEl.js'
import transition from '../styles/transition.js'

const scrollOptions = { behavior: 'smooth', block: 'end', inline: 'nearest' }

export default function Alert (props) {
  const ref = React.useRef()
  const css = {
    display: 'flex',
    paddingTop: '.25em',
    paddingBottom: '.25em',
    paddingLeft: '.5em',
    paddingRight: '.5em',
    borderRadius: '.375em',
    fontSize: '1.125em',
    lineHeight: '1.5em',
    ...props.level === 'success' && {
      backgroundColor: '$emerald50',
      color: '$emerald600',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '$emerald500'
    },
    ...props.level === 'error' && {
      backgroundColor: '$red50',
      color: '$red600',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '$red500'
    },
    ...props.level === 'info' && {
      backgroundColor: '$blue50',
      color: '$blue600',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '$blue500'
    },
    ...props.css
  }

  React.useEffect(
    () => props.shouldScrollTo && ref.current.scrollIntoView(scrollOptions),
    [props.shouldScrollTo]
  )

  return (
    <StyledEl css={css} ref={ref} data-alert={props.level}>

      <StyledEl css={{ padding: '.5em' }}>
        {props.children}
      </StyledEl>

      {props.onClose && (
        <StyledEl css={{ marginLeft: 'auto' }}>
          <StyledEl
            as="button"
            type="button"
            css={{
              display: 'inline-flex',
              padding: '.25em',
              marginTop: '.2em',
              fontSize: '1.25em',
              textAlign: 'left',
              borderRadius: '.375em',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              ...props.level === 'success' && {
                color: '$emerald600',
                '&:hover': {
                  backgroundColor: '$emerald100'
                }
              },
              ...props.level === 'error' && {
                color: '$red600',
                '&:hover': {
                  backgroundColor: '$red100'
                }
              },
              ...props.level === 'info' && {
                color: '$blue600',
                '&:hover': {
                  backgroundColor: '$blue100'
                }
              },
              ...transition,
              '&:focus': {
                outline: 'none'
              }
            }}
            onClick={props.onClose}
          >
            <HiX aria-hidden="true" />
          </StyledEl>
        </StyledEl>
      )}

    </StyledEl>
  )
}
