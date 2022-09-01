import { Box, Divider, Stack } from '@mui/material'
import About from './common/about.component'
import SearchResults from './search-results.component'
import { store } from '../../store/ShareUrlStore'
import SearchWindowHeader from './search-window-header.component'
import { SearchWindow as SearchWindowType } from './types/share.type'
import { observer } from 'mobx-react'

const SearchWindow = (props: SearchWindowType): React.ReactElement => {
  const headerProps = {
    ...props?.header,
    store
  }
  return (
        <Box>
          <Stack
            sx={{
              width: 512,
              opacity: 1,
              boxShadow: 3
            }}
            >
              <SearchWindowHeader {...headerProps}/>
              <Divider />
              <Box sx={{
                height: 272,
                overflow: 'auto'
              }}>
                <SearchResults/>
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

export default observer(SearchWindow)
