import { Box, Divider, Stack } from '@mui/material'
import { searchResults } from '../../content'
import About from './common/about.component'
import SearchResults from './search-results.component'
import SearchWindowHeader from './search-window-header.component'
import { SearchWindow } from './types/share.type'

const SearchEntities = (props: SearchWindow): React.ReactElement => {
  console.log('testing props', props)
  return (
        <Box>
           <Stack
                sx={{
                  width: 512,
                  opacity: 1,
                  boxShadow: 3
                }}
            >
              <SearchWindowHeader {...props?.header}/>
              <Divider />
              <Box sx={{
                height: 272,
                overflow: 'auto'
              }}>
                <SearchResults {...searchResults}/>
              </Box>
              <Divider />
              <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 1,
                background: '#F3F4F6'
              }}>
                <About {...props?.footer?.about}/>
              </Box>
            </Stack>

        </Box>
  )
}

export default SearchEntities
