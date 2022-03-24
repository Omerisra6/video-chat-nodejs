import { useEffect } from 'react';
import { useAppSettings } from '../context/appSettings';
import useOnErrorEvents from '../hooks/useOnErrorEvents';
import useOnRoomEvents from '../hooks/useOnRoomEvents';
import StartChatLeftContainer from './ui/StartChatLeftContainer'
import StartChatRightContainer from './ui/StartChatRightContainer'
import StyledStartChatWrapper from './ui/styled/StyledStartChatWrapper'

export default function StartChat( ) {

  useOnErrorEvents()
  useOnRoomEvents()

  function toggleWindow(){

    if( window.location.hash != '#create-chat' ){

      window.location.hash = '#join-chat'
    }
  }

  useEffect( () => {

    
    window.location.hash = '#join-chat'
    
  
    //Handles css target change
    window.addEventListener( 'popstate', function () {
    
      toggleWindow()
    });

    return () => window.removeEventListener( 'popstate', toggleWindow() )


  }, [] );
  
 

  return (
    <StyledStartChatWrapper>

      <StartChatLeftContainer/>
      <StartChatRightContainer />
      
    </StyledStartChatWrapper>
  )
}
