/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box, styled } from '@mui/material'
import { observer } from 'mobx-react'
import { ProfileInfo } from './common/profile.component'
import { store } from '../../store/ShareUrlStore'
import { useEffect, useState } from 'react'
import { SearchProfile } from './types/share.type'

interface ProfileContProps {
  index: number
  hasSearchedInput: boolean
  hoveredIndex: number
  name: string
}

const getCursor = (props: ProfileContProps): string => {
  const hasHovered = props?.index === props?.hoveredIndex
  const hasAlreadySelected = store?.profileInvitedOnSearch?.find((profile) => profile?.name === props?.name) ?? false
  const hasAlreadyBookmarked = store?.bookmarkedProfiles?.find((profile) => profile?.name === props?.name) ?? false
  let cursor = ''
  if (hasAlreadySelected || hasAlreadyBookmarked) {
    cursor = 'not-allowed'
  } else if (hasHovered) {
    cursor = 'pointer'
  }
  return cursor
}
const ProfileCont = styled(Box)<ProfileContProps>`
    padding: 0px 16px;
    background: ${props => props?.index === props?.hoveredIndex ? '#F3F4F6' : ''};
    cursor: ${getCursor};
`
const SearchResults = (): React.ReactElement => {
  const searchResultsEntity = store?.searchResults?.entity ?? {}
  const [hoveredIndex, setHoveredIndex] = useState<number>(1)

  useEffect(() => {
    if (store?.searchInput !== '' &&
        (searchResultsEntity?.person?.length) === 0 &&
        (searchResultsEntity?.group?.length) !== 0) {
      setHoveredIndex(101)
      store?.updateIndexOfSelectedProfileOnSearch(101)
    }
  }, [searchResultsEntity?.person?.length, searchResultsEntity?.group?.length])

  const handleOnMouseEnter = (index: number): void => {
    setHoveredIndex(index)
    store?.updateIndexOfSelectedProfileOnSearch(index)
  }

  const handleClick = (): void => {
    store?.getProfileFromInputOnSearch()
  }

  const renderProfile = (entity: SearchProfile, index: number): React.ReactElement => {
    return (
      <ProfileCont
        key={index}
        index={index}
        name={entity?.name}
        hoveredIndex={hoveredIndex}
        hasSearchedInput={Boolean(store?.searchInput)}
        onMouseEnter={() => handleOnMouseEnter(index)}
        onClick={handleClick}
      >
        <ProfileInfo
            {...entity}
            variant='small'
        />
      </ProfileCont>
    )
  }

  return (
        <Box sx={{
          p: 2
        }}>
          <Box>
            {((searchResultsEntity?.person?.length) === 0) && ((searchResultsEntity?.group?.length) === 0) && 'No Results found'}
          </Box>
          <Box sx={{
            p: '0 24px 8px',
            fontWeight: 500
          }}>
            {(Boolean(searchResultsEntity?.person?.length)) && 'Select a person'}
          </Box>
          <Box sx={{
            p: '0 8px 8px'
          }}>
            {searchResultsEntity?.person?.map((person, ind) => {
              const index = ind + 1
              return renderProfile(person, index)
            })}
          </Box>
          <Box sx={{
            p: '0px 24px 8px',
            fontWeight: 500
          }}>
            {(Boolean(searchResultsEntity?.group?.length)) && 'Select a group'}
          </Box>
          <Box sx={{
            p: '0 8px 8px'
          }}>
            {searchResultsEntity?.group?.map((group, ind) => {
              const index = (ind + 1) + 100
              return renderProfile(group, index)
            })}
          </Box>
        </Box>
  )
}

export default observer(SearchResults)
