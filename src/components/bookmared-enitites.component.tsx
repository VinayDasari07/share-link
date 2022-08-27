import { Box, styled, Typography, useTheme } from '@mui/material'
import Image from 'next/image'

const BookmarkedEntity = (): React.ReactElement => {
  const theme = useTheme()

  const ProfileContent = styled(Box)`
    display: flex;
    flex-direction: row;
    height : 5.5
  `

  const ProfileLogoCont = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `
  const ProfileLogo = styled(Box)`
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
        margin-right: ${theme.spacing(1)};
        border-radius: ${theme.spacing(2.5)};
        overflow: hidden;
  `
  const ProfileInfo = styled(Box)`
    
  `
  const ProfileName = styled(Box)`
    
  `

  const ProfileDesc = styled(Box)`
    
`

  return (
        <Box sx={{
          height: theme.spacing(5.5)
        }}>
            <ProfileContent>
                    <ProfileLogoCont>
                    <ProfileLogo>
                        <Image
                            src="/oSlashLogo.svg"
                            alt="OSlash Company logo"
                            width={40}
                            height={40}
                        />
                    </ProfileLogo>
                    </ProfileLogoCont>

                    <ProfileInfo>
                        <ProfileName>
                            <Typography variant="body1">Everyone at OSlash</Typography>
                        </ProfileName>
                        <ProfileDesc>
                        <Typography
                            sx={{ color: '#6B7280' }}
                            variant="body2"
                        >
                            25 workspace members
                        </Typography>
                        </ProfileDesc>
                    </ProfileInfo>
            </ProfileContent>
        </Box>

  )
}

export default BookmarkedEntity
