import { Box } from '@mui/material'
import { ProfileInfo } from './common/profile.component'
import { SearchResults as SearchResultsType } from './types/share.type'

const SearchResults = (props: SearchResultsType): React.ReactElement => {
  console.log('props', props)
  return (
        <Box sx={{
          p: 2
        }}>
            <Box sx={{
              p: '0 8px 8px'
            }}>
                Select a person
            </Box>
            <Box sx={{
              p: '0 8px 8px'
            }}>
                {props?.entity?.person?.map((person, index) => {
                  if (index === 0 || index === 1) {
                    return (
                        <ProfileInfo
                            key={index}
                            {...person}
                            variant='small'
                        />
                    )
                  }
                  return null
                })}
            </Box>
            <Box sx={{
              p: '0px 8px 8px'
            }}>
                Select a group
            </Box>
            <Box sx={{
              p: '0 8px 8px'
            }}>
            {props?.entity?.group?.map((group, index) => {
              if (index === 0 || index === 1) {
                return (
                    <ProfileInfo
                        key={index}
                        {...group}
                        variant='small'
                    />
                )
              }
              return null
            })}
            </Box>

        </Box>
  )
}

export default SearchResults
