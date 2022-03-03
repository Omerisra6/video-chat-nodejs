import React from 'react'
import SerachBox from './ui/SearchBox'
import StyledForm from './ui/styled/StyledForm'
import StyledFormBottom from './ui/styled/StyledFormBottom'
import StyledLink from './ui/styled/StyledLink'
import Button from './ui/Button'

export default function JoinChatForm() {

  return (
    <StyledForm id='join-chat' className='invisible'>

      <h2> Join A Chat </h2>

      <SerachBox label='Username' className='username' size='md'/>
      <SerachBox label='Room password' size='md'/>

      <StyledFormBottom>

        <StyledLink href='/#create-chat'> click here to create a new chat </StyledLink>
        <Button color='dark' size='md'> Join Chat </Button>

      </StyledFormBottom>

    </StyledForm>
  )
}
