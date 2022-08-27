import { Box, Button } from "@mui/material"
import ShareIcon from '@mui/icons-material/Share'
import { useState } from "react"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Modal1 } from "./types/share.type"

const ShareModal = dynamic(() => import('./share-modal.component'), {
    ssr: false,
})

interface Props {
    shareBtn: string
    modal1: Modal1
}
const ShareBtn = (props: Props) => {
    const [showModal, setShowModal] = useState<Boolean>(false)
    return (
        <Box sx={{
            position: "relative",
            top: "25%",
            left: "25%"
        }}>
            <Button variant="contained" onClick={() => setShowModal((prevState: Boolean) => !prevState)} endIcon={<ShareIcon />}>
                {props?.shareBtn}
            </Button>
            {showModal && (
                <ShareModal {...props?.modal1}/> 
            )}
        </Box>
    )
}

export default ShareBtn