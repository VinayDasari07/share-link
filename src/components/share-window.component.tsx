import { Box, Divider, Stack, useTheme } from '@mui/material'
import BookmarkedProfiles from './bookmared-profiles.component'
import SearchInput from './search-input.component'
import ShareFooter from './share-footer.component'
import ShareHeader from './share-header.component'
import { Modal1 } from './types/share.type'
import { store } from '../../store/ShareUrlStore'
import { observer } from 'mobx-react'

const ShareWindow = (props: Modal1): React.ReactElement => {
  const theme = useTheme()
  const searchInputProps = {
    ...props?.inputField,
    store
  }
  return (
        <Stack sx={{
          width: theme.spacing(64),
          opacity: 1,
          boxShadow: 3
        }}>
            <Box
                sx={{
                  width: '100%'
                }}>
                <ShareHeader {...props?.header}/>
                <Divider />
                <Box sx={{
                  p: 2,
                  height: 194,
                  overflow: 'auto'
                }}>
                    <Box>
                      <Box>
                        <SearchInput {...searchInputProps}/>
                      </Box>
                      <Box>
                        <BookmarkedProfiles />
                      </Box>
                    </Box>
                </Box>
            </Box>
            <Divider />
            <ShareFooter {...props?.footer}/>
        </Stack>
  )
}

export default observer(ShareWindow)
