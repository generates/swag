import React from 'react'
import { merge } from '@generates/merger'
import { motion } from 'framer-motion'
import { css as stitchesCss } from '../../stitches.js'
import StyledEl from '../styled/StyledEl.js'
import StyledLabel from '../styled/StyledLabel.js'

export default function SwitchField (props) {
  const {
    value,
    children,
    transition = { type: 'spring', mass: 0.5 },
    css = {},
    onChange,
    ...rest
  } = props
  const [isOn, setIsOn] = React.useState(value)

  const body = stitchesCss(merge(
    {
      boxSizing: 'border-box',
      display: 'flex',
      flexShrink: 0,
      cursor: 'pointer',
      alignItems: 'center',
      backgroundColor: '#E2E8F0',
      height: '32px',
      width: '56px',
      paddingLeft: '4px',
      paddingRight: '4px',
      borderRadius: '32px'
    },
    css.body
  ))

  const button = stitchesCss(merge(
    {
      height: '24px',
      width: '24px',
      backgroundColor: '#fff',
      borderRadius: '100%',
      boxShadow: '1px 2px 0 rgba(0,0,0,0.05)'
    },
    css.body
  ))

  return (
    <StyledEl
      css={merge({ display: 'inline-flex' }, css.wrapper)}
      onClick={() => {
        const newState = !isOn
        setIsOn(newState)
        onChange && onChange(newState)
      }}
      {...rest}
    >

      <motion.div
        initial={false}
        className={body()}
        animate={{ backgroundColor: isOn ? '#22C55E' : '#E2E8F0' }}
      >
        <motion.div
          initial={false}
          className={button()}
          animate={{ x: isOn ? 24 : 0 }}
          transition={transition}
        />
      </motion.div>

      <StyledLabel
        css={merge(
          { marginLeft: '16px', paddingBottom: 0, lineHeight: '32px' },
          css.label
        )}
      >
        {children}
      </StyledLabel>

    </StyledEl>
  )
}
