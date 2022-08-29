import { Box } from '@mui/material'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { ProfileInfo } from './common/profile.component'
import { SearchResults as SearchResultsType } from './types/share.type'

const SearchResults = (props: SearchResultsType): React.ReactElement => {
  return (
        <Box sx={{
          p: 2
        }}>
            <Box>
              {((props?.entity?.person?.length) === 0) && ((props?.entity?.group?.length) === 0) && 'No Results found'}
            </Box>
            <Box sx={{
              p: '0 8px 8px'
            }}>
                {(Boolean(props?.entity?.person?.length)) && 'Select a person'}
            </Box>
            <Box sx={{
              p: '0 8px 8px'
            }}>
                {props?.entity?.person?.map((person, index) => {
                  // if (index === 0 || index === 1) {
                  return (
                        <ProfileInfo
                            key={index}
                            {...person}
                            variant='small'
                        />
                  )
                  // }
                  // return null
                })}
            </Box>
            <Box sx={{
              p: '0px 8px 8px'
            }}>
                {(Boolean(props?.entity?.group?.length)) && 'Select a group'}
            </Box>
            <Box sx={{
              p: '0 8px 8px'
            }}>
            {props?.entity?.group?.map((group, index) => {
              // if (index === 0 || index === 1) {
              return (
                    <ProfileInfo
                        key={index}
                        {...group}
                        variant='small'
                    />
              )
              // }
              // return null
            })}
            </Box>
        </Box>
  )
}

export default observer(SearchResults)
