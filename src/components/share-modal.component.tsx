import { Box, Divider, Stack, useTheme } from "@mui/material"
import ShareFooter from "./share-footer.component"
import ShareHeader from "./share-header.component"
import { Modal1 } from "./types/share.type"

const ShareModal = (props: Modal1) => {
    const theme = useTheme()
    return (
        <Stack sx={{
            // position: "relative",
            width: theme.spacing(64),
            height: theme.spacing(32.75),
            opacity: 1,
            boxShadow: 3
        }}>
            <ShareHeader {...props?.header}/>
            <Divider />
            <ShareFooter {...props?.footer}/>
        </Stack> 
    )
}

export default ShareModal