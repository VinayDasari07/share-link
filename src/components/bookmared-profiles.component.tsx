/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box } from '@mui/material'
import { observer } from 'mobx-react'
import React from 'react'
import { dropDown } from '../../content'
import { ProfileInfo } from './common/profile.component'
import { SelectOptions as AccessTypeMenu } from './common/select-options.component'
import { store } from '../../store/ShareUrlStore'
import { BookmarkedProfiles as BookmarkedProfilesType } from '../components/types/share.type'

const BookmarkedProfiles = (): React.ReactElement => {
  const getProfileProps = (profile: BookmarkedProfilesType): BookmarkedProfilesType => {
    let profileProps
    if (!(profile?.description) && ((profile?.email) != null)) {
      profileProps = {
        ...profile,
        description: profile?.email
      }
    } else {
      profileProps = {
        ...profile
      }
    }
    return profileProps
  }

  const handleSelectedOption = (): void => {

  }
  return (
        <Box
          sx={{
            height: 5.5
          }}
        >
          {store?.bookmarkedProfiles?.map((profile) => {
            const profileProps = getProfileProps(profile)
            return (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  p: '0 0 16px'
                }}
                key={profile?.name}
              >
                <ProfileInfo {...profileProps}/>
                <AccessTypeMenu
                  textVariant='caption'
                  options={dropDown?.options}
                  size='small'
                  getSelectedEvent={handleSelectedOption}
                  initialValue={profile?.accessType}
                />
              </Box>
            )
          })}
        </Box>

  )
}

export default observer(BookmarkedProfiles)
