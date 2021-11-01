import { styled } from '../../stitches.js'
import Menu from '../../components/Menu.js'
import transition from '../../styles/transition.js'

export default styled(
  Menu.Button,
  {
    width: '100%',
    borderWidth: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingTop: '.75em',
    paddingBottom: '.75em',
    fontSize: '.825em',
    fontWeight: '500',
    color: '$coolGray600',
    ...transition,
    '&:hover': {
      backgroundColor: '$coolGray200',
      color: '$coolGray900'
    }
  }
)
