import { Box, useTheme, Switch, styled, Typography} from "@mui/material"
import PublicIcon from '@mui/icons-material/Public';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
  
const ShareHeader = () => {
    const theme = useTheme()
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <Box sx={{
            height: theme.spacing(10),
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
        }}>
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", 
            marginRight: theme.spacing(2)
        }}>
            <PublicIcon fontSize="large"/>          
        </Box>
        <Box sx={{
            marginRight: "auto"
        }}>
            <Box>
                <Typography variant="body1">Share to Web</Typography>
            </Box>
            <Box>
                <Typography sx={{color: "#6B7280"}} variant="body2">Publish and share link with anyone</Typography>    
            </Box>
        </Box>
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", 
        }}>
            <AntSwitch {...label} defaultChecked />
        </Box>
            
        </Box>
    )
}

export default ShareHeader