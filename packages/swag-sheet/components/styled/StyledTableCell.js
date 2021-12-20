import { styled } from '@generates/swag'

export default styled(
  'td',
  {
    boxSizing: 'border-box',
    verticalAlign: 'top',
    padding: '8px',
    height: '100%',
    minHeight: '35px',
    minWidth: '72px',
    color: '#1F2937',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#E5E7EB',
    '&:focus': {
      backgroundColor: '#F0F9FF',
      outline: 'none'
    },
    variants: {
      editor: {
        true: {
          outline: 'none',
          boxShadow: 'inset 0 0 0 1px #2563EB, inset 0 0 2px 2px #93C5FD',
          cursor: 'auto'
        }
      },
      selected: {
        true: {
          backgroundColor: '#F0F9FF'
        }
      },
      canEdit: {
        true: {
          cursor: 'cell'
        }
      }
    }
  }
)
