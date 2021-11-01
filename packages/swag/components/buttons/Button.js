import { styled } from '../../stitches.js'
import transition from '../../styles/transition.js'

export default styled(
  'button',
  {
    display: 'inline-flex',
    textAlign: 'center',
    paddingLeft: '1.25em',
    paddingRight: '1.25em',
    lineHeight: '2.25em',
    borderWidth: '0',
    borderRadius: '1.5em',
    fontSize: '1.125em',
    fontWeight: '500',
    cursor: 'pointer',
    userSelect: 'none',
    ...transition,
    '&:focus, &:active': {
      outline: 'none'
    },
    variants: {
      secondary: {
        true: {
          backgroundColor: '$blueGray200',
          color: '#111827',
          '&:hover': {
            background: '$blueGray300'
          },
          '&:focus:not(:active)': {
            background: '$blueGray300',
            boxShadow: '$blueGray200 0px 0px 0px 2px, $blueGray300 0px 0px 0px 3px'
          },
          '&:focus:active': {
            background: '$blueGray400'
          }
        }
      },
      primary: {
        true: {
          backgroundColor: '$blue500',
          color: '#fff',
          '&:hover': {
            background: '$blue600'
          },
          '&:focus:not(:active)': {
            background: '$blue600',
            boxShadow: '$blue200 0px 0px 0px 2px, $blue300 0px 0px 0px 3px'
          },
          '&:focus:active': {
            background: '$blue700'
          }
        }
      },
      continue: {
        true: {
          backgroundColor: '$green500',
          color: '#fff',
          '&:hover': {
            background: '$green600'
          },
          '&:focus:not(:active)': {
            background: '$green600',
            boxShadow: '$green200 0px 0px 0px 2px, $green300 0px 0px 0px 3px'
          },
          '&:focus:active': {
            background: '$green700'
          }
        }
      },
      stop: {
        true: {
          backgroundColor: '$red500',
          color: '#fff',
          '&:hover': {
            background: '$red600'
          },
          '&:focus:not(:active)': {
            background: '$red600',
            boxShadow: '$red200 0px 0px 0px 2px, $red300 0px 0px 0px 3px'
          },
          '&:focus:active': {
            background: '$red700'
          }
        }
      },
      small: {
        true: {
          fontSize: '.875em',
          paddingLeft: '.625em',
          paddingRight: '.625em',
          lineHeight: '1.5em',
          borderRadius: '1em'
        }
      }
    },
    compoundVariants: [
      {
        small: true,
        secondary: true,
        css: {
          '&:focus:not(:active)': {
            boxShadow: '$blueGray400 0px 0px 0px 1px'
          }
        }
      },
      {
        small: true,
        primary: true,
        css: {
          '&:focus:not(:active)': {
            boxShadow: '$blue200 0px 0px 0px 1px'
          }
        }
      },
      {
        small: true,
        continue: true,
        css: {
          '&:focus:not(:active)': {
            boxShadow: '$green200 0px 0px 0px 1px'
          }
        }
      }
    ],
    defaultVariants: {
      secondary: true
    }
  }
)
