import { Box } from '@mui/material'
import { Fragment } from 'react'
import ShareBtn from '../../src/components/share-btn.component'
import { share } from '../../content'

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
                <ShareBtn {...share}/>
            </Box>
        </Fragment>
  )
}

export default ShareLink
