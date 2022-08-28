import { Box, Divider, Stack } from '@mui/material'
import About from './common/about.component'
import SearchWindowHeader from './search-window-header.component'
import { SearchWindow } from './types/share.type'

const SearchEntities = (props: SearchWindow): React.ReactElement => {
  console.log('testing props', props)
  return (
        <Box>
           <Stack
                sx={{
                  alignItems: 'center',
                  width: 512,
                  height: 200,
                  opacity: 1,
                  boxShadow: 3
                }}
            >
              <SearchWindowHeader {...props?.header}/>
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
