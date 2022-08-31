import * as React from 'react'
import InputBase from '@mui/material/InputBase'
import { InputField as InputFieldType } from '../types/share.type'
import { Box } from '@mui/material'

export default function InputField (props: InputFieldType): React.ReactElement {
  return (
    <Box sx={{ width: '100%' }}>
        <InputBase
            onKeyPress={props?.handleOnKeyPress}
            sx={{ ml: 1, flex: 1, width: '100%' }}
            placeholder={props?.placeholder}
            onChange={props?.onChange}
            autoFocus={props?.autoFocus}
            inputProps={{ 'aria-label': `${props?.placeholder}` }}
        />
    </Box>

  )
}
