/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as React from 'react'
import { Box, Button } from '@mui/material'
import { SearchWindowHeader as SearchWindowHeaderType } from './types/share.type'
import { Typography } from './common/typography.component'
import InputField from './common/input-field.component'
import { SelectOptions } from './common/select-options.component'
import { observer } from 'mobx-react'

const SearchWindowHeader = (props: SearchWindowHeaderType): React.ReactElement => {
  const handleChange = (event: any): void => {
    props?.store?.updateSearchResults(event.target.value)
  }
  const handleOnKeyPress = (event: any): void => {
    if (event.key === 'Enter') {
      const numberOfPersonsFound = props?.store?.searchResults?.entity?.person?.length ?? 0
      const numberOfGroupsFound = props?.store?.searchResults?.entity?.group?.length ?? 0
      if (Boolean(props?.store?.searchInput) &&
      (numberOfPersonsFound !== 0 ||
        numberOfGroupsFound !== 0)) {
        console.log('testing-----event', event, numberOfPersonsFound, numberOfGroupsFound)
        props?.store?.toggleHasSelectedOnSearch()
      }
    }
  }
  const hasSelectedOnSearch = props?.store?.hasSelectedOnSearch ?? false
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
            <Box
              width='100%'
            >
              {!(hasSelectedOnSearch) && (
                <InputField
                  autoFocus={true}
                  placeholder={props?.inputField?.placeholder}
                  handleOnKeyPress={handleOnKeyPress}
                  onChange={handleChange}
                />
              )}
              {(hasSelectedOnSearch) && (
                <Box>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              <Box>
                <SelectOptions
                  size={props?.dropdown?.size}
                  options={props?.dropdown?.options}/>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
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
        </Box>
    </Box>

  )
}

export default observer(SearchWindowHeader)
