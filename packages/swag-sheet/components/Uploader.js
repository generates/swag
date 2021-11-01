import React from 'react'
import Papa from 'papaparse'
import { styled, LoadingBar, StyledEl } from '@generates/swag'
import { merge } from '@generates/merger'
import Dropzone from 'react-dropzone'
import Spreadsheet from './Spreadsheet.js'
import ActionMenu from './ActionMenu.js'

const HeaderWrapper = styled(
  'div',
  { display: 'flex', alignItems: 'center', flexWrap: 'wrap' }
)

export default function Uploader (props) {
  const {
    components,
    onClear = ctx => ctx.setData(),
    onContinue,
    onData = () => {},
    css,
    ...rest
  } = props
  const [data, setData] = React.useState(props.data)
  const [filename, setFilename] = React.useState()
  const ConfiguredActionMenu = components?.ActionMenu || ActionMenu
  const [isLoading, setIsLoading] = React.useState(false)

  function handleFile (files) {
    setIsLoading(true)
    const [file] = files
    if (file) {
      setFilename(file.name)

      // Call onFiles callback with the files selected and use the return value
      // to determine whether the files should be parsed.
      let shouldParse = true
      if (props.onFiles) shouldParse = props.onFiles(files)

      if (shouldParse) {
        let data = []
        for (const [index, file] of files.entries()) {
          // Parse the file using PapaParse.
          Papa.parse(
            file,
            merge(
              {
                header: true,
                worker: true,
                skipEmptyLines: true,
                complete (results) {
                  // Add the parsed data to the data that will be used.
                  data = data.concat(results.data)
                  if (files.length === index + 1) {
                    onData(data)
                    setData(data)
                    setIsLoading(false)
                  }
                }
              },
              props.parse
            )
          )
        }
      }
    }
  }

  return (
    <div>

      <HeaderWrapper css={css?.headerWrapper}>

        {/* File input */}

        <StyledEl css={{ flexGrow: '1' }}>
          <Dropzone onDrop={handleFile}>
            {({ getRootProps, getInputProps }) => (
              <StyledEl
                css={{
                  cursor: 'pointer',
                  borderWidth: '2px',
                  borderStyle: 'dashed',
                  borderColor: '#3B82F6',
                  borderRadius: '.375em',
                  paddingTop: '1em',
                  paddingBottom: '1em',
                  paddingLeft: '1.25em',
                  paddingRight: '1.25em',
                  marginBottom: '1.5em',
                  fontSize: '1.125em',
                  fontWeight: '500'
                }}
                {...getRootProps()}
              >

                <input {...getInputProps()} />

                {filename || (
                  <>
                    Click here to select a file or drag and drop the file here
                  </>
                )}

              </StyledEl>
            )}
          </Dropzone>
        </StyledEl>

        {/* Action menu */}

        <ConfiguredActionMenu
          onClear={() => {
            setFilename()
            onClear({ setData })
          }}
          onContinue={() => onContinue(data)}
          css={merge(
            {
              wrapper: {
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '1.5em'
              }
            },
            css?.actionMenu
          )}
        />

      </HeaderWrapper>

      {/* Spreadsheet view */}

      {isLoading && (
        <LoadingBar
          css={merge(
            { wrapper: { marginTop: '2em', marginBottom: '.5em' } },
            css?.loadingBar
          )}
        />
      )}

      {!isLoading && data && (
        <Spreadsheet
          {...rest}
          data={data}
          onUpdateData={data => {
            setData(data)
            onData(data)
          }}
          css={css?.spreadsheet}
        />
      )}

    </div>
  )
}
