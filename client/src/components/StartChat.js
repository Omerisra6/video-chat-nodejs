import { useEffect } from 'react';
import { useAppSettings } from '../context/appSettings';
import useOnErrorEvents from '../hooks/useOnErrorEvents';
import useOnRoomEvents from '../hooks/useOnRoomEvents';
import StartChatLeftContainer from './ui/StartChatLeftContainer'
import StartChatRightContainer from './ui/StartChatRightContainer'
import StyledStartChatWrapper from './ui/styled/StyledStartChatWrapper'

export default function StartChat( ) {

  const { setUser, setRoom } = useAppSettings()
  
  useEffect( () => {
      if( window.location != 'http://localhost:3000/#create-chat' ){
        window.location.href = 'http://localhost:3000/#join-chat'
      }
    
      //Handles css target change
      window.addEventListener('popstate', function (event) {
    
        if( this.window.location != 'http://localhost:3000/#create-chat' ){
          window.location.href = 'http://localhost:3000/#join-chat'
        }
      });
  }, [] );
  
  useOnErrorEvents( )
  useOnRoomEvents( setUser, setRoom )

  return (
    <StyledStartChatWrapper>

      <StartChatLeftContainer/>
      <StartChatRightContainer />
      
    </StyledStartChatWrapper>
  )
}
