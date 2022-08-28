import { Box, styled } from '@mui/material'
import React from 'react'
import { ProfileInfo } from './common/profile.component'
import { SelectOptions as AccessTypeMenu } from './common/select-options.component'
import { Bookmarked } from './types/share.type'

const BookmarkCont = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height : 5.5
`

const BookmarkedEntity = (props: Bookmarked): React.ReactElement => {
  return (
        <BookmarkCont>
            <ProfileInfo {...props?.profileInfo}/>
            <AccessTypeMenu
              textVariant={props?.dropdown?.textVariant}
              options={props?.dropdown?.options}
            />
        </BookmarkCont>

  )
}

export default BookmarkedEntity
