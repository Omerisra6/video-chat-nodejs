import React from 'react'
import CopyLink from './CopyLink'
import StyledChatTop from './styled/StyledChatTop'

export default function ChatTop( { room } ) {

    return (

        <StyledChatTop>
            <h1> { room[ 'name' ] } </h1>
            <CopyLink roomId={ room[ 'id' ] }/>
        </StyledChatTop>
    )
}
