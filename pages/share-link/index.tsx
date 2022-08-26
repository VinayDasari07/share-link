import { Box } from "@mui/material"
import { Fragment } from "react"
import ShareBtn from "../../components/share-btn.component";

const ShareLink = () => {
    return (
        <Fragment>
            <Box
                sx={{
                    position: "absolute",
                    margin: "auto",
                    width: 800,
                    height: 600,
                }}
            >
                <ShareBtn /> 
            </Box>  
        </Fragment>
    )
}

export default ShareLink