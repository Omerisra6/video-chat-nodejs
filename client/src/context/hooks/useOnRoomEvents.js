import  { useEffect } from 'react';
import { useSocket } from '../socket';

export default function useOnRoomEvents( setUser ) {

    const socket = useSocket()

    useEffect( ( ) => {

        socket.on( 'room-created', ( username ) => {

            setUser( username )
        })

        socket.on( 'joined-room', ( username ) => {

            setUser( username )
        })
      
    }, [])
   
    
}
