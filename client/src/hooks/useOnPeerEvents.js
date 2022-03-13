import Peer from 'peerjs';
import  { useEffect } from 'react';
import { useSocket } from '../context/socket';
import { addStream, removeStream, connectToNewUser } from '../helpers/peerHelpers'; 

export default function useOnPeerEvents( setStreams  ) {

    const socket = useSocket()
    const currentId = socket.id
    const peer = new Peer( socket.id , { path: '/peerjs',host: '/',port: '8000' } );    
    
    useEffect( ( ) => {

        navigator.mediaDevices.getUserMedia( { audio: true, video: true } ).then( ( stream ) => {   
            
            //Add current user stream
            setStreams( streams => [ ...streams, { stream, id: currentId } ] )
            
            //Answer incoming call and add the call streams
            peer.on( 'call', ( call ) => {

                call.answer( stream );
                call.on('stream', ( userVideoStream ) => {

                    addStream( userVideoStream, call[ 'peer' ], setStreams )
                });
            
            })

            
            socket.on( 'joined-room', ( user ) =>{

                setTimeout( () => { connectToNewUser( user[ 'id' ], stream, peer, setStreams ) }, 4000 )
            })

           
            socket.on( 'left-room', ( id ) => {

                removeStream( id, setStreams )
            })
        })
      
    }, [])
    
}


