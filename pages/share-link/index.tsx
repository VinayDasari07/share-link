import { Box } from '@mui/material'
import { Fragment } from 'react'
import ShareBtn from '../../src/components/share-btn.component'
import { share, searchWindow } from '../../content'
import SearchEntities from '../../src/components/search-entities.component'
import { store } from '../../store/ShareUrlStore'
import { observer } from 'mobx-react'

const ShareLink = (): React.ReactElement => {
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
                {!store?.clickedOnSearch && <ShareBtn {...share}/>}
                <Box sx={{ height: 20 }}></Box>
                {store?.clickedOnSearch && (
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

export default observer(ShareLink)
