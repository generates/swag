import React from 'react'
import { merge } from '@generates/merger'
import StyledLabel from '../styled/StyledLabel.js'
import StyledSelect from '../styled/StyledSelect.js'
import StyledEl from '../styled/StyledEl.js'
import Feedback from '../Feedback.js'

export default function SelectField (props) {
  const {
    label,
    css,
    feedback,
    feedbackId = `${props.id}-feedback`,
    register,
    ...rest
  } = props

  const input = merge(
    {
      ...feedback && {
        borderColor: '#EF4444',
        '&:focus': {
          borderColor: '#EF4444',
          boxShadow: '#FECACA 0px 0px 0px 3px'
        }
      }
    },
    css?.input
  )

  return (
    <StyledEl css={css?.wrapper}>

      {typeof label === 'string'
        ? (
            <StyledLabel htmlFor={props.id} css={css?.label}>
              {label}
            </StyledLabel>
          )
        : label
      }

      {feedback && <Feedback id={feedbackId} feedback={feedback} />}

      <StyledSelect
        {...rest}
        {...register && register(props.id, props.required)}
        css={input}
        small={props.small}
        level={props.feedback && 'error'}
      />

    </StyledEl>
  )
}
