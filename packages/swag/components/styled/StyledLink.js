import { styled } from '../../stitches.js'
import transition from '../../styles/transition.js'

export default styled('a', {
  color: '$blue500',
  cursor: 'pointer',
  textDecoration: 'underline',
  ...transition,
  '&:hover': {
    color: '$blue600'
  }
})
