import { Box, Divider, Stack, useTheme } from '@mui/material'
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
                <SearchInput {...props?.inputField}/>
            </Box>
            <Divider />
            <ShareFooter {...props?.footer}/>
        </Stack>
  )
}

export default ShareModal
