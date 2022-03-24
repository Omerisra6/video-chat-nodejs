import Peer from 'peerjs';
import  { useEffect, useRef } from 'react';
import { useAppSettings } from '../context/appSettings';
import { useSocket } from '../context/socket';
import { useVideoSettings } from '../context/videoSettings';
import { addStream, removeStream, connectToNewUser } from '../helpers/peerHelpers'; 

export default function useOnPeerEvents( setStreams ) {

    const socket = useSocket()
    const currentId = socket.id
    const stream = useRef( null );
    const { audio, video } = useVideoSettings()
    const { room } = useAppSettings()
    const roomId = room[ 'id' ]
    const peer = new Peer( socket.id , { path: '/peerjs', host: '/',port: '80' } );

    useEffect( () => {

        if ( stream.current ) {
            
            stream.current.getAudioTracks().forEach( track => track.enabled = audio )
            stream.current.getVideoTracks().forEach( track => track.enabled = video )
        }
    }, [stream.current, audio, video ] );
    
    useEffect( async () => {

        stream.current = await navigator.mediaDevices.getUserMedia( { audio: true, video: true } );
            
        //Add current user stream
        setStreams( streams => [ ...streams, { stream: stream.current, id: currentId } ] )

        //Answer incoming call and add the call streams
        peer.on( 'call', ( call ) => {

            call.answer( stream.current );
            call.on('stream', ( userVideoStream ) => {
                
                addStream( userVideoStream, call[ 'peer' ], setStreams )
            });

        
        })

        
        socket.on( 'stream-ready', ( peerId ) =>{

            setTimeout( () => { connectToNewUser( peerId, stream.current, peer, setStreams ) }, 3000 )
        })

        socket.emit( 'stream-ready', roomId )

        
        socket.on( 'left-room', ( id ) => {

            removeStream( id, setStreams )
        })
      
    }, [ ])
    
}


