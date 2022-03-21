import React from 'react'
import { useSocket } from '../../context/socket'
import ToggleButton from './ToggleButton'

export default function EnableDisableVideo( { setVideo } ) {

  const socket = useSocket();

  const onClick = ( ) => {

    socket.emit( 'video' )
  }

  return (
    
    <ToggleButton iconDefault='videocam_off' iconToggle='videocam' onClickDefault={onClick} onClickToggle={onClick}  />
  )
}
