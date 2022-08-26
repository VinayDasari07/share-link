import { Box, useTheme } from "@mui/material"
import PublicIcon from '@mui/icons-material/Public';

const ShareHeader = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            height: theme.spacing(10),
            display: "flex"
        }}>
          <PublicIcon />  
            
        </Box>
    )
}

export default ShareHeader