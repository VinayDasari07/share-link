import { Box, useTheme } from '@mui/material'
import { AntSwitch } from '../../styles/components/switches'
import { Header } from './types/share.type'
import Image from 'next/image'
import { Typography } from './common/typography.component'

const ShareHeader = (props: Header): React.ReactElement => {
  const theme = useTheme()
  const label = { inputProps: { 'aria-label': 'Switch Share to web' } }

  return (
        <Box sx={{
          width: '100%',
          height: theme.spacing(10),
          display: 'flex',
          alignItems: 'flex-start',
          transition: 'background 20ms ease-in 0s',
          '&:hover': {
            background: 'rgba(55,53,47,0.08)',
            cursor: 'pointer'
          }
        }}>
            <Box sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 2

            }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginRight: theme.spacing(2)
                }}>
                    <Image src={props?.logoUrl} alt="globe Logo" width={32} height={32} />
                </Box>
                <Box sx={{
                  marginRight: 'auto'
                }}>
                    <Box>
                        <Typography variant="body1">{props?.title}</Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ color: '#6B7280' }}
                            variant="body2"
                        >
                            {props?.subtitle}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                    <AntSwitch {...label} />
                </Box>
            </Box>
        </Box>
  )
}

export default ShareHeader
