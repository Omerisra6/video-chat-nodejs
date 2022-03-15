
import React from 'react'
import ChatActionButton from './ChatActionButton'

export default function EndCall( { setUser } ) {

    const onClick = () => {
        setUser( null )
    }

    return (
        <ChatActionButton iconDefault="call_end" onClickDefault={onClick}/>
    )
}
