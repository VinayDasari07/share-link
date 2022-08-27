/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box, Button } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import { useState } from 'react'
import dynamic from 'next/dynamic'

import { Modal1 } from './types/share.type'

const ShareModal = dynamic(async () => await import('./share-modal.component'), {
  ssr: false
})

interface Props {
  shareBtn: string
  modal1: Modal1
}
const ShareBtn = (props: Props): React.ReactElement => {
  const [showModal, setShowModal] = useState<Boolean>(false)
  const toggleModal = (): void => {
    setShowModal((prevState: Boolean) => !prevState)
  }
  return (
        <Box sx={{
          position: 'relative',
          top: '25%',
          left: '25%'
        }}>
            <Button
                variant="contained"
                onClick={toggleModal}
                endIcon={<ShareIcon />}
            >
                {props?.shareBtn}
            </Button>
            {showModal && (
                <ShareModal {...props?.modal1}/>
            )}
        </Box>
  )
}

export default ShareBtn
