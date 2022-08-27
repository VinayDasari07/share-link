import { Box, styled, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ProfileInfo as PropTypes, ProfileInfoVariant } from '../types/share.type'

const ProfileLogoCont = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
interface ProfileLogoProps {
  width: number
  height: number
}
const ProfileLogo = styled(Box)<ProfileLogoProps>`
    width: ${props => props?.width};
    height: ${props => props?.height};
    margin-right: ${props => props?.theme.spacing(1)};
    border-radius: ${props => props?.theme.spacing(2.5)};
    overflow: hidden;
`
const ProfileInfoCont = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const ProfileInfo = (props: PropTypes): React.ReactElement => {
  const theme = useTheme()
  const getProfileLogoDimensions = (variant: ProfileInfoVariant): number => {
    switch (variant) {
      case 'small':
        return 24
      case 'medium':
        return 40
      default:
        return 40
    }
  }
  const ProfileContWidth = getProfileLogoDimensions(props?.variant)
  const ProfileLogoWidth = ProfileContWidth === 40 ? 40 : 24

  return (
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          height: ProfileContWidth === 40 ? 44 : 40
        }}>
            <ProfileLogoCont>
                <ProfileLogo
                    theme={theme}
                    width={ProfileLogoWidth}
                    height={ProfileLogoWidth}
                >
                    <Image
                        src={props?.logoUrl}
                        alt="oslash logo"
                        width={ProfileLogoWidth}
                        height={ProfileLogoWidth}
                    />
                </ProfileLogo>
            </ProfileLogoCont>
            <ProfileInfoCont>
                <Box>
                    <Box>
                        <Typography variant="body1">{props?.name}</Typography>
                    </Box>
                    {Boolean(props?.description) && (
                        <Box>
                            <Typography
                                sx={{ color: '#6B7280' }}
                                variant="body2"
                            >
                                {props?.description}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </ProfileInfoCont>
        </Box>

  )
}
