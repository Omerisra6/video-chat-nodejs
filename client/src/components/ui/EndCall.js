
import React from 'react'
import { useSocket } from '../../context/socket'
import ChatActionButton from './ChatActionButton'

export default function EndCall( { setUser } ) {

    const socket = useSocket()
    const onClick = () => {

        socket.emit( 'leave-room' )
        setUser( null )
    }

    return (
        <ChatActionButton iconDefault="call_end" onClickDefault={onClick}/>
    )
}
