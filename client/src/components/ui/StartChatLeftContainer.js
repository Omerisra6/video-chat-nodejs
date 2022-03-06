import React from 'react'
import CreateChatForm from '../CreateChatForm'
import JoinChatForm from '../JoinChatForm'
import Container from './Container'


export default function StartChatLeftContainer( { setUser } ) {

  return (
    <Container width='50%' background='#ffff' display='felx' centered={true}>
        <JoinChatForm setUser={setUser}/>
        <CreateChatForm/>
    </Container>
  )
}
