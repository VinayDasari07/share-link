import * as React from 'react'
import { Box, Button } from '@mui/material'
import { SearchWindowHeader as SearchWindowHeaderType } from './types/share.type'
import { Typography } from './common/typography.component'
import InputField from './common/input-field.component'
import { SelectOptions } from './common/select-options.component'

export default function SearchWindowHeader (props: SearchWindowHeaderType): React.ReactElement {
  const handleChange = (): void => {
    console.log('testing------')
  }
  return (
    <Box sx={{
      width: '100%',
      height: 58,
      background: '#F3F4F6'
    }}>
        <Box
            sx={{
              p: '8px 16px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              background: '#F3F4F6'
            }}
        >
            <InputField
              placeholder={props?.inputField?.placeholder}
              onChange={handleChange}
            />
            <SelectOptions height={30} options={props?.dropdown?.options}/>
            <Button sx={{
              ml: 1.5,
              background: '#FFFFFF',
              transition: 'background 20ms ease-in 0s',
              '&:hover': {
                background: 'rgba(55,53,47,0.08)',
                cursor: 'pointer'
              }
            }}>
                <Typography>{props?.button}</Typography>
            </Button>
        </Box>
    </Box>

  )
}
