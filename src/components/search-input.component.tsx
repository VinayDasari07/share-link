import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import { Box, Button } from '@mui/material'
import { InputField } from './types/share.type'
import { Typography } from './common/typography.component'

export default function SearchInput (props: InputField): React.ReactElement {
  return (
    <Box sx={{ p: '0 0 16px' }}>
        <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={props?.placeholder}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => console.log('testing---', event.target.value)}
                inputProps={{ 'aria-label': `Search ${props?.placeholder}` }}
            />
            <Button sx={{
              background: '#F9FAFB',
              transition: 'background 20ms ease-in 0s',
              '&:hover': {
                background: 'rgba(55,53,47,0.08)',
                cursor: 'pointer'
              }
            }}>
                <Typography>{props?.invite}</Typography>
            </Button>
        </Paper>
    </Box>

  )
}
