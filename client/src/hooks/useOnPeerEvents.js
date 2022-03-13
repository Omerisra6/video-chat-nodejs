import Peer from 'peerjs';
import  { useEffect } from 'react';
import { useSocket } from '../context/socket';

export default function useOnPeerEvents( setStreams  ) {

    const socket = useSocket()
    const currentId = socket.id
    console.log( currentId )
    const peer = new Peer( socket.id , {path: '/peerjs',host: '/',port: '8000',} );    
    
    useEffect( ( ) => {

        navigator.mediaDevices.getUserMedia( { audio: true, video: true } ).then( ( stream ) => {   
            
            setStreams( streams => [ ...streams, { stream, id: currentId } ] )
    
            peer.on( 'call', ( call ) => {

                call.answer( stream );
                call.on('stream', ( userVideoStream ) => {

                    addStream( userVideoStream, call[ 'peer' ] )
                });
            
            })

            socket.on( 'joined-room', ( user ) =>{

                setTimeout( () => { connectToNewUser( user[ 'id' ], stream ) }, 4000 )
            })

           
            socket.on( 'left-room', ( id ) => {

                removeUser( id )
            })
        })
      
    }, [])
    

    const connectToNewUser = ( id, stream ) => {

        const call = peer.call( id, stream )
        call.on( 'stream', ( userVideoStream ) => {

           addStream(  userVideoStream, id  )
            
        })
    }

    const addStream = ( newStream, id ) => {

        setStreams( streams => { 

            if ( ! streamExists( streams , newStream ) ) {

                return [ ...streams, { stream: newStream, id } ]    
            }
            
            return streams
        })
    
    }

    const streamExists = ( streams, newStream ) => {

        let exists = false
        streams.forEach( stream => {
    
            if( stream[ 'stream' ].id === newStream.id){
                exists = true
            }
        })
    
        return exists
    }
    
    const removeUser = ( id ) =>  {
    
        setStreams( ( streams ) => streams.filter( stream => stream[ 'id' ] !== id )  );
    
    }
    
}


