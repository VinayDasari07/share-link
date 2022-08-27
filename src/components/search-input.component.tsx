import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box, Button, Typography } from '@mui/material';
import { InputField } from './types/share.type';

export default function SearchInput(props: InputField) {
  return (
    <Box sx={{
        p: 2
    }}>
        <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: "100%" }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={props?.placeholder}
                inputProps={{ 'aria-label': `Search ${props?.placeholder}` }}
            />
            <Button sx={{
                background: "#F9FAFB"
            }}>
                <Typography>{props?.invite}</Typography>
            </Button>
        </Paper>
    </Box>

  )
}
