import * as React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface Props {
  options: string[]
}

export const SelectOptions = (props: Props): React.ReactElement => {
  const [accessType, setAccessType] = React.useState(props?.options[0])

  const handleChange = (event: SelectChangeEvent): void => {
    setAccessType(event.target.value)
  }

  return (
    <Box>
      <FormControl>
        <Select
            sx={{
              paddingBottom: '8px',
              fontSize: '12px',
              color: ' #6B7280',
              '& .MuiOutlinedInput-notchedOutline': {
                border: '0px'
              },
              '& .MuiOutlinedInput-input': {
                paddingBottom: '8px'
              }
            }}
          value={accessType}
          label="Age"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Access types' }}
        >
          {props?.options?.map((option: string) => {
            return (
                <MenuItem key={option} value={option}>{option}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
