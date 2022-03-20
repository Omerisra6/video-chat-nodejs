import React from 'react'
import { useSocket } from '../../context/socket'
import ChatActionButton from './ChatActionButton'

export default function EnableDisableVideo( { setVideo } ) {

  const socket = useSocket();

  const onClick = ( ) => {

    socket.emit( 'video' )
  }

  return (
    
    <ChatActionButton iconDefault='videocam_off' iconToggle='videocam' onClickDefault={onClick} onClickToggle={onClick}  />
  )
}
