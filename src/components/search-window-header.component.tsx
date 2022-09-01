/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as React from 'react'
import { Box, Button, SelectChangeEvent } from '@mui/material'
import { SearchWindowHeader as SearchWindowHeaderType, SearchProfile } from './types/share.type'
import { Typography } from './common/typography.component'
import InputField from './common/input-field.component'
import { SelectOptions } from './common/select-options.component'
import { observer } from 'mobx-react'
import Pill from './common/pill.component'
import { store } from '../../store/ShareUrlStore'

const SearchWindowHeader = (props: SearchWindowHeaderType): React.ReactElement => {
  const handleChange = (event: any): void => {
    store?.updateSearchResults(event.target.value)
  }
  const handleOnKeyPress = (event: any): void => {
    if (event.key === 'Enter') {
      store?.getProfileFromInputOnSearch()
      store?.restoreSearchResults()
    }
  }

  const removePill = (profile: SearchProfile): void => {
    store?.removeProfileInvitedOnSearch(profile)
  }

  const handleDropdownChange = (event: SelectChangeEvent): void => {
    store?.updateAccessType(event.target.value)
  }

  const handleInviteClick = (event: any): void => {
    store?.updateBookmarkedProfiles()
  }
  const hasSelectedOnSearch = store?.profileInvitedOnSearch?.length !== 0 ?? false
  return (
    <Box sx={{
      width: '100%',
      height: hasSelectedOnSearch ? '' : 58,
      background: '#F3F4F6'
    }}>
        <Box
            sx={{
              p: '8px 16px',
              width: '100%',
              display: 'flex',
              alignItems: 'center'
            }}
        >
            <Box
              sx={{
                width: hasSelectedOnSearch ? '100%' : ''
              }}
            >
              {(hasSelectedOnSearch) && (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                  }}
                >
                  {
                    store?.profileInvitedOnSearch?.map((profile) => {
                      return (
                        <Box
                          key={profile?.name}
                          sx={{
                            p: 0.5
                          }}
                        >
                          <Pill
                            name={profile?.name}
                            handleClick={() => removePill(profile)}
                          />
                        </Box>

                      )
                    })
                  }
                  <InputField
                    value={store?.searchInput}
                    autoFocus={true}
                    placeholder={props?.inputField?.placeholder}
                    handleOnKeyPress={handleOnKeyPress}
                    onChange={handleChange}
                  />
                </Box>
              )}
            </Box>
            <Box
              sx={{
                width: hasSelectedOnSearch ? '' : '100%'
              }}
            >
              {(!hasSelectedOnSearch) && (
                  <InputField
                    value={store?.searchInput}
                    autoFocus={true}
                    placeholder={props?.inputField?.placeholder}
                    handleOnKeyPress={handleOnKeyPress}
                    onChange={handleChange}
                  />
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
                  size='medium'
                  options={props?.dropdown?.options}
                  getSelectedEvent={handleDropdownChange}
                  initialValue=''
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Button
                  onClick={handleInviteClick}
                  sx={{
                    ml: 1.5,
                    background: '#FFFFFF',
                    transition: 'background 20ms ease-in 0s',
                    '&:hover': {
                      background: 'rgba(55,53,47,0.08)',
                      cursor: 'pointer'
                    }
                  }}
                >
                    <Typography>{props?.button}</Typography>
                </Button>
              </Box>
            </Box>
        </Box>
    </Box>

  )
}

export default observer(SearchWindowHeader)
