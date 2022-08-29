import * as React from 'react'
import Paper from '@mui/material/Paper'
import { Box, Button } from '@mui/material'
import { SearchInput as SearchInputType } from './types/share.type'
import { Typography } from './common/typography.component'
import InputField from './common/input-field.component'
import { observer } from 'mobx-react'

const SearchInput = (props: SearchInputType): React.ReactElement => {
  const handleClick = (): void => {
    props?.store?.toggleClickedOnSearch()
  }
  return (
    <Box sx={{ p: '0 0 16px' }}>
        <Paper
            onClick={handleClick}
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
        >
            <InputField
              placeholder={props?.input?.placeholder}
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

export default observer(SearchInput)
