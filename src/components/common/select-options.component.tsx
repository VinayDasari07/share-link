import * as React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Typography, TypographyProps } from './typography.component'
import { TypographyVariant } from '@mui/material'

interface Props {
  options: string[]
  size?: 'small' | 'medium'
  textVariant?: TypographyVariant
  style?: TypographyProps
}

const SelectOptionsComp = ({
  options = [],
  size = 'medium',
  textVariant,
  style
}: Props): React.ReactElement => {
  const [accessType, setAccessType] = React.useState(options[0])
  const handleChange = (event: SelectChangeEvent): void => {
    setAccessType(event.target.value)
  }

  return (
    <Box sx={{
      transition: 'background 20ms ease-in 0s',
      '&:hover': {
        background: 'rgba(55,53,47,0.08)',
        cursor: 'pointer'
      },
      borderRadius: 1
    }}>
      <FormControl>
        <Select
            size={size}
            sx={{
              fontSize: '12px',
              color: ' #6B7280',
              '& .MuiOutlinedInput-notchedOutline': {
                border: '0px'
              }
            }}
          value={accessType}
          label="Age"
          onChange={handleChange}
          inputProps={{ height: '40px', 'aria-label': 'Access types' }}
        >
          {options?.map((option: string) => {
            return (
                <MenuItem key={option} value={option}>
                  <Typography
                    variant={textVariant}
                  >
                    {option}
                  </Typography>
                </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}

export const SelectOptions = React.memo(SelectOptionsComp)
