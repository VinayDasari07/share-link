import { Box, Divider, useTheme } from "@mui/material"
import ShareFooter from "./share-footer.component"
import ShareHeader from "./share-header.component"

const ShareModal = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            // position: "relative",
            width: theme.spacing(64),
            height: theme.spacing(32.75),
            opacity: 1,
            boxShadow: 3
        }}>
            <ShareHeader />
            <Divider />
            <ShareFooter />
        </Box> 
    )
}

export default ShareModal