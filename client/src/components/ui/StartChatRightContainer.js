import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Text from './Text'

export default function StartChatRightContainer() {
  return (
    <Container display='flex-column' gap='1vh' centered={true} width='50%'>
        <Logo/>
        <Text size='3vw'> Welcome To The Fox Chat </Text>
        <Text size='1.5vw' color='#625748'> The fox chat will help you stay connected </Text>
    </Container>
  )
}
