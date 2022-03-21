import React from 'react'
import { useSocket } from '../../context/socket'
import ToggleButton from './ToggleButton'

export default function EnanleDisableAudio( { setAudio } ) {

  const socket = useSocket()

  const onClick = () => {
    
    socket.emit( 'audio' )
  }
  return (

    <ToggleButton iconDefault='mic_off' iconToggle='mic' onClickDefault={onClick} onClickToggle={onClick}/>
  )
}
