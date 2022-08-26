import { Box, useTheme } from "@mui/material"
import ShareHeader from "./share-header.component"

const ShareModal = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            // position: "relative",
            width: theme.spacing(64),
            height: theme.spacing(32.75),
            border: 1
        }}>
            <ShareHeader />
        </Box> 
    )
}

export default ShareModal