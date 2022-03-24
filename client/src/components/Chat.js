import React, { useEffect, useState } from 'react'
import { useSocket } from '../context/socket'
import useOnChatEvents from '../hooks/useOnChatEvents'
import useOnPeerEvents from '../hooks/useOnPeerEvents'
import ChatTop from './ui/ChatTop'
import ChatBottom from './ui/ChatBottom'
import StyledChatContainer from './ui/styled/StyledChatContainer'
import StyledStreamsContainer from './ui/styled/StyledStreamsContainer'
import Connecting from './ui/Connecting'
import Video from './ui/Video'
import { useAppSettings } from '../context/appSettings'

export default function Chat(  ) {

  const { members }             = useOnChatEvents()
  const { room }        = useAppSettings()  
  const [ streams, setStreams ] = useState( [] )
  const [ loading, setLoading ] = useState( true )

  const { id: currentId } = useSocket();

  
  useOnPeerEvents( setStreams, room[ 'id' ] )

  useEffect( () => {

    if ( members.length && streams.length === members.length ) {
      
      setLoading( false )
    }

  }, [ streams, members ] )

  return (

    loading ? <Connecting/> :
    <StyledChatContainer>
      
      <ChatTop/>

      <StyledStreamsContainer>
        
        { streams.map( stream => {

          const name = getNameById( stream[ 'id' ], currentId )
          return <Video stream={stream} name={ name } key={ stream[ 'id' ] }/>

        })}

      </StyledStreamsContainer> 

      <ChatBottom />

    </StyledChatContainer>
  
    
  )

  //Finds user in members array by id
  function getNameById ( id, currentId ) {

    if ( currentId === id) {
      return 'You'
    }

    const member = members.find( member => {
      return Object.keys( member )[ 0 ] === id;
    });

    return  Object.values( member )[ 0 ];
  }
}
