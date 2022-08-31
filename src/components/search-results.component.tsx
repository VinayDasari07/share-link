import { Box, styled } from '@mui/material'
import { observer } from 'mobx-react'
import { ProfileInfo } from './common/profile.component'
import { store } from '../../store/ShareUrlStore'
import { useState } from 'react'

interface ProfileContProps {
  index: number
  hasSearchedInput: boolean
  hoveredIndex: number
}
const handleHoverColor = (props: ProfileContProps): string => {
  if (
    (props?.index === props?.hoveredIndex && props?.hasSearchedInput)
  ) {
    return '#F3F4F6'
  } else return ''
}
const ProfileCont = styled(Box)<ProfileContProps>`
    padding: 0px 16px;
    background: ${handleHoverColor}
`
const SearchResults = (): React.ReactElement => {
  const searchResultsEntity = store?.searchResults?.entity ?? {}
  const [hoveredIndex, setHoveredIndex] = useState<number>(1)
  const handleOnMouseEnter = (index: number): void => {
    console.log('testing------handleOnMouseEnter', index)
    setHoveredIndex(index)
  }
  // const handleOnMouseLeave = (index: number): void => {
  //   setHoveredIndex(index)
  // }
  return (
        <Box sx={{
          p: 2
        }}>
            <Box>
              {((searchResultsEntity?.person?.length) === 0) && ((searchResultsEntity?.group?.length) === 0) && 'No Results found'}
            </Box>
            <Box sx={{
              p: '0 24px 8px'
            }}>
                {(Boolean(searchResultsEntity?.person?.length)) && 'Select a person'}
            </Box>
            <Box sx={{
              p: '0 8px 8px'
            }}>
                {searchResultsEntity?.person?.map((person, ind) => {
                  const index = ind + 1
                  return (
                    <ProfileCont
                      key={index}
                      index={index}
                      hoveredIndex={hoveredIndex}
                      hasSearchedInput={Boolean(store?.searchInput)}
                      onMouseEnter={() => handleOnMouseEnter(index)}
                      // onMouseLeave={() => handleOnMouseLeave(index)}
                    >
                      <ProfileInfo
                          {...person}
                          variant='small'
                      />
                    </ProfileCont>
                  )
                })}
            </Box>
            <Box sx={{
              p: '0px 24px 8px'
            }}>
                {(Boolean(searchResultsEntity?.group?.length)) && 'Select a group'}
            </Box>
            <Box sx={{
              p: '0 8px 8px'
            }}>
            {searchResultsEntity?.group?.map((group, ind) => {
              const index = (ind + 1) + 100
              return (
                <ProfileCont
                  key={index}
                  index={index}
                  hoveredIndex={hoveredIndex}
                  hasSearchedInput={Boolean(store?.searchInput)}
                  onMouseEnter={() => handleOnMouseEnter(index)}
                  // onMouseLeave={() => handleOnMouseLeave(index)}
                >
                  <ProfileInfo
                      key={index}
                      {...group}
                      variant='small'
                  />
                </ProfileCont>
              )
            })}
            </Box>
        </Box>
  )
}

export default observer(SearchResults)
