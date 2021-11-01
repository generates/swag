import { styled } from '../../stitches.js'

export default styled('input', {
  display: 'block',
  boxSizing: 'border-box',
  width: '100%',
  marginTop: '.25em',
  marginBottom: '.25em',
  paddingTop: '.625em',
  paddingBottom: '.625em',
  paddingLeft: '.75em',
  paddingRight: '.75em',
  fontSize: '1.125em',
  backgroundColor: '$trueGray50',
  color: '$trueGray800',
  borderRadius: '.375em',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '$trueGray300',
  appearance: 'none',
  '&:focus': {
    outline: 'none',
    borderColor: '$blue500',
    boxShadow: '0px 0px 0px 3px $colors$blue200'
  },
  variants: {
    small: {
      true: {
        fontSize: '.8em',
        paddingTop: '.375em',
        paddingBottom: '.375em',
        paddingLeft: '.5em',
        paddingRight: '.5em',
        '&:focus': {
          boxShadow: '0px 0px 0px 2px $colors$blue200 '
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
