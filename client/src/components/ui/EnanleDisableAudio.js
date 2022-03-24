import React from 'react'
import { useVideoSettings } from '../../context/videoSettings'
import ToggleButton from './ToggleButton'

export default function EnanleDisableAudio() {

  const { setAudio } = useVideoSettings()

  const onClick = () => {
    
    setAudio( audio => ! audio )
  }
  return (

    <ToggleButton iconDefault='mic_off' iconToggle='mic' onClickDefault={onClick} onClickToggle={onClick}/>
  )
}
