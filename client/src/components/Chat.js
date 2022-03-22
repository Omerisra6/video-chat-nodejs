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

export default function Chat( { user, room, setUser, setRoom } ) {

  const [ members, setMembers ] = useState( [] )
  const [ streams, setStreams ] = useState( [] )
  const [ loading, setLoading ] = useState( true )

  const currentId = useSocket().id

  useOnChatEvents( setMembers )
  useOnPeerEvents( setStreams )

  useEffect( () => { 


    if ( streams.length === members.length && members.length !== 0 ) {
      
      setLoading( false )
    }

  }, [ streams, members])

  return (
    
    loading ? <Connecting/> :
    <StyledChatContainer>
      
      <ChatTop room={room}/>

      <StyledStreamsContainer>
        
        { streams.map( stream => {

          const name = getNameById( stream[ 'id' ], currentId )
          return <Video stream={stream} name={ name }/>

        })}

      </StyledStreamsContainer> 

      <ChatBottom setUser={setUser}/>

    </StyledChatContainer>
  
    
  )

  //Finds user in members array by id
  function getNameById ( id, currentId ) {

    if ( currentId === id) {
      return 'You'
    }

    let name
    members.every( member => {

      if ( Object.keys( member )[ 0 ] === id ) {
        name =  Object.values( member )[ 0 ]
        return false
      }
      
      return true
    });

    return name
  }
}
