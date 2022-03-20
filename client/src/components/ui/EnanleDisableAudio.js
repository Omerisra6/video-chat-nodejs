import React from 'react'
import { useSocket } from '../../context/socket'
import ChatActionButton from './ChatActionButton'

export default function EnanleDisableAudio( { setAudio } ) {

  const socket = useSocket()

  const onClick = () => {
    
    socket.emit( 'audio' )
  }
  return (

    <ChatActionButton iconDefault='mic_off' iconToggle='mic' onClickDefault={onClick} onClickToggle={onClick}/>
  )
}
