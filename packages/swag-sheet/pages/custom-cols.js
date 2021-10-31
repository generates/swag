import React from 'react'
import { css, StyledContainer } from '@generates/swag'
import Uploader from '../components/Uploader.js'

export default function CustomColsPage () {
  return (
    <StyledContainer className={css({ fontFamily: 'sans-serif' })()}>

      <h1>
        swag-sheet
      </h1>

      <div>
        <Uploader
          onContinue={data => alert(JSON.stringify(data, undefined, 2))}
          onUpdateCell={(ctx, value) => alert(value)}
          columns={columns => columns.map(col => ({
            ...col,
            disableSortBy: col.id !== 'Patient Sex'
          }))}
        />
      </div>

    </StyledContainer>
  )
}
