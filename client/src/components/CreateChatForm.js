import React from 'react'
import Button from './ui/Button'
import SerachBox from './ui/SearchBox'
import StyledForm from './ui/styled/StyledForm'
import StyledFormBottom from './ui/styled/StyledFormBottom'
import StyledLink from './ui/styled/StyledLink'

export default function CreateChatForm( { setUser }) {
  return (
    <StyledForm id='create-chat' className='invisible'>

      <h2> Create A Chat </h2>

      <SerachBox label='Username' className='username' size='md'/>
      <SerachBox label='Room Name' size='md'/>

      <StyledFormBottom>

        <StyledLink href='/#join-chat'>  click here to join a chat </StyledLink>
        <Button color='dark' size='md'> Create Chat </Button>

      </StyledFormBottom>

    </StyledForm>
  )
}
