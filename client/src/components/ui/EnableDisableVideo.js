import React from 'react'
import { useVideoSettings } from '../../context/videoSettings'
import ToggleButton from './ToggleButton'

export default function EnableDisableVideo() {

  const { setVideo } = useVideoSettings()
  const onClick = ( ) => {

    setVideo( video => ! video)
  }

  return (
    
    <ToggleButton iconDefault='videocam_off' iconToggle='videocam' onClickDefault={onClick} onClickToggle={onClick}  />
  )
}
