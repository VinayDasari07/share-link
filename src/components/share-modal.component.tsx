import { Box, Divider, Stack, useTheme } from '@mui/material'
import { bookmarked } from '../../content'
import BookmarkedEntity from './bookmared-enitites.component'
import SearchInput from './search-input.component'
import ShareFooter from './share-footer.component'
import ShareHeader from './share-header.component'
import { Modal1 } from './types/share.type'

const ShareModal = (props: Modal1): React.ReactElement => {
  const theme = useTheme()
  return (
        <Stack sx={{
          alignItems: 'center',
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
                  p: 2
                }}>
                    <Box>
                      <SearchInput {...props?.inputField}/>
                      <BookmarkedEntity {...bookmarked}/>
                    </Box>
                </Box>
            </Box>
            <Divider />
            <ShareFooter {...props?.footer}/>
        </Stack>
  )
}

export default ShareModal
