import { Typography, Box } from "@mui/material"
import { Footer } from "./types/share.type"

const ShareFooter = (props: Footer) => {
    return (
        <Box>
            <Typography>{props?.text1}</Typography>
        </Box>
    )
}

export default ShareFooter