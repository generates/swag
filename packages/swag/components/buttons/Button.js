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
            boxShadow: '0px 0px 0px 2px $colors$blueGray200, 0px 0px 0px 3px $colors$blueGray300'
          },
          '&:active': {
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
            boxShadow: '$0px 0px 0px 2px $colors$blue200, 0px 0px 0px 3px $colors$blue300'
          },
          '&:active': {
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
            boxShadow: '0px 0px 0px 2px $colors$green200, 0px 0px 0px 3px $colors$green300'
          },
          '&:active': {
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
            boxShadow: '0px 0px 0px 2px $colors$red200, $colors$red300 0px 0px 0px 3px'
          },
          '&:active': {
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
            boxShadow: '0px 0px 0px 1px $colors$blueGray400'
          }
        }
      },
      {
        small: true,
        primary: true,
        css: {
          '&:focus:not(:active)': {
            boxShadow: '0px 0px 0px 1px $colors$blue200'
          }
        }
      },
      {
        small: true,
        continue: true,
        css: {
          '&:focus:not(:active)': {
            boxShadow: '0px 0px 0px 1px $colors$green200'
          }
        }
      }
    ],
    defaultVariants: {
      secondary: true
    }
  }
)
