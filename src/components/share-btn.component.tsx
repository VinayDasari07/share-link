/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box, Button } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import dynamic from 'next/dynamic'
import { Modal1 } from './types/share.type'
import { store } from '../../store/ShareUrlStore'
import { observer } from 'mobx-react'

const ShareModal = dynamic(async () => await import('./share-modal.component'), {
  ssr: false
})

interface Props {
  shareBtn: string
  modal1: Modal1
}

const ShareBtn = (props: Props): React.ReactElement => {
  const toggleModal = (): void => {
    store?.toggleShowShareWindow()
  }
  return (
        <Box
          sx={{
            position: 'relative',
            top: '25%',
            left: '25%'
          }}
        >
            <Button
                variant='contained'
                onClick={toggleModal}
                endIcon={<ShareIcon />}
            >
                {props?.shareBtn}
            </Button>
            {store?.showShareWindow && (
                <ShareModal {...props?.modal1}/>
            )}

        </Box>
  )
}

export default observer(ShareBtn)
