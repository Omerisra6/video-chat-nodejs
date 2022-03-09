import React, { useState } from 'react'
import useOnChatEvents from '../hooks/useOnChatEvents'
import useOnPeerEvents from '../hooks/useOnPeerEvents'
import Video from './ui/Video'

export default function Chat( ) {

  const [ members, setMembers ] = useState( [] )
  const [ streams, setStreams ] = useState( [] )
  useOnChatEvents( setMembers )
  useOnPeerEvents( setStreams, streams )
  console.log( streams )


  return (
    <div>
      { streams.map( stream => {

        return <Video stream={stream}/>
      })}
    </div>
  )
}
