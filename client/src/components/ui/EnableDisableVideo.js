import React from 'react'
import { useVideoSettings } from '../../context/videoSettings'
import ToggleButton from './ToggleButton'

export default function EnableDisableVideo() {

  const { setVideo } = useVideoSettings()
  const onClick = ( ) => {

    setVideo( video => ! video)
  }

  return (
    
    <ToggleButton iconDefault='videocam' iconToggle='videocam_off' onClickDefault={onClick} onClickToggle={onClick}  />
  )
}
