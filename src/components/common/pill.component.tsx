import { Box } from '@mui/material'
import { Typography } from './typography.component'
import Image from 'next/image'

interface PropTypes {
  name: string
  handleClick?: (event: any) => void
}

const Pill = (props: PropTypes): React.ReactElement => {
  return (
        <Box
            sx={{
              width: '105px',
              height: '28px',
              display: 'flex',
              justifyContent: 'space-around',
              background: '#E5E7EB'
            }}
        >
            <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
            >
                <Typography variant='body1'>
                    Tom Cook
                </Typography>
            </Box>
            <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  '&:hover': {
                    cursor: 'pointer'
                  }
                }}
                onClick={(event) => props?.handleClick?.(event)}
            >
                <Image src='/cancel.svg' alt="Cancel" width={9.6} height={9.6} />
            </Box>
        </Box>
  )
}

export default Pill
