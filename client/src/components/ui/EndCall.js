
import React from 'react'
import { useAppSettings } from '../../context/appSettings'
import { useSocket } from '../../context/socket'
import ToggleButton from './ToggleButton'

export default function EndCall( ) {

    const { setUser } = useAppSettings()
    const socket = useSocket()
    
    const onClick = () => {

        socket.emit( 'leave-room' )
        setUser( null )
    }

    return (
        <ToggleButton iconDefault="call_end" onClickDefault={onClick}/>
    )
}
