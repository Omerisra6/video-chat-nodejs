import Peer from 'peerjs';
import  { useEffect, useRef, useState } from 'react';
import { useAppSettings } from '../context/appSettings';
import { useSocket } from '../context/socket';
import { useVideoSettings } from '../context/videoSettings';
import { addStream, removeStream, connectToNewUser } from '../helpers/peerHelpers'; 

export default function useOnPeerEvents( ) {

    const socket = useSocket()
    const stream = useRef( null );
    const { audio, video } = useVideoSettings()
    const { room } = useAppSettings()
    const [ streams, setStreams ] = useState( [] )

    const currentId = socket.id
    const roomId = room[ 'id' ]
    const peer = new Peer( socket.id , { path: '/peerjs', host: window.location.host , port: window.location.port } );

    //Handles stream audio and video by stream ref
    useEffect( () => {

        if ( stream.current ) {
            
            stream.current.getAudioTracks().forEach( track => track.enabled = audio )
            stream.current.getVideoTracks().forEach( track => track.enabled = video )
        }
    }, [stream.current, audio, video ] );
    
    useEffect( async () => {

        stream.current = await navigator.mediaDevices.getUserMedia( { audio: true, video: true } )
            
        //Add current user stream
        setStreams( streams => [ ...streams, { stream: stream.current, id: currentId } ] )

        //Answer incoming call and add the call streams
        peer.on( 'call', ( call ) => {

            call.answer( stream.current );
            call.on('stream', ( userVideoStream ) => {
                
                addStream( userVideoStream, call[ 'peer' ], setStreams )
            });

        
        })

        //Adds user to the video call
        socket.on( 'stream-ready', ( peerId ) =>{

            connectToNewUser( peerId, stream.current, peer, setStreams )            
        })

        socket.emit( 'stream-ready', roomId )

        
        socket.on( 'left-room', ( peerId ) => {

            removeStream( peerId, setStreams )
        })

        return () => {

            socket.off( 'left-room' )
            socket.off( 'stream-ready' )
        }
      
    }, [ ])

    return{
        streams
    }
    
}


