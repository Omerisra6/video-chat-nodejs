import React, { useState } from 'react'
import { useSocket } from '../context/socket'
import useOnChatEvents from '../hooks/useOnChatEvents'
import useOnPeerEvents from '../hooks/useOnPeerEvents'
import StyledStreamsContainer from './ui/styled/StyledStreamsContainer'
import Video from './ui/Video'

export default function Chat( { user, setUser } ) {

  const [ members, setMembers ] = useState( [] )
  const [ streams, setStreams ] = useState( [] )
  const currentId = useSocket().id
  useOnChatEvents( setMembers )
  useOnPeerEvents( setStreams )

  return (

    <StyledStreamsContainer>
      
      { streams.map( stream => {

        const name = getNameById( stream[ 'id' ], currentId )
        return <Video stream={stream} name={ name }/>

      })}

    </StyledStreamsContainer> 
    
  )

  //Finds user in members array by id
  function getNameById ( id, currentId ) {

    if ( currentId === id) {
      return user
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
