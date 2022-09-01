import { Box, Button } from '@mui/material'
import { share, searchWindow } from '../../content'
import SearchWindow from '../../src/components/search-window.component'
import { store } from '../../store/ShareUrlStore'
import { observer } from 'mobx-react'
import ShareWindow from '../../src/components/share-window.component'
import ShareIcon from '@mui/icons-material/Share'

const ShareLink = (): React.ReactElement => {
  const toggleModal = (): void => {
    store?.toggleShowShareWindow()
  }
  return (
        <Box
          sx={{
            margin: 'auto',
            width: 800,
            height: 600,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box>
            <Box>
              {!store?.clickedOnSearch && (
                <Box>
                  <Button
                      variant='contained'
                      onClick={toggleModal}
                      endIcon={<ShareIcon />}
                  >
                      {share?.shareBtn}
                  </Button>
                  {store?.showShareWindow && (
                      <ShareWindow {...share?.modal1}/>
                  )}
                </Box>
              )}
            </Box>
            <Box sx={{ height: 20 }}></Box>
            {store?.clickedOnSearch && (
              <Box>
              <SearchWindow {...searchWindow}/>
              </Box>
            )}
          </Box>
        </Box>
  )
}

export default observer(ShareLink)
