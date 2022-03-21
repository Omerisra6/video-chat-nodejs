import { useSocket } from '../context/socket'
import React, { useRef } from 'react'
import SerachBox from './ui/SearchBox'
import StyledForm from './ui/styled/StyledForm'
import StyledFormBottom from './ui/styled/StyledFormBottom'
import StyledLink from './ui/styled/StyledLink'
import Button from './ui/Button'

export default function JoinChatForm( ) {

  const socket  = useSocket()
  const userRef = useRef( null )
  const roomRef = useRef( null )

  const onSubmit = ( event ) => {

    event.preventDefault()

    const username = userRef.current.value.trim()
    const roomId   = roomRef.current.value.trim()

    if ( ! username || ! roomId ) {
      
      return
    }

    socket.emit( 'join-room', { roomId, username } )

  }

  return (
    <StyledForm id='join-chat' className='invisible' onSubmit={onSubmit}>

      <h2> Join A Chat </h2>

      <SerachBox label='Username' className='username' size='md' inputRef={userRef}/>
      <SerachBox label='Room PIN' size='md' inputRef={roomRef}/>

      <StyledFormBottom>

        <StyledLink href='/#create-chat'> click here to create a new chat </StyledLink>
        <Button color='dark' size='md' type='sumbit'> Join Chat </Button>

      </StyledFormBottom>

    </StyledForm>
  )
}
