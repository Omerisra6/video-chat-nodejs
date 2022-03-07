import React, { useRef } from 'react'
import { useSocket } from '../context/socket'
import Button from './ui/Button'
import SerachBox from './ui/SearchBox'
import StyledForm from './ui/styled/StyledForm'
import StyledFormBottom from './ui/styled/StyledFormBottom'
import StyledLink from './ui/styled/StyledLink'
import useOnRoomEvents from '../context/hooks/useOnRoomEvents'
import useOnErrorEvents from '../context/hooks/useOnErrorEvents'

export default function CreateChatForm( { setUser } ) {

  const socket  = useSocket()
  const userRef = useRef( null )
  const roomRef = useRef( null )

  useOnErrorEvents( )
  useOnRoomEvents( setUser )

  const onSubmit = ( event ) => {

    event.preventDefault()

    const username = userRef.current.value.trim()
    const roomName     = roomRef.current.value.trim()

    if ( ! username || ! roomName ) {

      return
    }

    socket.emit( 'create-room', { roomName, username } )

  }

  return (
    <StyledForm id='create-chat' className='invisible' onSubmit={onSubmit}>

      <h2> Create A Chat </h2>

      <SerachBox label='Username' className='username' size='md' inputRef={userRef}/>
      <SerachBox label='Room Name' size='md'inputRef={roomRef}/>

      <StyledFormBottom>

        <StyledLink href='/#join-chat'>  click here to join a chat </StyledLink>
        <Button color='dark' size='md' type="sumbit"> Create Chat </Button>

      </StyledFormBottom>

    </StyledForm>
  )
}
