
import React from 'react'
import { useSocket } from '../../context/socket'
import ToggleButton from './ToggleButton'

export default function EndCall( { setUser } ) {

    const socket = useSocket()
    const onClick = () => {

        socket.emit( 'leave-room' )
        setUser( null )
    }

    return (
        <ToggleButton iconDefault="call_end" onClickDefault={onClick}/>
    )
}
