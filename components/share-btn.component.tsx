import { Box, Button } from "@mui/material"
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";
import ShareModal from "./share-modal.component";

const ShareBtn = () => {
    const [showModal, setShowModal] = useState<Boolean>(false)
    return (
        <Box sx={{
            position: "relative",
            top: "25%",
            left: "25%"
        }}>
            <Button variant="contained" onClick={() => setShowModal((prevState: Boolean) => !prevState)} endIcon={<ShareIcon />}>
                Share
            </Button>
            {showModal && (
                <ShareModal /> 
            )}
        </Box>
    )
}

export default ShareBtn