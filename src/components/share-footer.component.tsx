import { Typography, Box, useTheme } from '@mui/material'
import { Footer } from './types/share.type'
import Image from 'next/image'

const ShareFooter = (props: Footer): React.ReactElement => {
  const theme = useTheme()
  return (
        <Box
            onClick={(e) => e.preventDefault}
            sx={{
              width: '100%',
              height: 48,
              display: 'flex',
              alignItems: 'flex-start'
            }}
        >
            <Box sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 1
            }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  transition: 'background 20ms ease-in 0s',
                  '&:hover': {
                    background: 'rgba(55,53,47,0.08)',
                    cursor: 'pointer'
                  },
                  borderRadius: 1,
                  padding: 1
                }}
                onClick={() => window.open(props?.ctaUrl)}
                >
                    <Box sx={{
                      marginRight: theme.spacing(0.75)
                    }}>
                        <Image src={props?.logo1} alt="question mark" width={12} height={12} />
                    </Box>
                    <Typography
                        variant="body2"
                        sx={{ color: '#6B7280' }}
                    >
                        {props?.text1}
                    </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  transition: 'background 20ms ease-in 0s',
                  '&:hover': {
                    background: 'rgba(55,53,47,0.08)',
                    cursor: 'pointer'
                  },
                  borderRadius: 1,
                  padding: 1
                }}>
                    <Box sx={{
                      marginRight: theme.spacing(0.75)
                    }}>
                        <Image src={props?.logo2} alt="copy link" width={12} height={12} />
                    </Box>
                    <Typography
                        variant="body2"
                        sx={{ color: '#111827', fontWeight: 500 }}
                    >
                        {props?.text2}
                    </Typography>
                </Box>
            </Box>
        </Box>
  )
}

export default ShareFooter
