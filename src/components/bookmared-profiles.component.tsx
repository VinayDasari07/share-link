import { Box } from '@mui/material'
import { observer } from 'mobx-react'
import React from 'react'
import { dropDown } from '../../content'
import { ProfileInfo } from './common/profile.component'
import { SelectOptions as AccessTypeMenu } from './common/select-options.component'
import { store } from '../../store/ShareUrlStore'

const BookmarkedProfiles = (): React.ReactElement => {
  return (
        <Box
          sx={{
            height: 5.5
          }}
        >
          {store?.bookmarkedProfiles?.map((profile) => {
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
                <ProfileInfo {...profile}/>
                <AccessTypeMenu
                  textVariant={dropDown?.textVariant}
                  options={dropDown?.options}
                  // getSelectedEvent={}
                  // initialValue={}
                />
              </Box>
            )
          })}
        </Box>

  )
}

export default observer(BookmarkedProfiles)
