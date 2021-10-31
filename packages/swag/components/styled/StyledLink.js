import { styled } from '../../stitches.js'
import transition from '../../styles/transition.js'

export default styled('label', {
  color: '#3B82F6',
  cursor: 'pointer',
  textDecoration: 'underline',
  ...transition,
  '&:hover': {
    color: '#2563EB'
  }
})
