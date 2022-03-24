import React from 'react'
import { useAppSettings } from '../../context/appSettings'
import CopyLink from './CopyLink'
import StyledChatTop from './styled/StyledChatTop'

export default function ChatTop( ) {

    const { room } = useAppSettings()
    
    return (

        <StyledChatTop>
            <h1> { room[ 'name' ] } </h1>
            <CopyLink roomId={ room[ 'id' ] }/>
        </StyledChatTop>
    )
}
