import { oneLine } from 'common-tags'
import { styled } from '../../stitches.js'

export default styled('select', {
  display: 'block',
  boxSizing: 'border-box',
  width: '100%',
  marginTop: '.25em',
  marginBottom: '.25em',
  paddingTop: '.625em',
  paddingBottom: '.625em',
  paddingLeft: '.75em',
  paddingRight: '2.25em',
  fontSize: '1.125em',
  backgroundColor: '$trueGray50',
  color: '#262626',
  borderRadius: '.375em',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '$trueGray300',
  appearance: 'none',
  backgroundImage: oneLine`
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23A3A3A3' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")
  `,
  backgroundPosition: 'right .275rem center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '1.5em 1.5em',
  '&:focus': {
    outline: 'none',
    borderColor: '$blue500',
    boxShadow: '0px 0px 0px 3px $colors$blue200 '
  },
  variants: {
    small: {
      true: {
        fontSize: '.8em',
        paddingTop: '.375em',
        paddingBottom: '.375em',
        paddingLeft: '.5em',
        paddingRight: '1.825em',
        backgroundPosition: 'right .15rem center',
        '&:focus': {
          boxShadow: '0px 0px 0px 2px $colors$blue200'
        }
      }
    },
    level: {
      error: {
        color: '$red600'
      }
    }
  }
})
