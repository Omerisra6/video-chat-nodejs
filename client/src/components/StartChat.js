import StartChatLeftContainer from './ui/StartChatLeftContainer'
import StartChatRightContainer from './ui/StartChatRightContainer'
import StyledStartChatWrapper from './ui/styled/StyledStartChatWrapper'

export default function StartChat( { setUser } ) {

  
  if( window.location != 'http://localhost:3000/#create-chat' ){
    window.location.href = 'http://localhost:3000/#join-chat'
  }

  //Handles css target change
  window.addEventListener('popstate', function (event) {

    if( this.window.location != 'http://localhost:3000/#create-chat' ){
      window.location.href = 'http://localhost:3000/#join-chat'
    }
  });
  

  
  return (
    <StyledStartChatWrapper>

      <StartChatLeftContainer setUser={setUser}/>
      <StartChatRightContainer/>
      
    </StyledStartChatWrapper>
  )
}
