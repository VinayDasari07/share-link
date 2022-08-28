import * as React from 'react'
import InputBase from '@mui/material/InputBase'
import { InputField as InputFieldType } from '../types/share.type'
import { Box } from '@mui/material'

export default function InputField (props: InputFieldType): React.ReactElement {
  return (
    <Box sx={{ width: '100%' }}>
        <InputBase
            sx={{ ml: 1, flex: 1, width: '100%' }}
            placeholder={props?.placeholder}
            onChange={props?.onChange}
            inputProps={{ 'aria-label': `Search ${props?.placeholder}` }}
        />
    </Box>

  )
}
