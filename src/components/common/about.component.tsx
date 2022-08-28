import { Box, useTheme } from '@mui/material'
import Image from 'next/image'
import { About as PropType } from '../types/share.type'
import { Typography } from './typography.component'

const About = (props: PropType): React.ReactElement => {
  const theme = useTheme()
  return (
    <Box sx={{
      width: '100%',
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
              <Image src={props?.logoUrl} alt="question mark" width={12} height={12} />
          </Box>
          <Typography
              variant="body2"
              sx={{ color: '#6B7280' }}
          >
              {props?.ctaText}
          </Typography>
      </Box>
  )
}

export default About
