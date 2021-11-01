import React from 'react'
import StyledEl from './styled/StyledEl.js'

export default function Feedback (props) {
  return (
    <StyledEl
      id={props.id}
      css={{
        color: '$red600',
        marginTop: '.5em',
        marginBottom: '.5em',
        fontSize: '.925em',
        fontWeight: '500'
      }}
    >
      {Array.isArray(props.feedback)
        ? props.feedback.map((feedback, i) => (
          <StyledEl key={i} css={{ marginTop: '.5em', marginBottom: '.5em' }}>
            {feedback}
          </StyledEl>
        ))
        : props.feedback
      }
    </StyledEl>
  )
}
