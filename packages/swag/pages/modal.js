import React from 'react'
import Page from '../components/app/Page.js'
import Button from '../components/buttons/Button.js'
import Modal from '../components/Modal.js'

export default function ModalPage () {
  return (
    <Page>

      <h1>
        Modal
      </h1>

      <Button>
        Open Modal
      </Button>

      <Modal />

    </Page>
  )
}
