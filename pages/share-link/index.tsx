import { Box } from '@mui/material'
import { Fragment } from 'react'
import ShareBtn from '../../src/components/share-btn.component'
import { share, searchWindow } from '../../content'
import SearchEntities from '../../src/components/search-entities.component'

const ShareLink = (): React.ReactElement => {
  const showSearchWindow = true
  return (
        <Fragment>
            <Box
                sx={{
                  position: 'absolute',
                  margin: 'auto',
                  width: 800,
                  height: 600
                }}
            >
                <ShareBtn {...share}/>
                <Box sx={{ height: 20 }}></Box>
                {showSearchWindow && (
                  <Box
                    sx={{
                      position: 'relative',
                      top: '30%',
                      left: '25%'
                    }}
                  >
                  <SearchEntities {...searchWindow}/>
                  </Box>
                )}
            </Box>

        </Fragment>
  )
}

export default ShareLink
