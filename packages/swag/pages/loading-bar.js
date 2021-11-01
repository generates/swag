import React from 'react'
import { css } from '../stitches.js'
import Page from '../components/app/Page.js'
import LoadingBar from '../components/LoadingBar.js'
import Button from '../components/buttons/Button.js'

export default function LoadingBarPage () {
  const [isEnabled, setIsEnabled] = React.useState(true)
  return (
    <Page>

      <h1>
        LoadingBar
      </h1>

      <div>
        <LoadingBar isEnabled={isEnabled} />
      </div>

      <div className={css('div', { marginTop: '2em' })()}>
        <Button primary onClick={() => setIsEnabled(!isEnabled)}>
          Toggle Enabled
        </Button>
      </div>

    </Page>
  )
}
